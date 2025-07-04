package repository

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	goio "io"
	"io/ioutil"
	"os"
	"os/exec"
	"path"
	"path/filepath"
	"regexp"
	"strings"
	"testing"
	"time"

	log "github.com/sirupsen/logrus"

	"github.com/ghodss/yaml"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/require"
	v1 "k8s.io/api/apps/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/runtime"

	argoappv1 "github.com/argoproj/argo-cd/v2/pkg/apis/application/v1alpha1"
	"github.com/argoproj/argo-cd/v2/reposerver/apiclient"
	"github.com/argoproj/argo-cd/v2/reposerver/cache"
	"github.com/argoproj/argo-cd/v2/reposerver/metrics"
	fileutil "github.com/argoproj/argo-cd/v2/test/fixture/path"
	"github.com/argoproj/argo-cd/v2/util/argo"
	cacheutil "github.com/argoproj/argo-cd/v2/util/cache"
	"github.com/argoproj/argo-cd/v2/util/git"
	gitmocks "github.com/argoproj/argo-cd/v2/util/git/mocks"
	"github.com/argoproj/argo-cd/v2/util/helm"
	helmmocks "github.com/argoproj/argo-cd/v2/util/helm/mocks"
	"github.com/argoproj/argo-cd/v2/util/io"
)

const testSignature = `gpg: Signature made Wed Feb 26 23:22:34 2020 CET
gpg:                using RSA key 4AEE18F83AFDEB23
gpg: Good signature from "GitHub (web-flow commit signing) <noreply@github.com>" [ultimate]
`

type clientFunc func(*gitmocks.Client)

func newServiceWithMocks(root string, signed bool) (*Service, *gitmocks.Client) {
	root, err := filepath.Abs(root)
	if err != nil {
		panic(err)
	}
	return newServiceWithOpt(func(gitClient *gitmocks.Client) {
		gitClient.On("Init").Return(nil)
		gitClient.On("Fetch", mock.Anything).Return(nil)
		gitClient.On("Checkout", mock.Anything, mock.Anything).Return(nil)
		gitClient.On("LsRemote", mock.Anything).Return(mock.Anything, nil)
		gitClient.On("CommitSHA").Return(mock.Anything, nil)
		gitClient.On("Root").Return(root)
		if signed {
			gitClient.On("VerifyCommitSignature", mock.Anything).Return(testSignature, nil)
		} else {
			gitClient.On("VerifyCommitSignature", mock.Anything).Return("", nil)
		}
	})
}

func newServiceWithOpt(cf clientFunc) (*Service, *gitmocks.Client) {
	helmClient := &helmmocks.Client{}
	gitClient := &gitmocks.Client{}
	cf(gitClient)
	service := NewService(metrics.NewMetricsServer(), cache.NewCache(
		cacheutil.NewCache(cacheutil.NewInMemoryCache(1*time.Minute)),
		1*time.Minute,
		1*time.Minute,
	), RepoServerInitConstants{ParallelismLimit: 1}, argo.NewResourceTracking(), &git.NoopCredsStore{}, os.TempDir())

	chart := "my-chart"
	version := "1.1.0"
	helmClient.On("GetIndex", true).Return(&helm.Index{Entries: map[string]helm.Entries{
		chart: {{Version: "1.0.0"}, {Version: version}},
	}}, nil)
	helmClient.On("ExtractChart", chart, version).Return("./testdata/my-chart", io.NopCloser, nil)
	helmClient.On("CleanChartCache", chart, version).Return(nil)

	service.newGitClient = func(rawRepoURL string, root string, creds git.Creds, insecure bool, enableLfs bool, prosy string, opts ...git.ClientOpts) (client git.Client, e error) {
		return gitClient, nil
	}
	service.newHelmClient = func(repoURL string, creds helm.Creds, enableOci bool, proxy string, opts ...helm.ClientOpts) helm.Client {
		return helmClient
	}
	service.gitRepoInitializer = func(rootPath string) goio.Closer {
		return io.NopCloser
	}
	return service, gitClient
}

func newService(root string) *Service {
	service, _ := newServiceWithMocks(root, false)
	return service
}

func newServiceWithSignature(root string) *Service {
	service, _ := newServiceWithMocks(root, true)
	return service
}

func newServiceWithCommitSHA(root, revision string) *Service {
	var revisionErr error

	commitSHARegex := regexp.MustCompile("^[0-9A-Fa-f]{40}$")
	if !commitSHARegex.MatchString(revision) {
		revisionErr = errors.New("not a commit SHA")
	}

	service, gitClient := newServiceWithOpt(func(gitClient *gitmocks.Client) {
		gitClient.On("Init").Return(nil)
		gitClient.On("Fetch", mock.Anything).Return(nil)
		gitClient.On("Checkout", mock.Anything, mock.Anything).Return(nil)
		gitClient.On("LsRemote", revision).Return(revision, revisionErr)
		gitClient.On("CommitSHA").Return("632039659e542ed7de0c170a4fcc1c571b288fc0", nil)
		gitClient.On("Root").Return(root)
	})

	service.newGitClient = func(rawRepoURL string, root string, creds git.Creds, insecure bool, enableLfs bool, proxy string, opts ...git.ClientOpts) (client git.Client, e error) {
		return gitClient, nil
	}

	return service
}

func TestGenerateYamlManifestInDir(t *testing.T) {
	service := newService("../..")

	src := argoappv1.ApplicationSource{Path: "manifests/base"}
	q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &src}

	// update this value if we add/remove manifests
	const countOfManifests = 47

	res1, err := service.GenerateManifest(context.Background(), &q)

	assert.NoError(t, err)
	assert.Equal(t, countOfManifests, len(res1.Manifests))

	// this will test concatenated manifests to verify we split YAMLs correctly
	res2, err := GenerateManifests(context.Background(), "./testdata/concatenated", "/", "", &q, false, &git.NoopCredsStore{})
	assert.NoError(t, err)
	assert.Equal(t, 3, len(res2.Manifests))
}

func Test_GenerateManifests_NoOutOfBoundsAccess(t *testing.T) {
	testCases := []struct {
		name                    string
		outOfBoundsFilename     string
		outOfBoundsFileContents string
		mustNotContain          string // Optional string that must not appear in error or manifest output. If empty, use outOfBoundsFileContents.
	}{
		{
			name:                    "out of bounds JSON file should not appear in error output",
			outOfBoundsFilename:     "test.json",
			outOfBoundsFileContents: `{"some": "json"}`,
		},
		{
			name:                    "malformed JSON file contents should not appear in error output",
			outOfBoundsFilename:     "test.json",
			outOfBoundsFileContents: "$",
		},
		{
			name:                "out of bounds JSON manifest should not appear in manifest output",
			outOfBoundsFilename: "test.json",
			// JSON marshalling is deterministic. So if there's a leak, exactly this should appear in the manifests.
			outOfBoundsFileContents: `{"apiVersion":"v1","kind":"Secret","metadata":{"name":"test","namespace":"default"},"type":"Opaque"}`,
		},
		{
			name:                    "out of bounds YAML manifest should not appear in manifest output",
			outOfBoundsFilename:     "test.yaml",
			outOfBoundsFileContents: "apiVersion: v1\nkind: Secret\nmetadata:\n  name: test\n  namespace: default\ntype: Opaque",
			mustNotContain:          `{"apiVersion":"v1","kind":"Secret","metadata":{"name":"test","namespace":"default"},"type":"Opaque"}`,
		},
	}

	for _, testCase := range testCases {
		testCaseCopy := testCase
		t.Run(testCaseCopy.name, func(t *testing.T) {
			t.Parallel()

			outOfBoundsDir := t.TempDir()
			outOfBoundsFile := path.Join(outOfBoundsDir, testCaseCopy.outOfBoundsFilename)
			err := os.WriteFile(outOfBoundsFile, []byte(testCaseCopy.outOfBoundsFileContents), os.FileMode(0444))
			require.NoError(t, err)

			repoDir := t.TempDir()
			err = os.Symlink(outOfBoundsFile, path.Join(repoDir, testCaseCopy.outOfBoundsFilename))
			require.NoError(t, err)

			var mustNotContain = testCaseCopy.outOfBoundsFileContents
			if testCaseCopy.mustNotContain != "" {
				mustNotContain = testCaseCopy.mustNotContain
			}

			q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &argoappv1.ApplicationSource{}}
			res, err := GenerateManifests(context.Background(), repoDir, "", "", &q, false, &git.NoopCredsStore{})
			require.Error(t, err)
			assert.NotContains(t, err.Error(), mustNotContain)
			assert.Contains(t, err.Error(), "illegal filepath")
			assert.Nil(t, res)
		})
	}
}

func TestGenerateManifests_MissingSymlinkDestination(t *testing.T) {
	repoDir := t.TempDir()
	err := os.Symlink("/obviously/does/not/exist", path.Join(repoDir, "test.yaml"))
	require.NoError(t, err)

	q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &argoappv1.ApplicationSource{}}
	_, err = GenerateManifests(context.Background(), repoDir, "", "", &q, false, &git.NoopCredsStore{})
	require.NoError(t, err)
}

func TestGenerateManifests_K8SAPIResetCache(t *testing.T) {
	service := newService("../..")

	src := argoappv1.ApplicationSource{Path: "manifests/base"}
	q := apiclient.ManifestRequest{
		KubeVersion: "v1.16.0",
		Repo:        &argoappv1.Repository{}, ApplicationSource: &src,
	}

	cachedFakeResponse := &apiclient.ManifestResponse{Manifests: []string{"Fake"}}

	err := service.cache.SetManifests(mock.Anything, &src, &q, "", "", "", "", &cache.CachedManifestResponse{ManifestResponse: cachedFakeResponse})
	assert.NoError(t, err)

	res, err := service.GenerateManifest(context.Background(), &q)
	assert.NoError(t, err)
	assert.Equal(t, cachedFakeResponse, res)

	q.KubeVersion = "v1.17.0"
	res, err = service.GenerateManifest(context.Background(), &q)
	assert.NoError(t, err)
	assert.NotEqual(t, cachedFakeResponse, res)
	assert.True(t, len(res.Manifests) > 1)
}

