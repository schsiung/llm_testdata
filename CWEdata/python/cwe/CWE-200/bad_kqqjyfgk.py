{% extends "webclient/base/base_container.html" %}
{% load i18n %}


{% comment %}
<!--
  Copyright (C) 2011-2015 University of Dundee & Open Microscopy Environment.
  All rights reserved.

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as
  published by the Free Software Foundation, either version 3 of the
  License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->
{% endcomment %}

{% comment %}
<!--
  This page is the 'home page' of the 3-column data layout for webclient.
  It loads the tree in the left panel. This is then used to load data into the middle and right panels (via AJAX)
  Plugins for the centre or right panels add themselves as selection listeners to the tree.
-->
{% endcomment %}
{% block link %}
    {{ block.super }}
    <link rel="stylesheet" href="{% static "webgateway/css/ome.jstree_theme.css" %}" type="text/css" />
{% endblock %}

{% block script %}
    {{ block.super }}

    <script type="text/javascript" src="{% static "3rdparty/jquery.jstree-3.0.8/jstree.js" %}"></script>
    <script type="text/javascript" src="{% static "webclient/javascript/jquery.jstree.locate_plugin.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "webclient/javascript/jquery.jstree.conditionalselect_plugin.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "webclient/javascript/jquery.jstree.pagination_plugin.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "webclient/javascript/jquery.jstree.fields_plugin.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "webclient/javascript/jquery.jstree.omecut_plugin.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "webclient/javascript/jquery.jstree.ometools_plugin.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "webclient/javascript/jquery.jstree.childcount_plugin.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "webclient/javascript/jquery.jstree.truncatetext_plugin.js"|add:url_suffix %}"></script>

    <script type="text/javascript" src="{% static 'webclient/javascript/ome.chgrp.js'|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static 'webclient/javascript/ome.chown.js'|add:url_suffix %}"></script>

    <!-- Main jsTree code is here -->
    <script src="{% static 'webclient/javascript/ome.tree.js'|add:url_suffix %}"></script>


    <script type="text/javascript">

    // Variable to store selection data when using jstree refresh
    var refreshPathsReverse = [];


    // Called from ome.tree.js
    var updateParentRemoveNode = function(inst, node, parent) {
        /* Update any other instances of the parent of this node to remove it
         * Also Based on if the parent of this node has any children
         * remaining, update the parental status of matching parents
        */

        // Get any other instances of the parent
        var parentKey = inst.locate_key(parent);
        var parentNodes = inst.locate_node(parentKey);
        // Get the parentNodeIds to easily check set membership
        var parentNodeIds = [];
        $.each(parentNodes, function(index, parentNode) {
             parentNodeIds.push(parentNode.id);
        });
        // Determine if this parent now has no children
        var parentChildless = !inst.is_parent(parent);

        // For performance reasons it is quicker to look for the nodes and check
        // their parents than to look for the parents and scan through all
        // their children
        var nodeKey = inst.locate_key(node);
        var nodeNodes = inst.locate_node(nodeKey);

        var updateParentRemoveNodes = [];
        $.each(nodeNodes, function(index, nodeNode) {
            // Discount the original node as jstree is removing that
            if (nodeNode.id === node.id) {
                return true;
            }

            // Discount any nodes that do not have one of the predetermined parents
            if ($.inArray(inst.get_parent(nodeNode), parentNodeIds) === -1) {
                return true;
            }

            // The remaining are children of identical parents and should
            // be removed
            updateParentRemoveNodes.push(nodeNode);
        });

        // Actually do the remove
        inst.delete_node(updateParentRemoveNodes);

        // If the parent is now childless it is also necessary to check
        // for any identical parent containers that are marked as expandable
        // which has ceased to be the case
        $.each(parentNodes, function(index, parentNode) {
            // Discount the original parent as jstree is handling that
            if (parentNode.id === parent.id) {
                return true;
            }

            if (parentChildless) {
                if (!inst.is_loaded(parentNode)) {
                    // Remove the offer of expansion, this is denoted by a node which is
                    // loaded, but has zero children
                    parentNode.state.loaded = true;
                    inst.redraw_node(parentNode);
                }
            }

            // Update the child count (override the childcount because it may not be
            // loaded and will thus always have no count)
            OME.updateNodeChildCount(inst, parentNode, parent.children.length);
        });


    };

    var updateParentInsertNode = function(inst, node, parent, position) {
        /* Update any other instances of the parent with the new node
         *
        */

        // Get any other instances of the parent
        var parentKey = inst.locate_key(parent);
        var parentNodes = inst.locate_node(parentKey);
        var oldParent = inst.get_node(inst.get_parent(node));

        $.each(parentNodes, function(index, parentNode) {
             // Discount the original parent as jstree is inserting that
             if (parentNode.id === parent.id) {
                // Continue
                return true;
             }

            if ((inst.is_loaded(parentNode) && inst.is_parent(parentNode)) ||
                (inst.is_loaded(parentNode) && inst.is_open(parentNode))) {
                // Create a new node to match the other examples with
                // data from the old
                var new_node_data = {
                    'data': {'id': node.data.obj.id, 'obj': node.data.obj},
                    'text': node.text,
                    'type': node.type,
                    // If it has children, we wish it to be loadable, but not loaded
                    // so just give it boolean instead of actual nodes
                    'children': inst.is_parent(node),
                    'li_attr': {
                        'class': node.type,
                        'data-id': node.data.obj.id
                    }
                };
                inst.create_node(parentNode, new_node_data, position);
            // An empty container
            } else if (!inst.is_parent(parentNode) && inst.is_loaded(parentNode)) {
                // Change the node to offer expansion
                parentNode.state.loaded = false;
                // Close the node
                inst.redraw_node(parentNode);
            }

            // Update the child count (override the childcount because it may not be
            // loaded and will thus always have no count)
            OME.updateNodeChildCount(inst, parentNode, oldParent.children.length);
        });
    };

    var removeDuplicateNodes = function(inst, node) {
        /**
         * Removes all duplicates of a node throughout the tree.
         * For use mainly when something is truly deleted as opposed to
         * unlinked
        */

        var nodeKey = inst.locate_key(node);
        var nodeNodes = inst.locate_node(nodeKey);

        $.each(nodeNodes, function(index, nodeNode) {
            // Update the parent count
            var parent = inst.get_node(inst.get_parent(nodeNode));
            var count = 0;
            if (parent.children) {
                count = parent.children.length;
            }
            OME.updateNodeChildCount(inst, parent, count);
            // Actually delete the node
            inst.delete_node(nodeNode);
        });
    };

    if (typeof OME === "undefined") { OME={}; }

        OME.handleNewContainer = function(container_type) {

            // If we are filtering to show another user's data,
            // we 'should' have writeOwned privilege

            var writeOwned = WEBCLIENT.current_admin_privileges.indexOf("WriteOwned") > -1;
            var $f = $("#new-container-form");
            var memberOfGroup = WEBCLIENT.member_of_groups.indexOf(WEBCLIENT.active_group_id) > -1;

            // clear fields
            $("input[name='owner']", $f).val("");
            var new_container_name = $("input[name='name']", $f).val("");
            var new_container_desc = $("textarea[name='description']", $f).val("");
            $("#new_pds_owner_controls").hide();

            // If we're not filtering by MY data, could be 'All Members' or another User...
            // Data will be and we need to show who owner will be
            if (WEBCLIENT.active_user.id !== WEBCLIENT.USER.id) {
                // We 'should' have right permissions but just in case...
                if (!memberOfGroup && !writeOwned) {
                    alert("You don't have permission to create data for other users");
                    return;
                }
                // If filtering by User, data will belong to them
                if (WEBCLIENT.active_user.id !== -1) {
                    $("#new_pds_owner").text(WEBCLIENT.active_user.fullName);
                    $("input[name='owner']", $f).val(WEBCLIENT.active_user.id);
                    $("#new_pds_owner_controls").show();
                }
                // Otherwise, if we can writeOwned, pick Owner from members of this group
                else if (writeOwned) {
                    // Not yet supported (Create options should be disabled if All Members)
                    // To support this, will need to show <select> to choose owner.
                }
            }

            $("#new_container_type").text(container_type.capitalize());
            $("#new-container-form").dialog('open');
        }

        // Call this when a parent child count may have changed
        OME.updateNodeChildCount = function(tree, parent, override_count) {
            var node = tree.get_node(parent);
            var count;
            if (override_count) {
                count = override_count;
            } else {
                count = node.children.length;
            }
            // Restrict this to projects, datasets, screens and plates
            if (node.type === 'project' ||
                node.type === 'dataset' ||
                node.type === 'screen' ||
                node.type === 'plate' ||
                node.type === 'orphaned') {

                node.data.obj.childCount = count;
                tree.redraw_node(node, false, false);
            }
        };

        function enableToolbarButton(name, enabled) {
            if (enabled) {
                $('input#'+name+'Button').removeClass('button-disabled').prop('disabled', false);
            } else {
                $('input#'+name+'Button').addClass('button-disabled').prop('disabled', true);
            }
        };

        function buttonsShowHide(selected, inst) {
            // Disable all unless explicitly enabled below
            var toolbar_config = {
                "addproject":false,
                'adddataset':false,
                'addscreen':false,
                'addtag': false,
                'addtagset': false,
                'copy':false,
                'cut':false,
                'paste': false,
                'delete':false,
                'createshare':false
            };

            // We 'canCreate' top level items, E.g. Project, Dataset, Screen, if the current userId is self or 'All Members'
            var userId = {{ ome.user_id }},
                memberOfGroup = WEBCLIENT.member_of_groups.indexOf(WEBCLIENT.active_group_id) > -1,
                writeOwned = WEBCLIENT.current_admin_privileges.indexOf("WriteOwned") > -1,
                allMembers = userId === -1,
                // canCreate if looking at your own data or 'All Members' OR User's data with writeOwned
                canCreate = (userId === WEBCLIENT.USER.id || (allMembers && memberOfGroup) ||
                    (!allMembers && writeOwned));

            canCreate = canCreate && WEBCLIENT.CAN_CREATE;  // global state for read-only server
            // These nodes can be Orphans, so creation is not selection-specific
            if (canCreate) {
                toolbar_config["addproject"] = true;
                toolbar_config["adddataset"] = true;
                toolbar_config['addscreen'] = true;
                toolbar_config["addtag"] = true;
                toolbar_config["addtagset"] = true;
            }
            if(selected.length > 0) {

                // If the current selection(s) can be deleted
                // TODO Admin will have delete permissions on user
                // probably they should not be able to delete the
                // user from there
                if(OME.nodeHasPermission(selected, 'canDelete')) {
                    toolbar_config['delete'] = true;
                }

                // Only allow paste if there is a single selection and there is
                // something to paste
                if(selected.length == 1 && inst.can_paste()) {
                    // Check if the target is a suitable container for pasteing it
                    var buffer = inst.get_buffer();
                    $.each(buffer.node, function(index, node) {
                        // Never allow pasteing into orphaned or experimenter
                        // TODO What about pasteing a project from one experimenter to another?
                        // Run the standard jstree check to determine if paste is allowed as if using
                        // drag'n'drop.
                        if (inst.get_node(selected[0]).type !== 'orphaned' &&
                            inst.get_node(selected[0]).type !== 'experimenter' &&
                            inst.check(buffer.mode, node, selected[0], 0)) {
                            toolbar_config['paste'] = true;
                        } else {
                            // Break out of $.each as if one item can't paste, we can't paste
                            return false;
                        }
                    });
                }

                // Only allow cut if the selected item(s) are elligible. This uses the slightly
                // confusingly named 'is_draggable' which is part of the drag'n'drop plugin
                // which in turn uses a jstree node type property 'draggable'
                // It also checks it the selected nodes can be linked
                if(inst.settings.dnd.is_draggable(selected)) {
                    toolbar_config['cut'] = true;
                }

                // Allow Copy of Dataset/Image/Plate if you 'canLink' all selected nodes
                var canCopy = selected.reduce(function(prev, n){
                    var node_type = n.type,
                        parent_type = inst.get_node(n.parent).type;
                    // In tag tree, can't copy anything except a tag
                    var invalidType = (WEBCLIENT.TAG_TREE && node_type !== "tag");
                    // Can Copy objects under their true parent types (NOT orphaned tag, dataset etc)
                    var plink = ((node_type === "dataset" && parent_type === "project") ||
                            (node_type === "image" && parent_type === "dataset") ||
                            (node_type === "plate" && parent_type === "screen") ||
                            (node_type === "tag" && parent_type === "tagset"));
                    return (!invalidType) && plink && OME.nodeHasPermission(n, 'canLink') && prev;
                }, true);
                toolbar_config['copy'] = canCopy;

                // Only images can be added to a basket and only if they all are
                toolbar_config['createshare'] = true;
                $.each(selected, function(index, node) {
                    if (node.type != 'image' || !OME.nodeHasPermission(node, 'canLink')) {
                        toolbar_config['createshare'] = false;
                        // Break out of $.each
                        return false;
                    }
                });

            }

            for (var btnName in toolbar_config) {
                enableToolbarButton(btnName, toolbar_config[btnName]);
            }
        };


        // Helper method used by linkNode and unlinkNode below.
        // Simply adds parent_type, parent_id, child_type & child_id to payload object
        // e.g. {"dataset":{"10":{"image":[1,2,3]}}}:
        function addDataToPayload(payload, node, parent) {
            var parent_id = parent.data.obj.id,
                parent_type = parent.type,
                child_id = node.data.obj.id,
                child_type = node.type;
            // payload is payload.parent_type.parent_id.child_type: [child_ids]
            if (!(parent_type in payload)) payload[parent_type] = {};
            if (!(parent_id in payload[parent_type])) {
                payload[parent_type][parent_id] = {};
            }
            if (!(child_type in payload[parent_type][parent_id])) {
                payload[parent_type][parent_id][child_type] = [];
            }
            payload[parent_type][parent_id][child_type].push(child_id);
        }

        // linkNode and unlinkNode (below) use a 'debounce' timeout to collect
        // many link or unlink calls into a single AJAX call.
        // On each call to linkNode or unlinkNode, we add the data from node & parent
        // to the payload that we submit. This is sent once the timeout expires.
        // linkNode and unlinkNode both return a deferred promise that will be
        // resolved when the AJAX call returns.
        var linkNodeTimeout,
            linkPayload = {},
            deferredLink = jQuery.Deferred();
        function linkNode(inst, node, parent) {

            // doLink is called on timeout to submit AJAX call
            var doLink = function() {
                // we send a reference to the deferred...
                var dd = deferredLink;
                // ...and create a new deferred to handle subsequent calls to linkNode
                deferredLink = jQuery.Deferred();

                // Do the call, and resolve the deferred when done
                $.ajax({
                    url: "{% url 'api_links' %}",
                    type: "POST",
                    data: JSON.stringify(linkPayload),
                    dataType: 'json'
                })
                .done(function(data){
                    dd.resolve(data);
                });

                // empty the payload, ready for sebsequent calls
                linkPayload = {};
            };

            // build up an object with all the links we want to create
            addDataToPayload(linkPayload, node, parent)       

            // if we're waiting on timeout, clear this...
            if (linkNodeTimeout) {
                clearTimeout(linkNodeTimeout);
            }
            // ...start new timeout
            linkNodeTimeout = setTimeout(doLink, 10);

            // return a promise (cannot call resolve() on it elsewhere)
            return deferredLink.promise();

        }

        // See docs above for linkNode (works the same as unlinkNode)
        var unlinkNodeTimeout,
            unlinkPayload = {},
            deferredUnlink = jQuery.Deferred();
        function unlinkNode(inst, node, parent) {
            var doUnlink = function() {
                var dd = deferredUnlink;
                deferredUnlink = jQuery.Deferred();
                $.ajax({
                    url: "{% url 'api_links' %}",
                    type: "DELETE",
                    data: JSON.stringify(unlinkPayload),
                    dataType: 'json'
                })
                .done(function(data){
                    dd.resolve(data);
                });
                unlinkPayload = {};
            };
            addDataToPayload(unlinkPayload, node, parent)       
            if (unlinkNodeTimeout) {
                clearTimeout(unlinkNodeTimeout);
            }
            unlinkNodeTimeout = setTimeout(doUnlink, 10);
            return deferredUnlink.promise();
        };

        // Remove duplicate nodes, normally as a result of copy_node
        // or move_node
        // Global function, called from omecut_plugin
        function removeDuplicate(inst, node, parentId) {
            var parent = inst.get_node(parentId),
                found = false;
            $.each(parent.children, function(index, childId) {
                var child = inst.get_node(childId);
                if (child.type === node.type &&
                    child.data.obj.id === node.data.obj.id &&
                    child.id != node.id) {
                    inst.delete_node(child);
                    found = true;
                    // Break out of $.each
                    return false;
                }
            });
            return found;
        };

        // Stuff to do on load...
        $(function()
            {
                // We (un)truncate images when the left panel resizes...
                $("#left_panel").on('resize', function(event) {
                    var inst = $.jstree.reference('#dataTree');
                    inst.redraw(true);
                });

                // Handle creation of new Project, Dataset or Screen...
                $("#new-container-form").dialog({
                    autoOpen: false,
                    resizable: true,
                    height: 280,
                    width:420,
                    modal: true,
                    buttons: {
                        "OK": function() {
                             createNewContainer();
                             $( this ).dialog( "close" );
                        },
                        "Cancel": function() {
                            $( this ).dialog( "close" );
                        }
                    }
                });

                // same code is called from closing dialog or 'submit' of form
                $("#new-container-form").submit(function() {
                    $("#new-container-form").dialog( "close" );
                    createNewContainer();
                    return false;
                });

                var createNewContainer = function() {
                    var cont_type = $("#new_container_type").text().toLowerCase();  // E.g. 'project'
                    var $f = $("#new-container-form");
                    var new_container_name = $("input[name='name']", $f).val();
                    var new_container_desc = $("textarea[name='description']", $f).val();
                    var new_container_owner = $("input[name='owner']", $f).val();
                    if ($.trim(new_container_name).length == 0) {
                        alert("Please enter a Name");
                        return;
                    }

                    // If images under orphaned are selected, note IDs (for adding to new dataset)
                    var inst = $.jstree.reference('#dataTree');
                    var selected = inst.get_selected(true);
                    // TODO Only keeping img_ids because it is simpler to POST the data using that
                    // Can be removed when updating the ajax call
                    var img_ids = [];
                    var orphaned_image_nodes = [];

                    $.each(selected, function(index, node) {
                         if (node.type === 'image' &&
                             inst.get_node(inst.get_parent(node)).type === 'orphaned' &&
                             OME.nodeHasPermission(node, 'canLink')) {
                            img_ids.push(node.data.obj.id);
                            orphaned_image_nodes.push(node);
                         }
                    });

                    // Default: Create an orphan of "folder_type" ('project', 'dataset', 'screen', 'tag', 'tagset' etc. )
                    url = '{% url 'manage_action_containers' "addnewcontainer" %}';
                    // Find the 'experimenter' node as parent
                    var root = inst.get_node('#');
                    $.each(root.children, function(index, id) {
                        var node = inst.get_node(id);
                        if (node.type === 'experimenter' && node.data.obj.id === {{ ome.user_id }}) {
                            parent = node;
                            // Break out of each
                            return false;
                        }
                    });

                    // If a project is selected (or selected is a child of project) create dataset under it
                    var url, position = 0;
                    var parent = false;
                    if (selected.length > 0 && cont_type == 'dataset') {
                        if (selected[0].type === 'project') {
                            parent = selected[0];
                        } else if (inst.get_node(selected[0].parent).type === 'project') {
                            parent = inst.get_node(selected[0].parent);
                        }
                    // If a tagset is selected (or selected is a child of tagset), create tag under it
                    } else if(selected.length > 0 && cont_type == 'tag') {
                        if (selected[0].type === 'tagset') {
                            parent = selected[0];
                        } else if (inst.get_node(selected[0].parent).type === 'tagset') {
                            parent = inst.get_node(selected[0].parent);
                        }
                    }
                    if (parent) {
                        url = '{% url 'manage_action_containers' "addnewcontainer" %}' + parent.type + '/' + parent.data.obj.id + '/';
                    } else {
                        // otherwise create an orphan of "folder_type" ('project', 'dataset', 'screen', 'tag', 'tagset' etc. )
                        url = '{% url 'manage_action_containers' "addnewcontainer" %}';
                        // Find 'experimenter' to be parent
                        var root = inst.get_node('#');
                        $.each(root.children, function(index, id) {
                            var node = inst.get_node(id);
                             if (node.type === 'experimenter' && node.data.obj.id === {{ ome.user_id }}) {
                                parent = node;
                                // Break out of each
                                return false;
                             }
                        });
                    }

                    var ajax_data = {
                            "name" : new_container_name,
                            "folder_type" : cont_type,
                            "description" : new_container_desc,
                            "owner": new_container_owner
                        }
                    if (img_ids.length > 0){
                        ajax_data['image'] = img_ids;
                    }
                    $.ajax({
                        url: url,
                        data: ajax_data,
                        dataType: "json",
                        type: "POST",
                        traditional: true,
                        success: function(r){

                            var data = {
                                'id': r['id'],
                                'isOwner': true,
                                'ownerId': {{ ome.user.id }},
                                'name': new_container_name,
                                'permsCss': 'canEdit canAnnotate canLink canDelete canChgrp'
                            };

                            var node = {
                                'data': {'id': r['id'], 'obj': data},
                                'text': new_container_name,
                                'children': false,
                                'type': cont_type,
                                'li_attr': {
                                    'class': cont_type,
                                    'data-id': r['id']
                                }
                            };

                            // Create the node, move any orphans into it and select only it
                            node = JSON.parse(JSON.stringify(node));
                            inst.create_node(parent, node, 'last', function(node) {
                                if (orphaned_image_nodes.length > 0) {
                                    inst.move_node(orphaned_image_nodes, node);
                                }
                                // There is no need to update duplicates at the moment as nothing that
                                // can be created could have a duplicate to need updating
                                inst.deselect_all();
                                inst.select_node(node);
                                //TODO Scroll to new if off screen? https://github.com/vakata/jstree/issues/519
                            });
                        }
                    });
                };

                $("#delete-dialog-form").dialog({
                    dialogClass: 'delete_confirm_dialog',
                    autoOpen: false,
                    resizable: true,
                    height: 210,
                    width:420,
                    modal: true,
                    buttons: {
                        "Yes": function() {
                            $("#delete-dialog-form").data("clicked_button", "Yes");
                            $( this ).dialog( "close" );
                        },
                        "No": function() {
                            $("#delete-dialog-form").data("clicked_button", "No");
                            $( this ).dialog( "close" );
                        }
                    }
                });

        });
    </script>

    <!-- configure toolbar buttons -->
    <script type="text/javascript">

    $(function () {

        var inst = $.jstree.reference('#dataTree');

        // Attach click handlers to the individual buttons

        $('#addprojectButton').click(function() {
            OME.handleNewContainer("project");
        });

        $('#adddatasetButton').click(function() {
            OME.handleNewContainer("dataset");
        });

        $('#addscreenButton').click(function() {
            OME.handleNewContainer("screen");
        });

        $('#addtagButton').click(function() {
            OME.handleNewContainer("tag");
        });

        $('#addtagsetButton').click(function() {
            OME.handleNewContainer("tagset");
        });

        $('#copyButton').click(function() {
            var objs = inst.get_selected(true)
            inst.copy(objs);
        });

        $('#cutButton').click(function() {
            var objs = inst.get_selected(true)
            inst.cut(objs);
        });

        $('#createshareButton').click(function() {
            OME.createShare(inst.get_selected());
        });

        $('#pasteButton').click(function() {
            var objs = inst.get_selected(true);
            if (objs.length == 1) {
                inst.paste(objs[0]);
                // Always disable paste button immediatly after using it
                enableToolbarButton('paste', false);
            }
        });

        $('#deleteButton').click(function() {
            var deleteUrl = "{% url 'manage_action_containers' 'deletemany' %}",
                filesetCheckUrl = "{% url 'fileset_check' 'delete' %}";
            OME.handleDelete(deleteUrl, filesetCheckUrl, {{ ome.user.id }});
        });

        $('#refreshButton').click(function() {
            // Ensure the button cannot be clicked again while we are
            // performing a refresh.  The "refresh.jstree" event handler
            // is in ome.tree.js and will be responsible for enabling the
            // button again.
            event.target.disabled = true;

            // Grab the paths to the items that are currently selected, for restoration later
            var selections = inst.get_selected();

            $.each(selections, function(index, selection) {
                 var path = inst.get_path(selection, false, true).reverse();
                 var refreshPathReverse = [];
                 $.each(path, function(index, pathComponent) {
                      var node = inst.get_node(pathComponent);
                      var tuple = [node.type, node.data.obj.id];
                      refreshPathReverse.push(tuple);
                 });
                 refreshPathsReverse.push(refreshPathReverse);

            });

            inst.deselect_all();
            // NB: the global variable refreshPathsReverse is used in ome.tree.js
            // after refresh, then set to empty list.
            inst.refresh();
        });

    });
    </script>

    <!-- set up the middle panel to only show the div chosen by <select> -->
    {% include "webclient/data/includes/center_plugin_init.js.html" %}

    <!-- include code to handle primary 'thumbs' middle plugin -->
    {% include "webclient/data/includes/center_plugin.thumbs.js.html" %}

    {% for cp in ome.center_plugins %}
        {% include cp.include %}
    {% endfor %}



