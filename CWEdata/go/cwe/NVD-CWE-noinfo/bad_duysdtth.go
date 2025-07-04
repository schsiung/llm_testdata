// Copyright 2014 beego Author. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package web

import (
	"strings"
	"testing"
	"time"

	"github.com/beego/beego/v2/server/web/context"
)

type testInfo struct {
	pattern          string
	requestUrl       string
	params           map[string]string
	shouldMatchOrNot bool
}

var routers []testInfo

func matchTestInfo(pattern, url string, params map[string]string) testInfo {
	return testInfo{
		pattern:          pattern,
		requestUrl:       url,
		params:           params,
		shouldMatchOrNot: true,
	}
}

func notMatchTestInfo(pattern, url string) testInfo {
	return testInfo{
		pattern:          pattern,
		requestUrl:       url,
		params:           nil,
		shouldMatchOrNot: false,
	}
}

func init() {
	routers = make([]testInfo, 0, 128)
	// match example
	routers = append(routers, matchTestInfo("/topic/?:auth:int", "/topic", nil))
	routers = append(routers, matchTestInfo("/topic/?:auth:int", "/topic/123", map[string]string{":auth": "123"}))
	routers = append(routers, matchTestInfo("/topic/:id/?:auth", "/topic/1", map[string]string{":id": "1"}))
	routers = append(routers, matchTestInfo("/topic/:id/?:auth", "/topic/1/2", map[string]string{":id": "1", ":auth": "2"}))
	routers = append(routers, matchTestInfo("/topic/:id/?:auth:int", "/topic/1", map[string]string{":id": "1"}))
	routers = append(routers, matchTestInfo("/topic/:id/?:auth:int", "/topic/1/123", map[string]string{":id": "1", ":auth": "123"}))
	routers = append(routers, matchTestInfo("/:id", "/123", map[string]string{":id": "123"}))
	routers = append(routers, matchTestInfo("/hello/?:id", "/hello", map[string]string{":id": ""}))
	routers = append(routers, matchTestInfo("/", "/", nil))
	routers = append(routers, matchTestInfo("/customer/login", "/customer/login", nil))
	routers = append(routers, matchTestInfo("/customer/login", "/customer/login.json", map[string]string{":ext": "json"}))
	routers = append(routers, matchTestInfo("/*", "/http://customer/123/", map[string]string{":splat": "http://customer/123/"}))
	routers = append(routers, matchTestInfo("/*", "/customer/2009/12/11", map[string]string{":splat": "customer/2009/12/11"}))
	routers = append(routers, matchTestInfo("/aa/*/bb", "/aa/2009/bb", map[string]string{":splat": "2009"}))
	routers = append(routers, matchTestInfo("/cc/*/dd", "/cc/2009/11/dd", map[string]string{":splat": "2009/11"}))
	routers = append(routers, matchTestInfo("/cc/:id/*", "/cc/2009/11/dd", map[string]string{":id": "2009", ":splat": "11/dd"}))
	routers = append(routers, matchTestInfo("/ee/:year/*/ff", "/ee/2009/11/ff", map[string]string{":year": "2009", ":splat": "11"}))
	routers = append(routers, matchTestInfo("/thumbnail/:size/uploads/*", "/thumbnail/100x100/uploads/items/2014/04/20/dPRCdChkUd651t1Hvs18.jpg", map[string]string{":size": "100x100", ":splat": "items/2014/04/20/dPRCdChkUd651t1Hvs18.jpg"}))
	routers = append(routers, matchTestInfo("/*.*", "/nice/api.json", map[string]string{":path": "nice/api", ":ext": "json"}))
	routers = append(routers, matchTestInfo("/:name/*.*", "/nice/api.json", map[string]string{":name": "nice", ":path": "api", ":ext": "json"}))
	routers = append(routers, matchTestInfo("/:name/test/*.*", "/nice/test/api.json", map[string]string{":name": "nice", ":path": "api", ":ext": "json"}))
	routers = append(routers, matchTestInfo("/dl/:width:int/:height:int/*.*", "/dl/48/48/05ac66d9bda00a3acf948c43e306fc9a.jpg", map[string]string{":width": "48", ":height": "48", ":ext": "jpg", ":path": "05ac66d9bda00a3acf948c43e306fc9a"}))
	routers = append(routers, matchTestInfo("/v1/shop/:id:int", "/v1/shop/123", map[string]string{":id": "123"}))
	routers = append(routers, matchTestInfo("/v1/shop/:id\\((a|b|c)\\)", "/v1/shop/123(a)", map[string]string{":id": "123"}))
	routers = append(routers, matchTestInfo("/v1/shop/:id\\((a|b|c)\\)", "/v1/shop/123(b)", map[string]string{":id": "123"}))
	routers = append(routers, matchTestInfo("/v1/shop/:id\\((a|b|c)\\)", "/v1/shop/123(c)", map[string]string{":id": "123"}))
	routers = append(routers, matchTestInfo("/:year:int/:month:int/:id/:endid", "/1111/111/aaa/aaa", map[string]string{":year": "1111", ":month": "111", ":id": "aaa", ":endid": "aaa"}))
	routers = append(routers, matchTestInfo("/v1/shop/:id/:name", "/v1/shop/123/nike", map[string]string{":id": "123", ":name": "nike"}))
	routers = append(routers, matchTestInfo("/v1/shop/:id/account", "/v1/shop/123/account", map[string]string{":id": "123"}))
	routers = append(routers, matchTestInfo("/v1/shop/:name:string", "/v1/shop/nike", map[string]string{":name": "nike"}))
	routers = append(routers, matchTestInfo("/v1/shop/:id([0-9]+)", "/v1/shop//123", map[string]string{":id": "123"}))
	routers = append(routers, matchTestInfo("/v1/shop/:id([0-9]+)_:name", "/v1/shop/123_nike", map[string]string{":id": "123", ":name": "nike"}))
	routers = append(routers, matchTestInfo("/v1/shop/:id(.+)_cms.html", "/v1/shop/123_cms.html", map[string]string{":id": "123"}))
	routers = append(routers, matchTestInfo("/v1/shop/cms_:id(.+)_:page(.+).html", "/v1/shop/cms_123_1.html", map[string]string{":id": "123", ":page": "1"}))
	routers = append(routers, matchTestInfo("/v1/:v/cms/aaa_:id(.+)_:page(.+).html", "/v1/2/cms/aaa_123_1.html", map[string]string{":v": "2", ":id": "123", ":page": "1"}))
	routers = append(routers, matchTestInfo("/v1/:v/cms_:id(.+)_:page(.+).html", "/v1/2/cms_123_1.html", map[string]string{":v": "2", ":id": "123", ":page": "1"}))
	routers = append(routers, matchTestInfo("/v1/:v(.+)_cms/ttt_:id(.+)_:page(.+).html", "/v1/2_cms/ttt_123_1.html", map[string]string{":v": "2", ":id": "123", ":page": "1"}))
	routers = append(routers, matchTestInfo("/api/projects/:pid/members/?:mid", "/api/projects/1/members", map[string]string{":pid": "1"}))
	routers = append(routers, matchTestInfo("/api/projects/:pid/members/?:mid", "/api/projects/1/members/2", map[string]string{":pid": "1", ":mid": "2"}))
	routers = append(routers, matchTestInfo("/?:year/?:month/?:day", "/2020/11/10", map[string]string{":year": "2020", ":month": "11", ":day": "10"}))
	routers = append(routers, matchTestInfo("/?:year/?:month/?:day", "/2020/11", map[string]string{":year": "2020", ":month": "11"}))
	routers = append(routers, matchTestInfo("/?:year", "/2020", map[string]string{":year": "2020"}))
	routers = append(routers, matchTestInfo("/?:year([0-9]+)/?:month([0-9]+)/mid/?:day([0-9]+)/?:hour([0-9]+)", "/2020/11/mid/10/24", map[string]string{":year": "2020", ":month": "11", ":day": "10", ":hour": "24"}))
	routers = append(routers, matchTestInfo("/?:year/?:month/mid/?:day/?:hour", "/2020/mid/10", map[string]string{":year": "2020", ":day": "10"}))
	routers = append(routers, matchTestInfo("/?:year/?:month/mid/?:day/?:hour", "/2020/11/mid", map[string]string{":year": "2020", ":month": "11"}))
	routers = append(routers, matchTestInfo("/?:year/?:month/mid/?:day/?:hour", "/mid/10/24", map[string]string{":day": "10", ":hour": "24"}))
	routers = append(routers, matchTestInfo("/?:year([0-9]+)/:month([0-9]+)/mid/:day([0-9]+)/?:hour([0-9]+)", "/2020/11/mid/10/24", map[string]string{":year": "2020", ":month": "11", ":day": "10", ":hour": "24"}))
	routers = append(routers, matchTestInfo("/?:year/:month/mid/:day/?:hour", "/11/mid/10/24", map[string]string{":month": "11", ":day": "10"}))
	routers = append(routers, matchTestInfo("/?:year/:month/mid/:day/?:hour", "/2020/11/mid/10", map[string]string{":year": "2020", ":month": "11", ":day": "10"}))
	routers = append(routers, matchTestInfo("/?:year/:month/mid/:day/?:hour", "/11/mid/10", map[string]string{":month": "11", ":day": "10"}))
	// not match example

	// https://github.com/beego/beego/v2/issues/3865
	routers = append(routers, notMatchTestInfo("/read_:id:int\\.htm", "/read_222htm"))
	routers = append(routers, notMatchTestInfo("/read_:id:int\\.htm", "/read_222_htm"))
	routers = append(routers, notMatchTestInfo("/read_:id:int\\.htm", " /read_262shtm"))

	// test .html, .json not suffix
	const abcHtml = "/suffix/abc.html"
	routers = append(routers, notMatchTestInfo(abcHtml, "/suffix.html/abc"))
	routers = append(routers, matchTestInfo("/suffix/abc", abcHtml, nil))
	routers = append(routers, matchTestInfo("/suffix/*", abcHtml, nil))
	routers = append(routers, notMatchTestInfo("/suffix/*", "/suffix.html/a"))
	const abcSuffix = "/abc/suffix/*"
	routers = append(routers, notMatchTestInfo(abcSuffix, "/abc/suffix.html/a"))
	routers = append(routers, matchTestInfo(abcSuffix, "/abc/suffix/a", nil))
	routers = append(routers, notMatchTestInfo(abcSuffix, "/abc.j/suffix/a"))

}