func TestGenerateManifests_EmptyCache(t *testing.T) {
	service := newService("../..")

	src := argoappv1.ApplicationSource{Path: "manifests/base"}
	q := apiclient.ManifestRequest{
		Repo: &argoappv1.Repository{}, ApplicationSource: &src,
	}

	err := service.cache.SetManifests(mock.Anything, &src, &q, "", "", "", "", &cache.CachedManifestResponse{ManifestResponse: nil})
	assert.NoError(t, err)

	res, err := service.GenerateManifest(context.Background(), &q)
	assert.NoError(t, err)
	assert.True(t, len(res.Manifests) > 0)
}

// ensure we can use a semver constraint range (>= 1.0.0) and get back the correct chart (1.0.0)
func TestHelmManifestFromChartRepo(t *testing.T) {
	service := newService(".")
	source := &argoappv1.ApplicationSource{Chart: "my-chart", TargetRevision: ">= 1.0.0"}
	request := &apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: source, NoCache: true}
	response, err := service.GenerateManifest(context.Background(), request)
	assert.NoError(t, err)
	assert.NotNil(t, response)
	assert.Equal(t, &apiclient.ManifestResponse{
		Manifests:  []string{"{\"apiVersion\":\"v1\",\"kind\":\"ConfigMap\",\"metadata\":{\"name\":\"my-map\"}}"},
		Namespace:  "",
		Server:     "",
		Revision:   "1.1.0",
		SourceType: "Helm",
	}, response)
}

func TestGenerateManifestsUseExactRevision(t *testing.T) {
	service, gitClient := newServiceWithMocks(".", false)

	src := argoappv1.ApplicationSource{Path: "./testdata/recurse", Directory: &argoappv1.ApplicationSourceDirectory{Recurse: true}}

	q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &src, Revision: "abc"}

	res1, err := service.GenerateManifest(context.Background(), &q)
	assert.Nil(t, err)
	assert.Equal(t, 2, len(res1.Manifests))
	assert.Equal(t, gitClient.Calls[0].Arguments[0], "abc")
}

func TestRecurseManifestsInDir(t *testing.T) {
	service := newService(".")

	src := argoappv1.ApplicationSource{Path: "./testdata/recurse", Directory: &argoappv1.ApplicationSourceDirectory{Recurse: true}}

	q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &src}

	res1, err := service.GenerateManifest(context.Background(), &q)
	assert.Nil(t, err)
	assert.Equal(t, 2, len(res1.Manifests))
}

func TestInvalidManifestsInDir(t *testing.T) {
	service := newService(".")

	src := argoappv1.ApplicationSource{Path: "./testdata/invalid-manifests", Directory: &argoappv1.ApplicationSourceDirectory{Recurse: true}}

	q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &src}

	_, err := service.GenerateManifest(context.Background(), &q)
	assert.NotNil(t, err)
}

func TestGenerateJsonnetManifestInDir(t *testing.T) {
	service := newService(".")

	q := apiclient.ManifestRequest{
		Repo: &argoappv1.Repository{},
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./testdata/jsonnet",
			Directory: &argoappv1.ApplicationSourceDirectory{
				Jsonnet: argoappv1.ApplicationSourceJsonnet{
					ExtVars: []argoappv1.JsonnetVar{{Name: "extVarString", Value: "extVarString"}, {Name: "extVarCode", Value: "\"extVarCode\"", Code: true}},
					TLAs:    []argoappv1.JsonnetVar{{Name: "tlaString", Value: "tlaString"}, {Name: "tlaCode", Value: "\"tlaCode\"", Code: true}},
					Libs:    []string{"testdata/jsonnet/vendor"},
				},
			},
		},
	}
	res1, err := service.GenerateManifest(context.Background(), &q)
	assert.Nil(t, err)
	assert.Equal(t, 2, len(res1.Manifests))
}

func TestGenerateJsonnetLibOutside(t *testing.T) {
	service := newService(".")

	q := apiclient.ManifestRequest{
		Repo: &argoappv1.Repository{},
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./testdata/jsonnet",
			Directory: &argoappv1.ApplicationSourceDirectory{
				Jsonnet: argoappv1.ApplicationSourceJsonnet{
					Libs: []string{"../../../testdata/jsonnet/vendor"},
				},
			},
		},
	}
	_, err := service.GenerateManifest(context.Background(), &q)
	require.Error(t, err)
	require.Contains(t, err.Error(), "value file '../../../testdata/jsonnet/vendor' resolved to outside repository root")
}

func TestManifestGenErrorCacheByNumRequests(t *testing.T) {

	// Returns the state of the manifest generation cache, by querying the cache for the previously set result
	getRecentCachedEntry := func(service *Service, manifestRequest *apiclient.ManifestRequest) *cache.CachedManifestResponse {
		assert.NotNil(t, service)
		assert.NotNil(t, manifestRequest)

		cachedManifestResponse := &cache.CachedManifestResponse{}
		err := service.cache.GetManifests(mock.Anything, manifestRequest.ApplicationSource, manifestRequest, manifestRequest.Namespace, "", manifestRequest.AppLabelKey, manifestRequest.AppName, cachedManifestResponse)
		assert.Nil(t, err)
		return cachedManifestResponse
	}

	// Example:
	// With repo server (test) parameters:
	// - PauseGenerationAfterFailedGenerationAttempts: 2
	// - PauseGenerationOnFailureForRequests: 4
	// - TotalCacheInvocations: 10
	//
	// After 2 manifest generation failures in a row, the next 4 manifest generation requests should be cached,
	// with the next 2 after that being uncached. Here's how it looks...
	//
	//  request count) result
	// --------------------------
	// 1) Attempt to generate manifest, fails.
	// 2) Second attempt to generate manifest, fails.
	// 3) Return cached error attempt from #2
	// 4) Return cached error attempt from #2
	// 5) Return cached error attempt from #2
	// 6) Return cached error attempt from #2. Max response limit hit, so reset cache entry.
	// 7) Attempt to generate manifest, fails.
	// 8) Attempt to generate manifest, fails.
	// 9) Return cached error attempt from #8
	// 10) Return cached error attempt from #8

	// The same pattern PauseGenerationAfterFailedGenerationAttempts generation attempts, followed by
	// PauseGenerationOnFailureForRequests cached responses, should apply for various combinations of
	// both parameters.

	tests := []struct {
		PauseGenerationAfterFailedGenerationAttempts int
		PauseGenerationOnFailureForRequests          int
		TotalCacheInvocations                        int
	}{
		{2, 4, 10},
		{3, 5, 10},
		{1, 2, 5},
	}
	for _, tt := range tests {
		testName := fmt.Sprintf("gen-attempts-%d-pause-%d-total-%d", tt.PauseGenerationAfterFailedGenerationAttempts, tt.PauseGenerationOnFailureForRequests, tt.TotalCacheInvocations)
		t.Run(testName, func(t *testing.T) {
			service := newService(".")

			service.initConstants = RepoServerInitConstants{
				ParallelismLimit: 1,
				PauseGenerationAfterFailedGenerationAttempts: tt.PauseGenerationAfterFailedGenerationAttempts,
				PauseGenerationOnFailureForMinutes:           0,
				PauseGenerationOnFailureForRequests:          tt.PauseGenerationOnFailureForRequests,
			}

			totalAttempts := service.initConstants.PauseGenerationAfterFailedGenerationAttempts + service.initConstants.PauseGenerationOnFailureForRequests

			for invocationCount := 0; invocationCount < tt.TotalCacheInvocations; invocationCount++ {
				adjustedInvocation := invocationCount % totalAttempts

				fmt.Printf("%d )-------------------------------------------\n", invocationCount)

				manifestRequest := &apiclient.ManifestRequest{
					Repo:    &argoappv1.Repository{},
					AppName: "test",
					ApplicationSource: &argoappv1.ApplicationSource{
						Path: "./testdata/invalid-helm",
					},
				}

				res, err := service.GenerateManifest(context.Background(), manifestRequest)

				// Verify invariant: res != nil xor err != nil
				if err != nil {
					assert.True(t, res == nil, "both err and res are non-nil res: %v   err: %v", res, err)
				} else {
					assert.True(t, res != nil, "both err and res are nil")
				}

				cachedManifestResponse := getRecentCachedEntry(service, manifestRequest)

				isCachedError := err != nil && strings.HasPrefix(err.Error(), cachedManifestGenerationPrefix)

				if adjustedInvocation < service.initConstants.PauseGenerationAfterFailedGenerationAttempts {
					// GenerateManifest should not return cached errors for the first X responses, where X is the FailGenAttempts constants
					require.False(t, isCachedError)

					require.NotNil(t, cachedManifestResponse)
					// nolint:staticcheck
					assert.Nil(t, cachedManifestResponse.ManifestResponse)
					// nolint:staticcheck
					assert.True(t, cachedManifestResponse.FirstFailureTimestamp != 0)

					// Internal cache consec failures value should increase with invocations, cached response should stay the same,
					// nolint:staticcheck
					assert.True(t, cachedManifestResponse.NumberOfConsecutiveFailures == adjustedInvocation+1)
					// nolint:staticcheck
					assert.True(t, cachedManifestResponse.NumberOfCachedResponsesReturned == 0)

				} else {
					// GenerateManifest SHOULD return cached errors for the next X responses, where X is the
					// PauseGenerationOnFailureForRequests constant
					assert.True(t, isCachedError)
					require.NotNil(t, cachedManifestResponse)
					// nolint:staticcheck
					assert.Nil(t, cachedManifestResponse.ManifestResponse)
					// nolint:staticcheck
					assert.True(t, cachedManifestResponse.FirstFailureTimestamp != 0)

					// Internal cache values should update correctly based on number of return cache entries, consecutive failures should stay the same
					// nolint:staticcheck
					assert.True(t, cachedManifestResponse.NumberOfConsecutiveFailures == service.initConstants.PauseGenerationAfterFailedGenerationAttempts)
					// nolint:staticcheck
					assert.True(t, cachedManifestResponse.NumberOfCachedResponsesReturned == (adjustedInvocation-service.initConstants.PauseGenerationAfterFailedGenerationAttempts+1))
				}
			}
		})
	}
}

