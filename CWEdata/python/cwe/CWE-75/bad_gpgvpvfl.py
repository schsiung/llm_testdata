<html>
  <head></head>
  <body>
    <p>
      <a>{% trans username=(user.fullname or user.username) %}Hey {{ username }},{% endtrans %}</a>
    </p>
    <p>{% trans %}You recently changed the password associated with your {{ header_name }} account.{% endtrans %}</p>
    <p>
      {% trans %}If you did not make this change and believe your account has been compromised, please contact your administrator.{% endtrans %}
    </p>
  </body>
</html>