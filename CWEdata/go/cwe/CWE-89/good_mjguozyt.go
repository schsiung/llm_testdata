@import url('font/opensans.css');

*,
*:before,
*:after {
    box-sizing: inherit;
    font-family: open_sans, sans-serif !important;
}

html {
    font-size: 16px;
    height: 100%;
    color: #f3f3f3;
}

body {
    height: 100%;
    box-sizing: border-box;
    background-color: #647087;
}

a {
    text-decoration: underline;
    color: #f3f3f3;
}

a:hover {
    text-decoration: none;
}

.page_login_header {
    height: 216px;
    background-color: #323741;
}

.page_login_logo {
    position: absolute;
    right: 70px;
    top: 90px;
    height: 180px;
    padding-right: 170px;
    padding-top: 70px;
    text-align: right;
    font-size: 48px;
    background: url("../images/logo.png") no-repeat right top;
}

.page_login_slogan {
    position: absolute;
    right: 240px;
    top: 220px;
    font-size: 20px;
    text-align: right;
    font-weight: bold;
    color: #323741;
}

.page_login_form {
    margin: 180px auto 0;
    max-width: 500px;
    text-align: center;
    padding: 16px;
}

.page_login_fieldelement {
    display: inline-block;
    width: 100%;
}

.page_login input {
    width: 100%;
    padding: 8px 5px;
    margin-top: 3px;
    text-align: center;
}

.page_login input[type='submit'] {
    display: inline-block;
    max-width: 300px;
    border: none;
    color: #f3f3f3;
    background-color: #25588f;
}

.page_login input[type="submit"]:hover {
    background-color: #225183;
}

.page_login_link {
    margin: 50px 0;
    display: block;
    margin: 50px 0;
}

.login_license {
    font-size: 11px;
}

.captcha_table {
    display: inline-block;
    margin: auto;
}

.captcha_table {
    display: inline-block;
    margin: auto;
}

@media (max-width: 550px) {
    .page_login_logo {
        background: none;
        padding-right: 0;
        right: 10px;
    }

    .page_login_slogan {
        position: relative;
        right: auto;
        text-align: center;
    }

    .page_login_form {
        margin: 90px auto 0;
    }
}

@media (max-width: 550px) and (max-height: 650px) {
    .page_login_header {
        height: 150px;
    }

    .page_login_logo {
        top: 30px;
    }

    .page_login_slogan {
        top: 150px;
    }
}