func TestManifestGenErrorCacheFileContentsChange(t *testing.T) {

	tmpDir := t.TempDir()

	service := newService(tmpDir)

	service.initConstants = RepoServerInitConstants{
		ParallelismLimit: 1,
		PauseGenerationAfterFailedGenerationAttempts: 2,
		PauseGenerationOnFailureForMinutes:           0,
		PauseGenerationOnFailureForRequests:          4,
	}

	for step := 0; step < 3; step++ {

		// step 1) Attempt to generate manifests against invalid helm chart (should return uncached error)
		// step 2) Attempt to generate manifest against valid helm chart (should succeed and return valid response)
		// step 3) Attempt to generate manifest against invalid helm chart (should return cached value from step 2)

		errorExpected := step%2 == 0

		// Ensure that the target directory will succeed or fail, so we can verify the cache correctly handles it
		err := os.RemoveAll(tmpDir)
		assert.NoError(t, err)
		err = os.MkdirAll(tmpDir, 0777)
		assert.NoError(t, err)
		if errorExpected {
			// Copy invalid helm chart into temporary directory, ensuring manifest generation will fail
			err = fileutil.CopyDir("./testdata/invalid-helm", tmpDir)
			assert.NoError(t, err)

		} else {
			// Copy valid helm chart into temporary directory, ensuring generation will succeed
			err = fileutil.CopyDir("./testdata/my-chart", tmpDir)
			assert.NoError(t, err)
		}

		res, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
			Repo:    &argoappv1.Repository{},
			AppName: "test",
			ApplicationSource: &argoappv1.ApplicationSource{
				Path: ".",
			},
		})

		fmt.Println("-", step, "-", res != nil, err != nil, errorExpected)
		fmt.Println("    err: ", err)
		fmt.Println("    res: ", res)

		if step < 2 {
			assert.True(t, (err != nil) == errorExpected, "error return value and error expected did not match")
			assert.True(t, (res != nil) == !errorExpected, "GenerateManifest return value and expected value did not match")
		}

		if step == 2 {
			assert.NoError(t, err, "error ret val was non-nil on step 3")
			assert.NotNil(t, res, "GenerateManifest ret val was nil on step 3")
		}
	}
}

func TestManifestGenErrorCacheByMinutesElapsed(t *testing.T) {

	tests := []struct {
		// Test with a range of pause expiration thresholds
		PauseGenerationOnFailureForMinutes int
	}{
		{1}, {2}, {10}, {24 * 60},
	}
	for _, tt := range tests {
		testName := fmt.Sprintf("pause-time-%d", tt.PauseGenerationOnFailureForMinutes)
		t.Run(testName, func(t *testing.T) {
			service := newService(".")

			// Here we simulate the passage of time by overriding the now() function of Service
			currentTime := time.Now()
			service.now = func() time.Time {
				return currentTime
			}

			service.initConstants = RepoServerInitConstants{
				ParallelismLimit: 1,
				PauseGenerationAfterFailedGenerationAttempts: 1,
				PauseGenerationOnFailureForMinutes:           tt.PauseGenerationOnFailureForMinutes,
				PauseGenerationOnFailureForRequests:          0,
			}

			// 1) Put the cache into the failure state
			for x := 0; x < 2; x++ {
				res, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
					Repo:    &argoappv1.Repository{},
					AppName: "test",
					ApplicationSource: &argoappv1.ApplicationSource{
						Path: "./testdata/invalid-helm",
					},
				})

				assert.True(t, err != nil && res == nil)

				// Ensure that the second invocation triggers the cached error state
				if x == 1 {
					assert.True(t, strings.HasPrefix(err.Error(), cachedManifestGenerationPrefix))
				}

			}

			// 2) Jump forward X-1 minutes in time, where X is the expiration boundary
			currentTime = currentTime.Add(time.Duration(tt.PauseGenerationOnFailureForMinutes-1) * time.Minute)
			res, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
				Repo:    &argoappv1.Repository{},
				AppName: "test",
				ApplicationSource: &argoappv1.ApplicationSource{
					Path: "./testdata/invalid-helm",
				},
			})

			// 3) Ensure that the cache still returns a cached copy of the last error
			assert.True(t, err != nil && res == nil)
			assert.True(t, strings.HasPrefix(err.Error(), cachedManifestGenerationPrefix))

			// 4) Jump forward 2 minutes in time, such that the pause generation time has elapsed and we should return to normal state
			currentTime = currentTime.Add(2 * time.Minute)

			res, err = service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
				Repo:    &argoappv1.Repository{},
				AppName: "test",
				ApplicationSource: &argoappv1.ApplicationSource{
					Path: "./testdata/invalid-helm",
				},
			})

			// 5) Ensure that the service no longer returns a cached copy of the last error
			assert.True(t, err != nil && res == nil)
			assert.True(t, !strings.HasPrefix(err.Error(), cachedManifestGenerationPrefix))

		})
	}

}

func TestManifestGenErrorCacheRespectsNoCache(t *testing.T) {

	service := newService(".")

	service.initConstants = RepoServerInitConstants{
		ParallelismLimit: 1,
		PauseGenerationAfterFailedGenerationAttempts: 1,
		PauseGenerationOnFailureForMinutes:           0,
		PauseGenerationOnFailureForRequests:          4,
	}

	// 1) Put the cache into the failure state
	for x := 0; x < 2; x++ {
		res, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
			Repo:    &argoappv1.Repository{},
			AppName: "test",
			ApplicationSource: &argoappv1.ApplicationSource{
				Path: "./testdata/invalid-helm",
			},
		})

		assert.True(t, err != nil && res == nil)

		// Ensure that the second invocation is cached
		if x == 1 {
			assert.True(t, strings.HasPrefix(err.Error(), cachedManifestGenerationPrefix))
		}
	}

	// 2) Call generateManifest with NoCache enabled
	res, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:    &argoappv1.Repository{},
		AppName: "test",
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./testdata/invalid-helm",
		},
		NoCache: true,
	})

	// 3) Ensure that the cache returns a new generation attempt, rather than a previous cached error
	assert.True(t, err != nil && res == nil)
	assert.True(t, !strings.HasPrefix(err.Error(), cachedManifestGenerationPrefix))

	// 4) Call generateManifest
	res, err = service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:    &argoappv1.Repository{},
		AppName: "test",
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./testdata/invalid-helm",
		},
	})

	// 5) Ensure that the subsequent invocation, after nocache, is cached
	assert.True(t, err != nil && res == nil)
	assert.True(t, strings.HasPrefix(err.Error(), cachedManifestGenerationPrefix))

}

func TestGenerateHelmWithValues(t *testing.T) {
	service := newService("../..")

	res, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:    &argoappv1.Repository{},
		AppName: "test",
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./util/helm/testdata/redis",
			Helm: &argoappv1.ApplicationSourceHelm{
				ValueFiles: []string{"values-production.yaml"},
				Values:     `cluster: {slaveCount: 2}`,
			},
		},
	})

	assert.NoError(t, err)

	replicasVerified := false
	for _, src := range res.Manifests {
		obj := unstructured.Unstructured{}
		err = json.Unmarshal([]byte(src), &obj)
		assert.NoError(t, err)

		if obj.GetKind() == "Deployment" && obj.GetName() == "test-redis-slave" {
			var dep v1.Deployment
			err := runtime.DefaultUnstructuredConverter.FromUnstructured(obj.Object, &dep)
			assert.NoError(t, err)
			assert.Equal(t, int32(2), *dep.Spec.Replicas)
			replicasVerified = true
		}
	}
	assert.True(t, replicasVerified)

}

func TestHelmWithMissingValueFiles(t *testing.T) {
	service := newService("../..")
	missingValuesFile := "values-prod-overrides.yaml"

	req := &apiclient.ManifestRequest{
		Repo:    &argoappv1.Repository{},
		AppName: "test",
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./util/helm/testdata/redis",
			Helm: &argoappv1.ApplicationSourceHelm{
				ValueFiles: []string{"values-production.yaml", missingValuesFile},
			},
		},
	}

	// Should fail since we're passing a non-existent values file, and error should indicate that
	_, err := service.GenerateManifest(context.Background(), req)
	assert.Error(t, err)
	assert.Contains(t, err.Error(), fmt.Sprintf("%s: no such file or directory", missingValuesFile))

	// Should template without error even if defining a non-existent values file
	req.ApplicationSource.Helm.IgnoreMissingValueFiles = true
	_, err = service.GenerateManifest(context.Background(), req)
	assert.NoError(t, err)
}

// The requested value file (`../minio/values.yaml`) is outside the app path (`./util/helm/testdata/redis`), however
// since the requested value is sill under the repo directory (`~/go/src/github.com/argoproj/argo-cd`), it is allowed
func TestGenerateHelmWithValuesDirectoryTraversal(t *testing.T) {
	service := newService("../..")
	_, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:    &argoappv1.Repository{},
		AppName: "test",
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./util/helm/testdata/redis",
			Helm: &argoappv1.ApplicationSourceHelm{
				ValueFiles: []string{"../minio/values.yaml"},
				Values:     `cluster: {slaveCount: 2}`,
			},
		},
	})
	assert.NoError(t, err)

	// Test the case where the path is "."
	service = newService("./testdata/my-chart")
	_, err = service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:    &argoappv1.Repository{},
		AppName: "test",
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: ".",
		},
	})
	assert.NoError(t, err)
}

// This is a Helm first-class app with a values file inside the repo directory
// (`~/go/src/github.com/argoproj/argo-cd/reposerver/repository`), so it is allowed
func TestHelmManifestFromChartRepoWithValueFile(t *testing.T) {
	service := newService(".")
	source := &argoappv1.ApplicationSource{
		Chart:          "my-chart",
		TargetRevision: ">= 1.0.0",
		Helm: &argoappv1.ApplicationSourceHelm{
			ValueFiles: []string{"./my-chart-values.yaml"},
		},
	}
	request := &apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: source, NoCache: true}
	response, err := service.GenerateManifest(context.Background(), request)
	assert.NoError(t, err)
	assert.NotNil(t, response)
	assert.Equal(t, &apiclient.ManifestResponse{
		Manifests:  []string{"{\"apiVersion\":\"v1\",\"kind\":\"ConfigMap\",\"metadata\":{\"name\":\"my-map\"}}"},
		Namespace:  "",
		Server:     "",
		Revision:   "1.1.0",
		SourceType: "Helm",
	}, response)
}

