package main

import (
	"fmt"
	"math/rand"
	"sort"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/google/go-cmp/cmp"
	"github.com/stretchr/testify/require"

	"github.com/sourcegraph/sourcegraph/internal/extsvc"
	"github.com/sourcegraph/sourcegraph/internal/gqltestutil"
)

func TestSearch(t *testing.T) {
	if len(*githubToken) == 0 {
		t.Skip("Environment variable GITHUB_TOKEN is not set")
	}

	// Set up external service
	esID, err := client.AddExternalService(gqltestutil.AddExternalServiceInput{
		Kind:        extsvc.KindGitHub,
		DisplayName: "gqltest-github-search",
		Config: mustMarshalJSONString(struct {
			URL                   string   `json:"url"`
			Token                 string   `json:"token"`
			Repos                 []string `json:"repos"`
			RepositoryPathPattern string   `json:"repositoryPathPattern"`
		}{
			URL:   "https://ghe.sgdev.org/",
			Token: *githubToken,
			Repos: []string{
				"sgtest/java-langserver",
				"sgtest/jsonrpc2",
				"sgtest/go-diff",
				"sgtest/appdash",
				"sgtest/sourcegraph-typescript",
				"sgtest/private",  // Private
				"sgtest/mux",      // Fork
				"sgtest/archived", // Archived
			},
			RepositoryPathPattern: "github.com/{nameWithOwner}",
		}),
	})
	if err != nil {
		t.Fatal(err)
	}
	defer func() {
		err := client.DeleteExternalService(esID)
		if err != nil {
			t.Fatal(err)
		}
	}()

	err = client.WaitForReposToBeCloned(
		"github.com/sgtest/java-langserver",
		"github.com/sgtest/jsonrpc2",
		"github.com/sgtest/go-diff",
		"github.com/sgtest/appdash",
		"github.com/sgtest/sourcegraph-typescript",
		"github.com/sgtest/private",  // Private
		"github.com/sgtest/mux",      // Fork
		"github.com/sgtest/archived", // Archived
	)
	if err != nil {
		t.Fatal(err)
	}

	err = client.WaitForReposToBeIndex(
		"github.com/sgtest/java-langserver",
	)
	if err != nil {
		t.Fatal(err)
	}

	t.Run("search contexts", func(t *testing.T) {
		testSearchContextsCRUD(t, client)
		testListingSearchContexts(t, client)
	})

	t.Run("graphql", func(t *testing.T) {
		testSearchClient(t, client)
	})
	t.Run("stream", func(t *testing.T) {
		testSearchClient(t, &gqltestutil.SearchStreamClient{
			Client: client,
		})
	})

	testSearchOther(t)
}

// searchClient is an interface so we can swap out a streaming vs graphql
// based search API. It only supports the methods that streaming supports.
type searchClient interface {
	SearchRepositories(query string) (gqltestutil.SearchRepositoryResults, error)
	SearchFiles(query string) (*gqltestutil.SearchFileResults, error)
	SearchAll(query string) ([]*gqltestutil.AnyResult, error)

	OverwriteSettings(subjectID, contents string) error
	AuthenticatedUserID() string
}

