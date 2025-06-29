// Copyright 2014 The Gogs Authors. All rights reserved.
// Copyright 2020 The Gitea Authors. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

package context

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"html"
	"html/template"
	"io"
	"net"
	"net/http"
	"net/url"
	"path"
	"strconv"
	"strings"
	"time"

	"code.gitea.io/gitea/models/unit"
	user_model "code.gitea.io/gitea/models/user"
	"code.gitea.io/gitea/modules/base"
	mc "code.gitea.io/gitea/modules/cache"
	"code.gitea.io/gitea/modules/json"
	"code.gitea.io/gitea/modules/log"
	"code.gitea.io/gitea/modules/setting"
	"code.gitea.io/gitea/modules/templates"
	"code.gitea.io/gitea/modules/translation"
	"code.gitea.io/gitea/modules/web/middleware"
	"code.gitea.io/gitea/services/auth"

	"gitea.com/go-chi/cache"
	"gitea.com/go-chi/session"
	chi "github.com/go-chi/chi/v5"
	"github.com/unknwon/com"
	"github.com/unknwon/i18n"
	"github.com/unrolled/render"
	"golang.org/x/crypto/pbkdf2"
)

// Render represents a template render
type Render interface {
	TemplateLookup(tmpl string) *template.Template
	HTML(w io.Writer, status int, name string, binding interface{}, htmlOpt ...render.HTMLOptions) error
}

// Context represents context of a request.
type Context struct {
	Resp     ResponseWriter
	Req      *http.Request
	Data     map[string]interface{} // data used by MVC templates
	PageData map[string]interface{} // data used by JavaScript modules in one page, it's `window.config.pageData`
	Render   Render
	translation.Locale
	Cache   cache.Cache
	csrf    CSRF
	Flash   *middleware.Flash
	Session session.Store

	Link        string // current request URL
	EscapedLink string
	User        *user_model.User
	IsSigned    bool
	IsBasicAuth bool

	Repo *Repository
	Org  *Organization
}

// TrHTMLEscapeArgs runs Tr but pre-escapes all arguments with html.EscapeString.
// This is useful if the locale message is intended to only produce HTML content.
func (ctx *Context) TrHTMLEscapeArgs(msg string, args ...string) string {
	trArgs := make([]interface{}, len(args))
	for i, arg := range args {
		trArgs[i] = html.EscapeString(arg)
	}
	return ctx.Tr(msg, trArgs...)
}

// GetData returns the data
func (ctx *Context) GetData() map[string]interface{} {
	return ctx.Data
}

// IsUserSiteAdmin returns true if current user is a site admin
func (ctx *Context) IsUserSiteAdmin() bool {
	return ctx.IsSigned && ctx.User.IsAdmin
}

// IsUserRepoOwner returns true if current user owns current repo
func (ctx *Context) IsUserRepoOwner() bool {
	return ctx.Repo.IsOwner()
}

// IsUserRepoAdmin returns true if current user is admin in current repo
func (ctx *Context) IsUserRepoAdmin() bool {
	return ctx.Repo.IsAdmin()
}

// IsUserRepoWriter returns true if current user has write privilege in current repo
func (ctx *Context) IsUserRepoWriter(unitTypes []unit.Type) bool {
	for _, unitType := range unitTypes {
		if ctx.Repo.CanWrite(unitType) {
			return true
		}
	}

	return false
}

// IsUserRepoReaderSpecific returns true if current user can read current repo's specific part
func (ctx *Context) IsUserRepoReaderSpecific(unitType unit.Type) bool {
	return ctx.Repo.CanRead(unitType)
}

// IsUserRepoReaderAny returns true if current user can read any part of current repo
func (ctx *Context) IsUserRepoReaderAny() bool {
	return ctx.Repo.HasAccess()
}

