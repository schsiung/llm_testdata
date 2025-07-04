<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>OctoPrint Login</title>

    <link rel="shortcut icon" href="{{ url_for('static', filename='img/tentacle-32x32.png') }}">
    <link rel="mask-icon" href="{{ url_for('static', filename='img/mask.svg') }}" color="#56BE37">
    <link rel="mask-icon-theme" href="{{ url_for('static', filename='img/mask-theme.svg') }}" color="#56BE37">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ url_for('static', filename='img/apple-touch-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ url_for('static', filename='img/apple-touch-icon-144x144.png') }}">

    <!-- le CSS -->

    <link rel="stylesheet" href="{{ url_for("static", filename="css/bootstrap.min.css") }}">
    <link rel="stylesheet" href="{{ url_for("static", filename="css/bootstrap-responsive.min.css") }}">
    <link rel="stylesheet" href="{{ url_for("static", filename="vendor/font-awesome-5.15.1/css/all.min.css") }}">
    <link rel="stylesheet" href="{{ url_for("static", filename="vendor/font-awesome-5.15.1/css/v4-shims.css") }}">
    <link rel="stylesheet" href="{{ url_for("static", filename="css/login.css") }}">

    {% for url in theming %}
        <link rel="stylesheet" href="{{ url }}">
    {% endfor %}

    <!-- le javascript -->

    <script>
        var BASE_URL = "{{ url_for('index') }}";
        var REDIRECT_URL = "{{ redirect_url|e }}";
        var USER_ID = "{{ user_id|e }}";
    </script>
    <script src="{{ url_for("static", filename="js/lib/jquery/jquery.min.js") }}"></script>
    <script src="{{ url_for("static", filename="js/lib/sockjs.min.js") }}"></script>
    <script src="{{ url_for("static", filename="js/lib/bootstrap/bootstrap.js") }}"></script>
    <script src="{{ url_for("static", filename="js/lib/lodash.min.js") }}"></script>

    {% assets "js_client" %}
        <script type="text/javascript" src="{{ ASSET_URL }}"></script>
    {% endassets %}

    <script src="{{ url_for("static", filename="js/login/login.js") }}"></script>
</head>
<body>
    <noscript>
        <style type="text/css">
            #login,
            #login-overlay {
                display:none;
            }
        </style>
        <div id="noscript">
            <div class="wrapper">
                <div class="outer">
                    <div class="inner">
                        <div class="content">
                            <h1 class="text-error">{{ _('You don\'t seem to have JavaScript enabled') }}</h1>
                            {{ _('OctoPrint\'s UI requires JavaScript to work. Please enable JavaScript and reload.') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </noscript>

    <div id="login" class="container">
        <form class="form-signin">
            <h2 class="form-signin-heading" data-test-id="login-title">{{ _('Please log in') }}</h2>

            <div id="login-error-rate" class="alert alert-error" data-test-id="login-error-rate">{{ _('You have made too many failed login attempts. Please try again later.') }}</div>
            <div id="login-error-credentials" class="alert alert-error" data-test-id="login-error">{{ _('Incorrect username or password. Hint: Both are case sensitive!') }}</div>
            <div id="login-error-rate" class="alert alert-error" data-test-id="login-error-rate">{{ _('You have made too many failed login attempts. Please try again later.') }}</div>
            <div id="login-offline" class="alert alert-error">{{ _('Server is currently offline.') }} <a id="login-reconnect" href="javascript:void(0)">{{ _('Reconnect...') }}</a></div>

            {% if user_id %}<p>
                {{ _('The following account is required:') }} {{ user_id|e }}
            </p>{% elif logged_in %}<p>
                {{ _('An account with the following permissions is required:') }} {{ permission_names|join(", ") }}
            </p>{% endif %}

            <input type="text" id="login-user" data-test-id="login-username" class="input-block-level" placeholder="{{ _('Username')|edq }}" {% if user_id %}value="{{ user_id|edq }}" disabled{% endif %} autofocus autocapitalize="none">
            <input type="password" id="login-password" data-test-id="login-password" class="input-block-level" placeholder="{{ _('Password')|edq }}">
            <span class="pull-right"><small><a href="https://faq.octoprint.org/forgotten-password" id="login-forgotpassword" target="_blank" tabindex="-1">{{ _('Forgot password?') }}</a></small></span>
            <label class="checkbox">
                <input type="checkbox" id="login-remember" data-test-id="login-remember-me"> {{ _('Remember me') }}
            </label>
            <button class="btn btn-block btn-large btn-primary" id="login-button" data-test-id="login-submit" type="submit">{{ _('Log in') }}</button>
        </form>
    </div>

    <div id="login-overlay">
        <div class="background"></div>
        <div class="wrapper">
            <div class="outer">
                <div class="inner">
                    <div class="content">
                        <i class="fas fa-spinner fa-spin fa-4x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>