func testSearchClient(t *testing.T, client searchClient) {
	// Temporary test until we have equivalence.
	_, isStreaming := client.(*gqltestutil.SearchStreamClient)

	const (
		skipStream = 1 << iota
		skipGraphQL
	)
	doSkip := func(t *testing.T, skip int) {
		t.Helper()
		if skip&skipStream != 0 && isStreaming {
			t.Skip("does not support streaming")
		}
		if skip&skipGraphQL != 0 && !isStreaming {
			t.Skip("does not support graphql")
		}
	}

	t.Run("visibility", func(t *testing.T) {
		tests := []struct {
			query       string
			wantMissing []string
		}{
			{
				query:       "type:repo visibility:private sgtest",
				wantMissing: []string{},
			},
			{
				query:       "type:repo visibility:public sgtest",
				wantMissing: []string{"github.com/sgtest/private"},
			},
			{
				query:       "type:repo visibility:any sgtest",
				wantMissing: []string{},
			},
		}
		for _, test := range tests {
			t.Run(test.query, func(t *testing.T) {
				results, err := client.SearchRepositories(test.query)
				if err != nil {
					t.Fatal(err)
				}
				missing := results.Exists("github.com/sgtest/private")
				if diff := cmp.Diff(test.wantMissing, missing); diff != "" {
					t.Fatalf("Missing mismatch (-want +got):\n%s", diff)
				}
			})
		}
	})

	t.Run("execute search with search parameters", func(t *testing.T) {
		results, err := client.SearchFiles("repo:^github.com/sgtest/go-diff$ type:file file:.go -file:.md")
		if err != nil {
			t.Fatal(err)
		}

		// Make sure only got .go files and no .md files
		for _, r := range results.Results {
			if !strings.HasSuffix(r.File.Name, ".go") {
				t.Fatalf("Found file name does not end with .go: %s", r.File.Name)
			}
		}
	})

	t.Run("lang: filter", func(t *testing.T) {
		// On our test repositories, `function` has results for go, ts, python, html
		results, err := client.SearchFiles("function lang:go")
		if err != nil {
			t.Fatal(err)
		}
		// Make sure we only got .go files
		for _, r := range results.Results {
			if !strings.Contains(r.File.Name, ".go") {
				t.Fatalf("Found file name does not end with .go: %s", r.File.Name)
			}
		}
	})

	t.Run("excluding repositories", func(t *testing.T) {
		results, err := client.SearchFiles("fmt.Sprintf -repo:jsonrpc2")
		if err != nil {
			t.Fatal(err)
		}
		// Make sure we got some results
		if len(results.Results) == 0 {
			t.Fatal("Want non-zero results but got 0")
		}
		// Make sure we got no results from the excluded repository
		for _, r := range results.Results {
			if strings.Contains(r.Repository.Name, "jsonrpc2") {
				t.Fatal("Got results for excluded repository")
			}
		}
	})

	t.Run("multiple revisions per repository", func(t *testing.T) {
		results, err := client.SearchFiles("repo:sgtest/go-diff$@master:print-options:*refs/heads/ func NewHunksReader")
		if err != nil {
			t.Fatal(err)
		}

		wantExprs := map[string]struct{}{
			"master":        {},
			"print-options": {},

			// These next 2 branches are included because of the *refs/heads/ in the query.
			"test-already-exist-pr": {},
			"bug-fix-wip":           {},
		}

		for _, r := range results.Results {
			delete(wantExprs, r.RevSpec.Expr)
		}

		if len(wantExprs) > 0 {
			missing := make([]string, 0, len(wantExprs))
			for expr := range wantExprs {
				missing = append(missing, expr)
			}
			t.Fatalf("Missing exprs: %v", missing)
		}
	})

	t.Run("repository groups", func(t *testing.T) {
		const repoName = "github.com/sgtest/go-diff"
		err := client.OverwriteSettings(client.AuthenticatedUserID(), fmt.Sprintf(`{"search.repositoryGroups":{"gql_test_group": ["%s"]}}`, repoName))
		if err != nil {
			t.Fatal(err)
		}
		defer func() {
			err := client.OverwriteSettings(client.AuthenticatedUserID(), `{}`)
			if err != nil {
				t.Fatal(err)
			}
		}()

		results, err := client.SearchFiles("repogroup:gql_test_group diff.")
		if err != nil {
			t.Fatal(err)
		}

		// Make sure there are results and all results are from the same repository
		if len(results.Results) == 0 {
			t.Fatal("Unexpected zero result")
		}
		for _, r := range results.Results {
			if r.Repository.Name != repoName {
				t.Fatalf("Repository: want %q but got %q", repoName, r.Repository.Name)
			}
		}
	})

	t.Run("repository search", func(t *testing.T) {
		tests := []struct {
			name        string
			query       string
			zeroResult  bool
			wantMissing []string
		}{
			{
				name:       `archived excluded, zero results`,
				query:      `type:repo archived`,
				zeroResult: true,
			},
			{
				name:  `archived included, nonzero result`,
				query: `type:repo archived archived:yes`,
			},
			{
				name:  `archived included if exact without option, nonzero result`,
				query: `repo:^github\.com/sgtest/archived$`,
			},
			{
				name:       `fork excluded, zero results`,
				query:      `type:repo sgtest/mux`,
				zeroResult: true,
			},
			{
				name:  `fork included, nonzero result`,
				query: `type:repo sgtest/mux fork:yes`,
			},
			{
				name:  `fork included if exact without option, nonzero result`,
				query: `repo:^github\.com/sgtest/mux$`,
			},
			{
				name:  "repohasfile returns results for global search",
				query: "repohasfile:README",
			},
			{
				name:       "multiple repohasfile returns no results if one doesn't match",
				query:      "repohasfile:README repohasfile:thisfiledoesnotexist_1571751",
				zeroResult: true,
			},
			{
				name:  "repo search by name, nonzero result",
				query: "repo:go-diff$",
			},
			{
				name:  "true is an alias for yes when fork is set",
				query: `repo:github\.com/sgtest/mux fork:true`,
			},
			{
				name:  `exclude counts for fork and archive`,
				query: `repo:mux|archived|go-diff`,
				wantMissing: []string{
					"github.com/sgtest/archived",
					"github.com/sgtest/mux",
				},
			},
			{
				name:  `Structural search returns repo results if patterntype set but pattern is empty`,
				query: `repo:^github\.com/sgtest/sourcegraph-typescript$ patterntype:structural`,
			},
		}
		for _, test := range tests {
			t.Run(test.name, func(t *testing.T) {
				results, err := client.SearchRepositories(test.query)
				if err != nil {
					t.Fatal(err)
				}

				if test.zeroResult {
					if len(results) > 0 {
						t.Fatalf("Want zero result but got %d", len(results))
					}
				} else {
					if len(results) == 0 {
						t.Fatal("Want non-zero results but got 0")
					}
				}

				if test.wantMissing != nil {
					missing := results.Exists(test.wantMissing...)
					sort.Strings(missing)
					if diff := cmp.Diff(test.wantMissing, missing); diff != "" {
						t.Fatalf("Missing mismatch (-want +got):\n%s", diff)
					}
				}
			})
		}
	})

	t.Run("global text search", func(t *testing.T) {
		tests := []struct {
			name          string
			query         string
			zeroResult    bool
			minMatchCount int64
			wantAlert     *gqltestutil.SearchAlert
			skip          int
		}{
			// Global search
			{
				name:  "error",
				query: "error",
			},
			{
				name:  "error count:1000",
				query: "error count:1000",
			},
			{
				name:          "something with more than 1000 results and use count:1000",
				query:         ". count:1000",
				minMatchCount: 1000,
			},
			{
				name:          "default limit streaming",
				query:         ".",
				minMatchCount: 500,
				skip:          skipGraphQL,
			},
			{
				name:          "default limit graphql",
				query:         ".",
				minMatchCount: 30,
				skip:          skipStream,
			},
			{
				name:  "regular expression without indexed search",
				query: "index:no patterntype:regexp ^func.*$",
			},
			{
				name:  "fork:only",
				query: "fork:only router",
			},
			{
				name:  "double-quoted pattern, nonzero result",
				query: `"func main() {\n" patterntype:regexp type:file`,
			},
			{
				name:  "exclude repo, nonzero result",
				query: `"func main() {\n" -repo:go-diff patterntype:regexp type:file`,
			},
			{
				name:       "fork:no",
				query:      "fork:no FORK" + "_SENTINEL",
				zeroResult: true,
			},
			{
				name:  "fork:yes",
				query: "fork:yes FORK" + "_SENTINEL",
			},
			{
				name:       "random characters, zero results",
				query:      "asdfalksd+jflaksjdfklas patterntype:literal -repo:sourcegraph",
				zeroResult: true,
			},
			// Global search visibility
			{
				name: "visibility:all for global search includes private repo",
				// match content in a private repo sgtest/private and a public repo sgtest/go-diff.
				query:         `(#\ private|#\ go-diff) visibility:all patterntype:regexp`,
				minMatchCount: 2,
			},
			{
				name: "visibility:public for global search excludes private repo",
				// expect no matches because pattern '# private' is only in a private repo.
				query:      "# private visibility:public",
				zeroResult: true,
			},
			{
				name: "visibility:private for global includes only private repo",
				// expect no matches because #go-diff doesn't exist in private repo.
				query:      "# go-diff visibility:private",
				zeroResult: true,
			},
			{
				name: "visibility:private for global includes only private",
				// expect a match because # private is only in a private repo.
				query:      "# private visibility:private",
				zeroResult: false,
			},
			// Repo search
			{
				name:  "repo search by name, case yes, nonzero result",
				query: `repo:^github\.com/sgtest/go-diff$ String case:yes type:file`,
			},
			{
				name:  "non-master branch, nonzero result",
				query: `repo:^github\.com/sgtest/java-langserver$@v1 void sendPartialResult(Object requestId, JsonPatch jsonPatch); patterntype:literal type:file`,
			},
			{
				name:  "indexed multiline search, nonzero result",
				query: `repo:^github\.com/sgtest/java-langserver$ \nimport index:only patterntype:regexp type:file`,
			},
			{
				name:  "unindexed multiline search, nonzero result",
				query: `repo:^github\.com/sgtest/java-langserver$ \nimport index:no patterntype:regexp type:file`,
			},
			{
				name:       "random characters, zero result",
				query:      `repo:^github\.com/sgtest/java-langserver$ doesnot734734743734743exist`,
				zeroResult: true,
			},
			// Filename search
			{
				name:  "search for a known file",
				query: "file:doc.go",
			},
			{
				name:       "search for a non-existent file",
				query:      "file:asdfasdf.go",
				zeroResult: true,
			},
			// Symbol search
			{
				name:  "search for a known symbol",
				query: "type:symbol count:100 patterntype:regexp ^newroute",
			},
			{
				name:       "search for a non-existent symbol",
				query:      "type:symbol asdfasdf",
				zeroResult: true,
			},
			// Commit search
			{
				name:  "commit search, nonzero result",
				query: `repo:^github\.com/sgtest/go-diff$ type:commit`,
			},
			{
				name:       "commit search, non-existent ref",
				query:      `repo:^github\.com/sgtest/go-diff$@ref/noexist type:commit`,
				zeroResult: true,
				wantAlert: &gqltestutil.SearchAlert{
					Title:           "Some repositories could not be searched",
					Description:     `The repository github.com/sgtest/go-diff matched by your repo: filter could not be searched because it does not contain the revision "ref/noexist".`,
					ProposedQueries: nil,
				},
			},
			{
				name:  "commit search, non-zero result message",
				query: `repo:^github\.com/sgtest/sourcegraph-typescript$ type:commit message:test`,
			},
			{
				name:  "commit search, non-zero result pattern",
				query: `repo:^github\.com/sgtest/sourcegraph-typescript$ type:commit test`,
			},
			// Diff search
			{
				name:  "diff search, nonzero result",
				query: `repo:^github\.com/sgtest/go-diff$ type:diff main`,
			},
			// Repohascommitafter
			{
				name:  `Repohascommitafter, nonzero result`,
				query: `repo:^github\.com/sgtest/go-diff$ repohascommitafter:"2019-01-01" test patterntype:literal`,
			},
			// Regex text search
			{
				name:  `regex, unindexed, nonzero result`,
				query: `^func.*$ patterntype:regexp index:only type:file`,
			},
			{
				name:  `regex, fork only, nonzero result`,
				query: `fork:only patterntype:regexp FORK_SENTINEL`,
			},
			{
				name:  `regex, filter by language`,
				query: `\bfunc\b lang:go type:file patterntype:regexp`,
			},
			{
				name:       `regex, filename, zero results`,
				query:      `file:asdfasdf.go patterntype:regexp`,
				zeroResult: true,
			},
			{
				name:  `regexp, filename, nonzero result`,
				query: `file:doc.go patterntype:regexp`,
			},
			// Ensure repo resolution is correct in global. https://github.com/sourcegraph/sourcegraph/issues/27044
			{
				name:       `-repo excludes private repos`,
				query:      `-repo:private // this is a change`,
				zeroResult: true,
			},
			// Ensure repo resolution is correct in global. https://github.com/sourcegraph/sourcegraph/issues/27044
			{
				name:       `-repo excludes private repos`,
				query:      `-repo:private // this is a change`,
				zeroResult: true,
			},
		}
		for _, test := range tests {
			t.Run(test.name, func(t *testing.T) {
				doSkip(t, test.skip)

				results, err := client.SearchFiles(test.query)
				if err != nil {
					t.Fatal(err)
				}

				if diff := cmp.Diff(test.wantAlert, results.Alert); diff != "" {
					t.Fatalf("Alert mismatch (-want +got):\n%s", diff)
				}

				if test.zeroResult {
					if len(results.Results) > 0 {
						t.Fatalf("Want zero result but got %d", len(results.Results))
					}
				} else {
					if len(results.Results) == 0 {
						t.Fatal("Want non-zero results but got 0")
					}
				}

				if results.MatchCount < test.minMatchCount {
					t.Fatalf("Want at least %d match count but got %d", test.minMatchCount, results.MatchCount)
				}
			})
		}
	})

	t.Run("structural search", func(t *testing.T) {
		tests := []struct {
			name       string
			query      string
			zeroResult bool
			wantAlert  *gqltestutil.SearchAlert
		}{
			{
				name:  "Structural, index only, nonzero result",
				query: `repo:^github\.com/sgtest/go-diff$ make(:[1]) index:only patterntype:structural count:3`,
			},
			{
				name:  "Structural, index only, backcompat, nonzero result",
				query: `repo:^github\.com/sgtest/go-diff$ make(:[1]) lang:go rule:'where "backcompat" == "backcompat"' patterntype:structural`,
			},
			{
				name:  "Structural, unindexed, nonzero result",
				query: `repo:^github\.com/sgtest/go-diff$@adde71 make(:[1]) index:no patterntype:structural count:3`,
			},
			{
				name:  `Structural search quotes are interpreted literally`,
				query: `repo:^github\.com/sgtest/sourcegraph-typescript$ file:^README\.md "basic :[_] access :[_]" patterntype:structural`,
			},
			{
				name:       `Alert to activate structural search mode for :[...] syntax`,
				query:      `repo:^github\.com/sgtest/go-diff$ patterntype:literal i can't :[believe] it's not butter`,
				zeroResult: true,
				wantAlert: &gqltestutil.SearchAlert{
					Title:       "No results",
					Description: "It looks like you may have meant to run a structural search, but it is not toggled.",
					ProposedQueries: []gqltestutil.ProposedQuery{
						{
							Description: "Activate structural search",
							Query:       `repo:^github\.com/sgtest/go-diff$ patterntype:literal i can't :[believe] it's not butter patternType:structural`,
						},
					},
				},
			},
			{
				name:       `Alert to activate structural search mode for ... syntax`,
				query:      `no results for { ... } raises alert repo:^github\.com/sgtest/go-diff$`,
				zeroResult: true,
				wantAlert: &gqltestutil.SearchAlert{
					Title:       "No results",
					Description: "It looks like you may have meant to run a structural search, but it is not toggled.",
					ProposedQueries: []gqltestutil.ProposedQuery{
						{
							Description: "Activate structural search",
							Query:       `no results for { ... } raises alert repo:^github\.com/sgtest/go-diff$ patternType:structural`,
						},
					},
				},
			},
		}
		for _, test := range tests {
			t.Run(test.name, func(t *testing.T) {
				results, err := client.SearchFiles(test.query)
				if err != nil {
					t.Fatal(err)
				}

				if diff := cmp.Diff(test.wantAlert, results.Alert); diff != "" {
					t.Fatalf("Alert mismatch (-want +got):\n%s", diff)
				}

				if test.zeroResult {
					if len(results.Results) > 0 {
						t.Fatalf("Want zero result but got %d", len(results.Results))
					}
				} else {
					if len(results.Results) == 0 {
						t.Fatal("Want non-zero results but got 0")
					}
				}
			})
		}
	})

	t.Run("And/Or queries", func(t *testing.T) {
		tests := []struct {
			name       string
			query      string
			zeroResult bool
			wantAlert  *gqltestutil.SearchAlert
		}{
			{
				name:  `And operator, basic`,
				query: `repo:^github\.com/sgtest/go-diff$ func and main type:file`,
			},
			{
				name:  `Or operator, single and double quoted`,
				query: `repo:^github\.com/sgtest/go-diff$ "func PrintMultiFileDiff" or 'func readLine(' type:file patterntype:regexp`,
			},
			{
				name:  `Literals, grouped parens with parens-as-patterns heuristic`,
				query: `repo:^github\.com/sgtest/go-diff$ (() or ()) type:file patterntype:regexp`,
			},
			{
				name:  `Literals, no grouped parens`,
				query: `repo:^github\.com/sgtest/go-diff$ () or () type:file patterntype:regexp`,
			},
			{
				name:  `Literals, escaped parens`,
				query: `repo:^github\.com/sgtest/go-diff$ \(\) or \(\) type:file patterntype:regexp`,
			},
			{
				name:  `Literals, escaped and unescaped parens, no group`,
				query: `repo:^github\.com/sgtest/go-diff$ () or \(\) type:file patterntype:regexp`,
			},
			{
				name:  `Literals, escaped and unescaped parens, grouped`,
				query: `repo:^github\.com/sgtest/go-diff$ (() or \(\)) type:file patterntype:regexp`,
			},
			{
				name:       `Literals, double paren`,
				query:      `repo:^github\.com/sgtest/go-diff$ ()() or ()()`,
				zeroResult: true,
			},
			{
				name:       `Literals, double paren, dangling paren right side`,
				query:      `repo:^github\.com/sgtest/go-diff$ ()() or main()(`,
				zeroResult: true,
			},
			{
				name:       `Literals, double paren, dangling paren left side`,
				query:      `repo:^github\.com/sgtest/go-diff$ ()( or ()()`,
				zeroResult: true,
			},
			{
				name:  `Mixed regexp and literal`,
				query: `repo:^github\.com/sgtest/go-diff$ patternType:regexp func(.*) or does_not_exist_3744 type:file`,
			},
			{
				name:  `Mixed regexp and literal heuristic`,
				query: `repo:^github\.com/sgtest/go-diff$ func( or func(.*) type:file`,
			},
			{
				name:       `Mixed regexp and quoted literal`,
				query:      `repo:^github\.com/sgtest/go-diff$ "*" and cert.*Load type:file`,
				zeroResult: true,
			},
			{
				name:  `Escape sequences`,
				query: `repo:^github\.com/sgtest/go-diff$ patternType:regexp \' and \" and \\ and /`,
			},
			{
				name:  `Escaped whitespace sequences with 'and'`,
				query: `repo:^github\.com/sgtest/go-diff$ patternType:regexp \ and /`,
			},
			{
				name:  `Concat converted to spaces for literal search`,
				query: `repo:^github\.com/sgtest/go-diff$ file:^diff/print\.go t := or ts Time patterntype:literal`,
			},
			{
				name:  `Literal parentheses match pattern`,
				query: `repo:^github\.com/sgtest/go-diff file:^diff/print\.go Bytes() and Time() patterntype:literal`,
			},
			{
				name:  `Literals, simple not keyword inside group`,
				query: `repo:^github\.com/sgtest/go-diff$ (not .svg) patterntype:literal`,
			},
			{
				name:  `Literals, not keyword and implicit and inside group`,
				query: `repo:^github\.com/sgtest/go-diff$ (a/foo not .svg) patterntype:literal`,
			},
			{
				name:  `Literals, not and and keyword inside group`,
				query: `repo:^github\.com/sgtest/go-diff$ (a/foo and not .svg) patterntype:literal`,
			},
			{
				name:  `Dangling right parens, supported via content: filter`,
				query: `repo:^github\.com/sgtest/go-diff$ content:"diffPath)" and main patterntype:literal`,
			},
			{
				name:       `Dangling right parens, unsupported in literal search`,
				query:      `repo:^github\.com/sgtest/go-diff$ diffPath) and main patterntype:literal`,
				zeroResult: true,
				wantAlert: &gqltestutil.SearchAlert{
					Title:       "Unable To Process Query",
					Description: "Unsupported expression. The combination of parentheses in the query have an unclear meaning. Try using the content: filter to quote patterns that contain parentheses",
				},
			},
			{
				name:       `Dangling right parens, unsupported in literal search, double parens`,
				query:      `repo:^github\.com/sgtest/go-diff$ MarshalTo and OrigName)) patterntype:literal`,
				zeroResult: true,
				wantAlert: &gqltestutil.SearchAlert{
					Title:       "Unable To Process Query",
					Description: "Unsupported expression. The combination of parentheses in the query have an unclear meaning. Try using the content: filter to quote patterns that contain parentheses",
				},
			},
			{
				name:       `Dangling right parens, unsupported in literal search, simple group before right paren`,
				query:      `repo:^github\.com/sgtest/go-diff$ MarshalTo and (m.OrigName)) patterntype:literal`,
				zeroResult: true,
				wantAlert: &gqltestutil.SearchAlert{
					Title:       "Unable To Process Query",
					Description: "Unsupported expression. The combination of parentheses in the query have an unclear meaning. Try using the content: filter to quote patterns that contain parentheses",
				},
			},
			{
				name:       `Dangling right parens, heuristic for literal search, cannot succeed, too confusing`,
				query:      `repo:^github\.com/sgtest/go-diff$ (respObj.Size and (data))) patterntype:literal`,
				zeroResult: true,
				wantAlert: &gqltestutil.SearchAlert{
					Title:       "Unable To Process Query",
					Description: "Unsupported expression. The combination of parentheses in the query have an unclear meaning. Try using the content: filter to quote patterns that contain parentheses",
				},
			},
			{
				name:       `No result for confusing grouping`,
				query:      `repo:^github\.com/sgtest/go-diff file:^README\.md (bar and (foo or x\) ()) patterntype:literal`,
				zeroResult: true,
			},
			{
				name:       `Successful grouping removes alert`,
				query:      `repo:^github\.com/sgtest/go-diff file:^README\.md (bar and (foo or (x\) ())) patterntype:literal`,
				zeroResult: true,
			},
			{
				name:  `No dangling right paren with complex group for literal search`,
				query: `repo:^github\.com/sgtest/go-diff$ (m *FileDiff and (data)) patterntype:literal`,
			},
			{
				name:  `Concat converted to .* for regexp search`,
				query: `repo:^github\.com/sgtest/go-diff$ file:^diff/print\.go t := or ts Time patterntype:regexp type:file`,
			},
			{
				name:  `Structural search uses literal search parser`,
				query: `repo:^github\.com/sgtest/go-diff$ file:^diff/print\.go :[[v]] := ts and printFileHeader(:[_]) patterntype:structural`,
			},
			{
				name:  `Union file matches per file and accurate counts`,
				query: `repo:^github\.com/sgtest/go-diff file:^diff/print\.go func or package`,
			},
			{
				name:  `Intersect file matches per file and accurate counts`,
				query: `repo:^github\.com/sgtest/go-diff file:^diff/print\.go func and package`,
			},
			{
				name:  `Simple combined union and intersect file matches per file and accurate counts`,
				query: `repo:^github\.com/sgtest/go-diff file:^diff/print\.go ((func timePtr and package diff) or return buf.Bytes())`,
			},
			{
				name:  `Complex union of intersect file matches per file and accurate counts`,
				query: `repo:^github\.com/sgtest/go-diff file:^diff/print\.go ((func timePtr and package diff) or (ts == nil and ts.Time()))`,
			},
			{
				name:  `Complex intersect of union file matches per file and accurate counts`,
				query: `repo:^github\.com/sgtest/go-diff file:^diff/print\.go ((func timePtr or package diff) and (ts == nil or ts.Time()))`,
			},
			{
				name:       `Intersect file matches per file against an empty result set`,
				query:      `repo:^github\.com/sgtest/go-diff file:^diff/print\.go func and doesnotexist838338`,
				zeroResult: true,
			},
			{
				name:  `Dedupe union operation`,
				query: `file:diff.go|print.go|parse.go repo:^github\.com/sgtest/go-diff _, :[[x]] := range :[src.] { :[_] } or if :[s1] == :[s2] patterntype:structural`,
			},
		}
		for _, test := range tests {
			t.Run(test.name, func(t *testing.T) {
				results, err := client.SearchFiles(test.query)
				if err != nil {
					t.Fatal(err)
				}

				if diff := cmp.Diff(test.wantAlert, results.Alert); diff != "" {
					t.Fatalf("Alert mismatch (-want +got):\n%s", diff)
				}

				if test.zeroResult {
					if len(results.Results) > 0 {
						t.Fatalf("Want zero result but got %d", len(results.Results))
					}
				} else {
					if len(results.Results) == 0 {
						t.Fatal("Want non-zero results but got 0")
					}
				}
			})
		}
	})

	t.Run("And/Or search expression queries", func(t *testing.T) {
		tests := []struct {
			name            string
			query           string
			zeroResult      bool
			exactMatchCount int64
			wantAlert       *gqltestutil.SearchAlert
			skip            int
		}{
			{
				name:  `Or distributive property on content and file`,
				query: `repo:^github\.com/sgtest/sourcegraph-typescript$ (Fetches OR file:language-server.ts)`,
			},
			{
				name:  `Or distributive property on nested file on content`,
				query: `repo:^github\.com/sgtest/sourcegraph-typescript$ ((file:^renovate\.json extends) or file:progress.ts createProgressProvider)`,
			},
			{
				name:  `Or distributive property on commit`,
				query: `repo:^github\.com/sgtest/sourcegraph-typescript$ (type:diff or type:commit) author:felix yarn`,
			},
			{
				name:            `Or match on both diff and commit returns both`,
				query:           `repo:^github\.com/sgtest/sourcegraph-typescript$ (type:diff or type:commit) subscription after:"june 11 2019" before:"june 13 2019"`,
				exactMatchCount: 2,
			},
			{
				name:            `Or distributive property on rev`,
				query:           `repo:^github\.com/sgtest/mux$ (rev:v1.7.3 or revision:v1.7.2)`,
				exactMatchCount: 2,
			},
			{
				name:            `Or distributive property on rev with file`,
				query:           `repo:^github\.com/sgtest/mux$ (rev:v1.7.3 or revision:v1.7.2) file:README.md`,
				exactMatchCount: 2,
			},
			{
				name:  `Or distributive property on repo`,
				query: `(repo:^github\.com/sgtest/go-diff$@garo/lsif-indexing-campaign:test-already-exist-pr or repo:^github\.com/sgtest/sourcegraph-typescript$) file:README.md #`,
			},
			{
				name:  `Or distributive property on repo where only one repo contains match (tests repo cache is invalidated)`,
				query: `(repo:^github\.com/sgtest/sourcegraph-typescript$ or repo:^github\.com/sgtest/go-diff$) package diff provides`,
			},
			{
				name:            `Or distributive property on commits deduplicates and merges`,
				query:           `repo:^github\.com/sgtest/go-diff$ type:commit (message:add or message:file)`,
				exactMatchCount: 21,
				skip:            skipStream,
			},
		}
		for _, test := range tests {
			t.Run(test.name, func(t *testing.T) {
				doSkip(t, test.skip)

				results, err := client.SearchFiles(test.query)
				if err != nil {
					t.Fatal(err)
				}

				if diff := cmp.Diff(test.wantAlert, results.Alert); diff != "" {
					t.Fatalf("Alert mismatch (-want +got):\n%s", diff)
				}

				if test.zeroResult {
					if len(results.Results) > 0 {
						t.Fatalf("Want zero result but got %d", len(results.Results))
					}
				} else {
					if len(results.Results) == 0 {
						t.Fatal("Want non-zero results but got 0")
					}
				}
				if test.exactMatchCount != 0 && results.MatchCount != test.exactMatchCount {
					t.Fatalf("Want exactly %d results but got %d", test.exactMatchCount, results.MatchCount)
				}
			})
		}
	})

	type counts struct {
		Repo    int
		Commit  int
		Content int
		Symbol  int
		File    int
	}

	countResults := func(results []*gqltestutil.AnyResult) counts {
		var count counts
		for _, res := range results {
			switch v := res.Inner.(type) {
			case gqltestutil.CommitResult:
				count.Commit += 1
			case gqltestutil.RepositoryResult:
				count.Repo += 1
			case gqltestutil.FileResult:
				count.Symbol += len(v.Symbols)
				for _, lm := range v.LineMatches {
					count.Content += len(lm.OffsetAndLengths)
				}
				if len(v.Symbols) == 0 && len(v.LineMatches) == 0 {
					count.File += 1
				}
			}
		}
		return count
	}

	t.Run("Predicate Queries", func(t *testing.T) {
		tests := []struct {
			name   string
			query  string
			counts counts
		}{
			{
				name:   `repo contains file`,
				query:  `repo:contains(file:go\.mod)`,
				counts: counts{Repo: 2},
			},
			{
				name:   `no repo contains file`,
				query:  `repo:contains(file:noexist.go)`,
				counts: counts{},
			},
			{
				name:   `no repo contains file with pattern`,
				query:  `repo:contains(file:noexist.go) test`,
				counts: counts{},
			},
			{
				name:   `repo contains content`,
				query:  `repo:contains(content:nextFileFirstLine)`,
				counts: counts{Repo: 1},
			},
			{
				name:   `repo contains content scoped predicate`,
				query:  `repo:contains.content(nextFileFirstLine)`,
				counts: counts{Repo: 1},
			},
			{
				name:   `or-expression on repo:contains`,
				query:  `repo:contains(content:does-not-exist-D2E1E74C7279) or repo:contains(content:nextFileFirstLine)`,
				counts: counts{Repo: 1},
			},
			{
				name:   `and-expression on repo:contains`,
				query:  `repo:contains(content:does-not-exist-D2E1E74C7279) and repo:contains(content:nextFileFirstLine)`,
				counts: counts{Repo: 0},
			},
			{
				name:   `repo contains file then search common`,
				query:  `repo:contains(file:go.mod) count:100 fmt`,
				counts: counts{Content: 61},
			},
			{
				name:   `repo contains file scoped predicate`,
				query:  `repo:contains.file(go.mod) count:100 fmt`,
				counts: counts{Content: 61},
			},
			{
				name:   `repo contains with matching repo filter`,
				query:  `repo:go-diff repo:contains(file:diff.proto)`,
				counts: counts{Repo: 1},
			},
			{
				name:   `repo contains with non-matching repo filter`,
				query:  `repo:nonexist repo:contains(file:diff.proto)`,
				counts: counts{Repo: 0},
			},
			{
				`repo contains respects parameters that affect repo search (fork)`,
				`repo:sgtest/mux fork:yes repo:contains.file(README)`,
				counts{Repo: 1},
			},
			{
				name:   `commit results without repo filter`,
				query:  `type:commit LSIF`,
				counts: counts{Commit: 9},
			},
			{
				name:   `commit results with repo filter`,
				query:  `repo:contains(file:diff.pb.go) type:commit LSIF`,
				counts: counts{Commit: 1},
			},
			{
				name:   `predicate logic does not conflict with unrecognized patterns`,
				query:  `repo:sg(test)`,
				counts: counts{Repo: 6},
			},
			{
				`repo has commit after`,
				`repo:go-diff repo:contains.commit.after(10 years ago)`,
				counts{Repo: 1},
			},
			{
				`repo has commit after no results`,
				`repo:go-diff repo:contains.commit.after(1 second ago)`,
				counts{Repo: 0},
			},
			{
				`unscoped repo has commit after no results`,
				`repo:contains.commit.after(1 second ago)`,
				counts{Repo: 0},
			},
		}

		for _, test := range tests {
			t.Run(test.name, func(t *testing.T) {
				results, err := client.SearchAll(test.query)
				if err != nil {
					t.Fatal(err)
				}

				count := countResults(results)
				if diff := cmp.Diff(test.counts, count); diff != "" {
					t.Fatalf("mismatch (-want +got):\n%s", diff)
				}
			})
		}
	})

	t.Run("Select Queries", func(t *testing.T) {
		tests := []struct {
			name   string
			query  string
			counts counts
		}{
			{
				name:   `select repo`,
				query:  `repo:go-diff patterntype:literal HunkNoChunksize select:repo`,
				counts: counts{Repo: 1},
			},
			{
				name:   `select repo, only repo`,
				query:  `repo:go-diff select:repo`,
				counts: counts{Repo: 1},
			},
			{
				name:   `select repo, only file`,
				query:  `file:go-diff.go select:repo`,
				counts: counts{Repo: 1},
			},
			{
				name:   `select file`,
				query:  `repo:go-diff patterntype:literal HunkNoChunksize select:file`,
				counts: counts{File: 1},
			},
			{
				name:   `or statement merges file`,
				query:  `repo:go-diff HunkNoChunksize or ParseHunksAndPrintHunks select:file`,
				counts: counts{File: 1},
			},
			{
				name:   `select file.directory`,
				query:  `repo:go-diff HunkNoChunksize or diffFile *os.File select:file.directory`,
				counts: counts{File: 2},
			},
			{
				name:   `select content`,
				query:  `repo:go-diff patterntype:literal HunkNoChunksize select:content`,
				counts: counts{Content: 1},
			},
			{
				name:   `no select`,
				query:  `repo:go-diff patterntype:literal HunkNoChunksize`,
				counts: counts{Content: 1},
			},
			{
				name:   `select commit, no results`,
				query:  `repo:go-diff patterntype:literal HunkNoChunksize select:commit`,
				counts: counts{},
			},
			{
				name:   `select symbol, no results`,
				query:  `repo:go-diff patterntype:literal HunkNoChunksize select:symbol`,
				counts: counts{},
			},
			{
				name:   `select symbol`,
				query:  `repo:go-diff patterntype:literal type:symbol HunkNoChunksize select:symbol`,
				counts: counts{Symbol: 1},
			},
			{
				name:   `search diffs with file start anchor`,
				query:  `repo:go-diff patterntype:literal type:diff file:^README.md$ installing`,
				counts: counts{Commit: 1},
			},
			{
				// https://github.com/sourcegraph/sourcegraph/issues/21031
				name:   `search diffs with file filter and time filters`,
				query:  `repo:go-diff patterntype:literal type:diff lang:go before:"May 10 2020" after:"May 5 2020" unquotedOrigName`,
				counts: counts{Commit: 1},
			},
			{
				name:   `select diffs with added lines containing pattern`,
				query:  `repo:go-diff patterntype:literal type:diff select:commit.diff.added sample_binary_inline`,
				counts: counts{Commit: 1},
			},
			{
				name:   `select diffs with removed lines containing pattern`,
				query:  `repo:go-diff patterntype:literal type:diff select:commit.diff.removed sample_binary_inline`,
				counts: counts{Commit: 0},
			},
			{
				name:   `file contains content predicate`, // equivalent to the `select file` test
				query:  `repo:go-diff patterntype:literal file:contains.content(HunkNoChunkSize)`,
				counts: counts{File: 1},
			},
			{
				name:   `file contains content predicate type diff`,
				query:  `type:diff repo:go-diff file:contains(after_success)`, // matches .travis.yml and its 10 commits
				counts: counts{Commit: 10},
			},
			{
				name:   `select repo on 'and' operation`,
				query:  `repo:^github\.com/sgtest/go-diff$ (func and main) select:repo`,
				counts: counts{Repo: 1},
			},
		}

		for _, test := range tests {
			t.Run(test.name, func(t *testing.T) {
				if test.name == "select symbol" {
					t.Skip("streaming not supported yet")
				}

				results, err := client.SearchAll(test.query)
				if err != nil {
					t.Fatal(err)
				}

				count := countResults(results)
				if diff := cmp.Diff(test.counts, count); diff != "" {
					t.Fatalf("mismatch (-want +got):\n%s", diff)
				}
			})
		}
	})

	t.Run("Exact Counts", func(t *testing.T) {
		tests := []struct {
			name   string
			query  string
			counts counts
		}{
			{
				name:   `no duplicate commits (#19460)`,
				query:  `repo:^github\.com/sgtest/sourcegraph-typescript$ type:commit author:felix count:1000 before:"march 25 2021"`,
				counts: counts{Commit: 317},
			},
		}

		for _, test := range tests {
			t.Run(test.name, func(t *testing.T) {
				results, err := client.SearchAll(test.query)
				if err != nil {
					t.Fatal(err)
				}

				count := countResults(results)
				if diff := cmp.Diff(test.counts, count); diff != "" {
					t.Fatalf("mismatch (-want +got):\n%s", diff)
				}
			})
		}
	})
}

