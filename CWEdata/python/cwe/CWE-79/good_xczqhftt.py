<div class="help">
  <div class="help-sidebar">
    <h3>{{ _('Help pages') }}</h3>
    <ul>
      {% for slug, title in HELP_PAGES|dictsort %}
        <li>
          <a href="{{ url_for('help_page', page_slug=slug) }}"{% if slug == page_slug %} class="selected"{% endif %}>
            {{ title }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="help-text">
  </div>
    {{ help_html }}
</div>