// This is a Helm first-class app with a values file outside the repo directory
// (`~/go/src/github.com/argoproj/argo-cd/reposerver/repository`), so it is not allowed
func TestHelmManifestFromChartRepoWithValueFileOutsideRepo(t *testing.T) {
	service := newService(".")
	source := &argoappv1.ApplicationSource{
		Chart:          "my-chart",
		TargetRevision: ">= 1.0.0",
		Helm: &argoappv1.ApplicationSourceHelm{
			ValueFiles: []string{"../my-chart-2/my-chart-2-values.yaml"},
		},
	}
	request := &apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: source, NoCache: true}
	_, err := service.GenerateManifest(context.Background(), request)
	assert.Error(t, err)
}

func TestHelmManifestFromChartRepoWithValueFileLinks(t *testing.T) {
	t.Run("Valid symlink", func(t *testing.T) {
		service := newService("../..")
		source := &argoappv1.ApplicationSource{
			Chart:          "my-chart",
			TargetRevision: ">= 1.0.0",
			Helm: &argoappv1.ApplicationSourceHelm{
				ValueFiles: []string{"my-chart-link.yaml"},
			},
		}
		request := &apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: source, NoCache: true}
		_, err := service.GenerateManifest(context.Background(), request)
		assert.NoError(t, err)
	})
	t.Run("Symlink pointing to outside", func(t *testing.T) {
		service := newService("../..")
		source := &argoappv1.ApplicationSource{
			Chart:          "my-chart",
			TargetRevision: ">= 1.0.0",
			Helm: &argoappv1.ApplicationSourceHelm{
				ValueFiles: []string{"my-chart-outside-link.yaml"},
			},
		}
		request := &apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: source, NoCache: true}
		_, err := service.GenerateManifest(context.Background(), request)
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "outside repository root")
	})
}

func TestGenerateHelmWithURL(t *testing.T) {
	service := newService("../..")

	_, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:    &argoappv1.Repository{},
		AppName: "test",
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./util/helm/testdata/redis",
			Helm: &argoappv1.ApplicationSourceHelm{
				ValueFiles: []string{"https://raw.githubusercontent.com/argoproj/argocd-example-apps/master/helm-guestbook/values.yaml"},
				Values:     `cluster: {slaveCount: 2}`,
			},
		},
		HelmOptions: &argoappv1.HelmOptions{ValuesFileSchemes: []string{"https"}},
	})
	assert.NoError(t, err)
}

// The requested value file (`../../../../../minio/values.yaml`) is outside the repo directory
// (`~/go/src/github.com/argoproj/argo-cd`), so it is blocked
func TestGenerateHelmWithValuesDirectoryTraversalOutsideRepo(t *testing.T) {
	t.Run("Values file with relative path pointing outside repo root", func(t *testing.T) {
		service := newService("../..")
		_, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
			Repo:    &argoappv1.Repository{},
			AppName: "test",
			ApplicationSource: &argoappv1.ApplicationSource{
				Path: "./util/helm/testdata/redis",
				Helm: &argoappv1.ApplicationSourceHelm{
					ValueFiles: []string{"../../../../../minio/values.yaml"},
					Values:     `cluster: {slaveCount: 2}`,
				},
			},
		})
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "outside repository root")
	})

	t.Run("Values file with relative path pointing inside repo root", func(t *testing.T) {
		service := newService("./testdata/my-chart")
		_, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
			Repo:    &argoappv1.Repository{},
			AppName: "test",
			ApplicationSource: &argoappv1.ApplicationSource{
				Path: ".",
				Helm: &argoappv1.ApplicationSourceHelm{
					ValueFiles: []string{"../my-chart/my-chart-values.yaml"},
					Values:     `cluster: {slaveCount: 2}`,
				},
			},
		})
		assert.NoError(t, err)
	})

	t.Run("Values file with absolute path stays within repo root", func(t *testing.T) {
		service := newService("./testdata/my-chart")
		_, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
			Repo:    &argoappv1.Repository{},
			AppName: "test",
			ApplicationSource: &argoappv1.ApplicationSource{
				Path: ".",
				Helm: &argoappv1.ApplicationSourceHelm{
					ValueFiles: []string{"/my-chart-values.yaml"},
					Values:     `cluster: {slaveCount: 2}`,
				},
			},
		})
		assert.NoError(t, err)
	})

	t.Run("Values file with absolute path using back-references outside repo root", func(t *testing.T) {
		service := newService("./testdata/my-chart")
		_, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
			Repo:    &argoappv1.Repository{},
			AppName: "test",
			ApplicationSource: &argoappv1.ApplicationSource{
				Path: ".",
				Helm: &argoappv1.ApplicationSourceHelm{
					ValueFiles: []string{"/../../../my-chart-values.yaml"},
					Values:     `cluster: {slaveCount: 2}`,
				},
			},
		})
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "outside repository root")
	})

	t.Run("Remote values file from forbidden protocol", func(t *testing.T) {
		service := newService("./testdata/my-chart")
		_, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
			Repo:    &argoappv1.Repository{},
			AppName: "test",
			ApplicationSource: &argoappv1.ApplicationSource{
				Path: ".",
				Helm: &argoappv1.ApplicationSourceHelm{
					ValueFiles: []string{"file://../../../../my-chart-values.yaml"},
					Values:     `cluster: {slaveCount: 2}`,
				},
			},
		})
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "is not allowed")
	})

	t.Run("Remote values file from custom allowed protocol", func(t *testing.T) {
		service := newService("./testdata/my-chart")
		_, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
			Repo:    &argoappv1.Repository{},
			AppName: "test",
			ApplicationSource: &argoappv1.ApplicationSource{
				Path: ".",
				Helm: &argoappv1.ApplicationSourceHelm{
					ValueFiles: []string{"s3://my-bucket/my-chart-values.yaml"},
				},
			},
			HelmOptions: &argoappv1.HelmOptions{ValuesFileSchemes: []string{"s3"}},
		})
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "s3://my-bucket/my-chart-values.yaml: no such file or directory")
	})
}

// File parameter should not allow traversal outside of the repository root
func TestGenerateHelmWithAbsoluteFileParameter(t *testing.T) {
	service := newService("../..")

	file, err := ioutil.TempFile("", "external-secret.txt")
	assert.NoError(t, err)
	externalSecretPath := file.Name()
	defer func() { _ = os.RemoveAll(externalSecretPath) }()
	expectedFileContent, err := ioutil.ReadFile("../../util/helm/testdata/external/external-secret.txt")
	assert.NoError(t, err)
	err = ioutil.WriteFile(externalSecretPath, expectedFileContent, 0644)
	assert.NoError(t, err)
	defer file.Close()

	_, err = service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:    &argoappv1.Repository{},
		AppName: "test",
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./util/helm/testdata/redis",
			Helm: &argoappv1.ApplicationSourceHelm{
				ValueFiles: []string{"values-production.yaml"},
				Values:     `cluster: {slaveCount: 2}`,
				FileParameters: []argoappv1.HelmFileParameter{{
					Name: "passwordContent",
					Path: externalSecretPath,
				}},
			},
		},
	})
	assert.Error(t, err)
}

// The requested file parameter (`../external/external-secret.txt`) is outside the app path
// (`./util/helm/testdata/redis`), however  since the requested value is sill under the repo
// directory (`~/go/src/github.com/argoproj/argo-cd`), it is allowed. It is used as a means of
// providing direct content to a helm chart via a specific key.
func TestGenerateHelmWithFileParameter(t *testing.T) {
	service := newService("../..")

	_, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:    &argoappv1.Repository{},
		AppName: "test",
		ApplicationSource: &argoappv1.ApplicationSource{
			Path: "./util/helm/testdata/redis",
			Helm: &argoappv1.ApplicationSourceHelm{
				ValueFiles: []string{"values-production.yaml"},
				Values:     `cluster: {slaveCount: 2}`,
				FileParameters: []argoappv1.HelmFileParameter{
					argoappv1.HelmFileParameter{
						Name: "passwordContent",
						Path: "../external/external-secret.txt",
					},
				},
			},
		},
	})
	assert.NoError(t, err)
}

func TestGenerateNullList(t *testing.T) {
	service := newService(".")

	res1, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:              &argoappv1.Repository{},
		ApplicationSource: &argoappv1.ApplicationSource{Path: "./testdata/null-list"},
	})
	assert.Nil(t, err)
	assert.Equal(t, len(res1.Manifests), 1)
	assert.Contains(t, res1.Manifests[0], "prometheus-operator-operator")

	res1, err = service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:              &argoappv1.Repository{},
		ApplicationSource: &argoappv1.ApplicationSource{Path: "./testdata/empty-list"},
	})
	assert.Nil(t, err)
	assert.Equal(t, len(res1.Manifests), 1)
	assert.Contains(t, res1.Manifests[0], "prometheus-operator-operator")

	res1, err = service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		Repo:              &argoappv1.Repository{},
		ApplicationSource: &argoappv1.ApplicationSource{Path: "./testdata/weird-list"},
	})
	assert.Nil(t, err)
	assert.Equal(t, 2, len(res1.Manifests))
}

func TestIdentifyAppSourceTypeByAppDirWithKustomizations(t *testing.T) {
	sourceType, err := GetAppSourceType(context.Background(), &argoappv1.ApplicationSource{}, "./testdata/kustomization_yaml", "testapp", map[string]bool{})
	assert.Nil(t, err)
	assert.Equal(t, argoappv1.ApplicationSourceTypeKustomize, sourceType)

	sourceType, err = GetAppSourceType(context.Background(), &argoappv1.ApplicationSource{}, "./testdata/kustomization_yml", "testapp", map[string]bool{})
	assert.Nil(t, err)
	assert.Equal(t, argoappv1.ApplicationSourceTypeKustomize, sourceType)

	sourceType, err = GetAppSourceType(context.Background(), &argoappv1.ApplicationSource{}, "./testdata/Kustomization", "testapp", map[string]bool{})
	assert.Nil(t, err)
	assert.Equal(t, argoappv1.ApplicationSourceTypeKustomize, sourceType)
}

