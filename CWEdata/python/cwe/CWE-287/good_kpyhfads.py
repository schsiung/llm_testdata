{#

  This is a self-contained modal for adding (and editing) account details.
  This is a single form which handles profiles, routes and basic source
  configuration.

  The basic section of the form captures name, e-mail and password.

  If the user allows auto-detection of settings, the Thunderbird ISPDB
  will be queried and possibly other heuristics employed to figure out
  correct connection settings. If successful, the route and source forms
  will be filled in automatically (and skipped on Next).

  Manual settings for routes and sources are as expected; local or
  remote options, SMTP, IMAP, POP3, SSL, ports, hostnames, auth, ...

  The security section of the form allows the user to choose which PGP key
  to associate with this account or create a new one if he has none, which
  will take place in a long-running background process.

  The user can at any time skip forward or backwards in the form by
  clicking on the section headlines, which are kept visible for that
  purpose.

#}{% set new_src_id = result.new_src_id %}

  <script>
    var _fpa = (function() {
      var pf = '#form-profile-editor ';
      var new_src_id = '{{ new_src_id }}';
      var old = {username: ''};
      return {
        pre_submit: function(elem) {
        },
        display: function(elem, disp) {
          if (disp) { elem.show() } else { elem.hide() };
        },
        validate: function() {
          var basic_problems = 0;
          if ($(pf + 'input[name=name]').val() == "" ||
              $(pf + 'input[name=email]').val().indexOf('@') < 0) {
            basic_problems += 1;
            $(pf + 'input[name=name], ' + pf + 'input[name=email]'
              ).on('change', _fpa.validate);
          }
          // FIXME: Validate other things too, improve e-mail validation
          //_fpa.display($('.fpa-basics-ok'), basic_problems < 1);
          _fpa.display($('.fpa-basics-bad'), basic_problems > 0);
          _fpa.display($('#fpa-submit'),
                       (basic_problems < 1) &&
                       (!$(pf + '.fpa-autoconfig').is(':checked')));
        },
        next: function(show) {
          $(pf + 'div.section').slideUp();
          $(pf + 'div.' + show).slideDown().find(':tabbable').eq(0).focus();
          $(pf + '.fpa-login-failed').hide();
          $(pf + '.fpa-detection-failed').hide();
          // Any navigation disables the auto-detection
          $(pf + '.fpa-autoconfig').prop('checked', false);
          _fpa.validate();
          return false;
        },
        more: function(show) {
          $(pf + '.' + show + '-show').hide();
          $(pf + '.' + show).slideDown();
          return false;
        },
        select: function(sel, cls) {
          var val = $(sel).val();
          $(pf + '.' + cls).hide();
          if (val) {
            $(pf + '.' + cls + '.any').show();
            if (val[0] != '!') $(pf + '.' + cls + '.' + val).show();
          }
          else {
            $(pf + '.' + cls + '.undefined').show();
          }
        },
        mark_copied: function(elem, what) {
          var $elem = $(elem);
          if ($elem.val() == old[what]) {
            $elem.parent().find('.fpa-' + what + '-copied').show();
          }
          else {
            $elem.parent().find('.fpa-' + what + '-copied').hide();
          }
        },
        copy_basic: function(what) {
          var value = $(pf + '.fpa-basic-' + what).val();
          var old_old = old[what];
          old[what] = value;
          $(pf + '.fpa-' + what).each(function(i) {
            var $t = $(this);
            if (old_old == $t.val() || '' == $t.val()) $t.val(value);
            _fpa.mark_copied(this, what);
          });
        },
        exclude: function(elem, s1, s2, s3, s4) {
          if ($(elem).is(':checked')) {
            if (s1) $(pf + 'input[name="' + s1 +'"]').removeAttr('checked');
            if (s2) $(pf + 'input[name="' + s2 +'"]').removeAttr('checked');
            if (s3) $(pf + 'input[name="' + s3 +'"]').removeAttr('checked');
            if (s4) $(pf + 'input[name="' + s4 +'"]').removeAttr('checked');
          }
        },
        require: function(elem, s1, s2, s3) {
          if ($(elem).is(':checked')) {
            if (s1) $(pf + 'input[name="' + s1 +'"]').prop('checked', true);
            if (s2) $(pf + 'input[name="' + s2 +'"]').prop('checked', true);
            if (s3) $(pf + 'input[name="' + s3 +'"]').prop('checked', true);
          }
        },
        requiredby: function(elem, s1, s2, s3) {
          if (!$(elem).is(':checked')) {
            if (s1) $(pf + 'input[name="' + s1 +'"]').removeAttr('checked');
            if (s2) $(pf + 'input[name="' + s2 +'"]').removeAttr('checked');
            if (s3) $(pf + 'input[name="' + s3 +'"]').removeAttr('checked');
          }
        },
        email_changed: function() {
          // If the e-mail in basics changes, try to select the matching
          // PGP key, if there is one. This may override user selections,
          // which might be lame but should rarely be an issue because of
          // the "order of progression" of the form.
          var email = $(pf + '.fpa-email').val();
          var found = 0;
          $(pf + '.fpa-pgp-key option').each(function(i) {
            var uid = $(this).data('uid');
            if (found == 0 && uid == email) {
              $(this).prop('selected', true).removeClass('hide');
              found = 1;
            }
            else {
              $(this).prop('selected', false);
              if (uid) $(this).addClass('hide');
            }
            if (!found) {
              $(pf + '.fpa-pgp-key-default').prop('selected', true);
              _fpa.select($('.fpa-pgp-key'), 'security-opt');
            }
          });
          _fpa.copy_basic('username');
        },
        basics_next: function() {
          var email = $(pf + '.fpa-email').val();
          if (!email) {
            // FIXME: Improve validation...
            alert('{{_("You need at least an e-mail address to proceed.")|escapejs}}');
          }
          else if ($(pf + '.fpa-autoconfig').is(':checked')) {
            $(pf + 'div.section, ' + pf + 'div.fpa-network-settings').slideUp();
            $(pf + 'div.fpa-detection-in-progress').slideDown();
            $(pf + '.fpa-detection-progress').html('{{_("Detecting settings for: ")|escapejs}}' + email);
            var ev_source = '.*.SetupGetEmailSettings';
            var watch_id = EventLog.subscribe(ev_source, function(ev) {
              if (ev.private_data['track-id'] == new_src_id) {
                $(pf + '.fpa-detection-progress').html(ev.message);
              }
            });
            Mailpile.API.setup_email_servers_get({
              'track-id': new_src_id,
              '_timeout': (Mailpile.ajax_timeout * 30), // AJAX timeout
              'timeout': 240000,  // Server-side deadline
              'email': email,
              '_error_callback': function(response, _status) {
                console.log("Detection error " + _status);
                $(pf + 'div.fpa-detection-in-progress').slideUp();
                $(pf + 'div.fpa-network-settings').slideDown();
                _fpa.next('profile-add-route');
                $(pf + '.fpa-detection-failed').slideDown();
                EventLog.unsubscribe(ev_source, watch_id);
              }
            }, function(data) {
              EventLog.unsubscribe(ev_source, watch_id);
              $(pf + 'div.fpa-detection-in-progress').slideUp();
              $(pf + 'div.fpa-network-settings').slideDown();
              $('.edit-provider-settings').hide();
              var nxt = undefined;
              var result = undefined;
              if (data.result) result = data.result[email];
              if (result) nxt = _fpa.copy_email_settings(result);
              if (data.result && data.result['login_failed']) {
                _fpa.next('profile-add-basics');
                $(pf + '.fpa-autoconfig').prop('checked', true);
                $(pf + '.fpa-login-failed').slideDown();
              }
              else if (nxt) {
                _fpa.next(nxt);
              }
              else {
                _fpa.next('profile-add-route');
                $(pf + '.fpa-detection-failed').slideDown();
              }
            });
            return false;
          }
          else {
            return _fpa.next("profile-add-route");
          }
        },
        copy_email_settings: function(result) {
          var next = 0;
          var oauth = 0;
          if (result.routes && result.routes.length > 0) {
            var found = result.routes[0];
            if (found.auth_type == 'OAuth2') oauth += 1;
            $("input[name='route-host']").val(found.host);
            $("input[name='route-port']").val(found.port);
            $("input[name='route-username']").val(found.username);
            var $s = $("select[name='route-protocol']");
            $s.find('option').prop('selected', false);
            $s.find("option[value='" + found.protocol + "']").prop('selected', true);
            var $a = $("select[name='route-auth_type']");
            $a.find('option').prop('selected', false);
            $a.find("option[value='" + found.auth_type.substring(0, 8) + "']").prop('selected', true);
            _fpa.select($s, 'route-settings');
            next = 'profile-add-source';
          }
          if (result.sources && result.sources.length > 0) {
            var found = result.sources[0];
            if (found.auth_type == 'OAuth2') oauth += 1;
            $("input[name='source-{{ new_src_id }}-host']").val(found.host);
            $("input[name='source-{{ new_src_id }}-port']").val(found.port);
            $("input[name='source-{{ new_src_id }}-username']").val(found.username);
            var $s = $("select[name='source-{{ new_src_id }}-protocol']");
            $s.find("option").prop('selected', false);
            $s.find("option[value='" + found.protocol + "']").prop('selected', true);
            var $a = $("select[name='source-{{ new_src_id }}-auth_type']");
            $a.find('option').prop('selected', false);
            $a.find("option[value='" + found.auth_type.substring(0, 8) + "']").prop('selected', true);
            _fpa.select($s, 'source-settings-{{ new_src_id }}');
            next = 'profile-add-security';
          }
          if (oauth) {
            // Do nothing...?
          }
          else if (result.enable) {
            $('.edit-provider-settings').attr('href', result.enable[0].url).show();
            $('.fpa-warning .description').html(result.enable[0].description);
            $('.fpa-warning ul.docs').html(' ');
            if (result.docs) {
              for (var i = 0; i < result.docs.length; i++) {
                 var doc = result.docs[i];
                 if (doc.description.indexOf('TB') == -1 &&
                     doc.description.indexOf('Thunder') == -1) {
                   $('.fpa-warning ul.docs').append($(
                     '<li><a target=_blank href="' + doc.url + '">' + doc.description + '</a></li>'
                   ));
                 }
              }
            }
            next = 'fpa-warning';
          }
          return next;
        },
        setup: function() {
          $('input[name=name]').focus();
          $('#form-profile-editor').on('keydown', ':tabbable', function(e) {
            // Make ENTER behave like TAB, to avoid accidental form submission.
            if (document.activeElement.tagName == "TEXTAREA") {
              // Do nothing
            }
            else if (e.which == 13 || e.keyCode == 13) {
              e.preventDefault();
              var nxt = $(document.activeElement).data("next");
              if (nxt) {
                $(nxt).trigger('click');
              }
              else {
                var $canfocus = $(':tabbable:visible')
                var index = $canfocus.index(document.activeElement) + 1;
                if (index >= $canfocus.length) index = 0;
                $canfocus.eq(index).focus();
              }
            }
          });
        }
      };
    })();
    setTimeout("_fpa.setup();", 100);

    $(function() {
      // Make authentication popups forget about the current profile:
      EventLog.forget_about_event("{{result.rid}}");
    });
  </script>

  <form id="form-profile-editor" class="standard"
        method="POST" action="{{ U(state.command_url) }}"
        style="position: relative; max-width: 60em;">{{ csrf_field|safe }}
    {%- if result.rid %}
    <input type="hidden" name="rid" value="{{ result.rid }}">
    {%- endif %}

    <p class="message paragraph-important"
       onclick='javascript:_fpa.next("profile-add-basics");'>
      <span class="icon-user"></span> {{_("Basic Details")}}
      <span class="icon-signature-unknown fpa-basics-bad right hide" style="padding: 5px; color: #ff5;"
            title="{{_('At least a name and e-mail are required!')}}"></span>
      <span class="icon-checkmark fpa-basics-ok right hide" style="padding: 5px; color: #0d0;"></span>
    </p>
    <div class="section profile-add-basics {% if ui_open and ui_open != 'basics' %}hide{% endif %}"
         style="position: relative;">

{%- if 0 %}{# TODO: Partner and make it possible to create e-mail accounts #}
      {%- if not result.rid %}
      <select class="right" style="width: auto;"
              onchange="javascript:_fpa.select(this, 'basics');">
        <option value="old" selected>{{_("Existing Account")}}</option>
        <option value="new">{{_("New Address")}}</option>
      </select>
      {% endif %}
{%- endif %}

      <div style="padding-right: 0em; width: 29em;">
        <label>{{_("Name")}}</label>
        <input type="text" name="name" style="width: 100%"
               value="{{ result.name }}" placeholder="Ada Lovelace">
      </div>
      <div class="basics old">
        <div class="left" style="margin-right: 1em; width: 29em;">
          <label>{{_("E-mail")}}</label>
          <input type="text" name="email" style="width: 100%"
                 class='fpa-email fpa-basic-username' data-next="#basics-next"
                 placeholder="ada@example.com" value="{{ result.email }}"
                 onchange="javascript:_fpa.email_changed();">
        </div>
      </div>
      <div class="basics new hide">
        <br><i>FIXME ... add signup with partners here!</i><br>
      </div>
      <div class="more-basics left{%- if not result.rid %} hide{% endif %}"
           style="width: 39em; padding: 0;">
        <label>{{_("Signature")}}</label>
        <textarea placeholder="{{_("Everyone needs a unique, witty signature!")}}"
                  style="width: 100%; font-size: 0.85em;"
                  name="signature">{{ result.signature }}</textarea>
      </div>
      <br clear="both"><label>&nbsp;</label>
      <div style="position: absolute; text-align: right; right: 0; bottom: 1.5em;">
        {%- if not result.rid %}
        <a class="more-basics-show clickable" onclick="javascript:_fpa.more('more-basics');">
          {{_("Add custom signature")}} ...
        </a> &nbsp;&nbsp;
        {% endif %}
        {%- if not result.sources %}
        <input type="checkbox" class="fpa-autoconfig" value="yes"
               {%- if not result.rid %}checked{% endif %}>
        <span class="checkbox">
          {{ _("Detect settings") }}
        </span> &nbsp;
        {% endif %}
        <button id="basics-next" onclick='javascript:_fpa.basics_next();'
                class="button button-secondary" type="button">{{_("Next")}} ...</button>
      </div>
      <br clear="both">
    </div>

    <div class="fpa-detection-in-progress hide">
      <p class="message paragraph-important">
        <span class="icon-robot"></span> {{_("Auto-detecting settings")}} ...
      </p>
      <div class="text-center">
      {% if config.sys.proxy.protocol in ("tor", "tor-risky") %}
        <p>{{_("Connecting over Tor, this may take a while.")}}</p>
      {% endif %}
        <p>{% include("../img/loading-ellipsis.svg") %}</p>
        <p><i class='fpa-detection-progress'></i></p>
      </div>
    </div>

    <div class="fpa-network-settings">
      <div class="fpa-detection-failed hide">
        <p class="message paragraph-alert">
          <span class="icon-robot"></span>
          <b>{{_("Failed to detect settings, manual configuration required")}}!</b>
          <span class="description" href=""></span>
        </p>
        <p class="text-center">
          <a href="{{ U('/logs/network/') }}" data-dismiss="modal">
             <span class="icon icon-work"></span>
             {{_("Troubleshoot recent Network Activity.")}}
          </a>
        </p>
      </div>
      <p class="message paragraph-alert fpa-login-failed hide">
        <span class="icon-robot"></span> <b>{{_("Failed to log in, check the username and password")}}!</b>
        <span class="description" href=""></span>
      </p>
      <p class="message paragraph-important"
         onclick='javascript:_fpa.next("profile-add-route");'>
        <span class="icon-outbox"></span> {{_("Sending Mail")}}
        <span class="icon-checkmark fpa-route-ok right hide" style="padding: 5px; color: #4f4;"></span>
      </p>
      <div class="section profile-add-route {% if ui_open != 'route' %}hide{% endif %}"
           style="position: relative;">
        <select class="right" name="route-protocol" style="width: auto;"
                data-next="#next-route"
                onchange="javascript:_fpa.select(this, 'route-settings');">
          {%- set protocol = result['route-protocol'] %}
          {%- for val, txt in (('smtp', 'SMTP'),
                              ('smtpssl', 'SMTP/TLS'),
                              ('smtptls', 'SMTP/STARTTLS'),
                              ('local', _("Local")),
                              ('none', _("None"))) %}
          <option value="{{val}}"{% if val == protocol %} selected
                                 {%- endif %}>{{txt}}</option>
          {%- endfor %}
        </select>
        <div class="route-settings smtp smtpssl smtptls
                    {%- if protocol not in ('smtp', 'smtpssl', 'smtptls') %} hide{% endif %}">
          <div class="left" style="margin-right: 1em; width: 14em;">
            <label>{{_("Host name")}}</label>
            <input type="text" name="route-host" value="{{ result['route-host'] }}" placeholder="mail.server.com">
          </div>
          <div class="left" style="margin-right: 0; width: 10em;">
            <label>{{_("Port number")}}</label>
            <input type="text" name="route-port" value="{{ result['route-port'] }}" placeholder="25, 465 or 587">
          </div>
          <br clear="both">
          <div class="left" style="margin-right: 1em; width: 14em;">
            <small class="right fpa-username-copied hide">({{ _("copied") }})</small>
            <label>{{_("Username")}}</label>
            <input type="text" name="route-username" class="fpa-username"
                   onchange="javascript:_fpa.mark_copied(this, 'username');"
                   value="{{ result['route-username'] }}" placeholder="you123">
          </div>
          <div class="left" style="margin-right: 1em; width: 14em;">
            {%- set auth_type = result['route-auth_type'][:8] %}
            <label>{{_("Authentication")}}</label>
            <select name="route-auth_type" style="width: 14em;">
              {%- for val, txt in (('password', 'Password'),
                                   ('OAuth2', 'OAuth2')) %}
              <option value="{{val}}"{% if val == auth_type %} selected
                                     {%- endif %}>{{txt}}</option>
              {%- endfor %}
            </select>
          </div>

          {%- set password = result['route-password'] %}
          {%- if password %}
          <div class="left" style="margin-right: 0; width: 29em;">
            <input type="checkbox" name="route-password" value="">
            <span class="checkbox">
              {{_("Forget password")}}
            </span><br>
          </div>
          {%- endif %}
        </div>
        <div class="route-settings local
                    {%- if protocol != 'local' %} hide{% endif %}">
          <div style="margin-right: 0; width: 25em;">
            <p><i>
              {{_("Send mail using local Unix tools.")}}
              {{_("Use this setting if you have a working mail server on this machine.")}}
            </i></p>
          </div>
          <div class="left" style="margin-right: 0; width: 29em;">
            <label>{{_("Shell command")}}</label>
            <input type="text" name="route-command" style="width: 100%;"
                   value="{{ result['route-command'] }}"
                   placeholder="- {{_('Leave blank to auto-detect')}} -">
          </div>
        </div>
        <div style="width: 70%;" class="route-settings none
                                        {%- if protocol != 'none' %} hide{% endif %}">
          <br>
          <br>
          <p class="text-center"><i>
            {{_("No outgoing mail for this account.")}}
          </i></p>
          <br>
        </div>
        <br clear="both">
        <div style="position: absolute; right: 0; bottom: 1.5em;">
          <button onclick='javascript:_fpa.next("profile-add-source");'
                  class="button button-secondary" type="button">{{_("Next")}} ...</button>
        </div>
        <br clear="both">
      </div>

      <p class="message paragraph-important"
         onclick='javascript:_fpa.next("profile-add-source");'>
        <span class="icon-mailsource"></span> {{_("Receiving Mail")}}
        <span class="icon-checkmark right hide" style="padding: 5px; color: #5f5;"></span>
      </p>
      <div class="section profile-add-source {% if ui_open != 'sources' %}hide{% endif %}"
           style="position: relative;">
{% macro source_editor(rid, new_rid) %}
        {% set protocol = result['source-' + rid + '-protocol'] %}
        <select class="right" style="width: auto;"
                onchange="javascript:_fpa.select(this, 'source-settings-{{ new_rid }}');"
                name="source-{{ new_rid }}-protocol">
          {% for val, txt in (('imap', 'IMAP'),
                              ('imap_ssl', 'IMAP/TLS'),
                              ('pop3', 'POP3'),
                              ('pop3_ssl', 'POP3/TLS'),
                              ('spool', _("Mail spool")),
                              ('local', _("Local files")),
                              ('none', _("None"))) %}
           {%- if rid != new_rid or val[:4] == protocol[:4] %}
            <option value="{{val}}"
                    {%- if val == protocol or
                           (val == "imap" and protocol == "imap_tls") %}
                    selected{% endif %}>{{txt}}</option>
           {%- endif %}
          {%- endfor %}
        </select>

        <div class="source-settings-{{ new_rid }} imap imap_ssl pop3 pop3_ssl
                    {%- if protocol[:4] not in ('imap', 'pop3') %} hide{% endif %}">
          <div class="left" style="margin-right: 1em; width: 14em;">
            <label>{{_("Host name")}}</label>
            <input type="text" name="source-{{ new_rid }}-host"
                   value="{{ result['source-' + rid + '-host'] }}"
                   placeholder="mail.server.com">
          </div>
          <div class="left" style="margin-right: 0; width: 13em;">
            <label>{{_("Port number")}}</label>
            <input type="text" name="source-{{ new_rid }}-port"
                   value="{{ result['source-' + rid + '-port'] }}"
                   placeholder="110, 143, 993 or 995">
          </div>
          <br clear="both">
          <div class="left" style="margin-right: 1em; width: 14em;">
            <small class="right fpa-username-copied hide">({{ _("copied") }})</small>
            <label>{{_("Username")}}</label>
            <input type="text" name="source-{{ new_rid }}-username" class="fpa-username"
                   onchange="javascript:_fpa.mark_copied(this, 'username');"
                   value="{{ result['source-' + rid + '-username'] }}"
                   placeholder="you123">
          </div>
          <div class="left" style="margin-right: 1em; width: 14em;">
            {%- set auth_type = result['source-' + rid + '-auth_type'] %}
            <label>{{_("Authentication")}}</label>
            <select name="source-{{ new_rid }}-auth_type" style="width: 14em;">
              {%- for val, txt in (('password', 'Password'),
                                   ('OAuth2', 'OAuth2')) %}
              <option value="{{val}}"{% if val == auth_type %} selected
                                     {%- endif %}>{{txt}}</option>
              {%- endfor %}
            </select>
          </div>
          <div class="left" style="margin-right: 0; width: 29em;">
          {%- set password = result['source-' + rid + '-password'] %}
          {%- if password %}
            <input type="checkbox" name="source-{{ new_rid }}-password" value="">
            <span class="checkbox">
              {{_("Forget password")}}
            </span><br>
          {%- endif %}

            <input type="checkbox" name="source-{{ new_rid }}-leave-on-server" value="yes"
                   {% if result['source-' + rid + '-leave-on-server'] %}checked{% endif %}>
            <span class="checkbox">
              {{_("Leave mail on server")}}
            </span><br>

            <input type="checkbox" name="source-{{ new_rid }}-index-all-mail" value="yes"
                   {% if result['source-' + rid + '-index-all-mail'] %}checked{% endif %}>
            <span class="checkbox">
              {{_("Copy all mail and add to search engine")}}
            </span>

            <span class="source-settings-{{ new_rid }}
                         {%- if protocol not in ('imap', 'imap_tls') %} hide{% endif %}
                         imap">
              <br>
              <input type="checkbox" name="source-{{ new_rid }}-force-starttls" value="yes"
                     {% if result['source-' + rid + '-force-starttls'] or
                           result['source-' + rid + '-protocol'] == 'imap_tls'
                           %}checked{% endif %}>
              <span class="checkbox">
                {{_("Require STARTTLS encryption")}}
              </span>
            </span>

            <div class='edit-provider-settings hide'><br>
              <a target=_blank class='edit-provider-settings button-secondary'>
                <span class="icon-settings"></span> {{_("Enable IMAP")}}
              </a>
            </div>
          </div>
        </div>

        <div class="source-settings-{{ new_rid }} spool
                    {%- if protocol[:4] != 'spool' %} hide{% endif %}">
          <div class="source-settings-{{ new_rid }} spool left" style="margin-right: 0; width: 29em;">
            <p><i>
              {{_("Receive mail from local Unix mail spool.")}}
              {{_("Use this setting if you have a working mail server on this machine.")}}
            </i></p>
          </div>
          <div class="left" style="margin-right: 0; width: 29em;">
            <input type="checkbox" name="source-{{ new_rid }}-copy-local" value="yes"
                   onchange='javascript:_fpa.requiredby(this, "source-{{ new_rid }}-delete-source");'
                   {% if result['source-' + rid + '-copy-local'] %}checked{% endif %}>
            <span class="checkbox">
              {{_("Copy mail to Mailpile secure storage")}}
            </span><br>
            <input type="checkbox" name="source-{{ new_rid }}-delete-source" value="yes"
                   onchange='javascript:_fpa.require(this, "source-{{ new_rid }}-copy-local");'
                   {% if result['source-' + rid + '-delete-source'] %}checked{% endif %}>
            <span class="checkbox">
              {{_("Delete from Unix mail spool")}} ({{_("after copying")}})
            </span>
          </div>
        </div>

        <div class="source-settings-{{ new_rid }} none local
             {%- if protocol not in ('none', 'local') %} hide{% endif %}"
             style="width: 70%;">
          <div class="source-settings-{{ new_rid }} none left
               {%- if protocol[:4] != 'none' %} hide{% endif %}"
               style="margin-right: 0; width: 29em;">
            <br><br>
            <p class="text-center"><i>
            {%- if result.sources %}
              {{_("Choose a protocol for the new mail source...")}}
            {%- else %}
              {{_("No incoming mail for this account.")}}
            {%- endif %}
            </i></p>
            <br>
          </div>
          <div class="source-settings-{{ new_rid }} local left
               {%- if protocol != 'local' %} hide{% endif %}"
               style="margin-right: 0; width: 29em;">
            <p><i>
              {{_("Use this setting if you would like Mailpile to read e-mails already downloaded by Thunderbird, Mac Mail or another local application on this machine.")}}
            </i></p>
            <p>
              {{_("Use the Browse tool to import local mailboxes later on.")}}
            </p>
          </div>
        </div>

        {%- if rid == new_rid %}
        <div class="source-settings-{{ new_rid }}
                    imap imap_ssl pop3 pop3_ssl local spool
                    {%- if protocol[:4] == 'none' %} hide{% endif %}">
          <br clear="both">
          <input type="checkbox" name="source-{{ new_rid }}-enabled" value="yes"
                 onchange='javascript:_fpa.require(this, "source-{{ new_rid }}-copy-local");'
                 {% if result['source-' + rid + '-enabled'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Enable this mail source")}}
          </span>
        </div>
        {% else %}
        <input type="hidden" name="source-{{ new_rid }}-enabled" value="yes">
        {% endif %}
{%- endmacro %}
        {%- for sid in result.sources %}

          {%- if not loop.first %}<br clear="both"><hr style="margin: 1em 0 5px 0;">{% endif %}
          {{- source_editor(sid, sid) }}
        {%- endfor %}
        <div class="source-add-new{% if result.sources %} hide{% endif %}">
          {%- if result.sources %}<br clear="both"><hr style="margin: 1em 0 5px 0;">{% endif %}
          {{- source_editor('NEW', new_src_id) }}
        </div>
        <br clear="both">
        <div style="position: absolute; right: 0; bottom: 1.5em;">
          {% if result.sources %}
          <input type="checkbox" class="fpa-add-new-source" value="yes"
                 style="padding-right: 0;"
                 onchange="javascript:$('.source-add-new').toggle();">
          <span class="checkbox">{{ _("Add New") }} &nbsp; </span>
          {% endif %}
          <button onclick='javascript:_fpa.next("profile-add-security");'
                  class="button button-secondary" type="button">{{_("Next")}} ...</button>
        </div>
        <br clear="both">
      </div>
    </div>

    {% set enable_imap_pop3_message = _("Mailpile may not be able to access your mail unless you log on to your account and enable IMAP and/or POP3.") %}
    <div class='section fpa-warning hide' style='position: relative'>
      <p class="message paragraph-alert">
        <span class="icon-settings"></span> <b>{{_("Important")}}!</b>
        <span class="description" href=""></span>
      </p>
      <p>
        {{ enable_imap_pop3_message }}
        {{_("Without this, some providers will even mistake Mailpile for an intruder!")}}
      </p>
      <ul style="list-style: disc; margin-left: 2em;" class="docs"></ul>
      <p>
        <a target=_blank class='edit-provider-settings button-secondary right'
           onclick="javascript:$(this).removeClass('button-secondary').addClass('button-info');
                               $('#fpa-gotit').removeClass('button-info').addClass('button-secondary');">
          <span class="icon-settings"></span> {{_("Enable IMAP")}}
        </a>
        <br clear="both">
      </p>
      <div style="position: absolute; left: 0; bottom: 0;">
        <button onclick='javascript:_fpa.next("profile-add-security");'
                class="button-info" id="fpa-gotit" type="button">{{_("Got it")}} ...</button>
      </div>
    </div>

    <p class="message paragraph-important"
       onclick='javascript:_fpa.next("profile-add-security");'>
      <span class="icon-lock-closed"></span> {{_("Security and Privacy")}}
      <span class="icon-checkmark right hide" style="padding: 5px; color: #5f5;"></span>
    </p>
    <div class="section profile-add-security  {% if ui_open != 'security' %}hide{% endif %}"
         style="position: relative;">
      <div class="left" style="margin-right: 0; width: 100%;">
        <label>{{_("Encryption key")}}</label>
        <select class='fpa-pgp-key' style="width: 100%"
                onchange="javascript:_fpa.select(this, 'security-opt');"
                name="security-pgp-key">
          <option value="!CREATE:RSA2048">{{_("Create a new 2048 bit RSA key")}}</option>
          <option value="!CREATE:RSA3072" class="fpa-pgp-key-default">{{_("Create a new 3072 bit RSA key")}}</option>
        {%- for fingerprint in pgp_keys -%}
        {%- set pgp_keys = mailpile('crypto/gpg/keylist/secret','True').result %}
          {%- set key = pgp_keys[fingerprint] -%}
          {%- for uid in key.uids %}
          <option value="{{fingerprint}}" data-uid="{{ uid.email }}"
                  {%- if (fingerprint == result['security-pgp-key']) and (uid.email == result.email) %} selected{% endif %}
                  {%- if (uid.email != result.email) %} class="hide"{% endif %}>
            {{key.creation_date}}/{{key.keytype_name}}{{key.keysize}}:
            {{uid.name}} &lt;{{uid.email}}&gt;
            ({% if uid.comment %}{{uid.comment}}{% else %}0x{{ fingerprint[-8:] }}{% endif %})
          </option>
          {%- endfor %}
        {%- endfor %}
          <option value="!CREATE:RSA4096">{{_("Create a new 4096 bit RSA key (slow)")}}</option>
          <option {% if not result['security-pgp-key'] %}selected {% endif -%}
                  value="">{{_("Disable encryption for this account")}}</option>
        </select>
        <div class="security-opt any text-right
             {%- if not result['security-pgp-key'] %} hide{% endif %}"
             style="margin: -13px 0 13px 0;">
          <a class="more-crypto-show" onclick="javascript:_fpa.more('more-crypto');">
            {{_("Show too many encryption settings")}}
          </a>
        </div>
      </div>
      <div class="security-opt any left
           {%- if not result['security-pgp-key'] %} hide{% endif %}"
           style="margin-right: 0; width: 29em;">
        <div class="more-crypto {% if not result['security-best-effort-crypto'] %}hide{% endif %}">
          <input type="checkbox" name="security-best-effort-crypto" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-always-sign", "security-always-encrypt", "security-obscure-metadata", "security-prefer-inline");'
                 {% if result['security-best-effort-crypto'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Best-effort: Encrypt and/or sign mail whenever possible")}}
          </span>
        </div>
        <div class="more-crypto {% if not result['security-always-sign'] %}hide{% endif %}">
          <input type="checkbox" name="security-always-sign" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-best-effort-crypto");'
                 {% if result['security-always-sign'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Always digitally sign outgoing mail")}}
          </span>
        </div>
        <div class="more-crypto {% if not result['security-always-encrypt'] %}hide{% endif %}">
          <input type="checkbox" name="security-always-encrypt" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-best-effort-crypto");_fpa.require(this, "security-always-sign");'
                 {% if result['security-always-encrypt'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Always encrypt (warn when sending unencrypted mail)")}}
          </span>
        </div>
        <div class="more-crypto {% if not result['security-obscure-metadata'] %}hide{% endif %}">
          <input type="checkbox" name="security-obscure-metadata" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-prefer-inline");'
                 {% if result['security-obscure-metadata'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Minimize metadata (may make mail unreadable)")}}
          </span>
        </div>
        <div class="more-crypto {% if not result['security-prefer-inline'] %}hide{% endif %}">
          <input type="checkbox" name="security-prefer-inline" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-obscure-metadata", "security-prefer-pgpmime");'
                 {% if result['security-prefer-inline'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Prefer compatibility; avoid PGP/MIME (makes mail ugly)")}}
          </span>
        </div>
{% if config.web.developer_mode %}
        <div class="more-crypto {% if not result['security-prefer-pgpmime'] %}hide{% endif %}">
          <input type="checkbox" name="security-prefer-pgpmime" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-prefer-inline");'
                 {% if result['security-prefer-pgpmime'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Prefer PGP/MIME")}}
          </span>
        </div>
{% endif %}
        <div style="margin-top: 0.7em"
             class="more-crypto {% if not result['security-openpgp-header-encrypt'] %}hide{% endif %}">
          <input type="checkbox" name="security-openpgp-header-encrypt" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-openpgp-header-none");_fpa.require(this, "security-openpgp-header-sign");'
                 {% if result['security-openpgp-header-encrypt'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Signal a preference for encrypted mail")}}
          </span>
        </div>
        <div class="more-crypto {% if not result['security-openpgp-header-sign'] %}hide{% endif %}">
          <input type="checkbox" name="security-openpgp-header-sign" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-openpgp-header-none");'
                 {% if result['security-openpgp-header-sign'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Signal a preference for signed mail")}}
          </span>
        </div>
        <div class="more-crypto {% if not result['security-openpgp-header-none'] %}hide{% endif %}">
          <input type="checkbox" name="security-openpgp-header-none" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-openpgp-header-sign", "security-openpgp-header-encrypt");'
                 {% if result['security-openpgp-header-none'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Signal a preference for un-signed, un-encrypted mail")}}
          </span>
        </div>
{# FIXME - make this work!
        <div style="margin-top: 0.7em"
             class="more-crypto {% if not result['security-use-autocrypt'] %}hide{% endif %}">
          <input type="checkbox" name="security-use-autocrypt" value="yes"
                 onchange='javascript:_fpa.exclude(this, "security-attach-keys");'
                 {% if result['security-use-autocrypt'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Use AutoCrypt headers to share encryption keys")}}
          </span><br>
        </div>
#}
        <div class="more-crypto {% if not result['security-attach-keys'] %}hide{% endif %}">
          <input type="checkbox" name="security-attach-keys" value="yes"
                 {% if result['security-attach-keys'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Automatically attach encryption keys to outgoing mail")}}
          </span>
        </div>
{# FIXME - make this work!
        <div class="more-crypto {% if not result['security-publish-to-keyserver'] %}hide{% endif %}">
          <input type="checkbox" name="security-publish-to-keyserver" value="yes"
                 {% if result['security-publish-to-keyserver'] %}checked{% endif %}>
          <span class="checkbox">
            {{_("Upload key to public directory (key server)")}}
          </span>
        </div>
#}
      </div>
    </div>

    <br clear="both">
    <button type="submit" id="fpa-submit" class="button-primary right{%- if not result.rid %} hide{% endif %}">
      <span class="icon {{ form_icon or "icon-plus"}}"></span>
      {{ form_action or _("Add")}}
    </button>
  </form>