// RedirectToUser redirect to a differently-named user
func RedirectToUser(ctx *Context, userName string, redirectUserID int64) {
	user, err := user_model.GetUserByID(redirectUserID)
	if err != nil {
		ctx.ServerError("GetUserByID", err)
		return
	}

	redirectPath := strings.Replace(
		ctx.Req.URL.EscapedPath(),
		url.PathEscape(userName),
		url.PathEscape(user.Name),
		1,
	)
	if ctx.Req.URL.RawQuery != "" {
		redirectPath += "?" + ctx.Req.URL.RawQuery
	}
	ctx.Redirect(path.Join(setting.AppSubURL, redirectPath))
}

// HasAPIError returns true if error occurs in form validation.
func (ctx *Context) HasAPIError() bool {
	hasErr, ok := ctx.Data["HasError"]
	if !ok {
		return false
	}
	return hasErr.(bool)
}

// GetErrMsg returns error message
func (ctx *Context) GetErrMsg() string {
	return ctx.Data["ErrorMsg"].(string)
}

// HasError returns true if error occurs in form validation.
// Attention: this function changes ctx.Data and ctx.Flash
func (ctx *Context) HasError() bool {
	hasErr, ok := ctx.Data["HasError"]
	if !ok {
		return false
	}
	ctx.Flash.ErrorMsg = ctx.Data["ErrorMsg"].(string)
	ctx.Data["Flash"] = ctx.Flash
	return hasErr.(bool)
}

// HasValue returns true if value of given name exists.
func (ctx *Context) HasValue(name string) bool {
	_, ok := ctx.Data[name]
	return ok
}

// RedirectToFirst redirects to first not empty URL
func (ctx *Context) RedirectToFirst(location ...string) {
	for _, loc := range location {
		if len(loc) == 0 {
			continue
		}

		// Unfortunately browsers consider a redirect Location with preceding "//" and "/\" as meaning redirect to "http(s)://REST_OF_PATH"
		// Therefore we should ignore these redirect locations to prevent open redirects
		if len(loc) > 1 && loc[0] == '/' && (loc[1] == '/' || loc[1] == '\\') {
			continue
		}

		u, err := url.Parse(loc)
		if err != nil || ((u.Scheme != "" || u.Host != "") && !strings.HasPrefix(strings.ToLower(loc), strings.ToLower(setting.AppURL))) {
			continue
		}

		ctx.Redirect(loc)
		return
	}

	ctx.Redirect(setting.AppSubURL + "/")
}

// HTML calls Context.HTML and renders the template to HTTP response
func (ctx *Context) HTML(status int, name base.TplName) {
	log.Debug("Template: %s", name)
	tmplStartTime := time.Now()
	ctx.Data["TmplLoadTimes"] = func() string {
		return strconv.FormatInt(time.Since(tmplStartTime).Nanoseconds()/1e6, 10) + "ms"
	}
	if err := ctx.Render.HTML(ctx.Resp, status, string(name), ctx.Data); err != nil {
		if status == http.StatusInternalServerError && name == base.TplName("status/500") {
			ctx.PlainText(http.StatusInternalServerError, "Unable to find status/500 template")
			return
		}
		ctx.ServerError("Render failed", err)
	}
}

// RenderToString renders the template content to a string
func (ctx *Context) RenderToString(name base.TplName, data map[string]interface{}) (string, error) {
	var buf strings.Builder
	err := ctx.Render.HTML(&buf, 200, string(name), data)
	return buf.String(), err
}

// RenderWithErr used for page has form validation but need to prompt error to users.
func (ctx *Context) RenderWithErr(msg string, tpl base.TplName, form interface{}) {
	if form != nil {
		middleware.AssignForm(form, ctx.Data)
	}
	ctx.Flash.ErrorMsg = msg
	ctx.Data["Flash"] = ctx.Flash
	ctx.HTML(http.StatusOK, tpl)
}

// NotFound displays a 404 (Not Found) page and prints the given error, if any.
func (ctx *Context) NotFound(logMsg string, logErr error) {
	ctx.notFoundInternal(logMsg, logErr)
}

