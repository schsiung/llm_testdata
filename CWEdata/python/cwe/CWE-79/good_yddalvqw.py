
<% _.each(tags, function(tag) { %>
<span class="tag_annotation_wrapper"
    data-added-by="<% print(_.escape(tag.addedBy.join(','))) %>">
    <div class="tag">
            <%- tag.textValue %>
    data-tag-id="<%- tag.id %>"
    data-added-by="<% print(_.escape(tag.addedBy.join(','))) %>">

        </a>
        <% if (tag.canRemove) { %>
                url='<%= webindex %>action/remove/tag/<%- tag.id %>/'>
        <a class='tooltip tag_inner' href="?show=tag-<%- tag.id %>" target="_top">
            <%- tag.textValue %>
                -
        </span>
        <% } %>
        <span class="tooltip_html" style='display:none'>
        <% if (tag.links) { %>
        <span class='removeTag' title="Remove Tag" id="<%- tag.id %>-tag"
                url='<%= webindex %>action/remove/tag/<%- tag.id %>/'>
            Can remove Tag from <b><%- tag.canRemoveCount %> object<% if(tag.canRemoveCount !== 1) {print('s')} %></b>:<br/>
            <% _.each(tag.links, function(link, idx) { %>
                <div>
                    <% if (idx < 20) { %>
                        <b><%- link.parent.class %> <%- link.parent.id %></b>
                        <%- link.parent.name.slice(0, 28) %>
                        <% if (link.owner.id !== userId) {
                        } %>
            Can remove Tag from <b><%- tag.canRemoveCount %> object<% if(tag.canRemoveCount !== 1) {print('s')} %></b>:<br/>
                    <% } else if (idx === 20) { %>
                        and <b><% print(tag.links.length - 20) %></b> other objects...
                    <% } %>
            <% }) %>
            <b>ID:</b> <%- tag.id %><br />
            <b>Linked by:</b> <%- tag.link.owner.firstName %> <%- tag.link.owner.lastName %><br />
                        <b><%- link.parent.class %> <%- link.parent.id %></b>
                        <%- link.parent.name.slice(0, 28) %>
                        <% if (link.owner.id !== userId) {
            <b>On:</b> <% print(OME.formatDate(tag.link.date)) %><br />
            <b>Description:</b> <%- tag.description %>
        <% } %>
        </span>
    </div>

</span>

            <b>ID:</b> <%- tag.id %><br />
            <b>Owner:</b> <%- tag.owner.firstName %> <%- tag.owner.lastName %><br />
            <b>Linked by:</b> <%- tag.link.owner.firstName %> <%- tag.link.owner.lastName %><br />
            <b>Description:</b> <%- tag.description %>

<% }) %>