func TestRunCustomTool(t *testing.T) {
	service := newService(".")

	res, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
		AppName:   "test-app",
		Namespace: "test-namespace",
		ApplicationSource: &argoappv1.ApplicationSource{
			Plugin: &argoappv1.ApplicationSourcePlugin{
				Name: "test",
				Env: argoappv1.Env{
					{
						Name:  "TEST_REVISION",
						Value: "prefix-$ARGOCD_APP_REVISION",
					},
				},
			},
		},
		Plugins: []*argoappv1.ConfigManagementPlugin{{
			Name: "test",
			Generate: argoappv1.Command{
				Command: []string{"sh", "-c"},
				Args:    []string{`echo "{\"kind\": \"FakeObject\", \"metadata\": { \"name\": \"$ARGOCD_APP_NAME\", \"namespace\": \"$ARGOCD_APP_NAMESPACE\", \"annotations\": {\"GIT_ASKPASS\": \"$GIT_ASKPASS\", \"GIT_USERNAME\": \"$GIT_USERNAME\", \"GIT_PASSWORD\": \"$GIT_PASSWORD\"}, \"labels\": {\"revision\": \"$ARGOCD_ENV_TEST_REVISION\"}}}"`},
			},
		}},
		Repo: &argoappv1.Repository{
			Username: "foo", Password: "bar",
		},
	})

	assert.NoError(t, err)
	assert.Equal(t, 1, len(res.Manifests))

	obj := &unstructured.Unstructured{}
	assert.NoError(t, json.Unmarshal([]byte(res.Manifests[0]), obj))

	assert.Equal(t, obj.GetName(), "test-app")
	assert.Equal(t, obj.GetNamespace(), "test-namespace")
	assert.Empty(t, obj.GetAnnotations()["GIT_USERNAME"])
	assert.Empty(t, obj.GetAnnotations()["GIT_PASSWORD"])
	// Git client is mocked, so the revision is always mock.Anything
	assert.Equal(t, map[string]string{"revision": "prefix-mock.Anything"}, obj.GetLabels())
}

func TestGenerateFromUTF16(t *testing.T) {
	q := apiclient.ManifestRequest{
		Repo:              &argoappv1.Repository{},
		ApplicationSource: &argoappv1.ApplicationSource{},
	}
	res1, err := GenerateManifests(context.Background(), "./testdata/utf-16", "/", "", &q, false, &git.NoopCredsStore{})
	assert.Nil(t, err)
	assert.Equal(t, 2, len(res1.Manifests))
}

func TestListApps(t *testing.T) {
	service := newService("./testdata")

	res, err := service.ListApps(context.Background(), &apiclient.ListAppsRequest{Repo: &argoappv1.Repository{}})
	assert.NoError(t, err)

	expectedApps := map[string]string{
		"Kustomization":                  "Kustomize",
		"app-parameters/multi":           "Kustomize",
		"app-parameters/single-app-only": "Kustomize",
		"app-parameters/single-global":   "Kustomize",
		"invalid-helm":                   "Helm",
		"in-bounds-values-file-link":     "Helm",
		"in-bounds-values-file-link":     "Helm",
		"invalid-kustomize":              "Kustomize",
		"kustomization_yaml":             "Kustomize",
		"kustomization_yml":              "Kustomize",
		"my-chart":                       "Helm",
		"out-of-bounds-values-file-link": "Helm",
		"my-chart-2":                     "Helm",
		"out-of-bounds-values-file-link": "Helm",
		"values-files":                   "Helm",
	}
	assert.Equal(t, expectedApps, res.Apps)
}

func TestGetAppDetailsHelm(t *testing.T) {
	service := newService("../..")

	res, err := service.GetAppDetails(context.Background(), &apiclient.RepoServerAppDetailsQuery{
		Repo: &argoappv1.Repository{},
		Source: &argoappv1.ApplicationSource{
			Path: "./util/helm/testdata/dependency",
		},
	})

	assert.NoError(t, err)
	assert.NotNil(t, res.Helm)

	assert.Equal(t, "Helm", res.Type)
	assert.EqualValues(t, []string{"values-production.yaml", "values.yaml"}, res.Helm.ValueFiles)
}
func TestGetAppDetailsHelm_WithNoValuesFile(t *testing.T) {
	service := newService("../..")

	res, err := service.GetAppDetails(context.Background(), &apiclient.RepoServerAppDetailsQuery{
		Repo: &argoappv1.Repository{},
		Source: &argoappv1.ApplicationSource{
			Path: "./util/helm/testdata/api-versions",
		},
	})

	assert.NoError(t, err)
	assert.NotNil(t, res.Helm)

	assert.Equal(t, "Helm", res.Type)
	assert.Empty(t, res.Helm.ValueFiles)
	assert.Equal(t, "", res.Helm.Values)
}

func TestGetAppDetailsKustomize(t *testing.T) {
	service := newService("../..")

	res, err := service.GetAppDetails(context.Background(), &apiclient.RepoServerAppDetailsQuery{
		Repo: &argoappv1.Repository{},
		Source: &argoappv1.ApplicationSource{
			Path: "./util/kustomize/testdata/kustomization_yaml",
		},
	})

	assert.NoError(t, err)

	assert.Equal(t, "Kustomize", res.Type)
	assert.NotNil(t, res.Kustomize)
	assert.EqualValues(t, []string{"nginx:1.15.4", "k8s.gcr.io/nginx-slim:0.8"}, res.Kustomize.Images)
}

func TestGetHelmCharts(t *testing.T) {
	service := newService("../..")
	res, err := service.GetHelmCharts(context.Background(), &apiclient.HelmChartsRequest{Repo: &argoappv1.Repository{}})
	assert.NoError(t, err)
	assert.Len(t, res.Items, 1)

	item := res.Items[0]
	assert.Equal(t, "my-chart", item.Name)
	assert.EqualValues(t, []string{"1.0.0", "1.1.0"}, item.Versions)
}

func TestGetRevisionMetadata(t *testing.T) {
	service, gitClient := newServiceWithMocks("../..", false)
	now := time.Now()

	gitClient.On("RevisionMetadata", mock.Anything).Return(&git.RevisionMetadata{
		Message: "test",
		Author:  "author",
		Date:    now,
		Tags:    []string{"tag1", "tag2"},
	}, nil)

	res, err := service.GetRevisionMetadata(context.Background(), &apiclient.RepoServerRevisionMetadataRequest{
		Repo:           &argoappv1.Repository{},
		Revision:       "c0b400fc458875d925171398f9ba9eabd5529923",
		CheckSignature: true,
	})

	assert.NoError(t, err)
	assert.Equal(t, "test", res.Message)
	assert.Equal(t, now, res.Date.Time)
	assert.Equal(t, "author", res.Author)
	assert.EqualValues(t, []string{"tag1", "tag2"}, res.Tags)
	assert.NotEmpty(t, res.SignatureInfo)

	// Check for truncated revision value
	res, err = service.GetRevisionMetadata(context.Background(), &apiclient.RepoServerRevisionMetadataRequest{
		Repo:           &argoappv1.Repository{},
		Revision:       "c0b400f",
		CheckSignature: true,
	})

	assert.NoError(t, err)
	assert.Equal(t, "test", res.Message)
	assert.Equal(t, now, res.Date.Time)
	assert.Equal(t, "author", res.Author)
	assert.EqualValues(t, []string{"tag1", "tag2"}, res.Tags)
	assert.NotEmpty(t, res.SignatureInfo)

	// Cache hit - signature info should not be in result
	res, err = service.GetRevisionMetadata(context.Background(), &apiclient.RepoServerRevisionMetadataRequest{
		Repo:           &argoappv1.Repository{},
		Revision:       "c0b400fc458875d925171398f9ba9eabd5529923",
		CheckSignature: false,
	})
	assert.NoError(t, err)
	assert.Empty(t, res.SignatureInfo)

	// Enforce cache miss - signature info should not be in result
	res, err = service.GetRevisionMetadata(context.Background(), &apiclient.RepoServerRevisionMetadataRequest{
		Repo:           &argoappv1.Repository{},
		Revision:       "da52afd3b2df1ec49470603d8bbb46954dab1091",
		CheckSignature: false,
	})
	assert.NoError(t, err)
	assert.Empty(t, res.SignatureInfo)

	// Cache hit on previous entry that did not have signature info
	res, err = service.GetRevisionMetadata(context.Background(), &apiclient.RepoServerRevisionMetadataRequest{
		Repo:           &argoappv1.Repository{},
		Revision:       "da52afd3b2df1ec49470603d8bbb46954dab1091",
		CheckSignature: true,
	})
	assert.NoError(t, err)
	assert.NotEmpty(t, res.SignatureInfo)
}

func TestGetSignatureVerificationResult(t *testing.T) {
	// Commit with signature and verification requested
	{
		service := newServiceWithSignature("../..")

		src := argoappv1.ApplicationSource{Path: "manifests/base"}
		q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &src, VerifySignature: true}

		res, err := service.GenerateManifest(context.Background(), &q)
		assert.NoError(t, err)
		assert.Equal(t, testSignature, res.VerifyResult)
	}
	// Commit with signature and verification not requested
	{
		service := newServiceWithSignature("../..")

		src := argoappv1.ApplicationSource{Path: "manifests/base"}
		q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &src}

		res, err := service.GenerateManifest(context.Background(), &q)
		assert.NoError(t, err)
		assert.Empty(t, res.VerifyResult)
	}
	// Commit without signature and verification requested
	{
		service := newService("../..")

		src := argoappv1.ApplicationSource{Path: "manifests/base"}
		q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &src, VerifySignature: true}

		res, err := service.GenerateManifest(context.Background(), &q)
		assert.NoError(t, err)
		assert.Empty(t, res.VerifyResult)
	}
	// Commit without signature and verification not requested
	{
		service := newService("../..")

		src := argoappv1.ApplicationSource{Path: "manifests/base"}
		q := apiclient.ManifestRequest{Repo: &argoappv1.Repository{}, ApplicationSource: &src, VerifySignature: true}

		res, err := service.GenerateManifest(context.Background(), &q)
		assert.NoError(t, err)
		assert.Empty(t, res.VerifyResult)
	}
}

