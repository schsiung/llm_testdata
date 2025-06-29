{% extends "base.html" %}
{% load i18n %}
{% block html_class %}login-pf{% endblock %}
{% block title %}{{ title }}{% endblock %}

{% block contents %}
<div class="container">
  <div class="row">
    <div class="col-sm-7 col-md-6 col-lg-5 login">
      <form class="form-horizontal" role="form" action="{% url "tcms-password_reset" %}" method="POST">
        {% csrf_token %}
        <input type="hidden" name="next" value="{{ REQUEST_CONTENTS.next }}" />

        <div class="form-group">
          {{ form.email.errors }}
          <label for="inputEmail" class="col-sm-2 col-md-2 control-label">{% trans "E-mail" %}</label>
          <div class="col-sm-10 col-md-10">
            <input type="text" class="form-control" id="inputEmail" name="email" placeholder="" tabindex="1">
          </div>
        </div>
        {% if 'captcha' in form.fields %}
            {{ form.captcha.errors }}
            {{ form.captcha }}
        {% endif %}
        {% if 'captcha' in form.fields %}
            {{ form.captcha.errors }}
            {{ form.captcha }}
        {% endif %}
        <div class="form-group">
          <div class="col-xs-12 col-sm-offset-2 col-sm-10 col-md-offset-2 col-md-10 submit">
            <button type="submit" class="btn btn-primary btn-lg" tabindex="4">{% trans "Password reset" %}</button>
          </div>
        </div>
      </form>
    </div><!--/.col-*-->
    <div class="col-sm-5 col-md-6 col-lg-7 details">
      <p>
        <strong>{% trans "Kiwi TCMS password reset" %}!</strong>
      </p>
    </div><!--/.col-*-->
  </div><!--/.row-->
</div><!--/.container-->
{% endblock %}