func TestTreeRouters(t *testing.T) {
	for _, r := range routers {

		shouldMatch := r.shouldMatchOrNot
		tr := NewTree()
		tr.AddRouter(r.pattern, "astaxie")
		ctx := context.NewContext()
		obj := tr.Match(r.requestUrl, ctx)
		if !shouldMatch {
			if obj != nil {
				t.Fatal("pattern:", r.pattern, ", should not match", r.requestUrl)
			} else {
				continue
			}
		}
		if obj == nil || obj.(string) != "astaxie" {
			t.Fatal("pattern:", r.pattern+", can't match obj, Expect ", r.requestUrl)
		}
		if r.params != nil {
			for k, v := range r.params {
				if vv := ctx.Input.Param(k); vv != v {
					t.Fatal("The Rule: " + r.pattern + "\nThe RequestURL:" + r.requestUrl + "\nThe Key is " + k + ", The Value should be: " + v + ", but get: " + vv)
				} else if vv == "" && v != "" {
					t.Fatal(r.pattern + "    " + r.requestUrl + " get param empty:" + k)
				}
			}
		}
	}
	time.Sleep(time.Second)
}

func TestStaticPath(t *testing.T) {
	tr := NewTree()
	tr.AddRouter("/topic/:id", "wildcard")
	tr.AddRouter("/topic", "static")
	ctx := context.NewContext()
	obj := tr.Match("/topic", ctx)
	if obj == nil || obj.(string) != "static" {
		t.Fatal("/topic is  a static route")
	}
	obj = tr.Match("/topic/1", ctx)
	if obj == nil || obj.(string) != "wildcard" {
		t.Fatal("/topic/1 is a wildcard route")
	}
}

