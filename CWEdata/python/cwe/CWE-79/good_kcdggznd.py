{% load blog_tags %}
<li class="comment even thread-even depth-{{ depth }} parent" id="comment-{{ comment_item.pk }}"
    style="margin-left: {% widthratio depth 1 3 %}rem">
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
            {{ comment_item.created_time }}
        </div>
        <p>
            {% if comment_item.parent_comment %}
                <div>回复 <a
                        href="#comment-{{ comment_item.parent_comment.pk }}">@{{ comment_item.parent_comment.author.username }}</a>
                </div>
            {% endif %}
        </p>


        <p>{{ comment_item.body|escape|comment_markdown }}</p>
        <div class="reply"><a rel="nofollow" class="comment-reply-link"
                              href="javascript:void(0)"
                              onclick="do_reply({{ comment_item.pk }})"
                              aria-label="回复给{{ comment_item.author.username }}">回复</a></div>
    </div>

</li><!-- #comment-## -->
{% query article_comments parent_comment=comment_item as cc_comments %}
{% for cc in cc_comments %}
    {% with comment_item=cc template_name="comments/tags/comment_item_tree.html" %}
        {% if depth >= 1 %}
            {% include template_name %}
        {% else %}
            {% with depth=depth|add:1 %}
                {% include template_name %}
            {% endwith %}
        {% endif %}
    {% endwith %}
{% endfor %}