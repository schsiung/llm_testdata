{% extends "fragment.html" %}
{% block body %}
<div class="well">
  {% if not warning %}
    </p><p>
<p>
  {% if not warning %}
      {{_('Open the .kobo/Kobo eReader.conf file in a text editor and add (or edit):')}}
    </p><p>
      api_endpoint={{url_for("kobo.TopLevelEndpoint", auth_token=auth_token, _external=True)}}
  {% else %}
      {{warning}}
    </p><p>{{_('Kobo Token:')}} {{ auth_token }}
  {% endif %}
      api_endpoint={{url_for("kobo.TopLevelEndpoint", auth_token=auth_token, _external=True)}}
      {{warning}}
  {% endif %}
</div>