func TestAddTree(t *testing.T) {
	tr := NewTree()
	tr.AddRouter("/shop/:id/account", "astaxie")
	tr.AddRouter("/shop/:sd/ttt_:id(.+)_:page(.+).html", "astaxie")
	t1 := NewTree()
	t1.AddTree("/v1/zl", tr)
	ctx := context.NewContext()
	obj := t1.Match("/v1/zl/shop/123/account", ctx)
	if obj == nil || obj.(string) != "astaxie" {
		t.Fatal("/v1/zl/shop/:id/account can't get obj ")
	}
	if ctx.Input.ParamsLen() == 0 {
		t.Fatal("get param error")
	}
	if ctx.Input.Param(":id") != "123" {
		t.Fatal("get :id param error")
	}
	ctx.Input.Reset(ctx)
	obj = t1.Match("/v1/zl/shop/123/ttt_1_12.html", ctx)
	if obj == nil || obj.(string) != "astaxie" {
		t.Fatal("/v1/zl//shop/:sd/ttt_:id(.+)_:page(.+).html can't get obj ")
	}
	if ctx.Input.ParamsLen() == 0 {
		t.Fatal("get param error")
	}
	if ctx.Input.Param(":sd") != "123" || ctx.Input.Param(":id") != "1" || ctx.Input.Param(":page") != "12" {
		t.Fatal("get :sd :id :page param error")
	}

	t2 := NewTree()
	t2.AddTree("/v1/:shopid", tr)
	ctx.Input.Reset(ctx)
	obj = t2.Match("/v1/zl/shop/123/account", ctx)
	if obj == nil || obj.(string) != "astaxie" {
		t.Fatal("/v1/:shopid/shop/:id/account can't get obj ")
	}
	if ctx.Input.ParamsLen() == 0 {
		t.Fatal("get param error")
	}
	if ctx.Input.Param(":id") != "123" || ctx.Input.Param(":shopid") != "zl" {
		t.Fatal("get :id :shopid param error")
	}
	ctx.Input.Reset(ctx)
	obj = t2.Match("/v1/zl/shop/123/ttt_1_12.html", ctx)
	if obj == nil || obj.(string) != "astaxie" {
		t.Fatal("/v1/:shopid/shop/:sd/ttt_:id(.+)_:page(.+).html can't get obj ")
	}
	if ctx.Input.ParamsLen() == 0 {
		t.Fatal("get :shopid param error")
	}
	if ctx.Input.Param(":sd") != "123" || ctx.Input.Param(":id") != "1" || ctx.Input.Param(":page") != "12" || ctx.Input.Param(":shopid") != "zl" {
		t.Fatal("get :sd :id :page :shopid param error")
	}
}