// testSearchOther other contains search tests for parts of the GraphQL API
// which are not replicated in the streaming API (statistics and suggestions).
func testSearchOther(t *testing.T) {
	t.Run("Suggestions", func(t *testing.T) {
		repo1, err := client.Repository("github.com/sgtest/java-langserver")
		if err != nil {
			t.Fatal(err)
		}
		repo2, err := client.Repository("github.com/sgtest/jsonrpc2")
		if err != nil {
			t.Fatal(err)
		}

		scID1, err := client.CreateSearchContext(
			gqltestutil.CreateSearchContextInput{Name: "SuggestionSearchContext", Public: true},
			[]gqltestutil.SearchContextRepositoryRevisionsInput{
				{RepositoryID: repo1.ID, Revisions: []string{"HEAD"}},
				{RepositoryID: repo2.ID, Revisions: []string{"HEAD"}},
			})
		if err != nil {
			t.Fatal(err)
		}
		scID2, err := client.CreateSearchContext(gqltestutil.CreateSearchContextInput{Name: "EmptySearchContext", Public: true}, []gqltestutil.SearchContextRepositoryRevisionsInput{})
		if err != nil {
			t.Fatal(err)
		}
		defer func() {
			err = client.DeleteSearchContext(scID1)
			if err != nil {
				t.Fatal(err)
			}
			err = client.DeleteSearchContext(scID2)
			if err != nil {
				t.Fatal(err)
			}
		}()

		tests := []struct {
			query           string
			suggestionCount int
		}{
			{query: `repo:sourcegraph-typescript$ type:file file:deploy`, suggestionCount: 12},
			{query: `context:SuggestionSearchContext repo:`, suggestionCount: 3},
			{query: `context:Empty`, suggestionCount: 1},
		}

		for _, test := range tests {
			t.Run(test.query, func(t *testing.T) {
				results, err := client.SearchSuggestions(test.query)
				if err != nil {
					t.Fatal(err)
				}

				if len(results) != test.suggestionCount {
					t.Fatalf("expected %d results, but got %d", test.suggestionCount, len(results))
				}
			})
		}
	})

	t.Run("search statistics", func(t *testing.T) {
		err := client.OverwriteSettings(client.AuthenticatedUserID(), `{"experimentalFeatures":{"searchStats": true}}`)
		if err != nil {
			t.Fatal(err)
		}
		defer func() {
			err := client.OverwriteSettings(client.AuthenticatedUserID(), `{}`)
			if err != nil {
				t.Fatal(err)
			}
		}()

		var lastResult *gqltestutil.SearchStatsResult
		// Retry because the configuration update endpoint is eventually consistent
		err = gqltestutil.Retry(5*time.Second, func() error {
			// This is a substring that appears in the sgtest/go-diff repository.
			// It is OK if it starts to appear in other repositories, the test just
			// checks that it is found in at least 1 Go file.
			result, err := client.SearchStats("Incomplete-Lines")
			if err != nil {
				t.Fatal(err)
			}
			lastResult = result

			for _, lang := range result.Languages {
				if strings.EqualFold(lang.Name, "Go") {
					return nil
				}
			}

			return gqltestutil.ErrContinueRetry
		})
		if err != nil {
			t.Fatal(err, "lastResult:", lastResult)
		}
	})
}