func (ctx *Context) notFoundInternal(logMsg string, logErr error) {
	if logErr != nil {
		log.ErrorWithSkip(2, "%s: %v", logMsg, logErr)
		if !setting.IsProd {
			ctx.Data["ErrorMsg"] = logErr
		}
	}

	// response simple message if Accept isn't text/html
	showHTML := false
	for _, part := range ctx.Req.Header["Accept"] {
		if strings.Contains(part, "text/html") {
			showHTML = true
			break
		}
	}

	if !showHTML {
		ctx.PlainText(http.StatusNotFound, "Not found.\n")
		return
	}

	ctx.Data["IsRepo"] = ctx.Repo.Repository != nil
	ctx.Data["Title"] = "Page Not Found"
	ctx.HTML(http.StatusNotFound, base.TplName("status/404"))
}

// ServerError displays a 500 (Internal Server Error) page and prints the given error, if any.
func (ctx *Context) ServerError(logMsg string, logErr error) {
	ctx.serverErrorInternal(logMsg, logErr)
}

func (ctx *Context) serverErrorInternal(logMsg string, logErr error) {
	if logErr != nil {
		log.ErrorWithSkip(2, "%s: %v", logMsg, logErr)
		if _, ok := logErr.(*net.OpError); ok || errors.Is(logErr, &net.OpError{}) {
			// This is an error within the underlying connection
			// and further rendering will not work so just return
			return
		}

		if !setting.IsProd {
			ctx.Data["ErrorMsg"] = logErr
		}
	}

	ctx.Data["Title"] = "Internal Server Error"
	ctx.HTML(http.StatusInternalServerError, base.TplName("status/500"))
}

// NotFoundOrServerError use error check function to determine if the error
// is about not found. It responds with 404 status code for not found error,
// or error context description for logging purpose of 500 server error.
func (ctx *Context) NotFoundOrServerError(logMsg string, errCheck func(error) bool, err error) {
	if errCheck(err) {
		ctx.notFoundInternal(logMsg, err)
		return
	}
	ctx.serverErrorInternal(logMsg, err)
}

// PlainTextBytes renders bytes as plain text
func (ctx *Context) PlainTextBytes(status int, bs []byte) {
	if (status/100 == 4) || (status/100 == 5) {
		log.Error("PlainTextBytes: %s", string(bs))
	}
	ctx.Resp.WriteHeader(status)
	ctx.Resp.Header().Set("Content-Type", "text/plain;charset=utf-8")
	ctx.Resp.Header().Set("X-Content-Type-Options", "nosniff")
	if _, err := ctx.Resp.Write(bs); err != nil {
		log.Error("Write bytes failed: %v", err)
	}
}

// PlainText renders content as plain text
func (ctx *Context) PlainText(status int, text string) {
	ctx.PlainTextBytes(status, []byte(text))
}

// RespHeader returns the response header
func (ctx *Context) RespHeader() http.Header {
	return ctx.Resp.Header()
}

// ServeContent serves content to http request
func (ctx *Context) ServeContent(name string, r io.ReadSeeker, params ...interface{}) {
	modTime := time.Now()
	for _, p := range params {
		switch v := p.(type) {
		case time.Time:
			modTime = v
		}
	}
	ctx.Resp.Header().Set("Content-Description", "File Transfer")
	ctx.Resp.Header().Set("Content-Type", "application/octet-stream")
	ctx.Resp.Header().Set("Content-Disposition", "attachment; filename="+name)
	ctx.Resp.Header().Set("Content-Transfer-Encoding", "binary")
	ctx.Resp.Header().Set("Expires", "0")
	ctx.Resp.Header().Set("Cache-Control", "must-revalidate")
	ctx.Resp.Header().Set("Pragma", "public")
	ctx.Resp.Header().Set("Access-Control-Expose-Headers", "Content-Disposition")
	http.ServeContent(ctx.Resp, ctx.Req, name, modTime, r)
}