func TestAddTree2(t *testing.T) {
	tr := NewTree()
	tr.AddRouter("/shop/:id/account", "astaxie")
	tr.AddRouter("/shop/:sd/ttt_:id(.+)_:page(.+).html", "astaxie")
	t3 := NewTree()
	t3.AddTree("/:version(v1|v2)/:prefix", tr)
	ctx := context.NewContext()
	obj := t3.Match("/v1/zl/shop/123/account", ctx)
	if obj == nil || obj.(string) != "astaxie" {
		t.Fatal("/:version(v1|v2)/:prefix/shop/:id/account can't get obj ")
	}
	if ctx.Input.ParamsLen() == 0 {
		t.Fatal("get param error")
	}
	if ctx.Input.Param(":id") != "123" || ctx.Input.Param(":prefix") != "zl" || ctx.Input.Param(":version") != "v1" {
		t.Fatal("get :id :prefix :version param error")
	}
}

func TestAddTree3(t *testing.T) {
	tr := NewTree()
	tr.AddRouter("/create", "astaxie")
	tr.AddRouter("/shop/:sd/account", "astaxie")
	t3 := NewTree()
	t3.AddTree("/table/:num", tr)
	ctx := context.NewContext()
	obj := t3.Match("/table/123/shop/123/account", ctx)
	if obj == nil || obj.(string) != "astaxie" {
		t.Fatal("/table/:num/shop/:sd/account can't get obj ")
	}
	if ctx.Input.ParamsLen() == 0 {
		t.Fatal("get param error")
	}
	if ctx.Input.Param(":num") != "123" || ctx.Input.Param(":sd") != "123" {
		t.Fatal("get :num :sd param error")
	}
	ctx.Input.Reset(ctx)
	obj = t3.Match("/table/123/create", ctx)
	if obj == nil || obj.(string) != "astaxie" {
		t.Fatal("/table/:num/create can't get obj ")
	}
}