func testSearchContextsCRUD(t *testing.T, client *gqltestutil.Client) {
	repo1, err := client.Repository("github.com/sgtest/java-langserver")
	require.NoError(t, err)
	repo2, err := client.Repository("github.com/sgtest/jsonrpc2")
	require.NoError(t, err)

	// Create a search context
	scName := "TestSearchContext" + strconv.Itoa(int(rand.Int31()))
	scID, err := client.CreateSearchContext(
		gqltestutil.CreateSearchContextInput{Name: scName, Description: "test description", Public: true},
		[]gqltestutil.SearchContextRepositoryRevisionsInput{
			{RepositoryID: repo1.ID, Revisions: []string{"HEAD"}},
			{RepositoryID: repo2.ID, Revisions: []string{"HEAD"}},
		},
	)
	require.NoError(t, err)
	defer client.DeleteSearchContext(scID)

	// Retrieve the search context and check that it has the correct fields
	resultContext, err := client.GetSearchContext(scID)
	require.NoError(t, err)
	require.Equal(t, scName, resultContext.Spec)
	require.Equal(t, "test description", resultContext.Description)

	// Update the search context
	updatedSCName := "TestUpdated" + strconv.Itoa(int(rand.Int31()))
	scID, err = client.UpdateSearchContext(
		scID,
		gqltestutil.UpdateSearchContextInput{
			Name:        updatedSCName,
			Public:      false,
			Description: "Updated description",
		},
		[]gqltestutil.SearchContextRepositoryRevisionsInput{
			{RepositoryID: repo1.ID, Revisions: []string{"HEAD"}},
		},
	)
	require.NoError(t, err)

	// Retrieve the search context and check that it has the updated fields
	resultContext, err = client.GetSearchContext(scID)
	require.NoError(t, err)
	require.Equal(t, updatedSCName, resultContext.Spec)
	require.Equal(t, "Updated description", resultContext.Description)

	// Delete the context
	err = client.DeleteSearchContext(scID)
	require.NoError(t, err)

	// Check that retrieving the deleted search context fails
	_, err = client.GetSearchContext(scID)
	require.Error(t, err)
}