func Test_newEnv(t *testing.T) {
	assert.Equal(t, &argoappv1.Env{
		&argoappv1.EnvEntry{Name: "ARGOCD_APP_NAME", Value: "my-app-name"},
		&argoappv1.EnvEntry{Name: "ARGOCD_APP_NAMESPACE", Value: "my-namespace"},
		&argoappv1.EnvEntry{Name: "ARGOCD_APP_REVISION", Value: "my-revision"},
		&argoappv1.EnvEntry{Name: "ARGOCD_APP_SOURCE_REPO_URL", Value: "https://github.com/my-org/my-repo"},
		&argoappv1.EnvEntry{Name: "ARGOCD_APP_SOURCE_PATH", Value: "my-path"},
		&argoappv1.EnvEntry{Name: "ARGOCD_APP_SOURCE_TARGET_REVISION", Value: "my-target-revision"},
	}, newEnv(&apiclient.ManifestRequest{
		AppName:   "my-app-name",
		Namespace: "my-namespace",
		Repo:      &argoappv1.Repository{Repo: "https://github.com/my-org/my-repo"},
		ApplicationSource: &argoappv1.ApplicationSource{
			Path:           "my-path",
			TargetRevision: "my-target-revision",
		},
	}, "my-revision"))
}

func TestService_newHelmClientResolveRevision(t *testing.T) {
	service := newService(".")

	t.Run("EmptyRevision", func(t *testing.T) {
		_, _, err := service.newHelmClientResolveRevision(&argoappv1.Repository{}, "", "", true)
		assert.EqualError(t, err, "invalid revision '': improper constraint: ")
	})
	t.Run("InvalidRevision", func(t *testing.T) {
		_, _, err := service.newHelmClientResolveRevision(&argoappv1.Repository{}, "???", "", true)
		assert.EqualError(t, err, "invalid revision '???': improper constraint: ???", true)
	})
}

func TestGetAppDetailsWithAppParameterFile(t *testing.T) {
	t.Run("No app name set and app specific file exists", func(t *testing.T) {
		service := newService(".")
		runWithTempTestdata(t, "multi", func(t *testing.T, path string) {
			details, err := service.GetAppDetails(context.Background(), &apiclient.RepoServerAppDetailsQuery{
				Repo: &argoappv1.Repository{},
				Source: &argoappv1.ApplicationSource{
					Path: path,
				},
			})
			require.NoError(t, err)
			assert.EqualValues(t, []string{"gcr.io/heptio-images/ks-guestbook-demo:0.2"}, details.Kustomize.Images)
		})
	})
	t.Run("No app specific override", func(t *testing.T) {
		service := newService(".")
		runWithTempTestdata(t, "single-global", func(t *testing.T, path string) {
			details, err := service.GetAppDetails(context.Background(), &apiclient.RepoServerAppDetailsQuery{
				Repo: &argoappv1.Repository{},
				Source: &argoappv1.ApplicationSource{
					Path: path,
				},
				AppName: "testapp",
			})
			require.NoError(t, err)
			assert.EqualValues(t, []string{"gcr.io/heptio-images/ks-guestbook-demo:0.2"}, details.Kustomize.Images)
		})
	})
	t.Run("Only app specific override", func(t *testing.T) {
		service := newService(".")
		runWithTempTestdata(t, "single-app-only", func(t *testing.T, path string) {
			details, err := service.GetAppDetails(context.Background(), &apiclient.RepoServerAppDetailsQuery{
				Repo: &argoappv1.Repository{},
				Source: &argoappv1.ApplicationSource{
					Path: path,
				},
				AppName: "testapp",
			})
			require.NoError(t, err)
			assert.EqualValues(t, []string{"gcr.io/heptio-images/ks-guestbook-demo:0.3"}, details.Kustomize.Images)
		})
	})
	t.Run("App specific override", func(t *testing.T) {
		service := newService(".")
		runWithTempTestdata(t, "multi", func(t *testing.T, path string) {
			details, err := service.GetAppDetails(context.Background(), &apiclient.RepoServerAppDetailsQuery{
				Repo: &argoappv1.Repository{},
				Source: &argoappv1.ApplicationSource{
					Path: path,
				},
				AppName: "testapp",
			})
			require.NoError(t, err)
			assert.EqualValues(t, []string{"gcr.io/heptio-images/ks-guestbook-demo:0.3"}, details.Kustomize.Images)
		})
	})
	t.Run("App specific overrides containing non-mergeable field", func(t *testing.T) {
		service := newService(".")
		runWithTempTestdata(t, "multi", func(t *testing.T, path string) {
			details, err := service.GetAppDetails(context.Background(), &apiclient.RepoServerAppDetailsQuery{
				Repo: &argoappv1.Repository{},
				Source: &argoappv1.ApplicationSource{
					Path: path,
				},
				AppName: "unmergeable",
			})
			require.NoError(t, err)
			assert.EqualValues(t, []string{"gcr.io/heptio-images/ks-guestbook-demo:0.3"}, details.Kustomize.Images)
		})
	})
	t.Run("Broken app-specific overrides", func(t *testing.T) {
		service := newService(".")
		runWithTempTestdata(t, "multi", func(t *testing.T, path string) {
			_, err := service.GetAppDetails(context.Background(), &apiclient.RepoServerAppDetailsQuery{
				Repo: &argoappv1.Repository{},
				Source: &argoappv1.ApplicationSource{
					Path: path,
				},
				AppName: "broken",
			})
			assert.Error(t, err)
		})
	})
}

// There are unit test that will use kustomize set and by that modify the
// kustomization.yaml. For proper testing, we need to copy the testdata to a
// temporary path, run the tests, and then throw the copy away again.
func mkTempParameters(source string) string {
	tempDir, err := ioutil.TempDir("./testdata", "app-parameters")
	if err != nil {
		panic(err)
	}
	cmd := exec.Command("cp", "-R", source, tempDir)
	err = cmd.Run()
	if err != nil {
		os.RemoveAll(tempDir)
		panic(err)
	}
	return tempDir
}

// Simple wrapper run a test with a temporary copy of the testdata, because
// the test would modify the data when run.
func runWithTempTestdata(t *testing.T, path string, runner func(t *testing.T, path string)) {
	tempDir := mkTempParameters("./testdata/app-parameters")
	runner(t, filepath.Join(tempDir, "app-parameters", path))
	os.RemoveAll(tempDir)
}

func TestGenerateManifestsWithAppParameterFile(t *testing.T) {
	t.Run("Single global override", func(t *testing.T) {
		runWithTempTestdata(t, "single-global", func(t *testing.T, path string) {
			service := newService(".")
			manifests, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
				Repo: &argoappv1.Repository{},
				ApplicationSource: &argoappv1.ApplicationSource{
					Path: path,
				},
			})
			require.NoError(t, err)
			resourceByKindName := make(map[string]*unstructured.Unstructured)
			for _, manifest := range manifests.Manifests {
				var un unstructured.Unstructured
				err := yaml.Unmarshal([]byte(manifest), &un)
				if !assert.NoError(t, err) {
					return
				}
				resourceByKindName[fmt.Sprintf("%s/%s", un.GetKind(), un.GetName())] = &un
			}
			deployment, ok := resourceByKindName["Deployment/guestbook-ui"]
			require.True(t, ok)
			containers, ok, _ := unstructured.NestedSlice(deployment.Object, "spec", "template", "spec", "containers")
			require.True(t, ok)
			image, ok, _ := unstructured.NestedString(containers[0].(map[string]interface{}), "image")
			require.True(t, ok)
			assert.Equal(t, "gcr.io/heptio-images/ks-guestbook-demo:0.2", image)
		})
	})

	t.Run("Application specific override", func(t *testing.T) {
		service := newService(".")
		runWithTempTestdata(t, "single-app-only", func(t *testing.T, path string) {
			manifests, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
				Repo: &argoappv1.Repository{},
				ApplicationSource: &argoappv1.ApplicationSource{
					Path: path,
				},
				AppName: "testapp",
			})
			require.NoError(t, err)
			resourceByKindName := make(map[string]*unstructured.Unstructured)
			for _, manifest := range manifests.Manifests {
				var un unstructured.Unstructured
				err := yaml.Unmarshal([]byte(manifest), &un)
				if !assert.NoError(t, err) {
					return
				}
				resourceByKindName[fmt.Sprintf("%s/%s", un.GetKind(), un.GetName())] = &un
			}
			deployment, ok := resourceByKindName["Deployment/guestbook-ui"]
			require.True(t, ok)
			containers, ok, _ := unstructured.NestedSlice(deployment.Object, "spec", "template", "spec", "containers")
			require.True(t, ok)
			image, ok, _ := unstructured.NestedString(containers[0].(map[string]interface{}), "image")
			require.True(t, ok)
			assert.Equal(t, "gcr.io/heptio-images/ks-guestbook-demo:0.3", image)
		})
	})

	t.Run("Application specific override for other app", func(t *testing.T) {
		service := newService(".")
		runWithTempTestdata(t, "single-app-only", func(t *testing.T, path string) {
			manifests, err := service.GenerateManifest(context.Background(), &apiclient.ManifestRequest{
				Repo: &argoappv1.Repository{},
				ApplicationSource: &argoappv1.ApplicationSource{
					Path: path,
				},
				AppName: "testapp2",
			})
			require.NoError(t, err)
			resourceByKindName := make(map[string]*unstructured.Unstructured)
			for _, manifest := range manifests.Manifests {
				var un unstructured.Unstructured
				err := yaml.Unmarshal([]byte(manifest), &un)
				if !assert.NoError(t, err) {
					return
				}
				resourceByKindName[fmt.Sprintf("%s/%s", un.GetKind(), un.GetName())] = &un
			}
			deployment, ok := resourceByKindName["Deployment/guestbook-ui"]
			require.True(t, ok)
			containers, ok, _ := unstructured.NestedSlice(deployment.Object, "spec", "template", "spec", "containers")
			require.True(t, ok)
			image, ok, _ := unstructured.NestedString(containers[0].(map[string]interface{}), "image")
			require.True(t, ok)
			assert.Equal(t, "gcr.io/heptio-images/ks-guestbook-demo:0.1", image)
		})
	})
}