// ServeFile serves given file to response.
func (ctx *Context) ServeFile(file string, names ...string) {
	var name string
	if len(names) > 0 {
		name = names[0]
	} else {
		name = path.Base(file)
	}
	ctx.Resp.Header().Set("Content-Description", "File Transfer")
	ctx.Resp.Header().Set("Content-Type", "application/octet-stream")
	ctx.Resp.Header().Set("Content-Disposition", "attachment; filename="+name)
	ctx.Resp.Header().Set("Content-Transfer-Encoding", "binary")
	ctx.Resp.Header().Set("Expires", "0")
	ctx.Resp.Header().Set("Cache-Control", "must-revalidate")
	ctx.Resp.Header().Set("Pragma", "public")
	http.ServeFile(ctx.Resp, ctx.Req, file)
}

// ServeStream serves file via io stream
func (ctx *Context) ServeStream(rd io.Reader, name string) {
	ctx.Resp.Header().Set("Content-Description", "File Transfer")
	ctx.Resp.Header().Set("Content-Type", "application/octet-stream")
	ctx.Resp.Header().Set("Content-Disposition", "attachment; filename="+name)
	ctx.Resp.Header().Set("Content-Transfer-Encoding", "binary")
	ctx.Resp.Header().Set("Expires", "0")
	ctx.Resp.Header().Set("Cache-Control", "must-revalidate")
	ctx.Resp.Header().Set("Pragma", "public")
	_, err := io.Copy(ctx.Resp, rd)
	if err != nil {
		ctx.ServerError("Download file failed", err)
	}
}

// Error returned an error to web browser
func (ctx *Context) Error(status int, contents ...string) {
	var v = http.StatusText(status)
	if len(contents) > 0 {
		v = contents[0]
	}
	http.Error(ctx.Resp, v, status)
}

// JSON render content as JSON
func (ctx *Context) JSON(status int, content interface{}) {
	ctx.Resp.Header().Set("Content-Type", "application/json;charset=utf-8")
	ctx.Resp.WriteHeader(status)
	if err := json.NewEncoder(ctx.Resp).Encode(content); err != nil {
		ctx.ServerError("Render JSON failed", err)
	}
}

// Redirect redirects the request
func (ctx *Context) Redirect(location string, status ...int) {
	code := http.StatusFound
	if len(status) == 1 {
		code = status[0]
	}

	http.Redirect(ctx.Resp, ctx.Req, location, code)
}

// SetCookie convenience function to set most cookies consistently
// CSRF and a few others are the exception here
func (ctx *Context) SetCookie(name, value string, expiry int) {
	middleware.SetCookie(ctx.Resp, name, value,
		expiry,
		setting.AppSubURL,
		setting.SessionConfig.Domain,
		setting.SessionConfig.Secure,
		true,
		middleware.SameSite(setting.SessionConfig.SameSite))
}

// DeleteCookie convenience function to delete most cookies consistently
// CSRF and a few others are the exception here
func (ctx *Context) DeleteCookie(name string) {
	middleware.SetCookie(ctx.Resp, name, "",
		-1,
		setting.AppSubURL,
		setting.SessionConfig.Domain,
		setting.SessionConfig.Secure,
		true,
		middleware.SameSite(setting.SessionConfig.SameSite))
}

// GetCookie returns given cookie value from request header.
func (ctx *Context) GetCookie(name string) string {
	return middleware.GetCookie(ctx.Req, name)
}

// GetSuperSecureCookie returns given cookie value from request header with secret string.
func (ctx *Context) GetSuperSecureCookie(secret, name string) (string, bool) {
	val := ctx.GetCookie(name)
	return ctx.CookieDecrypt(secret, val)
}

// CookieDecrypt returns given value from with secret string.
func (ctx *Context) CookieDecrypt(secret, val string) (string, bool) {
	if val == "" {
		return "", false
	}

	text, err := hex.DecodeString(val)
	if err != nil {
		return "", false
	}

	key := pbkdf2.Key([]byte(secret), []byte(secret), 1000, 16, sha256.New)
	text, err = com.AESGCMDecrypt(key, text)
	return string(text), err == nil
}

