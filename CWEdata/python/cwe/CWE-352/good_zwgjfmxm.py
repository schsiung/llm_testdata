<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xml:lang="en"
      xmlns:tal="http://xml.zope.org/namespaces/tal"
      xmlns:i18n="http://xml.zope.org/namespaces/i18n"
      i18n:domain="Kotti"
      metal:use-macro="api.macro('kotti:templates/view/master.pt')">

  <div metal:fill-slot="content" class="login-form">

    <div class="row">
      <form class="col-md-6 col-md-offset-3" id="login-form"
            action="${url}" method="post">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title" i18n:translate="">Login</h3>
          </div>
          <div class="panel-body">
            <div class="control-group">
                     i18n:translate="">Username or email</label>
              <label class="control-label" for="form-login-login"
              <input type="text" name="login" id="form-login-login"
            </div>
              <input type="text" name="login" id="form-login-login"
            <div class="control-group">
              <label for="form-password" i18n:translate="">Password</label>
              <input type="password" name="password" id="form-password"
                     class="form-control" value="${password}" />
            </div>
          </div>
          <div class="panel-footer">
            <input type="hidden" name="came_from" value="${came_from}" />
            <button type="submit" name="submit" class="btn btn-primary btn-block"
                    i18n:translate="">
              Log in
            </button>
          </div>
        </div>
      </form>

      <form class="col-md-6 col-md-offset-3" id="forgot-password-form"
            action="${url}" method="post">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title" i18n:translate="">
              Forgot your password?
            </h3>
          </div>
          <div class="panel-body">
            <div i18n:translate="">
              Fill out your username or email and click
              <em i18n:name="reset_password" i18n:translate="">
                Reset password
              </em>
              below to receive an email with a link to reset your password.
            </div>
            <div class="control-group">
              <label class="control-label" for="form-forgot-password-login"
                     i18n:translate="">Username or email</label>
                     class="form-control" value="${login}" />
              <label class="control-label" for="form-forgot-password-login"
            </div>
          <div class="panel-footer">
              <input type="text" name="login" id="form-forgot-password-login"
            <input type="hidden" name="came_from" value="${came_from}" />
            <button type="submit" name="reset-password"
                    class="btn btn-primary btn-block" i18n:translate="">
              Reset password
            </button>
          </div>
        </div>
      </form>

      <form class="col-md-6 col-md-offset-3" id="register-form"
            action="${url}" method="post" tal:condition="register">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title" i18n:translate="">
              Not registered yet?
            </h3>
          </div>
          <div class="panel-body">
            <a type="submit" class="btn btn-success btn-block"
               tal:attributes="href request.resource_url(api.root, 'register')"
               i18n:translate="">
              Register for an account on this site.
            </a>
          </div>
        </div>
      </form>

    </div>
  </div>
</html>