func testListingSearchContexts(t *testing.T, client *gqltestutil.Client) {
	numSearchContexts := 10
	searchContextIDs := make([]string, 0, numSearchContexts)
	for i := 0; i < numSearchContexts; i++ {
		scID, err := client.CreateSearchContext(
			gqltestutil.CreateSearchContextInput{Name: fmt.Sprintf("SearchContext%d", i), Public: true},
			[]gqltestutil.SearchContextRepositoryRevisionsInput{},
		)
		require.NoError(t, err)
		searchContextIDs = append(searchContextIDs, scID)
	}
	defer func() {
		for i := 0; i < numSearchContexts; i++ {
			err := client.DeleteSearchContext(searchContextIDs[i])
			require.NoError(t, err)
		}
	}()

	orderBySpec := gqltestutil.SearchContextsOrderBySpec
	resultFirstPage, err := client.ListSearchContexts(gqltestutil.ListSearchContextsOptions{
		First:      5,
		OrderBy:    &orderBySpec,
		Descending: true,
	})
	require.NoError(t, err)
	if len(resultFirstPage.Nodes) != 5 {
		t.Fatalf("expected 5 search contexts, got %d", len(resultFirstPage.Nodes))
	}
	if resultFirstPage.Nodes[0].Spec != "SearchContext9" {
		t.Fatalf("expected first page first search context spec to be SearchContext9, got %s", resultFirstPage.Nodes[0].Spec)
	}

	resultSecondPage, err := client.ListSearchContexts(gqltestutil.ListSearchContextsOptions{
		First:      5,
		After:      resultFirstPage.PageInfo.EndCursor,
		OrderBy:    &orderBySpec,
		Descending: true,
	})
	require.NoError(t, err)
	if len(resultSecondPage.Nodes) != 5 {
		t.Fatalf("expected 5 search contexts, got %d", len(resultSecondPage.Nodes))
	}
	if resultSecondPage.Nodes[0].Spec != "SearchContext4" {
		t.Fatalf("expected second page search context spec to be SearchContext4, got %s", resultSecondPage.Nodes[0].Spec)
	}
}