// SetSuperSecureCookie sets given cookie value to response header with secret string.
func (ctx *Context) SetSuperSecureCookie(secret, name, value string, expiry int) {
	text := ctx.CookieEncrypt(secret, value)

	ctx.SetCookie(name, text, expiry)
}

// CookieEncrypt encrypts a given value using the provided secret
func (ctx *Context) CookieEncrypt(secret, value string) string {
	key := pbkdf2.Key([]byte(secret), []byte(secret), 1000, 16, sha256.New)
	text, err := com.AESGCMEncrypt(key, []byte(value))
	if err != nil {
		panic("error encrypting cookie: " + err.Error())
	}

	return hex.EncodeToString(text)
}

// GetCookieInt returns cookie result in int type.
func (ctx *Context) GetCookieInt(name string) int {
	r, _ := strconv.Atoi(ctx.GetCookie(name))
	return r
}

// GetCookieInt64 returns cookie result in int64 type.
func (ctx *Context) GetCookieInt64(name string) int64 {
	r, _ := strconv.ParseInt(ctx.GetCookie(name), 10, 64)
	return r
}

// GetCookieFloat64 returns cookie result in float64 type.
func (ctx *Context) GetCookieFloat64(name string) float64 {
	v, _ := strconv.ParseFloat(ctx.GetCookie(name), 64)
	return v
}

// RemoteAddr returns the client machie ip address
func (ctx *Context) RemoteAddr() string {
	return ctx.Req.RemoteAddr
}

// Params returns the param on route
func (ctx *Context) Params(p string) string {
	s, _ := url.PathUnescape(chi.URLParam(ctx.Req, strings.TrimPrefix(p, ":")))
	return s
}

// ParamsInt64 returns the param on route as int64
func (ctx *Context) ParamsInt64(p string) int64 {
	v, _ := strconv.ParseInt(ctx.Params(p), 10, 64)
	return v
}

// SetParams set params into routes
func (ctx *Context) SetParams(k, v string) {
	chiCtx := chi.RouteContext(ctx)
	chiCtx.URLParams.Add(strings.TrimPrefix(k, ":"), url.PathEscape(v))
}

// Write writes data to web browser
func (ctx *Context) Write(bs []byte) (int, error) {
	return ctx.Resp.Write(bs)
}

// Written returns true if there are something sent to web browser
func (ctx *Context) Written() bool {
	return ctx.Resp.Status() > 0
}

// Status writes status code
func (ctx *Context) Status(status int) {
	ctx.Resp.WriteHeader(status)
}

// Deadline is part of the interface for context.Context and we pass this to the request context
func (ctx *Context) Deadline() (deadline time.Time, ok bool) {
	return ctx.Req.Context().Deadline()
}

// Done is part of the interface for context.Context and we pass this to the request context
func (ctx *Context) Done() <-chan struct{} {
	return ctx.Req.Context().Done()
}

// Err is part of the interface for context.Context and we pass this to the request context
func (ctx *Context) Err() error {
	return ctx.Req.Context().Err()
}

// Value is part of the interface for context.Context and we pass this to the request context
func (ctx *Context) Value(key interface{}) interface{} {
	return ctx.Req.Context().Value(key)
}

// Handler represents a custom handler
type Handler func(*Context)

type contextKeyType struct{}

var contextKey interface{} = contextKeyType{}

// WithContext set up install context in request
func WithContext(req *http.Request, ctx *Context) *http.Request {
	return req.WithContext(context.WithValue(req.Context(), contextKey, ctx))
}

// GetContext retrieves install context from request
func GetContext(req *http.Request) *Context {
	return req.Context().Value(contextKey).(*Context)
}

// GetContextUser returns context user
func GetContextUser(req *http.Request) *user_model.User {
	if apiContext, ok := req.Context().Value(apiContextKey).(*APIContext); ok {
		return apiContext.User
	}
	if ctx, ok := req.Context().Value(contextKey).(*Context); ok {
		return ctx.User
	}
	return nil
}

