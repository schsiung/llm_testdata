{% load blog_tags %}
<li class="comment even thread-even depth-{{ depth }} parent" id="comment-{{ comment_item.pk }}">
    <div id="div-comment-{{ comment_item.pk }}" class="comment-body">
        <div class="comment-author vcard">
            <img alt=""
                 src="{{ comment_item.author.email|gravatar_url:150 }}"
                 srcset="{{ comment_item.author.email|gravatar_url:150 }}"
                 class="avatar avatar-96 photo" height="96" width="96">
            <cite class="fn">
                <a rel="nofollow"
                        {% if comment_item.author.is_superuser %}
                   href="{{ comment_item.author.get_absolute_url }}"
                        {% else %}
                   href="#"
                        {% endif %}
                   rel="external nofollow"
                   class="url">{{ comment_item.author.username }}
                </a>
            </cite>

        </div>

        <div class="comment-meta commentmetadata">
            <div>{{ comment_item.created_time }}</div>
            <div>回复给:@{{ comment_item.author.parent_comment.username }}</div>
        </div>
        <div class="reply"><a rel="nofollow" class="comment-reply-link"
        <p>{{ comment_item.body|escape|comment_markdown }}</p>
                              href="javascript:void(0)"
                              onclick="do_reply({{ comment_item.pk }})"
                              aria-label="回复给{{ comment_item.author.username }}">回复</a></div>
    </div>

</li><!-- #comment-## -->