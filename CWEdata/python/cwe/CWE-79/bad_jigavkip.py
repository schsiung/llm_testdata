{% import "_charts.html" as charts with context %}
{% import "_globals.html" as globals with context %}
{% set page_title = globals.all_pages[active_page].0 if not page_title else page_title %}
{% set short_title = page_title if not short_title else short_title %}
{% if not request.args.get('partial') %}
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="{{ static_url('favicon.ico') }}">
    <link rel="stylesheet" href="{{ static_url('app.css') }}">
    <title>{{ short_title }} - {{ ledger.options.title }}</title>
    <script type="module" src="{{ static_url('app.js') }}"></script>
  </head>
  <body>
    <header>
      <svg class="fava-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 27">
        <path fill="#FFF" d="M14 17.854c0 1.537-.498 2.86-1.493 3.97-.995 1.11-2.288 1.796-3.88 2.057v2.64c0 .14-.044.26-.134.35-.09.09-.205.14-.345.14H6.122c-.13 0-.242-.04-.337-.14-.095-.09-.143-.21-.143-.34v-2.64c-.66-.09-1.298-.24-1.913-.46-.62-.22-1.13-.44-1.53-.67-.4-.22-.77-.46-1.11-.72-.34-.26-.58-.45-.7-.57-.13-.12-.21-.21-.26-.27-.17-.21-.18-.42-.03-.62l1.54-2.03c.07-.1.18-.16.34-.18.15-.02.27.03.36.14l.03.03c1.13 1 2.34 1.63 3.64 1.89.37.08.74.12 1.11.12.81 0 1.52-.21 2.14-.64.61-.43.92-1.04.92-1.83 0-.28-.08-.55-.23-.8-.15-.25-.32-.46-.51-.63-.19-.17-.48-.36-.88-.56-.4-.21-.73-.37-.99-.48-.26-.12-.66-.28-1.2-.49l-.93-.38c-.23-.09-.54-.22-.93-.4-.39-.17-.7-.33-.94-.46s-.52-.31-.85-.53c-.33-.22-.6-.43-.8-.64-.21-.202-.42-.45-.65-.74-.23-.28-.41-.572-.53-.87-.13-.295-.23-.63-.32-1-.06-.4-.1-.79-.1-1.2 0-1.39.49-2.6 1.47-3.65S4.07 3.5 5.64 3.2V.48c0-.13.05-.243.143-.34.097-.09.21-.14.34-.14H8.15c.14 0 .254.045.344.136.09.09.135.206.135.346v2.652c.57.06 1.12.176 1.65.346.53.17.97.34 1.3.505.33.166.65.354.95.565.3.21.49.357.58.437.09.08.16.15.22.21.17.182.19.373.07.574l-1.21 2.2c-.08.15-.2.23-.35.24-.14.04-.28 0-.41-.1-.03-.03-.1-.09-.22-.18s-.31-.22-.59-.4c-.28-.17-.57-.33-.88-.48-.31-.14-.69-.27-1.12-.39-.44-.11-.86-.17-1.28-.17-.95 0-1.73.22-2.33.65-.6.44-.9.99-.9 1.68 0 .26.04.5.13.72.08.22.23.43.44.63s.41.36.59.5.464.29.84.47c.374.18.677.31.907.41.23.09.58.23 1.05.41.53.2.94.36 1.22.48s.66.29 1.14.53c.48.24.86.45 1.13.64.28.19.59.44.93.76.35.31.61.63.8.95.19.33.345.71.475 1.16.13.44.192.92.192 1.42z"/>
        <path fill="#A6C4DA" d="M10 17.854c0 1.537.498 2.86 1.493 3.97.995 1.11 2.288 1.796 3.88 2.057v2.64c0 .14.044.26.134.35.09.09.205.14.345.14h2.026c.13 0 .242-.04.337-.14.095-.09.143-.21.143-.34v-2.64c.66-.09 1.298-.24 1.913-.46.62-.22 1.13-.44 1.53-.67.4-.22.77-.46 1.11-.72.34-.26.58-.45.7-.57.13-.12.21-.21.26-.27.17-.21.18-.42.03-.62l-1.54-2.03c-.07-.1-.18-.16-.34-.18-.15-.02-.27.03-.36.14l-.03.03c-1.13 1-2.34 1.63-3.64 1.89-.37.08-.74.12-1.11.12-.81 0-1.52-.21-2.14-.64-.61-.43-.92-1.04-.92-1.83 0-.28.08-.55.23-.8.15-.25.32-.46.51-.63.19-.17.48-.36.88-.56.4-.21.73-.37.99-.48.26-.12.66-.28 1.2-.49l.93-.38c.23-.09.54-.22.93-.4.39-.17.7-.33.94-.46s.52-.31.85-.53c.33-.22.6-.43.8-.64.21-.202.42-.45.65-.74.23-.28.41-.572.53-.87.13-.295.23-.63.32-1s.13-.762.13-1.174c0-1.382-.49-2.6-1.47-3.642s-2.27-1.74-3.84-2.04V.49c0-.13-.05-.245-.14-.34-.14-.1-.25-.15-.38-.15h-2.03c-.14 0-.254.045-.344.136-.09.09-.135.206-.135.346v2.652c-.57.06-1.122.176-1.657.346-.535.17-.97.34-1.306.505-.335.166-.652.354-.953.565-.3.21-.495.357-.585.437-.09.08-.166.15-.226.21-.17.182-.195.373-.075.574l1.215 2.2c.08.15.195.23.345.24.14.04.28 0 .41-.1.03-.03.1-.09.22-.18s.31-.22.59-.4c.27-.17.56-.33.87-.48.31-.14.68-.27 1.12-.39.43-.11.86-.17 1.28-.17.95 0 1.72.22 2.32.65.6.44.9.99.9 1.68 0 .26-.04.5-.13.72-.09.22-.24.43-.45.63-.21.2-.41.36-.6.5s-.47.29-.84.47c-.38.18-.68.31-.91.41-.23.09-.58.23-1.05.41-.53.2-.94.36-1.22.48s-.66.29-1.14.53c-.48.24-.86.45-1.14.64s-.58.44-.93.76c-.34.31-.61.63-.79.95-.19.33-.35.71-.48 1.16-.13.44-.2.92-.2 1.42z"/>
      </svg>
      <h1>
        {{ ledger.options.title or 'fava' }}{{ ' ▾' if config['LEDGERS']|length > 1 else '' }}<strong class="page-title">{{ page_title }}</strong>
        <button type=button id="reload-page" class="reload-page hidden" data-keyboard-shortcut="r">&#8635;</button>
        {% if config['LEDGERS']|length > 1 %}
        <div class="beancount-files">
          <ul>
            {% for file_slug, file_ledger in config['LEDGERS'].items() %}
            <li>
              <a{% if file_slug == g.beancount_file_slug %} class="active"{% endif %} href="{{ url_for('report', report_name='income_statement', bfile=file_slug) }}" data-remote>{{ file_ledger.options.title or 'fava' }}</a>
            </li>
            {% endfor %}
          </ul>
        </div>{% endif %}
      </h1>
      <svelte-component type="filter-form"></svelte-component>
    </header>
    <button id="aside-button" class="aside-button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="32px" width="32px" version="1.0" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></svg>
    </button>
    <aside>{% include "_aside.html" %}</aside>
    <article>
      {%- endif %}
      <svelte-component type="charts"></svelte-component>
      {% block content %}
      {% if content %}
      {{ content }}
      {% else %}
      {% include active_page + '.html' %}
      {% endif %}
      {% endblock %}
      <script type="application/json" id="chart-data">{{ charts.chart_data|tojson }}</script>
      <script type="application/json" id="page-title">{{ {
        'documentTitle': '{} - {}'.format(short_title, ledger.options.title),
        'pageTitle': page_title,
      }|tojson }}</script>
      <script type="application/json" id="ledger-data">{{ {
        'accounts': ledger.attributes.accounts,
        'account_details': ledger.accounts,
        'baseURL': url_for('index'),
        'currencies': ledger.attributes.currencies,
        'errors': ledger.errors|length,
        'favaOptions': ledger.fava_options,
        'incognito': config.get('INCOGNITO', False),
        'have_excel': config.get('HAVE_EXCEL', False),
        'links': ledger.attributes.links,
        'options': ledger.options,
        'payees': ledger.attributes.payees,
        'precisions': ledger.format_decimal.precisions,
        'tags': ledger.attributes.tags,
        'years': ledger.attributes.years,
      }|tojson }}</script>
      {%- if not request.args.get('partial') %}
    </article>
    <svelte-component type="modals"></svelte-component>
    <script type="application/json" id="translations">{{ translations()|tojson }}</script>
  </body>
</html>
{%- endif %}