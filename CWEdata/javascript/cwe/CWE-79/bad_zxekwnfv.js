<div id="compose-content">
    {{!-- scroll to bottom button is not part of compose but
    helps us align it at various screens sizes with
    minimal css and no JS. We keep it `position: absolute` to prevent
    it changing compose box layout in any way. --}}
    <div id="scroll-to-bottom-button-container">
        <div id="scroll-to-bottom-button-clickable-area"  data-tippy-content="{{t 'Scroll to bottom' }}  &lt;span class='hotkey-hint'&gt;({{scroll_to_bottom_key_html}})&lt;/span&gt;" data-tippy-allowHTML="true">
            <div id="scroll-to-bottom-button">
                <i class="fa fa-chevron-down"></i>
            </div>
        </div>
    </div>
    <div id="compose_controls" class="new-style">
        <div id="compose_buttons">
            <span class="new_message_button reply_button_container">
                <button type="button" class="button small rounded compose_reply_button"
                  id="left_bar_compose_reply_button_big"
                  title="{{t 'Reply to selected message' }} (r)">
                    <span class="compose_reply_button_label">{{t 'Compose message' }}</span>
                </button>
            </span>
            <span class="new_message_button mobile_button_container">
                <button type="button" class="button small rounded compose_mobile_button"
                  id="left_bar_compose_mobile_button_big"
                  title="{{t 'New message' }} (c)">
                    <span>+</span>
                </button>
            </span>
            <span class="new_message_button stream_button_container">
                <button type="button" class="button small rounded compose_stream_button"
                  id="left_bar_compose_stream_button_big"
                  title="{{t 'New topic' }} (c)">
                    <span class="compose_stream_button_label">{{t 'New topic' }}</span>
                </button>
            </span>
            {{#unless embedded }}
            <span class="new_message_button private_button_container">
                <button type="button" class="button small rounded compose_private_button"
                  id="left_bar_compose_private_button_big"
                  title="{{t 'New private message' }} (x)">
                    <span class="compose_private_button_label">{{t 'New private message' }}</span>
                </button>
            </span>
            {{/unless}}
            <span class="new_message_button only-visible-for-spectators">
                <a class="no-underline button small rounded float-left" href="/login">
                    {{t 'Log in to send messages' }}
                </a>
            </span>
        </div>
    </div>
    <div class="message_comp">
        <div class="alert" id="compose-send-status">
            <span class="compose-send-status-close">&times;</span>
            <span id="compose-error-msg"></span>
        </div>
        <div id="compose_resolved_topic" class="alert home-error-bar"></div>
        <div id="compose_invite_users" class="alert home-error-bar"></div>
        <div id="compose-all-everyone" class="alert home-error-bar"></div>
        <div id="compose-announce" class="alert home-error-bar"></div>
        <div id="compose_not_subscribed" class="alert home-error-bar"></div>
        <div id="compose_private_stream_alert" class="alert home-error-bar"></div>
        <div id="out-of-view-notification" class="notification-alert"></div>
        <div class="composition-area">
            <form id="send_message_form" action="/json/messages" method="post">
                {{ csrf_input }}
                <div class="compose_table">
                    <div id="compose_top">
                        <div id="compose_top_right" class="order-2">
                            <button type="button" class="expand_composebox_button fa fa-angle-up" aria-label="{{t 'Expand compose' }}" data-tippy-content="{{t 'Expand compose' }}"></button>
                            <button type="button" class="collapse_composebox_button fa fa-angle-down" aria-label="{{t 'Collapse compose' }}" data-tippy-content="{{t 'Collapse compose' }}"></button>
                            <button type="button" class="close" id='compose_close' data-tippy-content="{{t 'Cancel compose' }}  <span class='hotkey-hint'>(Esc)</span>">&times;</button>
                        </div>
                        <div id="stream-message" class="order-1">
                            <div class="stream-selection-header-colorblock message_header_stream left_part" tab-index="-1"></div>
                            <div class="right_part">
                                <span id="compose-lock-icon">
                                    <i class="fa fa-lock" title="{{t 'This is a private stream' }}" aria-hidden="true"></i>
                                </span>
                                <span id="compose-globe-icon">
                                    <i class="zulip-icon zulip-icon-globe" title="{{t 'This is a web-public stream' }}" aria-hidden="true"></i>
                                </span>
                                <input type="text" class="recipient_box" name="stream_message_recipient_stream" id="stream_message_recipient_stream" maxlength="30" value="" placeholder="{{t 'Stream' }}" autocomplete="off" tabindex="0" aria-label="{{t 'Stream' }}" />
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                <input type="text" class="recipient_box" name="stream_message_recipient_topic" id="stream_message_recipient_topic" maxlength="60" value="" placeholder="{{t 'Topic' }}" autocomplete="off" tabindex="0" aria-label="{{t 'Topic' }}" />
                            </div>
                        </div>
                        <div id="private-message" class="order-1">
                            <div class="to_text">
                                <span>{{t 'To' }}:</span>
                            </div>
                            <div class="right_part">
                                <div class="pm_recipient">
                                    <div class="pill-container" data-before="{{t 'You and' }}">
                                        <div class="input" contenteditable="true" id="private_message_recipient" data-no-recipients-text="{{t 'Add one or more users' }}" data-some-recipients-text="{{t 'Add another user...' }}"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="messagebox-wrapper">
                        <div class="messagebox">
                            <textarea class="new_message_textarea" name="content" id='compose-textarea' placeholder="{{t 'Compose your message here' }}" tabindex="0" aria-label="{{t 'Compose your message here...' }}"></textarea>
                            <div class="scrolling_list preview_message_area" data-simplebar id="preview_message_area" style="display:none;">
                                <div class="markdown_preview_spinner"></div>
                                <div class="preview_content rendered_markdown"></div>
                            </div>
                            <div class="drag"></div>
                            <div id="below-compose-content">
                                <div class="compose_bottom_top_container">
                                    <div class="compose_right_float_container order-3">
                                        <button type="submit" id="compose-send-button" class="button small send_message animated-purple-button" title="{{t 'Send' }} (Ctrl + Enter)">
                                            <img class="loader" alt="" src="" />
                                            <span>{{t 'Send' }}</span>
                                        </button>
                                    </div>
                                    {{> compose_control_buttons }}
                                </div>
                                <div class="compose_bottom_bottom_container">
                                    <span id="compose_limit_indicator"></span>
                                    <div class="enter_sends">
                                        <span class="enter_sends_true">
                                            {{#tr}}
                                                <z-shortcut></z-shortcut> to send
                                                {{#*inline "z-shortcut"}}<kbd>Enter</kbd>{{/inline}}
                                            {{/tr}}
                                        </span>
                                        <span class="enter_sends_false">
                                            {{#tr}}
                                                <z-shortcut></z-shortcut> to send
                                                {{#*inline "z-shortcut"}}<kbd>Ctrl</kbd>+<kbd>Enter</kbd>{{/inline}}
                                            {{/tr}}
                                        </span>
                                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>