func TestAddTree4(t *testing.T) {
	tr := NewTree()
	tr.AddRouter("/create", "astaxie")
	tr.AddRouter("/shop/:sd/:account", "astaxie")
	t4 := NewTree()
	t4.AddTree("/:info:int/:num/:id", tr)
	ctx := context.NewContext()
	obj := t4.Match("/12/123/456/shop/123/account", ctx)
	if obj == nil || obj.(string) != "astaxie" {
		t.Fatal("/:info:int/:num/:id/shop/:sd/:account can't get obj ")
	}
	if ctx.Input.ParamsLen() == 0 {
		t.Fatal("get param error")
	}
	if ctx.Input.Param(":info") != "12" || ctx.Input.Param(":num") != "123" ||
		ctx.Input.Param(":id") != "456" || ctx.Input.Param(":sd") != "123" ||
		ctx.Input.Param(":account") != "account" {
		t.Fatal("get :info :num :id :sd :account param error")
	}
	ctx.Input.Reset(ctx)
	obj = t4.Match("/12/123/456/create", ctx)
	if obj == nil || obj.(string) != "astaxie" {
		t.Fatal("/:info:int/:num/:id/create can't get obj ")
	}
}

// Test for issue #1595
func TestAddTree5(t *testing.T) {
	tr := NewTree()
	tr.AddRouter("/v1/shop/:id", "shopdetail")
	tr.AddRouter("/v1/shop/", "shophome")
	ctx := context.NewContext()
	obj := tr.Match("/v1/shop/", ctx)
	if obj == nil || obj.(string) != "shophome" {
		t.Fatal("url /v1/shop/ need match router /v1/shop/ ")
	}
}
func TestSplitPath(t *testing.T) {
	a := splitPath("")
	if len(a) != 0 {
		t.Fatal("/ should retrun []")
	}
	a = splitPath("/")
	if len(a) != 0 {
		t.Fatal("/ should retrun []")
	}
	a = splitPath("/admin")
	if len(a) != 1 || a[0] != "admin" {
		t.Fatal("/admin should retrun [admin]")
	}
	a = splitPath("/admin/")
	if len(a) != 1 || a[0] != "admin" {
		t.Fatal("/admin/ should retrun [admin]")
	}
	a = splitPath("/admin/users")
	if len(a) != 2 || a[0] != "admin" || a[1] != "users" {
		t.Fatal("/admin should retrun [admin users]")
	}
	a = splitPath("/admin/:id:int")
	if len(a) != 2 || a[0] != "admin" || a[1] != ":id:int" {
		t.Fatal("/admin should retrun [admin :id:int]")
	}
}

func TestSplitSegment(t *testing.T) {

	items := map[string]struct {
		isReg  bool
		params []string
		regStr string
	}{
		"admin":                      {false, nil, ""},
		"*":                          {true, []string{":splat"}, ""},
		"*.*":                        {true, []string{".", ":path", ":ext"}, ""},
		":id":                        {true, []string{":id"}, ""},
		"?:id":                       {true, []string{":", ":id"}, ""},
		":id:int":                    {true, []string{":id"}, "([0-9]+)"},
		":name:string":               {true, []string{":name"}, `([\w]+)`},
		":id([0-9]+)":                {true, []string{":id"}, `([0-9]+)`},
		":id([0-9]+)_:name":          {true, []string{":id", ":name"}, `([0-9]+)_(.+)`},
		":id(.+)_cms.html":           {true, []string{":id"}, `(.+)_cms.html`},
		":id(.+)_cms\\.html":         {true, []string{":id"}, `(.+)_cms\.html`},
		"cms_:id(.+)_:page(.+).html": {true, []string{":id", ":page"}, `cms_(.+)_(.+).html`},
		`:app(a|b|c)`:                {true, []string{":app"}, `(a|b|c)`},
		`:app\((a|b|c)\)`:            {true, []string{":app"}, `(.+)\((a|b|c)\)`},
	}

	for pattern, v := range items {
		b, w, r := splitSegment(pattern)
		if b != v.isReg || r != v.regStr || strings.Join(w, ",") != strings.Join(v.params, ",") {
			t.Fatalf("%s should return %t,%s,%q, got %t,%s,%q", pattern, v.isReg, v.params, v.regStr, b, w, r)
		}
	}
}