func getCsrfOpts() CsrfOptions {
	return CsrfOptions{
		Secret:         setting.SecretKey,
		Cookie:         setting.CSRFCookieName,
		SetCookie:      true,
		Secure:         setting.SessionConfig.Secure,
		CookieHTTPOnly: setting.CSRFCookieHTTPOnly,
		Header:         "X-Csrf-Token",
		CookieDomain:   setting.SessionConfig.Domain,
		CookiePath:     setting.SessionConfig.CookiePath,
		SameSite:       setting.SessionConfig.SameSite,
	}
}

// Auth converts auth.Auth as a middleware
func Auth(authMethod auth.Method) func(*Context) {
	return func(ctx *Context) {
		ctx.User = authMethod.Verify(ctx.Req, ctx.Resp, ctx, ctx.Session)
		if ctx.User != nil {
			if ctx.Locale.Language() != ctx.User.Language {
				ctx.Locale = middleware.Locale(ctx.Resp, ctx.Req)
			}
			ctx.IsBasicAuth = ctx.Data["AuthedMethod"].(string) == auth.BasicMethodName
			ctx.IsSigned = true
			ctx.Data["IsSigned"] = ctx.IsSigned
			ctx.Data["SignedUser"] = ctx.User
			ctx.Data["SignedUserID"] = ctx.User.ID
			ctx.Data["SignedUserName"] = ctx.User.Name
			ctx.Data["IsAdmin"] = ctx.User.IsAdmin
		} else {
			ctx.Data["SignedUserID"] = int64(0)
			ctx.Data["SignedUserName"] = ""

			// ensure the session uid is deleted
			_ = ctx.Session.Delete("uid")
		}
	}
}

