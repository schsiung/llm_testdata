{% extends "layout.html" %}
{% block header %}
<link href="{{ url_for('static', filename='css/libs/bootstrap-table.min.css') }}" rel="stylesheet">
<link href="{{ url_for('static', filename='css/libs/bootstrap-editable.css') }}" rel="stylesheet">
{% endblock %}
{% block body %}
<div class="discover">
  <h1>{{title}}</h1>
  <form role="form" class="col-md-10 col-lg-6" method="POST">
    <input type="hidden" name="csrf_token" value="{{ csrf_token() }}">
    <input type="hidden" name="csrf_token" value="{{ csrf_token() }}">
    {% if feature_support['gmail'] %}
    <div class="form-group">
      <label for="config_email_type">{{_('Choose Server Type')}}</label>
      <select name="mail_server_type" id="config_email_type" class="form-control" data-control="email-settings">
       <option value="0" {% if content.mail_server_type == 0 %}selected{% endif %}>{{_('Use Standard E-Mail Account')}}</option>
       <option value="1" {% if content.mail_server_type == 1 %}selected{% endif %}>{{_('Gmail Account with OAuth2 Verification')}}</option>
      </select>
    </div>
    <div data-related="email-settings-1">
      <div class="form-group">
        {% if content.mail_gmail_token == {} %}
        <button type="submit" id="gmail_server" name="gmail" value="submit" class="btn btn-default">{{_('Setup Gmail Account as E-Mail Server')}}</button>
        {% else %}
        <button type="submit" id="invalidate_server" name="invalidate" value="submit" class="btn btn-danger">{{_('Revoke Gmail Access')}}</button>
        {% endif %}
      </div>
    </div>
    <div data-related="email-settings-0">
   {% endif %}
      <div class="form-group">
        <label for="mail_server">{{_('SMTP Hostname')}}</label>
        <input type="text" class="form-control" name="mail_server" id="mail_server" value="{{content.mail_server}}" required>
      </div>
      <div class="form-group">
        <label for="mail_port">{{_('SMTP Port')}}</label>
        <input type="number" min="1" max="65535" step="1" class="form-control" name="mail_port" id="mail_port" value="{% if content.mail_port != None %}{{ content.mail_port }}{% endif %}" autocomplete="off" required>
      </div>
      <div class="form-group">
        <label for="mail_use_ssl">{{_('Encryption')}}</label>
          <select name="mail_use_ssl" id="mail_use_ssl" class="form-control">
              <option value="0" {% if content.mail_use_ssl == 0 %}selected{% endif %}>{{ _('None') }}</option>
              <option value="1" {% if content.mail_use_ssl == 1 %}selected{% endif %}>{{ _('STARTTLS') }}</option>
              <option value="2" {% if content.mail_use_ssl == 2 %}selected{% endif %}>{{ _('SSL/TLS') }}</option>
          </select>
      </div>
      <div class="form-group">
        <label for="mail_login">{{_('SMTP Login')}}</label>
        <input type="text" class="form-control" name="mail_login" id="mail_login" value="{{content.mail_login}}">
      </div>
      <div class="form-group">
        <label for="mail_password">{{_('SMTP Password')}}</label>
        <input type="password" class="form-control" name="mail_password" id="mail_password" value="{{content.mail_password}}">
      </div>
      <div class="form-group">
        <label for="mail_from">{{_('From E-mail')}}</label>
        <input type="text" class="form-control" name="mail_from" id="mail_from" value="{{content.mail_from}}" required>
      </div>
      <label for="mail_size">{{_('Attachment Size Limit')}}</label>
       <div class="form-group input-group">
        <input type="number" min="1" max="600" step="1" class="form-control" name="mail_size" id="mail_size" value="{% if content.mail_size != None %}{{ (content.mail_size / 1024 / 1024)|int }}{% endif %}" required>
        <span class="input-group-btn">
          <button type="button" id="attachement_size" class="btn btn-default" disabled>MB</button>
        </span>
      </div>
      <button type="submit" name="submit" value="submit" class="btn btn-default">{{_('Save')}}</button>
      <button type="submit" name="test" value="test" class="btn btn-default">{{_('Save and Send Test E-mail')}}</button>
   {% if feature_support['gmail'] %}
    </div>
   {% endif %}
      <a href="{{ url_for('admin.admin') }}" id="email_back" class="btn btn-default">{{_('Back')}}</a>
  </form>
    {% if g.allow_registration %}
  <div class="col-md-10 col-lg-6">
    <h2>{{_('Allowed Domains (Whitelist)')}}</h2>
    <form id="domain_add_allow" action="{{ url_for('admin.add_domain',allow=1)}}" method="POST">
    <input type="hidden" name="csrf_token" value="{{ csrf_token() }}">
    <input type="hidden" name="csrf_token" value="{{ csrf_token() }}">
    <div class="form-group required">
      <label for="domainname_allow">{{_('Add Domain')}}</label>
      <input type="text" class="form-control" name="domainname" id="domainname_allow" >
    </div>
    <button id="domain_allow_submit" class="btn btn-default">{{_('Add')}}</button>
    </form>
  <table class="table table-no-bordered" id="domain-allow-table" data-url="{{url_for('admin.list_domain', allow=1)}}" data-id-field="id" data-show-header="false" data-editable-mode="inline">
    <thead>
    <tr>
      <th data-field="domain" id="domain-allow" data-escape="true" data-editable-type="text" data-editable-url="{{ url_for('admin.edit_domain', allow = 1)}}" data-editable="true" data-editable-title="{{_('Enter domainname')}}"></th>
      <th data-field="id" id="id-allow" data-visible="false"></th>
      <th data-align="right" data-formatter="TableActions"></th>
    </tr>
    </thead>
  </table>
  <h2>{{_('Denied Domains (Blacklist)')}}</h2>
    <table class="table table-no-bordered" id="domain-deny-table" data-url="{{url_for('admin.list_domain', allow=0)}}" data-id-field="id" data-show-header="false" data-editable-mode="inline">
      <thead>
        <tr>
            <th data-field="domain" id="domain-deny" data-escape="true" data-editable-type="text" data-editable-url="{{ url_for('admin.edit_domain', allow = 0)}}" data-editable="true" data-editable-title="{{_('Enter domainname')}}"></th>
            <th data-field="id" id="id-deny" data-visible="false"></th>
            <th data-align="right" data-formatter="TableActions"></th>
        </tr>
      </thead>
    <form id="domain_add_deny" action="{{ url_for('admin.add_domain',allow=0)}}" method="POST">
      <div class="form-group required">
        <input type="text" class="form-control" name="domainname" id="domainname_deny" >
      <button id="domain_deny_submit" class="btn btn-default">{{_('Add')}}</button>
    </div>

    {% endif %}
      <input type="hidden" name="csrf_token" value="{{ csrf_token() }}">
      <div class="form-group required">
        <label for="domainname_deny">{{_('Add Domain')}}</label>
        <input type="text" class="form-control" name="domainname" id="domainname_deny" >
      </div>
      <button id="domain_deny_submit" class="btn btn-default">{{_('Add')}}</button>
</div>
{% endblock %}
{% block modal %}
{% if g.allow_registration %}
{{ delete_confirm_modal() }}
{% endif %}
{% endblock %}
{% block js %}
{% if g.allow_registration %}
<script src="{{ url_for('static', filename='js/libs/bootstrap-table/bootstrap-table.min.js') }}"></script>
<script src="{{ url_for('static', filename='js/libs/bootstrap-table/bootstrap-table-editable.min.js') }}"></script>
<script src="{{ url_for('static', filename='js/libs/bootstrap-table/bootstrap-editable.min.js') }}"></script>
<script src="{{ url_for('static', filename='js/table.js') }}"></script>
{% endif %}
{% endblock %}