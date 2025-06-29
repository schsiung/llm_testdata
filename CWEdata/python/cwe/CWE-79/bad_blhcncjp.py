
<% _.each(anns, function(ann) { %>
<li class="file_ann_wrapper"
    id="file_ann-<%- ann.id %>"
    data-added-by="<% print(_.escape(ann.addedBy.join(','))) %>">

    <a class='tooltip'
        href="<% if (ann.permissions.canDownload) { print(webindex + 'annotation/' + ann.id)} else {print('#') } %>">
        <%- ann.file.name %>
        <% if (ann.file.size) { %>
            <span>(<%- ann.file.size %>)</span>
        <% } %>
    </a>

    <span class="tooltip_html" style='display:none'>
        <!-- show different tooltip for batch_annotate panel -->
        <% if (ann.links) { %>
            Can remove File from <b><%- ann.canRemoveCount %>
            object<% if(ann.canRemoveCount !== 1) {print('s')} %></b>:<br/>
            <% _.each(ann.links, function(link, idx) { %>
                <div>
                    <% if (idx < 20) { %>
                        <b><%- link.parent.class %> <%- link.parent.id %></b>
                        <% print(_.escape(link.parent.name).slice(0, 28)) %>
                        <% if (link.owner.id !== userId){
                            print("(" + link.owner.firstName.slice(0, 1) + " " + _.escape(link.owner.lastName) + ")")
                        } %>
                    <% } else if (idx === 20) { %>
                        and <b><% print(ann.links.length - 20) %></b> other objects...
                    <% } %>
                </div>
            <% }) %>
        <% } else { %>
            <b>Annotation ID:</b> <%- ann.id %><br />
            <b>Owner:</b> <%- ann.owner.firstName %> <%- ann.owner.lastName %><br />
            <b>Linked by:</b> <%- ann.link.owner.firstName %> <%- ann.link.owner.lastName %><br />
            <b>On:</b> <% print(OME.formatDate(ann.link.date)) %> <br />
            <b>Description:</b> <%- ann.description %>
            <% if (ann.ns){ %>
                <br/><b>Namespace:</b> <%- ann.ns %>
            <% } %>
            <% if (ann.file.mimetype){ %>
                <br/><b>Mimetype:</b> <%- ann.file.mimetype %>
            <% } %>
            <br/><b>File ID:</b> <%- ann.file.id %>
        <% } %>
    </span>

    <div class="attachment_actions">
        <input type="checkbox" style="display:none;"/>
        <% if ((ann.ns && ann.ns === 'openmicroscopy.org/omero/bulk_annotations') || ann.file.mimetype == 'OMERO.tables' ){ %>
            <a class='action btn_view' title="View OMERO.table" target="_blank"
            href='<%= webindex %>omero_table/<%- ann.file.id %>/'>&nbsp;</a>
        <% } %>
        <% if (ann.link.permissions.canDelete) { %> <!-- and not ann.isOriginalMetadata -->
            <a class='removeFile action' id="<%- ann.id %>-file" title="Remove File"
            href='<%= webindex %>action/remove/file/<%- ann.id %>/'>&#8211</a>
        <% } %>

        <% if (ann.permissions.canDelete) { %> <!-- and not ann.isOriginalMetadata -->
            <a id="<%- ann.id %>-file" type="image" class="deleteFile action" title="Delete File"
                href="<%= webindex %>action/delete/file/<%- ann.id %>/"> &#215 </a>
        <% } %>

    </div>
</li>

<% }) %>