{% endblock %}


{% block left %}

<div class="left_panel_content">

    <div id="left_panel_tabs" class="left_panel_tabs_container ui-tabs">

        <ul id="left_panel_tab_list" class="ui-tabs-nav">

            <!-- Remember to update this in public/public.html as well. We should change this, but for the meantime, you need to manually update the menu there too -->

            <li id="explore_tab" class="ui-state-default{% ifequal menu 'userdata' %} ui-tabs-active{% endifequal %}">
                <a href="{% url 'load_template' 'userdata' %}" class="ui-tabs-anchor" title="Explore">{% trans "Explore" %}</a>
            </li>
            <li id="tags_tab" class="ui-state-default{% ifequal menu 'usertags' %} ui-tabs-active{% endifequal %}">
                <a href="{% url 'load_template' 'usertags' %}" class="ui-tabs-anchor">{% trans "Tags" %}</a>
            </li>
            <li id="public_tab" class="ui-state-default">
                <a href="{% url 'load_template' 'public' %}" class="ui-tabs-anchor">{% trans "Shares" %}</a>
            </li>

        </ul>

        <!-- toolbar above tree -->
        <div class="left_panel_toolbar" >

            <!-- Show Projects toolbar for main page... -->
            <ul class="toolbar">

                {% if menu == 'userdata' %}

                    <li><input id="addprojectButton" class="button button-disabled" type="image"
                               src="{% static "webclient/image/folder16.png" %}" alt="Create new project"
                               title="Create new Project"/></li>
                    <li><input id="adddatasetButton" class="button button-disabled" type="image"
                               src="{% static "webclient/image/folder_image16.png" %}" alt="Create new dataset"
                               title="Create new Dataset"/></li>
                    <li><input id="addscreenButton" class="button button-disabled" type="image"
                               src="{% static "webclient/image/folder_screen16.png" %}" alt="Create new screen"
                               title="Create new Screen"/></li>

                {% elif menu == 'usertags' %}

                    <li><input id="addtagsetButton" class="button button-disabled" type="image"
                               title="Create new Tag Set"
                               src="{% static "webclient/image/left_sidebar_icon_tags.png" %}"
                               alt="Create new dataset"/></li>
                    <li><input id="addtagButton" class="button button-disabled" type="image" title="Create new Tag"
                               src="{% static "webclient/image/left_sidebar_icon_tag.png" %}" alt="Create new project"/></li>

                {% endif %}

                <li class="seperator"></li>

                <li><input id="cutButton" class="button button-disabled" type="image"
                           src="{% static "webclient/image/icon_toolbar_cut.png" %}" alt="Cut Link" title="Cut Link"/>
                </li>
                <li><input id="copyButton" class="button button-disabled" type="image"
                           src="{% static "webclient/image/icon_toolbar_copy.png" %}" alt="Copy Link"
                           title="Copy a link to the selected object"/></li>
                <li><input id="pasteButton" class="button button-disabled" type="image"
                           src="{% static "webclient/image/icon_toolbar_paste.png" %}" alt="Paste Link"
                           title="Paste the copied link"/></li>

                <li class="seperator">

                <li><input id="deleteButton" class="button button-disabled" type="image"
                           src="{% static "webclient/image/icon_toolbar_delete.png" %}" alt="Delete" title="Delete"/>
                </li>

                <li class="seperator">

                <li><input id="createshareButton" class="button button-disabled" type="image"
                           src="{% static "webclient/image/icon_toolbar_share2.png" %}" alt="Create Share"
                           title="Create Share"></li>

                <li class="seperator"></li>

                <li><input id="refreshButton" class="button" type="image"
                           src="{% static "webclient/image/icon_toolbar_refresh.png" %}" alt="Refresh" title="Refresh">
                </li>

            </ul>

        </div>

    </div>

    <div class="left_panel_tree_container">

        <div id="tree_details" class="left_panel_tree">
            <div class="dataTree" id="dataTree"></div>
        </div>

        <!-- Panel hidden unless needed for showing spatial birds eye view of Wells - see ome.spwgridview.js -->
        <div id="well_details" class="left_panel_preview">
            <div class="left_panel_preview__header">
                <span class="left_panel_preview__title--centered
                             left_panel_preview__title--medium">
                    Field positions in well
                </span>
                <a id="hide_well_birds_eye" class="left_panel_preview__close action" href="#">X</a>
            </div>
            <div id="well_birds_eye_container" class="left_paneL_preview__content">
                <div id="well_birds_eye" class="left_paneL_preview__well"></div>
            </div>
        </div>

    </div>

