<header>
   {% if locales|length > 1 %}
    <div class="language-select">
        {{ _('Language:') }}
        <ul role="listbox" aria-activedescendant="{{ env.pywb_lang | default(default_locale) }}" aria-labelledby="{{ _('Language select') }}">
        {% for locale in locales %}
          <li role="option" id="{{ locale }}"><a href="{{ switch_locale(locale) }}">{{ locale }}</a></li>
        {% endfor %}
        </ul>
    </div>
    {% endif %}
</header>

<header>
   {% if locales|length > 1 %}
    <div class="language-select">
        {{ _('Language:') }}
        <ul role="listbox" aria-activedescendant="{{ env.pywb_lang | default(default_locale) }}" aria-labelledby="{{ _('Language select') }}">
        {% for locale in locales %}
          <li role="option" id="{{ locale }}"><a href="{{ switch_locale(locale) }}">{{ locale }}</a></li>
        {% endfor %}
        </ul>
    </div>
    {% endif %}
</header>