// Contexter initializes a classic context for a request.
func Contexter() func(next http.Handler) http.Handler {
	var rnd = templates.HTMLRenderer()
	var csrfOpts = getCsrfOpts()

	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
			var locale = middleware.Locale(resp, req)
			var startTime = time.Now()
			var link = setting.AppSubURL + strings.TrimSuffix(req.URL.EscapedPath(), "/")

			var ctx = Context{
				Resp:    NewResponse(resp),
				Cache:   mc.GetCache(),
				Locale:  locale,
				Link:    link,
				Render:  rnd,
				Session: session.GetSession(req),
				Repo: &Repository{
					PullRequest: &PullRequest{},
				},
				Org: &Organization{},
				Data: map[string]interface{}{
					"CurrentURL":    setting.AppSubURL + req.URL.RequestURI(),
					"PageStartTime": startTime,
					"Link":          link,
					"RunModeIsProd": setting.IsProd,
				},
			}
			// PageData is passed by reference, and it will be rendered to `window.config.pageData` in `head.tmpl` for JavaScript modules
			ctx.PageData = map[string]interface{}{}
			ctx.Data["PageData"] = ctx.PageData

			ctx.Req = WithContext(req, &ctx)
			ctx.csrf = Csrfer(csrfOpts, &ctx)

			// Get flash.
			flashCookie := ctx.GetCookie("macaron_flash")
			vals, _ := url.ParseQuery(flashCookie)
			if len(vals) > 0 {
				f := &middleware.Flash{
					DataStore:  &ctx,
					Values:     vals,
					ErrorMsg:   vals.Get("error"),
					SuccessMsg: vals.Get("success"),
					InfoMsg:    vals.Get("info"),
					WarningMsg: vals.Get("warning"),
				}
				ctx.Data["Flash"] = f
			}

			f := &middleware.Flash{
				DataStore:  &ctx,
				Values:     url.Values{},
				ErrorMsg:   "",
				WarningMsg: "",
				InfoMsg:    "",
				SuccessMsg: "",
			}
			ctx.Resp.Before(func(resp ResponseWriter) {
				if flash := f.Encode(); len(flash) > 0 {
					middleware.SetCookie(resp, "macaron_flash", flash, 0,
						setting.SessionConfig.CookiePath,
						middleware.Domain(setting.SessionConfig.Domain),
						middleware.HTTPOnly(true),
						middleware.Secure(setting.SessionConfig.Secure),
						middleware.SameSite(setting.SessionConfig.SameSite),
					)
					return
				}

				middleware.SetCookie(ctx.Resp, "macaron_flash", "", -1,
					setting.SessionConfig.CookiePath,
					middleware.Domain(setting.SessionConfig.Domain),
					middleware.HTTPOnly(true),
					middleware.Secure(setting.SessionConfig.Secure),
					middleware.SameSite(setting.SessionConfig.SameSite),
				)
			})

			ctx.Flash = f

			// If request sends files, parse them here otherwise the Query() can't be parsed and the CsrfToken will be invalid.
			if ctx.Req.Method == "POST" && strings.Contains(ctx.Req.Header.Get("Content-Type"), "multipart/form-data") {
				if err := ctx.Req.ParseMultipartForm(setting.Attachment.MaxSize << 20); err != nil && !strings.Contains(err.Error(), "EOF") { // 32MB max size
					ctx.ServerError("ParseMultipartForm", err)
					return
				}
			}

			ctx.Resp.Header().Set(`X-Frame-Options`, setting.CORSConfig.XFrameOptions)

			ctx.Data["CsrfToken"] = html.EscapeString(ctx.csrf.GetToken())
			ctx.Data["CsrfTokenHtml"] = template.HTML(`<input type="hidden" name="_csrf" value="` + ctx.Data["CsrfToken"].(string) + `">`)

			// FIXME: do we really always need these setting? There should be someway to have to avoid having to always set these
			ctx.Data["IsLandingPageHome"] = setting.LandingPageURL == setting.LandingPageHome
			ctx.Data["IsLandingPageExplore"] = setting.LandingPageURL == setting.LandingPageExplore
			ctx.Data["IsLandingPageOrganizations"] = setting.LandingPageURL == setting.LandingPageOrganizations

			ctx.Data["ShowRegistrationButton"] = setting.Service.ShowRegistrationButton
			ctx.Data["ShowMilestonesDashboardPage"] = setting.Service.ShowMilestonesDashboardPage
			ctx.Data["ShowFooterBranding"] = setting.ShowFooterBranding
			ctx.Data["ShowFooterVersion"] = setting.ShowFooterVersion

			ctx.Data["EnableSwagger"] = setting.API.EnableSwagger
			ctx.Data["EnableOpenIDSignIn"] = setting.Service.EnableOpenIDSignIn
			ctx.Data["DisableMigrations"] = setting.Repository.DisableMigrations
			ctx.Data["DisableStars"] = setting.Repository.DisableStars

			ctx.Data["ManifestData"] = setting.ManifestData

			ctx.Data["UnitWikiGlobalDisabled"] = unit.TypeWiki.UnitGlobalDisabled()
			ctx.Data["UnitIssuesGlobalDisabled"] = unit.TypeIssues.UnitGlobalDisabled()
			ctx.Data["UnitPullsGlobalDisabled"] = unit.TypePullRequests.UnitGlobalDisabled()
			ctx.Data["UnitProjectsGlobalDisabled"] = unit.TypeProjects.UnitGlobalDisabled()

			ctx.Data["i18n"] = locale
			ctx.Data["Tr"] = i18n.Tr
			ctx.Data["Lang"] = locale.Language()
			ctx.Data["AllLangs"] = translation.AllLangs()
			for _, lang := range translation.AllLangs() {
				if lang.Lang == locale.Language() {
					ctx.Data["LangName"] = lang.Name
					break
				}
			}

			next.ServeHTTP(ctx.Resp, ctx.Req)

			// Handle adding signedUserName to the context for the AccessLogger
			usernameInterface := ctx.Data["SignedUserName"]
			identityPtrInterface := ctx.Req.Context().Value(signedUserNameStringPointerKey)
			if usernameInterface != nil && identityPtrInterface != nil {
				username := usernameInterface.(string)
				identityPtr := identityPtrInterface.(*string)
				if identityPtr != nil && username != "" {
					*identityPtr = username
				}
			}
		})
	}
}