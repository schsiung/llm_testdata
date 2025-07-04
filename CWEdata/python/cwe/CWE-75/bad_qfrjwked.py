<html>
  <head></head>
  <body>
    <p>
      <a>{% trans username=(user.fullname or user.username) %}Hey {{ username }},{% endtrans %}</a>
    </p>
    <p>
      {% trans %}You are receiving this email to notify you about your backups. The
      following repositories are inactive for some time. We invite you to have a look
      at your last backup schedule.{% endtrans %}
    </p>
    <ul>
      {% for r in repos %}
        <li>
          <a>{{ r.display_name }}</a>
        </li>
      {% endfor %}
    </ul>
    <p>{% trans %}If you don't want to be notify about this. You need to review your user preferences.{% endtrans %}</p>
  </body>
</html>