</div>

<!-- hidden form for delete dialogs -->
<div id="delete-dialog-form" title="Delete" style="display:none"
        data-url="{% url 'manage_action_containers' 'deletemany' %}"
        data-fileset-check-url="{% url 'fileset_check' 'delete' %}">
    <p id="deleteOthersWarning" class='error' style="font-size: 120%; font-weight: bold">
        Warning: Some objects you selected are owned by other users.
    </p>
    <p id="deleteCopyWarning" class='error' style="font-size: 120%; font-weight: bold">
        Warning: One or more <span class="delete_type">Images</span> are linked to multiple
        <span class="delete_parent_type">Dataset</span>s.
        This will DELETE them from ALL of those
        <span class="delete_parent_type">Dataset</span>s.
        If you only wish to remove <span class="delete_type">Images</span> from one
        <span class="delete_parent_type">Dataset</span>, use the
        "Cut Link" action.
    </p>
    <p>Are you sure you want to delete the selected <span class="delete_type">Images</span>?</p>
    <p>If yes:</p>
    <form>
    <fieldset style="border: 0px solid white">
        <input type="checkbox" name="delete_anns" id="delete_anns" />
        Also delete any Annotations that become 'orphans'?<br/>
    </fieldset>
    </form>
</div>

<!-- hidden dialog for new Container -->
<form id="new-container-form" title="New..." style="display:none">
    <p>Create a new <span id="new_container_type">Container</span>...</p>
    <p id="new_pds_owner_controls">
        <img class="new_pds_owner_icon" src="{% static 'webclient/image/icon_settings_user.png' %}">
        <label>Assign to Owner:</label> <span id="new_pds_owner"></span>
        {{ new_container_form.owner }}
    <p>
        <label for="id_name">Name:</label>
        {{ new_container_form.name }}
    </p>
    <p style="margin-bottom: 5px">
        <label for="id_description">Description:</label><br />
        {{ new_container_form.description }}
    </p>
</form>

<!-- hidden form for chgrp -->
<form id="chgrp-form" title="Move to Group" action="{% url 'chgrp' %}" style="display:none" method="POST">{% csrf_token %}
</form>
<!-- hidden form for chown -->
<form id="chown-form" title="Change Owner" action="{% url 'chown' %}" style="display:none" method="POST">{% csrf_token %}
</form>

{% endblock %}

