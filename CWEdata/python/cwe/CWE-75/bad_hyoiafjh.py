<html>
  <head></head>
  <body>
    <p>
      <a>{% trans username=(user.fullname or user.username) %}Hey {{ username }},{% endtrans %}</a>
    </p>
    <p>
      {% trans %}To help us make sure it's really you, here's the verification code you'll need to log in:{% endtrans %}
    </p>
    <p>
      <strong>{{ code }}</strong>
    </p>
    <p>
      {% trans %}If this wasn't you logging in, and you use a password to log in, please reset your password.{% endtrans %}
    </p>
    <p>
      {% trans %}This code will expire in 1 hour. Once the code expires, you will need to request a new verification code by going through the login procedure again.{% endtrans %}
    </p>
  </body>
</html>