func TestGenerateManifestWithAnnotatedAndRegularGitTagHashes(t *testing.T) {
	regularGitTagHash := "632039659e542ed7de0c170a4fcc1c571b288fc0"
	annotatedGitTaghash := "95249be61b028d566c29d47b19e65c5603388a41"
	invalidGitTaghash := "invalid-tag"
	actualCommitSHA := "632039659e542ed7de0c170a4fcc1c571b288fc0"

	tests := []struct {
		name            string
		ctx             context.Context
		manifestRequest *apiclient.ManifestRequest
		wantError       bool
		service         *Service
	}{
		{
			name: "Case: Git tag hash matches latest commit SHA (regular tag)",
			ctx:  context.Background(),
			manifestRequest: &apiclient.ManifestRequest{
				Repo: &argoappv1.Repository{},
				ApplicationSource: &argoappv1.ApplicationSource{
					TargetRevision: regularGitTagHash,
				},
				NoCache: true,
			},
			wantError: false,
			service:   newServiceWithCommitSHA(".", regularGitTagHash),
		},

		{
			name: "Case: Git tag hash does not match latest commit SHA (annotated tag)",
			ctx:  context.Background(),
			manifestRequest: &apiclient.ManifestRequest{
				Repo: &argoappv1.Repository{},
				ApplicationSource: &argoappv1.ApplicationSource{
					TargetRevision: annotatedGitTaghash,
				},
				NoCache: true,
			},
			wantError: false,
			service:   newServiceWithCommitSHA(".", annotatedGitTaghash),
		},

		{
			name: "Case: Git tag hash is invalid",
			ctx:  context.Background(),
			manifestRequest: &apiclient.ManifestRequest{
				Repo: &argoappv1.Repository{},
				ApplicationSource: &argoappv1.ApplicationSource{
					TargetRevision: invalidGitTaghash,
				},
				NoCache: true,
			},
			wantError: true,
			service:   newServiceWithCommitSHA(".", invalidGitTaghash),
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			manifestResponse, err := tt.service.GenerateManifest(tt.ctx, tt.manifestRequest)
			if !tt.wantError {
				if err == nil {
					assert.Equal(t, manifestResponse.Revision, actualCommitSHA)
				} else {
					t.Errorf("unexpected error")
				}
			} else {
				if err == nil {
					t.Errorf("expected an error but did not throw one")
				}
			}

		})
	}
}

func TestFindResources(t *testing.T) {
	testCases := []struct {
		name          string
		include       string
		exclude       string
		expectedNames []string
	}{{
		name:          "Include One Match",
		include:       "subdir/deploymentSub.yaml",
		expectedNames: []string{"nginx-deployment-sub"},
	}, {
		name:          "Include Everything",
		include:       "*.yaml",
		expectedNames: []string{"nginx-deployment", "nginx-deployment-sub"},
	}, {
		name:          "Include Subdirectory",
		include:       "**/*.yaml",
		expectedNames: []string{"nginx-deployment-sub"},
	}, {
		name:          "Include No Matches",
		include:       "nothing.yaml",
		expectedNames: []string{},
	}, {
		name:          "Exclude - One Match",
		exclude:       "subdir/deploymentSub.yaml",
		expectedNames: []string{"nginx-deployment"},
	}, {
		name:          "Exclude - Everything",
		exclude:       "*.yaml",
		expectedNames: []string{},
	}}
	for i := range testCases {
		tc := testCases[i]
		t.Run(tc.name, func(t *testing.T) {
			objs, err := findManifests(&log.Entry{}, "testdata/app-include-exclude", ".", nil, argoappv1.ApplicationSourceDirectory{
				Recurse: true,
				Include: tc.include,
				Exclude: tc.exclude,
			}, map[string]bool{})
			if !assert.NoError(t, err) {
				return
			}
			var names []string
			for i := range objs {
				names = append(names, objs[i].GetName())
			}
			assert.ElementsMatch(t, tc.expectedNames, names)
		})
	}
}

func TestFindManifests_Exclude(t *testing.T) {
	objs, err := findManifests(&log.Entry{}, "testdata/app-include-exclude", ".", nil, argoappv1.ApplicationSourceDirectory{
		Recurse: true,
		Exclude: "subdir/deploymentSub.yaml",
	}, map[string]bool{})

	if !assert.NoError(t, err) || !assert.Len(t, objs, 1) {
		return
	}

	assert.Equal(t, "nginx-deployment", objs[0].GetName())
}

func TestFindManifests_Exclude_NothingMatches(t *testing.T) {
	objs, err := findManifests(&log.Entry{}, "testdata/app-include-exclude", ".", nil, argoappv1.ApplicationSourceDirectory{
		Recurse: true,
		Exclude: "nothing.yaml",
	}, map[string]bool{})

	if !assert.NoError(t, err) || !assert.Len(t, objs, 2) {
		return
	}

	assert.ElementsMatch(t,
		[]string{"nginx-deployment", "nginx-deployment-sub"}, []string{objs[0].GetName(), objs[1].GetName()})
}



func Test_findManifests(t *testing.T) {
	logCtx := log.WithField("test", "test")
	noRecurse := argoappv1.ApplicationSourceDirectory{Recurse: false}

	t.Run("unreadable file throws error", func(t *testing.T) {
		appDir := t.TempDir()
		unreadablePath := filepath.Join(appDir, "unreadable.json")
		err := os.WriteFile(unreadablePath, []byte{}, 0666)
		require.NoError(t, err)
		err = os.Chmod(appDir, 0000)
		require.NoError(t, err)

		manifests, err := findManifests(logCtx, appDir, appDir, nil, noRecurse, nil)
		assert.Empty(t, manifests)
		assert.Error(t, err)

		// allow cleanup
		err = os.Chmod(appDir, 0777)
		if err != nil {
			panic(err)
		}
	})

	t.Run("no recursion when recursion is disabled", func(t *testing.T) {
		manifests, err := findManifests(logCtx, "./testdata/recurse", "./testdata/recurse", nil, noRecurse, nil)
		assert.Len(t, manifests, 2)
		assert.NoError(t, err)
	})

	t.Run("recursion when recursion is enabled", func(t *testing.T) {
		recurse := argoappv1.ApplicationSourceDirectory{Recurse: true}
		manifests, err := findManifests(logCtx, "./testdata/recurse", "./testdata/recurse", nil, recurse, nil)
		assert.Len(t, manifests, 4)
		assert.NoError(t, err)
	})

	t.Run("non-JSON/YAML is skipped", func(t *testing.T) {
		manifests, err := findManifests(logCtx, "./testdata/non-manifest-file", "./testdata/non-manifest-file", nil, noRecurse, nil)
		assert.Empty(t, manifests)
		assert.NoError(t, err)
	})

	t.Run("circular link should throw an error", func(t *testing.T) {
		require.DirExists(t, "./testdata/circular-link")
		manifests, err := findManifests(logCtx, "./testdata/circular-link", "./testdata/circular-link", nil, noRecurse, nil)
		assert.Empty(t, manifests)
		assert.Error(t, err)
	})

	t.Run("out-of-bounds symlink should throw an error", func(t *testing.T) {
		require.DirExists(t, "./testdata/out-of-bounds-link")
		manifests, err := findManifests(logCtx, "./testdata/out-of-bounds-link", "./testdata/out-of-bounds-link", nil, noRecurse, nil)
		assert.Empty(t, manifests)
		assert.Error(t, err)
	})

	t.Run("symlink to a regular file works", func(t *testing.T) {
		repoRoot, err := filepath.Abs("./testdata/in-bounds-link")
		require.NoError(t, err)
		appPath, err := filepath.Abs("./testdata/in-bounds-link/app")
		require.NoError(t, err)
		manifests, err := findManifests(logCtx, appPath, repoRoot, nil, noRecurse, nil)
		assert.Len(t, manifests, 1)
		assert.NoError(t, err)
	})

	t.Run("symlink to nowhere should be ignored", func(t *testing.T) {
		manifests, err := findManifests(logCtx, "./testdata/link-to-nowhere", "./testdata/link-to-nowhere", nil, noRecurse, nil)
		assert.Empty(t, manifests)
		assert.NoError(t, err)
	})

	t.Run("partially valid YAML file throws an error", func(t *testing.T) {
		require.DirExists(t, "./testdata/partially-valid-yaml")
		manifests, err := findManifests(logCtx, "./testdata/partially-valid-yaml", "./testdata/partially-valid-yaml", nil, noRecurse, nil)
		assert.Empty(t, manifests)
		assert.Error(t, err)
	})

	t.Run("invalid manifest throws an error", func(t *testing.T) {
		require.DirExists(t, "./testdata/invalid-manifests")
		manifests, err := findManifests(logCtx, "./testdata/invalid-manifests", "./testdata/invalid-manifests", nil, noRecurse, nil)
		assert.Empty(t, manifests)
		assert.Error(t, err)
	})

	t.Run("irrelevant YAML gets skipped, relevant YAML gets parsed", func(t *testing.T) {
		manifests, err := findManifests(logCtx, "./testdata/irrelevant-yaml", "./testdata/irrelevant-yaml", nil, noRecurse, nil)
		assert.Len(t, manifests, 1)
		assert.NoError(t, err)
	})

	t.Run("multiple JSON objects in one file throws an error", func(t *testing.T) {
		require.DirExists(t, "./testdata/json-list")
		manifests, err := findManifests(logCtx, "./testdata/json-list", "./testdata/json-list", nil, noRecurse, nil)
		assert.Empty(t, manifests)
		assert.Error(t, err)
	})

	t.Run("invalid JSON throws an error", func(t *testing.T) {
		require.DirExists(t, "./testdata/invalid-json")
		manifests, err := findManifests(logCtx, "./testdata/invalid-json", "./testdata/invalid-json", nil, noRecurse, nil)
		assert.Empty(t, manifests)
		assert.Error(t, err)
	})

	t.Run("valid JSON returns manifest and no error", func(t *testing.T) {
		manifests, err := findManifests(logCtx, "./testdata/valid-json", "./testdata/valid-json", nil, noRecurse, nil)
		assert.Len(t, manifests, 1)
		assert.NoError(t, err)
	})

	t.Run("YAML with an empty document doesn't throw an error", func(t *testing.T) {
		manifests, err := findManifests(logCtx, "./testdata/yaml-with-empty-document", "./testdata/yaml-with-empty-document", nil, noRecurse, nil)
		assert.Len(t, manifests, 1)
		assert.NoError(t, err)
	})
}

func TestTestRepoOCI(t *testing.T) {
	service := newService(".")
	_, err := service.TestRepository(context.Background(), &apiclient.TestRepositoryRequest{
		Repo: &argoappv1.Repository{
			Repo:      "https://demo.goharbor.io",
			Type:      "helm",
			EnableOCI: true,
		},
	})
	require.Error(t, err)
	assert.Contains(t, err.Error(), "OCI Helm repository URL should include hostname and port only")
}

