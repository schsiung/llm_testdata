<html>
  <head></head>
  <body>
    {% trans username=user.username %}Hey {{ username }},{% endtrans %}
    <p>{% trans %}A new access token, named "{{ name }}", has been created.{% endtrans %}</p>
    <p>
      {% trans %}If you did not make this change and believe your account has been compromised, please contact your administrator.{% endtrans %}
    </p>
  </body>
</html>