package session

import (
	"context"
	"fmt"
	"math"
	"os"
	"strconv"
	"testing"
	"time"

	"github.com/dgrijalva/jwt-go/v4"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/fake"

	"github.com/argoproj/argo-cd/common"
	appv1 "github.com/argoproj/argo-cd/pkg/apis/application/v1alpha1"
	apps "github.com/argoproj/argo-cd/pkg/client/clientset/versioned/fake"
	"github.com/argoproj/argo-cd/pkg/client/listers/application/v1alpha1"
	"github.com/argoproj/argo-cd/test"
	"github.com/argoproj/argo-cd/util/errors"
	"github.com/argoproj/argo-cd/util/password"
	"github.com/argoproj/argo-cd/util/settings"
)

func getProjLister(objects ...runtime.Object) v1alpha1.AppProjectNamespaceLister {
	return test.NewFakeProjListerFromInterface(apps.NewSimpleClientset(objects...).ArgoprojV1alpha1().AppProjects("argocd"))
}

func getKubeClient(pass string, enabled bool) *fake.Clientset {
	const defaultSecretKey = "Hello, world!"

	bcrypt, err := password.HashPassword(pass)
	errors.CheckError(err)

	return fake.NewSimpleClientset(&corev1.ConfigMap{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "argocd-cm",
			Namespace: "argocd",
			Labels: map[string]string{
				"app.kubernetes.io/part-of": "argocd",
			},
		},
		Data: map[string]string{
			"admin.enabled": strconv.FormatBool(enabled),
		},
	}, &corev1.Secret{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "argocd-secret",
			Namespace: "argocd",
		},
		Data: map[string][]byte{
			"admin.password":   []byte(bcrypt),
			"server.secretkey": []byte(defaultSecretKey),
		},
	})
}

func newSessionManager(settingsMgr *settings.SettingsManager, projectLister v1alpha1.AppProjectNamespaceLister, storage UserStateStorage) *SessionManager {
	mgr := NewSessionManager(settingsMgr, projectLister, "", storage)
	mgr.verificationDelayNoiseEnabled = false
	return mgr
}

func TestSessionManager_AdminToken(t *testing.T) {
	const (
		defaultSubject = "admin"
	)
	settingsMgr := settings.NewSettingsManager(context.Background(), getKubeClient("pass", true), "argocd")
	mgr := newSessionManager(settingsMgr, getProjLister(), NewInMemoryUserStateStorage())

	token, err := mgr.Create(defaultSubject, 0, "")
	if err != nil {
		t.Errorf("Could not create token: %v", err)
	}

	claims, err := mgr.Parse(token)
	if err != nil {
		t.Errorf("Could not parse token: %v", err)
	}

	mapClaims := *(claims.(*jwt.MapClaims))
	subject := mapClaims["sub"].(string)
	if subject != "admin" {
		t.Errorf("Token claim subject \"%s\" does not match expected subject \"%s\".", subject, defaultSubject)
	}
}

func TestSessionManager_AdminToken_Deactivated(t *testing.T) {
	const (
		defaultSubject = "admin"
	)
	settingsMgr := settings.NewSettingsManager(context.Background(), getKubeClient("pass", false), "argocd")
	mgr := newSessionManager(settingsMgr, getProjLister(), NewInMemoryUserStateStorage())

	token, err := mgr.Create(defaultSubject, 0, "")
	if err != nil {
		t.Errorf("Could not create token: %v", err)
	}

	_, err = mgr.Parse(token)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "account admin is disabled")
}

func TestSessionManager_AdminToken_Deactivated(t *testing.T) {
	const (
		defaultSubject = "admin"
	)
	settingsMgr := settings.NewSettingsManager(context.Background(), getKubeClient("pass", false), "argocd")
	mgr := newSessionManager(settingsMgr, getProjLister(), NewInMemoryUserStateStorage())

	token, err := mgr.Create(defaultSubject, 0, "")
	if err != nil {
		t.Errorf("Could not create token: %v", err)
	}

	_, err = mgr.Parse(token)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "account admin is disabled")
}

