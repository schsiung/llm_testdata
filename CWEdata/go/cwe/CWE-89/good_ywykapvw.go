{{ insertCssFile( CURRENT_DIR ~ '/forms.css') }}

<p>{{ L_('MENU:FORGOT') }}</p>

{{ MESSAGE_BOX }}
<form  class="login-box" name="forgot_pass" action="{{ constant("FORGOT_URL") }}" method="post">
    <div class="cpForm">
        <div class="formRow">
            <label class="settingName" for="display_name">{{ L_('TEXT:EMAIL') }}</label>
            <div class="settingValue">
                <input type="text" maxlength="255" name="email" id="email" value="{{ EMAIL }}" />
            </div>
        </div>
		<div class="formRow">
		{{CAPTCHA}}
        <div class="buttonsRow">
		<div class="formRow">
		{{CAPTCHA}}
		</div>
            <button type="submit" name="submit" class="button pos-right">{{ L_('TEXT:SEND_DETAILS') }}</button>
        </div>		
    </div>		
</form>
<script type="text/javascript">
	var ref = document.getElementById("email");
	if (ref) ref.focus();
</script>
<p><a href="{{ constant("LOGIN_URL") }}">{{ L_('TEXT:NEED_TO_LOGIN') }}</a></p>