func Test_getHelmDependencyRepos(t *testing.T) {
	repo1 := "https://charts.bitnami.com/bitnami"
	repo2 := "https://eventstore.github.io/EventStore.Charts"

	repos, err := getHelmDependencyRepos("../../util/helm/testdata/dependency")
	assert.NoError(t, err)
	assert.Equal(t, len(repos), 2)
	assert.Equal(t, repos[0].Repo, repo1)
	assert.Equal(t, repos[1].Repo, repo2)
}

func TestResolveRevision(t *testing.T) {

	service := newService(".")
	repo := &argoappv1.Repository{Repo: "https://github.com/argoproj/argo-cd"}
	app := &argoappv1.Application{}
	resolveRevisionResponse, err := service.ResolveRevision(context.Background(), &apiclient.ResolveRevisionRequest{
		Repo:              repo,
		App:               app,
		AmbiguousRevision: "v2.2.2",
	})

	expectedResolveRevisionResponse := &apiclient.ResolveRevisionResponse{
		Revision:          "03b17e0233e64787ffb5fcf65c740cc2a20822ba",
		AmbiguousRevision: "v2.2.2 (03b17e0233e64787ffb5fcf65c740cc2a20822ba)",
	}

	assert.NotNil(t, resolveRevisionResponse.Revision)
	assert.Nil(t, err)
	assert.Equal(t, expectedResolveRevisionResponse, resolveRevisionResponse)

}

func TestResolveRevisionNegativeScenarios(t *testing.T) {

	service := newService(".")
	repo := &argoappv1.Repository{Repo: "https://github.com/argoproj/argo-cd"}
	app := &argoappv1.Application{}
	resolveRevisionResponse, err := service.ResolveRevision(context.Background(), &apiclient.ResolveRevisionRequest{
		Repo:              repo,
		App:               app,
		AmbiguousRevision: "v2.a.2",
	})

	expectedResolveRevisionResponse := &apiclient.ResolveRevisionResponse{
		Revision:          "",
		AmbiguousRevision: "",
	}

	assert.NotNil(t, resolveRevisionResponse.Revision)
	assert.NotNil(t, err)
	assert.Equal(t, expectedResolveRevisionResponse, resolveRevisionResponse)

}

func TestDirectoryPermissionInitializer(t *testing.T) {
	dir := t.TempDir()

	file, err := ioutil.TempFile(dir, "")
	require.NoError(t, err)
	io.Close(file)

	// remove read permissions
	assert.NoError(t, os.Chmod(dir, 0000))

	// Remember to restore permissions when the test finishes so dir can
	// be removed properly.
	t.Cleanup(func() {
		require.NoError(t, os.Chmod(dir, 0777))
	})

	// make sure permission are restored
	closer := directoryPermissionInitializer(dir)
	_, err = ioutil.ReadFile(file.Name())
	require.NoError(t, err)

	// make sure permission are removed by closer
	io.Close(closer)
	_, err = ioutil.ReadFile(file.Name())
	require.Error(t, err)
}

func initGitRepo(repoPath string, remote string) error {
	if err := os.Mkdir(repoPath, 0755); err != nil {
		return err
	}

	cmd := exec.Command("git", "init", repoPath)
	cmd.Dir = repoPath
	if err := cmd.Run(); err != nil {
		return err
	}
	cmd = exec.Command("git", "remote", "add", "origin", remote)
	cmd.Dir = repoPath
	return cmd.Run()
}

func TestInit(t *testing.T) {
	dir := t.TempDir()

	// service.Init sets permission to 0300. Restore permissions when the test
	// finishes so dir can be removed properly.
	t.Cleanup(func() {
		require.NoError(t, os.Chmod(dir, 0777))
	})

	repoPath := path.Join(dir, "repo1")
	require.NoError(t, initGitRepo(repoPath, "https://github.com/argo-cd/test-repo1"))

	service := newService(".")
	service.rootDir = dir

	require.NoError(t, service.Init())

	repo1Path, err := service.gitRepoPaths.GetPath(git.NormalizeGitURL("https://github.com/argo-cd/test-repo1"))
	assert.NoError(t, err)
	assert.Equal(t, repoPath, repo1Path)

	_, err = ioutil.ReadDir(dir)
	require.Error(t, err)
	require.NoError(t, initGitRepo(path.Join(dir, "repo2"), "https://github.com/argo-cd/test-repo2"))
}

// TestCheckoutRevisionCanGetNonstandardRefs shows that we can fetch a revision that points to a non-standard ref. In
// other words, we haven't regressed and caused this issue again: https://github.com/argoproj/argo-cd/issues/4935
func TestCheckoutRevisionCanGetNonstandardRefs(t *testing.T) {
	rootPath := t.TempDir()

	sourceRepoPath, err := ioutil.TempDir(rootPath, "")
	require.NoError(t, err)

	// Create a repo such that one commit is on a non-standard ref _and nowhere else_. This is meant to simulate, for
	// example, a GitHub ref for a pull into one repo from a fork of that repo.
	runGit(t, sourceRepoPath, "init")
	runGit(t, sourceRepoPath, "checkout", "-b", "main") // make sure there's a main branch to switch back to
	runGit(t, sourceRepoPath, "commit", "-m", "empty", "--allow-empty")
	runGit(t, sourceRepoPath, "checkout", "-b", "branch")
	runGit(t, sourceRepoPath, "commit", "-m", "empty", "--allow-empty")
	sha := runGit(t, sourceRepoPath, "rev-parse", "HEAD")
	runGit(t, sourceRepoPath, "update-ref", "refs/pull/123/head", strings.TrimSuffix(sha, "\n"))
	runGit(t, sourceRepoPath, "checkout", "main")
	runGit(t, sourceRepoPath, "branch", "-D", "branch")

	destRepoPath, err := ioutil.TempDir(rootPath, "")
	require.NoError(t, err)

	gitClient, err := git.NewClientExt("file://"+sourceRepoPath, destRepoPath, &git.NopCreds{}, true, false, "")
	require.NoError(t, err)

	pullSha, err := gitClient.LsRemote("refs/pull/123/head")
	require.NoError(t, err)

	err = checkoutRevision(gitClient, "does-not-exist", false)
	assert.Error(t, err)

	err = checkoutRevision(gitClient, pullSha, false)
	assert.NoError(t, err)
}

// runGit runs a git command in the given working directory. If the command succeeds, it returns the combined standard
// and error output. If it fails, it stops the test with a failure message.
func runGit(t *testing.T, workDir string, args ...string) string {
	cmd := exec.Command("git", args...)
	cmd.Dir = workDir
	out, err := cmd.CombinedOutput()
	stringOut := string(out)
	require.NoError(t, err, stringOut)
	return stringOut
}

func Test_findHelmValueFilesInPath(t *testing.T) {
	t.Run("does not exist", func(t *testing.T) {
		files, err := findHelmValueFilesInPath("/obviously/does/not/exist")
		assert.Error(t, err)
		assert.Empty(t, files)
	})
	t.Run("values files", func(t *testing.T) {
		files, err := findHelmValueFilesInPath("./testdata/values-files")
		assert.NoError(t, err)
		assert.Len(t, files, 4)
	})
}

func Test_populateHelmAppDetails(t *testing.T) {
	res := apiclient.RepoAppDetailsResponse{}
	q := apiclient.RepoServerAppDetailsQuery{
		Repo: &argoappv1.Repository{},
		Source: &argoappv1.ApplicationSource{
			Helm: &argoappv1.ApplicationSourceHelm{ValueFiles: []string{"exclude.yaml", "has-the-word-values.yaml"}},
		},
	}
	appPath, err := filepath.Abs("./testdata/values-files/")
	require.NoError(t, err)
	err = populateHelmAppDetails(&res, appPath, appPath, &q)
	require.NoError(t, err)
	assert.Len(t, res.Helm.Parameters, 3)
	assert.Len(t, res.Helm.ValueFiles, 4)
}

func Test_populateHelmAppDetails_values_symlinks(t *testing.T) {
	t.Run("inbound", func(t *testing.T) {
		res := apiclient.RepoAppDetailsResponse{}
		q := apiclient.RepoServerAppDetailsQuery{Repo: &argoappv1.Repository{}, Source: &argoappv1.ApplicationSource{}}
		err := populateHelmAppDetails(&res, "./testdata/in-bounds-values-file-link/", "./testdata/in-bounds-values-file-link/", &q)
		require.NoError(t, err)
		assert.NotEmpty(t, res.Helm.Values)
		assert.NotEmpty(t, res.Helm.Parameters)
	})

	t.Run("out of bounds", func(t *testing.T) {
		res := apiclient.RepoAppDetailsResponse{}
		q := apiclient.RepoServerAppDetailsQuery{Repo: &argoappv1.Repository{}, Source: &argoappv1.ApplicationSource{}}
		err := populateHelmAppDetails(&res, "./testdata/out-of-bounds-values-file-link/", "./testdata/out-of-bounds-values-file-link/", &q)
		require.NoError(t, err)
		assert.Empty(t, res.Helm.Values)
		assert.Empty(t, res.Helm.Parameters)
	})
}

func Test_populateHelmAppDetails_values_symlinks(t *testing.T) {
	t.Run("inbound", func(t *testing.T) {
		res := apiclient.RepoAppDetailsResponse{}
		q := apiclient.RepoServerAppDetailsQuery{Repo: &argoappv1.Repository{}, Source: &argoappv1.ApplicationSource{}}
		err := populateHelmAppDetails(&res, "./testdata/in-bounds-values-file-link/", "./testdata/in-bounds-values-file-link/", &q)
		require.NoError(t, err)
		assert.NotEmpty(t, res.Helm.Values)
		assert.NotEmpty(t, res.Helm.Parameters)
	})

	t.Run("out of bounds", func(t *testing.T) {
		res := apiclient.RepoAppDetailsResponse{}
		q := apiclient.RepoServerAppDetailsQuery{Repo: &argoappv1.Repository{}, Source: &argoappv1.ApplicationSource{}}
		err := populateHelmAppDetails(&res, "./testdata/out-of-bounds-values-file-link/", "./testdata/out-of-bounds-values-file-link/", &q)
		require.NoError(t, err)
		assert.Empty(t, res.Helm.Values)
		assert.Empty(t, res.Helm.Parameters)
	})
}