func TestSessionManager_ProjectToken(t *testing.T) {
	settingsMgr := settings.NewSettingsManager(context.Background(), getKubeClient("pass", true), "argocd")

	t.Run("Valid Token", func(t *testing.T) {
		proj := appv1.AppProject{
			ObjectMeta: metav1.ObjectMeta{
				Name:      "default",
				Namespace: "argocd",
			},
			Spec: appv1.AppProjectSpec{Roles: []appv1.ProjectRole{{Name: "test"}}},
			Status: appv1.AppProjectStatus{JWTTokensByRole: map[string]appv1.JWTTokens{
				"test": {
					Items: []appv1.JWTToken{{ID: "abc", IssuedAt: time.Now().Unix(), ExpiresAt: 0}},
				},
			}},
		}
		mgr := newSessionManager(settingsMgr, getProjLister(&proj), NewInMemoryUserStateStorage())

		jwtToken, err := mgr.Create("proj:default:test", 100, "abc")
		require.NoError(t, err)

		_, err = mgr.Parse(jwtToken)
		assert.NoError(t, err)
	})

	t.Run("Token Revoked", func(t *testing.T) {
		proj := appv1.AppProject{
			ObjectMeta: metav1.ObjectMeta{
				Name:      "default",
				Namespace: "argocd",
			},
			Spec: appv1.AppProjectSpec{Roles: []appv1.ProjectRole{{Name: "test"}}},
		}

		mgr := newSessionManager(settingsMgr, getProjLister(&proj), NewInMemoryUserStateStorage())

		jwtToken, err := mgr.Create("proj:default:test", 10, "")
		require.NoError(t, err)

		_, err = mgr.Parse(jwtToken)
		require.Error(t, err)

		assert.Contains(t, err.Error(), "does not exist in project 'default'")
	})
}

var loggedOutContext = context.Background()

// nolint:staticcheck
var loggedInContext = context.WithValue(context.Background(), "claims", &jwt.MapClaims{"iss": "qux", "sub": "foo", "email": "bar", "groups": []string{"baz"}})

func TestIss(t *testing.T) {
	assert.Empty(t, Iss(loggedOutContext))
	assert.Equal(t, "qux", Iss(loggedInContext))
}
func TestLoggedIn(t *testing.T) {
	assert.False(t, LoggedIn(loggedOutContext))
	assert.True(t, LoggedIn(loggedInContext))
}

func TestUsername(t *testing.T) {
	assert.Empty(t, Username(loggedOutContext))
	assert.Equal(t, "bar", Username(loggedInContext))
}

func TestSub(t *testing.T) {
	assert.Empty(t, Sub(loggedOutContext))
	assert.Equal(t, "foo", Sub(loggedInContext))
}

func TestGroups(t *testing.T) {
	assert.Empty(t, Groups(loggedOutContext, []string{"groups"}))
	assert.Equal(t, []string{"baz"}, Groups(loggedInContext, []string{"groups"}))
}

func TestVerifyUsernamePassword(t *testing.T) {
	const password = "password"

	for _, tc := range []struct {
		name     string
		disabled bool
		userName string
		password string
		expected error
	}{
		{
			name:     "Success if userName and password is correct",
			disabled: false,
			userName: common.ArgoCDAdminUsername,
			password: password,
			expected: nil,
		},
		{
			name:     "Return error if password is empty",
			disabled: false,
			userName: common.ArgoCDAdminUsername,
			password: "",
			expected: status.Errorf(codes.Unauthenticated, blankPasswordError),
		},
		{
			name:     "Return error if password is not correct",
			disabled: false,
			userName: common.ArgoCDAdminUsername,
			password: "foo",
			expected: status.Errorf(codes.Unauthenticated, invalidLoginError),
		},
		{
			name:     "Return error if disableAdmin is true",
			disabled: true,
			userName: common.ArgoCDAdminUsername,
			password: password,
			expected: status.Errorf(codes.Unauthenticated, accountDisabled, "admin"),
		},
	} {
		t.Run(tc.name, func(t *testing.T) {
			settingsMgr := settings.NewSettingsManager(context.Background(), getKubeClient(password, !tc.disabled), "argocd")

			mgr := newSessionManager(settingsMgr, getProjLister(), NewInMemoryUserStateStorage())

			err := mgr.VerifyUsernamePassword(tc.userName, tc.password)

			if tc.expected == nil {
				assert.Nil(t, err)
			} else {
				assert.EqualError(t, err, tc.expected.Error())
			}
		})
	}
}

func TestCacheValueGetters(t *testing.T) {
	t.Run("Default values", func(t *testing.T) {
		mlf := getMaxLoginFailures()
		assert.Equal(t, defaultMaxLoginFailures, mlf)

		mcs := getMaximumCacheSize()
		assert.Equal(t, defaultMaxCacheSize, mcs)
	})

	t.Run("Valid environment overrides", func(t *testing.T) {
		os.Setenv(envLoginMaxFailCount, "5")
		os.Setenv(envLoginMaxCacheSize, "5")

		mlf := getMaxLoginFailures()
		assert.Equal(t, 5, mlf)

		mcs := getMaximumCacheSize()
		assert.Equal(t, 5, mcs)

		os.Setenv(envLoginMaxFailCount, "")
		os.Setenv(envLoginMaxCacheSize, "")
	})

	t.Run("Invalid environment overrides", func(t *testing.T) {
		os.Setenv(envLoginMaxFailCount, "invalid")
		os.Setenv(envLoginMaxCacheSize, "invalid")

		mlf := getMaxLoginFailures()
		assert.Equal(t, defaultMaxLoginFailures, mlf)

		mcs := getMaximumCacheSize()
		assert.Equal(t, defaultMaxCacheSize, mcs)

		os.Setenv(envLoginMaxFailCount, "")
		os.Setenv(envLoginMaxCacheSize, "")
	})

	t.Run("Less than allowed in environment overrides", func(t *testing.T) {
		os.Setenv(envLoginMaxFailCount, "-1")
		os.Setenv(envLoginMaxCacheSize, "-1")

		mlf := getMaxLoginFailures()
		assert.Equal(t, defaultMaxLoginFailures, mlf)

		mcs := getMaximumCacheSize()
		assert.Equal(t, defaultMaxCacheSize, mcs)

		os.Setenv(envLoginMaxFailCount, "")
		os.Setenv(envLoginMaxCacheSize, "")
	})

	t.Run("Greater than allowed in environment overrides", func(t *testing.T) {
		os.Setenv(envLoginMaxFailCount, fmt.Sprintf("%d", math.MaxInt32+1))
		os.Setenv(envLoginMaxCacheSize, fmt.Sprintf("%d", math.MaxInt32+1))

		mlf := getMaxLoginFailures()
		assert.Equal(t, defaultMaxLoginFailures, mlf)

		mcs := getMaximumCacheSize()
		assert.Equal(t, defaultMaxCacheSize, mcs)

		os.Setenv(envLoginMaxFailCount, "")
		os.Setenv(envLoginMaxCacheSize, "")
	})

}

func TestLoginRateLimiter(t *testing.T) {
	settingsMgr := settings.NewSettingsManager(context.Background(), getKubeClient("password", true), "argocd")
	storage := NewInMemoryUserStateStorage()

	mgr := newSessionManager(settingsMgr, getProjLister(), storage)

	t.Run("Test login delay valid user", func(t *testing.T) {
		for i := 0; i < getMaxLoginFailures(); i++ {
			err := mgr.VerifyUsernamePassword("admin", "wrong")
			assert.Error(t, err)
		}

		// The 11th time should fail even if password is right
		{
			err := mgr.VerifyUsernamePassword("admin", "password")
			assert.Error(t, err)
		}

		storage.attempts = map[string]LoginAttempts{}
		// Failed counter should have been reset, should validate immediately
		{
			err := mgr.VerifyUsernamePassword("admin", "password")
			assert.NoError(t, err)
		}
	})

	t.Run("Test login delay invalid user", func(t *testing.T) {
		for i := 0; i < getMaxLoginFailures(); i++ {
			err := mgr.VerifyUsernamePassword("invalid", "wrong")
			assert.Error(t, err)
		}

		err := mgr.VerifyUsernamePassword("invalid", "wrong")
		assert.Error(t, err)
	})
}

func TestMaxUsernameLength(t *testing.T) {
	username := ""
	for i := 0; i < maxUsernameLength+1; i++ {
		username += "a"
	}
	settingsMgr := settings.NewSettingsManager(context.Background(), getKubeClient("password", true), "argocd")
	mgr := newSessionManager(settingsMgr, getProjLister(), NewInMemoryUserStateStorage())
	err := mgr.VerifyUsernamePassword(username, "password")
	assert.Error(t, err)
	assert.Contains(t, err.Error(), fmt.Sprintf(usernameTooLongError, maxUsernameLength))
}

func TestMaxCacheSize(t *testing.T) {
	settingsMgr := settings.NewSettingsManager(context.Background(), getKubeClient("password", true), "argocd")
	mgr := newSessionManager(settingsMgr, getProjLister(), NewInMemoryUserStateStorage())

	invalidUsers := []string{"invalid1", "invalid2", "invalid3", "invalid4", "invalid5", "invalid6", "invalid7"}
	// Temporarily decrease max cache size
	os.Setenv(envLoginMaxCacheSize, "5")

	for _, user := range invalidUsers {
		err := mgr.VerifyUsernamePassword(user, "password")
		assert.Error(t, err)
	}

	assert.Len(t, mgr.GetLoginFailures(), 5)
}

func TestFailedAttemptsExpiry(t *testing.T) {
	settingsMgr := settings.NewSettingsManager(context.Background(), getKubeClient("password", true), "argocd")
	mgr := newSessionManager(settingsMgr, getProjLister(), NewInMemoryUserStateStorage())

	invalidUsers := []string{"invalid1", "invalid2", "invalid3", "invalid4", "invalid5", "invalid6", "invalid7"}

	os.Setenv(envLoginFailureWindowSeconds, "1")

	for _, user := range invalidUsers {
		err := mgr.VerifyUsernamePassword(user, "password")
		assert.Error(t, err)
	}

	time.Sleep(2 * time.Second)

	err := mgr.VerifyUsernamePassword("invalid8", "password")
	assert.Error(t, err)
	assert.Len(t, mgr.GetLoginFailures(), 1)

	os.Setenv(envLoginFailureWindowSeconds, "")
}