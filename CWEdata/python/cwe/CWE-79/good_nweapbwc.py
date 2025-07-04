{% extends "webgateway/core_html.html" %}
{% load i18n %}
{% load common_filters %}

{% comment %}
<!--
 omero_image - django html template

 Copyright (c) 2007-2014 Glencoe Software, Inc. All rights reserved.

 This software is distributed under the terms described by the LICENCE file
 you can find at the root of the distribution bundle, which states you are
 free to use it only for non commercial purposes.
 If the file is missing please request a copy by contacting
 jason@glencoesoftware.com.
-->
{% endcomment %}



{% block link %}

    <!-- Make the width fit the mobile viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

    {% for href in extra_css %}
    <link rel="stylesheet" type="text/css" href="{{ href }}" />
    {% endfor %}

    <link rel="stylesheet" type="text/css" href="{% static "webgateway/css/ome.viewport.css"|add:url_suffix %}" media="all" />
    <link rel="stylesheet" type="text/css" href="{% static "webgateway/css/ome.toolbar.css"|add:url_suffix %}" media="all"/>
    <link rel="stylesheet" type="text/css" href="{% static "webgateway/css/ome.gs_slider.css"|add:url_suffix %}" media="all" />
    <link rel="stylesheet" type="text/css" href="{% static "webgateway/css/base.css"|add:url_suffix %}" media="all" />
    <link rel="stylesheet" type="text/css" href="{% static "webgateway/css/ome.snippet_header_logo.css"|add:url_suffix %}" media="all" />
    <link rel="stylesheet" type="text/css" href="{% static "webgateway/css/ome.postit.css"|add:url_suffix %}" />
    <link rel="stylesheet" type="text/css" href="{% static "3rdparty/farbtastic-1.2/farbtastic.css" %}" media="all" />
    <link rel="stylesheet" type="text/css" href="{% static "webgateway/css/ome.colorbtn.css"|add:url_suffix %}" />
    <link rel="stylesheet" type="text/css" href="{% static "3rdparty/JQuerySpinBtn-1.3a/JQuerySpinBtn.css" %}" />
    <link rel="stylesheet" type="text/css" href="{% static "webgateway/css/omero_image.css"|add:url_suffix %}" media="all" />
    <link rel="stylesheet" type="text/css" href="{% static "3rdparty/panojs-2.0.0/panojs.css" %}" media="all" />

{% if opengraph %}
    <meta name="og:title" content="{{ image.getName|escape }}">
    <meta name="og:type" content="website">
    <meta name="og:site_name" content="{{ opengraph }}">
    <meta name="og:description" content="{{ image.getDescription|default:image.getOwner.getName|escape }}">
    <meta name="og:url" content="{{ page_url }}">
    <meta name="og:image" content="{{ image_preview }}512/">
{% endif %}

{% if twitter %}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="{{ twitter|escape }}">
    <meta name="twitter:title" content="{{ image.getName|truncateafter:'67'|escape }}">
    <meta name="twitter:description" content="{{ image.getDescription|default:image.getOwner.getName|truncateafter:'197'|escape }}">
    <meta name="twitter:creator" content="{{ twitter|escape }}">
    <meta name="twitter:image" content="{{ image_preview }}280/">
{% endif %}

{% endblock %}

{% block script %}

    {% for src in extra_js %}
    <script type="text/javascript" src="{{ src }}"></script>
    {% endfor %}

    <!-- jquery -->
    {% include "webgateway/base/includes/script_src_jquery.html" %}
    {% include "webgateway/base/includes/script_src_popup.html" %}

	<script type="text/javascript" src="{% static "3rdparty/aop-1.3.js" %}"></script>

	<script type="text/javascript" src="{% static "webgateway/js/ome.gs_utils.js"|add:url_suffix %}"></script>
	<script type="text/javascript" src="{% static "webgateway/js/ome.viewportImage.js"|add:url_suffix %}"></script>
	<script type="text/javascript" src="{% static "webgateway/js/ome.gs_slider.js"|add:url_suffix %}"></script>
	<script type="text/javascript" src="{% static "webgateway/js/ome.viewport.js"|add:url_suffix %}"></script>
  <script type="text/javascript" src="{% static "webgateway/js/omero_image.js"|add:url_suffix %}"></script>

  <!-- jquery-ui -->
  {% include "webgateway/base/includes/jquery-ui.html" %}

    <script type="text/javascript" src="{% static "webgateway/js/ome.smartdialog.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/JQuerySpinBtn-1.3a/JQuerySpinBtn.js" %}"></script>
    <script type="text/javascript" src="{% static "webgateway/js/ome.colorbtn.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "webgateway/js/ome.postit.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/jquery.selectboxes-2.2.6.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/farbtastic-1.2/farbtastic.js" %}"></script>
    <script type="text/javascript" src="{% static "webgateway/js/ome.gs_utils.js"|add:url_suffix %}"></script>
    
    <script type="text/javascript" src="{% static "webgateway/js/ome.scalebardisplay.js"|add:url_suffix %}"></script>
    <!-- for display of ROIs over the image -->
    <script type="text/javascript" src="{% static "webgateway/js/ome.roidisplay.js"|add:url_suffix %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/raphael-2.1.0/raphael-min.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/raphael-2.1.0/scale.raphael.js" %}"></script>

    <script type="text/javascript" src="{% static '3rdparty/underscore/underscore-1.13.1-umd-min.js' %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/d3-3.5.17/d3.min.js" %}"></script>
    <script type="text/javascript" src="{% static "webgateway/js/ome.histogram.js"|add:url_suffix %}"></script>

    <!-- big images -->

    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/extjs/ext-core.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/utils.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/PanoJS.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/controls.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/pyramid_Bisque.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/pyramid_imgcnv.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/pyramid_Zoomify.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/control_thumbnail.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/control_info.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/control_svg.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/control_roi.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/panojs-2.0.0/control_scalebar.js" %}"></script>
    <script type="text/javascript" src="{% static "3rdparty/jquery.mousewheel-3.0.6.js" %}"></script>

    <!-- hammer.js for tablet gestures -->
    <script type="text/javascript" src="{% static "3rdparty/hammer-2.0.2/hammer.min.js" %}"></script>
    
{% endblock %}


{% block title %}
    {{ image.getName }}
{% endblock %}


{% block head %}
    {% block header_content %}
      <div id="header"></div>
    {% endblock %}
    {% block header_menu %}
    {% endblock %}
{% endblock %}


{% block body %}

{% block full_body %}
<script type="text/javascript">
  /* <![CDATA[ */

  var PLATE_LINKS_URL_999 = '{% url 'webgateway_object_table_query' 'Screen.plateLinks.child.wells' 999 %}';
  var PLATE_WELLS_URL_999 = '{% url 'webgateway_object_table_query' 'Plate.wells' 999 %}';


  /**
   * The viewport object holds the image browsing viewport that has all the logic for connecting to
   * the supporting ajax server.
   */
  var viewport;
  var on_batchCopyRDefs = false;

  /**
   * Zoom input box change event handler.
   */
  function zoomCheck (i) {
    var percent = parseFloat($(i).val());
    if (isNaN(percent)) {
      percent = 100;
    }
    /* Zoom window */
    viewport.setZoom(percent);
  }

  function hidePicker () {
    $(".picker").get(0) && $(".picker").get(0).hide_picker && $(".picker").get(0).hide_picker();
    /*$('.picker-selected').html('&nbsp;');*/
  }

  /**
   * Bound to the window resize, calculates the viewport size and top tool box positions.
   */
  var calcResize = function () {
    var dim = { height: $(window).height(),
                width: $(window).width()};

    var ts_visible = $('.figure-box').length && $('.figure-box').css('display') != "none";
    var zl = $('#z-axis-legend');
    var tl = $('#t-axis-legend');
    /* Resize the viewport */
    $.extend(dim, viewport.self.offset());

    var h = dim.height - dim.top - 33 - (ts_visible?$('.figure-box').height():0);
    var w = dim.width - dim.left  - zl.width() - {% block vpRightMargin %}0{% endblock %};

    /* The following is needed as a hack for IE */
    //TEMP CHANGE, causing extra step of tiling
    //viewport.viewport.height(10);

    viewport.self
      .height(h - tl.height())
      .width(w);
    viewport.refresh(true);


    //ts_visible &&
    $('.figure-box')
      .width(dim.width - dim.left - {% block fbCloseBtnWidth %}20{% endblock %} + zl.width())
      .css('top',viewport.self.height()+15+tl.height());

    zl.css('top', h/2 - (zl.height()/2));
    tl.css({top: h-tl.height()+15, left: (w/2)+dim.left - (tl.width()/2)});
  };

  var getMetadata = function () {
    return viewport.getMetadata();
  }

  var showChannelWindowHelp = function () {
    if (!gs_loadBlockUI (showChannelWindowHelp)) {
      return false;
    }
    $.blockUI({
      timeout: 0,
      message: $('#channel-window-help'),
{% if image.canAnnotate %}
      css: {width: '60%', left: '20%', top: '20%'}
{% else %}
      css: {width: '50%', left: '25%', top: '20%'}
{% endif %}
    });
    $('.blockMsg').attr('title','Click to close').on('click', $.unblockUI);
    $('.blockOverlay').attr('title','Click to close').on('click', $.unblockUI);
    return false;
  }

  // for some reason we have to bind 'Color' checkbox click like this
  var handleModelCheckbox = function (e) {
    console.log("handleModelCheckbox");
    // apply change to greyscale immediately
    setModel(viewport, $("#rd-wblitz-rmodel").get(0).checked?'g':'c');
  }


  /**
   * Set the projection based on the clicked element name.
   */
  var setProjection = function (obj) {
    viewport.setProjection($(obj).attr('value'));
  };

  /**
   * Checks the currently selected rendering projection and applies interface customizations as needed.
   * Bound to the viewport projectionChange event.
   */
  var projectionChange = function (ev, obj, nosync) {
    var p = viewport.getProjection();
    if (p) {
      $('[name="wblitz-proj"]').parent().removeClass('selected');
      $('[name="wblitz-proj"][value='+p+']').on('click', ).parent().addClass('selected');
//    if (p) {
//      var pr = $('#wblitz-proj > [value='+p+']');
//      if (pr.length) {
//        pr.prop('selected',true);
//      }
      if (p != 'normal') {
        editLinePlot(false);
      }
      // disable line-plot for max projection, split-view etc
      $('#wblitz-lp-enable').prop('disabled', p != 'normal');
      //$('#wblitz-channels-box button').prop('disabled', p == 'split');
    }
    //nosync || syncRDCW(viewport);
  };

  /**
   * Checks the currently selected rendering model and applies interface customizations as needed.
   * Bound to the viewport modelChange event.
   */
  var modelChange = function (ev, obj) {
    var btns = $('button[id^=wblitz-ch]').not('[id$=color]');
    if (viewport.isGreyModel()) {
      btns.addClass('forcegrey');
    } else {
      btns.removeClass('forcegrey');
    }
    // update both checkboxes to keep in sync.
    $('#wblitz-rmodel').prop('checked', viewport.isGreyModel());
    $('#rd-wblitz-rmodel').prop('checked', viewport.isGreyModel());
    //syncRDCW(viewport);
  };

  /**
   *
   */
  var linePlotChange = function (ev, show) {
    if (show) {
      if (!viewport.hasLinePlot()) {
        viewport.startPickPos();
      }
      var lp = viewport.getLinePlot();
      $('#wblitz-lp-axis').html(lp.isHorizontal() ? 'Y': 'X');
      $('#wblitz-lp-enable').prop('checked', 'checked');
      $('#wblitz-lp-editpos').val(lp.position).show();
      $('#wblitz-lp-wrap').show();
      $('#wblitz-lp-btn').html('apply');
      $('#wblitz-lp-axis-select').selectOptions(lp.isHorizontal() ? 'h': 'v');
    } else {
      viewport.stopPickPos();
      $('#wblitz-lp-enable').prop('checked', false);
      $('#wblitz-lp-wrap').hide();
      $('#wblitz-lp-cur').html('');
    }
  }

  var editLinePlot = function (show) {
    if (show) {
      viewport.prepareLinePlot($('#wblitz-lp-axis-select option[selected]').val() || 'h');
    } else {
      viewport.hidePlot();
    }
    linePlotChange(null, show);
  }

  var prepLinePlot = function (val) {
    viewport.prepareLinePlot(val);
    $('#wblitz-lp-axis').html(viewport.getLinePlot().isHorizontal() ? 'Y': 'X');
  }

  var showLinePlot = function () {
    viewport.loadPlot(parseInt($('#wblitz-lp-editpos').val()));
    $('#wblitz-lp-cur').html('showing: ' + (viewport.getLinePlot().isHorizontal() ? 'Y': 'X') + ' = ' + parseInt($('#wblitz-lp-editpos').val()));
  }


  var axisChange = function () {
    if(viewport.loadedImg.rdefs.invertAxis) {
      $('#z-axis-legend').attr('src', '{% static "webgateway/img/t_axis_revert.gif" %}');
      $('#t-axis-legend').attr('src', '{% static "webgateway/img/z_axis_revert.gif" %}');
    } else {
      $('#z-axis-legend').attr('src', '{% static "webgateway/img/z_axis.gif" %}');
      $('#t-axis-legend').attr('src', '{% static "webgateway/img/t_axis.gif" %}');
    }
  }


  var show_scalebar = function () {
    {% if image.getPixelSizeX %}
    if (!viewport.viewportimg.get(0).show_scalebar) {
    // if the Scalebar plugin has not been initialised (method not available...) init and load Scalebar...
        var options = {'pixSizeX': viewport.getPixelSizes().x,
                       'imageWidth': viewport.getSizes().width};
        if (viewport.loadedImg.tiles) {
            options['tiles'] = true;
        }
        viewport.viewportimg.scalebar_display(options);
    }
    
    viewport.viewportimg.get(0).setScalebarZoom(viewport.getZoom()/100 );
    viewport.viewportimg.get(0).show_scalebar();
    {% endif %}
  }
  
  var hide_scalebar = function () {
      viewport.viewportimg.get(0).hide_scalebar();
  }
  
  /**
  *     ROI load & table methods
  */

  var refresh_rois = function (theZ, theT, rois_filter) {
      // re-plots the ROIs (if currently shown) for new Z and T position
      if (viewport.viewportimg.get(0).refresh_rois) {
          var theT = viewport.getTPos();
          var theZ = viewport.getZPos();
          // avoid to clear filter when changing image (changing channels, Z or T)
          rois_filter = (rois_filter ? rois_filter : viewport.viewportimg.get(0).get_current_rois_filter());
          viewport.viewportimg.get(0).refresh_rois(theZ, theT, rois_filter);
      }
  }

  var show_rois = function (theZ, theT, filter) {
      var theT = viewport.getTPos();
      var theZ = viewport.getZPos();

      {% if image %}
      // if the ROI plugin has not been initialised (method not available...) init and load ROIs...
      if (!viewport.viewportimg.get(0).show_rois) {
          var options = {'width':{{ image.getSizeX }},
                     'height':{{ image.getSizeY }},
                     'webgateway_index':'{% url "webgateway" %}',
                     'json_url':'{% url 'webgateway_get_rois_json' image.id %}'};
          if (viewport.loadedImg.tiles) {
              options['tiles'] = true;
          }
          viewport.viewportimg.roi_display(options);
          viewport.viewportimg.get(0).setRoiZoom(viewport.viewportimg.get(0).getZoom());
      }
      {% endif %}

      // Show postit. Table will be built on callback from loading
      $("#roi_table_postit").show();
      // Check all ROI visibility buttons
      $('#toggle_roi_visibility').prop("checked", true);
      $('[class^="shape_visibility"]').each(function(index, checkbox) {
        checkbox.checked = true;
      });
      // if roi_table_postit is closed using close button, hide ROIs
      $(".postit-close-btn").on("click", function() {hide_rois(); return false;});

      var $show_rois_a = $("#show-rois-a");
      // Disable the "Show ROIs" button ...
      if ($show_rois_a.attr("onclick") != undefined)
        $show_rois_a.removeAttr("onclick");
      else
        $show_rois_a.off("click");
      $show_rois_a.removeAttr("href");
      $show_rois_a.css("color", "gray");
      // ... and enable the "Hide ROIs" button
      $("#hide-rois-a").on("click", function(){hide_rois(); return false;})
              .attr("href", "#")
              .css("color", "");

      // loads ROIs (if needed) and shows.
      viewport.viewportimg.get(0).show_rois(theZ, theT, filter);
  }


  var hide_rois = function() {
      // hides the display of ROIs.
      if (viewport.viewportimg.get(0).hide_rois) {
          viewport.viewportimg.get(0).hide_rois();
      }

      // Disable the "Hide ROIs" button ...
      $("#hide-rois-a").off("click")
              .removeAttr("href")
              .css("color", "gray");
      // ... and enable the "Show ROIs" button
      $("#show-rois-a").on("click", function () { show_rois(); return false; })
              .attr("href", "#")
              .css("color", "");

      $("#roi_table_postit").hide();
      $(".postit-close-btn").off("click");
  }

  var NOZT = "";
  // builds an html table of ROI data. All collapsed.
  var build_roi_table = function() {
      var $roi_table = $("#roi_small_table");
      var json = viewport.viewportimg.get(0).get_roi_json();

      $roi_table.find('tbody').remove();

      // give users a small selection of colours for lines on roi_thumbnails
      var colours = {'red':'#f00', 'white':'#fff', 'black':'#000', 'blue':'#00f', 'green':'#0f0', 'yellow':'#ff0'}
      var color_picker = "";
      for (var c in colours) {
          color_picker += "<div class='color_picker_option' color='" + colours[c] + "' style='background: " + colours[c] + "'> </div>";
      }
      var toggle_roi_thumbs = "<input type='checkbox' id='toggle_roi_thumbs' title='Show ROI Previews' />";
      var toggle_shape_text = "<input type='checkbox' id='toggle_shape_text' checked='true' title='Show/Hide ROI text labels' />";
      var toggle_roi_visibility = "<input type='checkbox' id='toggle_roi_visibility' checked='true' title='Show/Hide ROIs and shapes' />";

      // thead for whole table:
      var roi_html = "<thead id='roi_table_head'><tr>";
      roi_html += "<th></th>";
      roi_html += "<th></th>"; // first shape (count)
      roi_html += "<th>ID</th>";
      roi_html += "<th>Z</th>"; // no Z for ROI
      roi_html += "<th>T</th>"; // no T for ROI
      roi_html += "<th>" + toggle_shape_text + " Text</th>";
      roi_html += "<th title='Pick color of ROI outlines'><div style='white-space:nowrap;'>" + toggle_roi_thumbs + "Preview</div>"+ color_picker + "</th>";
      roi_html += "<th>" + toggle_roi_visibility + " Show</th>";
      roi_html += "</tr></thead>";
      $roi_table.append($(roi_html));

      get_shape_icon_src = function(type, klass) {
          var shape_icons = {'Line':'line16.png', 'Ellipse':'ellipse16.png',
            'Polygon':'polygon16.png', 'Rectangle':'rectangle16.png', 'Mask': 'mask16.png',
            'Point':'point16.png', 'Label':'text16.png', 'PolyLine':'line16.png'}
          if (type in shape_icons) {
              return "<img class='"+ klass +"' src='{% static 'webgateway/img/' %}" + shape_icons[type] + "' />";
          }
          return "";
      }
      var truncate_length = 30;
      truncate_text = function(text_string) {
          if (text_string.length < truncate_length)
              return text_string
          return text_string.substring(0,truncate_length) + "...";
      }
      // populate table. Cols are: ID, Z, T, Shape, text, visibility
      for (var r=0; r<json.length; r++) {
          var roi = json[r];
          var shapes = roi['shapes'];

          // thumbnail of roi - display small & popup full-size
          var line_color = 'f00';   // store current line color, used when we 'show' thumbs to get url.
          var roiThumbHtml = "<img src='' id='"+ roi['id'] +"_roi_thumb' color='"+ line_color +"' width=50 height=33 class='roi_thumb'>";

          // visibility check for ROI, used to turn ON\OFF all connected shapes
          var roiVisibilityHtml = "<input type='checkbox'  id='" + roi['id'] + "_visibility' checked='true' " +
                  "class='roi_visibility' roi_id='"+ roi['id'] +"'/>";

          // process the shapes first - note first shape & text
          var roiIcon = null;
          var roiText = "";
          var minT = maxT = minZ = maxZ = null;
          var shapesHtml = '<tbody>';
          var shape = null;
          var text, tRange, zRange;
          for (var s=0; s<shapes.length; s++) {
              shape = shapes[s];
              // Handle cases where the shape is on all sections or all
              // timepoints.
              if (typeof shape.theT === "undefined") {
                  tRange = NOZT;
              } else {
                  if (minT === null || minT > shape.theT) minT = shape.theT;
                  if (maxT === null || maxT < shape.theT) maxT = shape.theT;
              }
              if (typeof shape.theZ === "undefined") {
                  zRange = NOZT;
              } else {
                  if (minZ === null || minZ > shape.theZ) minZ = shape.theZ;
                  if (maxZ === null || maxZ < shape.theZ) maxZ = shape.theZ;
              }
              if (shape['textValue'] != null) {
                  text = shape['textValue'];
                  if (shapes.length == 1) roiText = text;
              } else text = "";
              var indent = " &nbsp&nbsp&nbsp&nbsp";    // hack to add "indent", but not if shape is only-child
              if (shapes.length == 1) {
                  indent = " &nbsp";
              }
              var shapeThumbHtml = "<img src='' id='"+ shape['id'] +"_shape_thumb' color='"+ line_color +"' width=50 height=33 class='roi_thumb shape_thumb'>";

              var shape_id = roi['id'] + '_' + shape['id'] + '_shape_visibility';
              var shapeVisibilityHtml = "<input type='checkbox' id='" + shape_id + "' checked='true' " +
                      "roi_id='" + roi['id'] +"' shape_id='" + shape['id'] +"' class='shape_visibility roi_" + roi['id'] + "_vis'/>";

              shapesHtml += "<tr id='"+shape['id']+"_shape' class='shape_row'>";
              // clicking on any cell of a shape 'shape_cell' selects it
              shapesHtml += "<td></td>";
              shapesHtml += "<td class='shape_cell icon'>" + indent + get_shape_icon_src(shape['type'], 'shape_icon') + "</td>";
              shapesHtml += "<td class='shape_cell'>" + shape['id'] + "</td>"
              var theZ =
                  typeof shape.theZ === "undefined"? NOZT : shape.theZ + 1;
              shapesHtml += "<td class='shape_cell'>" + theZ + "</td>";
              var theT =
                  typeof shape.theT === "undefined"? NOZT : shape.theT + 1;
              shapesHtml += "<td class='shape_cell'>" + theT + "</td>";
              shapesHtml += "<td class='shape_cell'>" + shapeThumbHtml + "</td>";
              shapesHtml += "<td class='shape_cell shape_text' title=\""+ text.escapeHTML() +"\"><p>"+ truncate_text(text.escapeHTML()) + "</p></td>";
              shapesHtml += "<td class='shape_cell'>" + shapeVisibilityHtml + "</td>";
              shapesHtml += "</tr>";
              if (roiIcon == null) roiIcon = shape['type'];
              else if (roiIcon != shape['type']) roiIcon = "";    // mixture of shapes - show no icon
          }
          if (roiText == null) roiText = "";
          shapesHtml += '</tbody>';

          // new tbody for each ROI
          if (tRange != NOZT) tRange = "" + (minZ+1) + ((maxZ != minZ) && ("-"+(maxZ+1)) || (""));
          if (zRange != NOZT) zRange = "" + (minT+1) + ((maxT != minT) && ("-"+(maxT+1)) || (""));
          var roi_html = "<thead><tr class='roi_row'>";
          roi_html += "<th><img class='expand_arrow' src='{% static "webgateway/img/arrowRight_grey.png" %}' /></th>";
          roi_html += "<th align='left'> &nbsp"+ get_shape_icon_src(roiIcon, 'roi_icon') + " (" + shapes.length + ")</th>"; // first shape (count)
          roi_html += "<th>" + roi['id'] + "</th>";
          roi_html += "<th style='white-space: nowrap'> "+ tRange +" </th>"; // no Z for ROI
          roi_html += "<th style='white-space: nowrap'> "+ zRange +" </th>"; // no T for ROI
          roi_html += "<th class='shape_text' title=\""+ roiText.escapeHTML() +"\"><p>"+ truncate_text(roiText).escapeHTML() +"</p></th>";
          roi_html += "<th>" + roiVisibilityHtml + "</th>";
          roi_html += "<th class='shape_text' title=\""+ roiText.escapeHTML() +"\"><p>"+ truncate_text(roiText).escapeHTML() +"</p></th>";
          roi_html += "</tr></thead>";

          var tbody = $(shapesHtml);
          if (shapes.length > 1) {
              $roi_table.append($(roi_html));      // add the roi thead
          } else {
              tbody.addClass('only_child');
          }
          $roi_table.append(tbody);    // add the tbody

          // now bind mouseover
          var $roi_thumb_popup = $('#roi_thumb_popup');
          $('.roi_thumb').hover(function(e) {
              $roi_thumb_popup.attr('src', $(this).attr('src')).show();
          }, function(e){
              $roi_thumb_popup.hide();
          })
            .hide();    // don't show thumbs initially
          $('.roi_thumb').mousemove(function(e) {
                $roi_thumb_popup.css({ 'left': e.pageX+5, 'top': e.pageY+5 })
          });
      }
  }

  // bound to call-back on roi plugin when ROIs loaded
  var handle_rois_loaded = function(e) {
      $("#rois_loading_message").hide();
      build_roi_table();
      var $roi_table = $("#roi_small_table");
      $roi_table.find('tbody').hide();  // hides the shapes
      $roi_table.find('tbody.only_child').show();

  }

  // bound to clicks on shapes in the viewer
    var handle_shape_selection = function(e, shape_id) {
        var $roi_table = $("#roi_small_table");
        // show the rows
        var $row = $("#"+shape_id+"_shape");
        $roi_table.find('tbody').children().children().css('background-color', '');// all rows white...
        $row.children().css('background-color', '#d0d0ff');      // ...show this row blue
        $row.parent().show();   // show this 'tbody' set of shapes
        var arrow_src = '{% static "webgateway/img/arrowDown_grey.png" %}';
        $row.parent().prev('thead').find('img.expand_arrow').attr('src', arrow_src);
    }

    // update src of roi_thumbnails, based on colour. If 'null', set no src and hide thumbs
    var update_roi_thumbs = function(line_color) {
        // we set visibility based on 'toggle_roi_thumbs' checkbox
        var vis = ($("#toggle_roi_thumbs").is(":checked"));
        var update_thumbs = function() {
            var $thmb = $(this);
            if (vis) {
                if ((typeof line_color == 'undefined') || (line_color == null)) {
                    // update src based on color attribute
                    line_color = $thmb.attr('color');
                } else {
                    $thmb.attr('color', line_color);
                }
                var thmb_id = parseInt($thmb.attr('id'));
                var thmb_src = "{% url 'webgateway_render_roi_thumbnail' 0 %}"+ thmb_id +"/?color=" + line_color;
                if ($thmb.hasClass('shape_thumb')) {
                    thmb_src = "{% url 'webgateway_render_shape_thumbnail' 0 %}"+ thmb_id +"/?color=" + line_color;
                }
                $thmb.attr('src', thmb_src);
                $thmb.show();
            } else {
                // hide thumb and remove src (don't load thumbs)
                $thmb.attr('src', '');
                $thmb.hide();
            }2
        }
        $('.roi_thumb').each(update_thumbs);
        //$('.shape_thumb').each(update_thumbs);
    }

  var linePlotPos = function (ev, obj) {
    $('#wblitz-lp-editpos').val(obj);
    showLinePlot();
  };

  function undoRDCW () {
    viewport.undo_channels();
    syncRDCW(viewport);
  }

  function redoRDCW () {
    if (on_batchCopyRDefs) {
      return batchCopyRDefs_action('cancel');
    }
    viewport.redo_channels();
    syncRDCW(viewport);
  }


  function show_image_link() {
    var link = location.href;
    if (location.search.length > 0) {
      link = location.href.split(location.search)[0];   // handle trailing #
    }
    link = link.replace(/(.*?\/)\d+(?:\/\d+)?(?:\/)#?$/,'$1');
    link = link + viewport.getCurrentImgUrlPath() + '?' + viewport.getQuery(true, true, true);
    $('#curr-link input').attr('value', link);
    return false;
  }

  function show_tooltip(self, ttid) {
    var pos = $(self).parents('div').offset();
    pos.top += $(self).parents('div').height();
    pos.left += 10;
    var tooltip = $('#' + ttid);
    $('.popped').not(tooltip).removeClass('popped');
    tooltip.css(pos)
    .toggleClass('popped');
    if (tooltip.is('.popped')) {
      var ww = $(window).width() -5;
      if ((pos.left + tooltip.width()) > ww) {
        pos.left -= (pos.left + tooltip.width()) - ww;
        tooltip.css(pos);
      }
      if (tooltip.offset().top + tooltip.height() >= $('#footer').offset().top) {
        pos.top -= tooltip.height() + 20;
        tooltip.css(pos);
      }
      var auto = $('#' + ttid).find('.autoselect').get(0);
      if (auto) {
        auto.focus();
        auto.select();
      }
    }
  }

  function show_change(obj, val, klass) {
    if (obj.value != val) {
      $(obj).addClass(klass);
    } else {
      $(obj).removeClass(klass);
    }
  }



  /* ]]> */
</script>
    <div id="channel-window-help" style="display: none;">
      <h2>Rendering Details:</h2>
      <p>Use the "Rendering Details" dialog box to change the viewer settings for this image.
        The changes will be saved when you click the "Save" button.</p>
      <p>To change the color displayed for a channel, click on the color-picker icon at the right to open the "Choose Color" dialog box. You can choose the color using the preset colors or color gradients. Alternatively, hexadecimal color codes may be input in the text box. The changes will take effect when you click "OK".</p>
      <p>To change the color intensity, drag the slider handles for the individual channels to the left or right
        to change the minimum and maximum display values.</p>
    </div>

    <!-- Floating boxes come on top -->
    <div id="curr-link" class="tooltipbox">
      <table cellspacing="0">
        <tr>
          <td>
            Link to this page:
          </td>
          <td class="left">
            <img class="popclose" src="{% static "webgateway/img/close.gif" %}" alt="close" />
          </td>
        </tr>
        <tr>
          <td><input class="autoselect" type="text" size="40" value="" /></td>
        </tr>
      </table>
    </div>

    <img id="roi_thumb_popup" style="border: solid #bbb 1px"/>
    <div id="roi_table_postit" class="postit">
        <h1>ROIs</h1>
        <div id='rois_loading_message'>Loading ROI data...</div>
        <div id='roi_table_div'>
            <table id='roi_small_table' cellpadding='0' cellspacing='0'></table>
        </div>
    </div>

    <div id="metadata-postit" class="postit">
      <h1>Image Information</h1>
      <h3 class="can-collapse">Basic Information</h3>
      <div>
        <table cellspacing="0">
          <tr class="odd"><td class="title">Image name:&nbsp;</td><td id="wblitz-image-name"></td></tr>
          <tr class="even"><td class="title">Owner:&nbsp;</td><td id="wblitz-image-author"></td></tr>
          <!--
          <tr class="odd"><td class="title">Publication:&nbsp;</td><td id="wblitz-image-pub"></td></tr>
          <tr class="even"><td class="title">Publication ID:&nbsp;</td><td id="wblitz-image-pubid"></td></tr>
          <tr class="odd"><td class="title">Created on:&nbsp;</td><td id="wblitz-image-timestamp"></td></tr>
          -->
        </table>
      </div>
      <h3 class="can-collapse"> Dimensions </h3>
      <div class="dimensions">
        <table cellspacing="0">
          <tr>
            <th colspan="2" width="50%">Image Size</th>
            <th colspan="2">Pixel Size</th>
          </tr>
          <tr class="odd">
            <td class="title">X:&nbsp;</td><td><span id="wblitz-image-width"></span>px</td>
            <td class="title">X:&nbsp;</td><td><span id="wblitz-image-pixel-size-x"></span></td>
          </tr>
          <tr class="even">
            <td class="title">Y:&nbsp;</td><td><span id="wblitz-image-height"></span>px</td>
            <td class="title">Y:&nbsp;</td><td><span id="wblitz-image-pixel-size-y"></span></td>
          </tr>
          <tr class="odd">
            <td class="title">Z:&nbsp;</td><td><span id="wblitz-image-z-count"></span></td>
            <td class="title">Z:&nbsp;</td><td><span id="wblitz-image-pixel-size-z"></span></td>
          </tr>
          <tr class="even">
            <td class="title">T:&nbsp;</td><td><span id="wblitz-image-t-count"></span></td>
            <td colspan="2"></td>
          </tr>
        </table>
      </div>

      <h3 class="can-collapse" id="bulk-annotations" style="display: none;">Bulk Annotations</h3>
      <div style="display: none;">
        <table cellspacing="0">
        </table>
      </div>

      <!--<h3 class="can-collapse defclose"> Legend </h3>
      <div id="wblitz-image-description"><span id="wblitz-image-description-content"></span></div>-->
    </div>

    <div id="rdef-postit" class="postit" style="width: 480px">
      <h1> Rendering Details </h1>
      <div id="rdef-active-area">

        <ul class="toolbar borderless labels">
          <li>
            <button id="rdef-setdef-btn" class="button" disabled="disabled"
                {% if manager.image.canAnnotate %}
                  title="Save the current settings."
                {% else %}
                title="You don't have permission to save settings."
                {% endif %}
                >
              <img src="{% static 'webclient/image/icon_save.png' %}" style="position:relative; top:2px" /><br>
                Save
            </button>

          </li>

          <li><button id="rdef-undo-btn" class="button button-disabled"
              disabled="disabled" title="Undo the last changes to settings"
              onclick="return undoRDCW();">
            <img src="{% static "webclient/image/icon_undo16.png" %}" /><br>
            Undo
          </button> </li>
          <li><button id="rdef-redo-btn" class="button button-disabled"
              disabled="disabled" title="Redo the last changes to settings"
              onclick="return redoRDCW();">
            <img src="{% static "webclient/image/icon_redo16.png" %}" /><br>
            Redo
          </button></li>

          <li class="seperator"></li>

          <li><button id="rdef-copy-btn" class="button" title="Copy Rendering Settings">
            <img src="{% static "webclient/image/icon_toolbar_copy.png" %}"/><br>
            Copy
          </button></li>
          <li><button id="rdef-paste-btn" class="button button-disabled"
             title="Paste Rendering Settings" disabled="disabled">
            <img src="{% static "webclient/image/icon_toolbar_paste.png" %}"/><br>
            Paste
          </button></li>
        </ul>

        <div style="clear:both; border-bottom: solid #ddd 1px; margin: 5px 0;"></div>

        <div style="margin-bottom:5px">
          <a id="rdef-postit-help" href="#" onclick="return showChannelWindowHelp();"><img src="{% static "webgateway/img/question.png" %}" alt="Show help on channel window ranges" /></a>
          <input id="rd-wblitz-rmodel" type="checkbox" onchange="return handleModelCheckbox();"/>
          <label for="rd-wblitz-rmodel">Greyscale</label>
          <div style="float: right">
            <input type="checkbox" id="showhistogram" />
            <label>Show Histogram</label>
          </div>
          <div id="histogram" style="display:none; width: 100%; height: 125px; background:white; border: solid #ccc 1px; margin-bottom: 6px"></div>
          <table cellspacing="0">
            <tr>
            </tr>
          </table>
        </div>


        <button id="rdef-minmax-btn" title="Each slider will be set to cover the min/max pixel intensities for that channel">
          Min/Max
        </button>
        <button id="rdef-fullrange-btn" title="Each slider will be set to cover the full range of pixel intensities for the image">
          Full Range
        </button>
        <button id="rdef-reset-btn" title="Applies the original imported settings for this image">
          Imported
        </button>
      </div>

    </div>

    <!-- End floating boxes -->
    <div id="wblitz">
      <div id="wblitz-workarea">
      <!-- Top Toolbox -->
        <!-- Zoom -->
        <div class="box">
            <h1>Viewing Options</h1>
          <div class="even row">
              <!-- multiselect hidden for big images in jquery-plugin-viewportImage.js -->
            <div class="multiselect selected">
              Normal
              <input type="radio" value="normal" name="wblitz-proj" checked onclick="return setProjection(this);" />
            </div>
            <div class="multiselect">
              Max Intensity
              <input type="radio" value="intmax" name="wblitz-proj" onclick="return setProjection(this);" />
            </div>
            <div class="multiselect">
              Split Channel
              <input type="radio" value="split" name="wblitz-proj" onclick="return setProjection(this);" />
            </div>
            <!--select id="wblitz-proj" onchange="viewport.setProjection(this.item(this.selectedIndex).value);">
              <option value="normal">Normal</option>
              <option value="intmax">Maximum Intensity</option>
              <option value="split">Split Channel</option>
            </select-->
          </div>
          <div class="odd row">
            <label for="wblitz-quality" class="odd">Quality</label>
            <!-- br /><input type="radio" name="wblitz-quality" value="1.0"> High</input>
            <br /><input type="radio" name="wblitz-quality" value="0.9" checked="checked"> Normal</input>
            <br /><input type="radio" name="wblitz-quality" value="0.5"> Low</input -->
            <select id="wblitz-quality" onchange="viewport.setQuality(this.item(this.selectedIndex).value);">
              <option value="1.0">High</option>
              <option value="0.9" selected="selected">Normal</option>
              <option value="0.5">Low</option>
            </select>
          </div>
          <div class="even row">
            <label for="wblitz-zoom">Zoom (%)</label><br />
            <input type="text" class="spin-button" id="wblitz-zoom" value="100" onchange="zoomCheck(this)" size="5" />
            <button id="full-size"
                    title="Actual size"
                    onclick="viewport.setZoom(100)" ></button>
            <button id="full-screen"
                    title="Zoom image to fit"
                    onclick="viewport.setZoomToFit()"></button>
          </div>
          <div class="odd row">
            <label for="wblitz-lp-enable">Line Plot</label> <input id="wblitz-lp-enable" type="checkbox" onclick="editLinePlot(this.checked)" />
            <div id="wblitz-lp-wrap" style="display: none">
              <div>Axis:
                <select id="wblitz-lp-axis-select" onchange="prepLinePlot(this.options[this.options.selectedIndex].value)">
                  <option value="h" selected="selected">Horizontal</option>
                  <option value="v">Vertical</option>
                </select>
              </div>
              <span id="wblitz-lp-axis"></span> =
              <input type="text" id="wblitz-lp-editpos" size="4" />
              <button id="wblitz-lp-btn" onclick="showLinePlot()"></button>
              <div id="wblitz-lp-cur"></div>
            </div>
          </div>
          <h1>Rendering Details</h1>
          <div class="odd row">
            <label for="wblitz-channels-box">Channels</label> - <a href="#" onclick="$('#rdef-postit').toggle(); return false;">Edit</a><br />
            <span id="wblitz-channels-box"></span>
          </div>
          <div class="even row">
            <label for="wblitz-rmodel">Grayscale</label>
            <input id="wblitz-rmodel" type="checkbox" />
	    {% comment %}<!-- #8766 {% if not blitzcon.isAnonymous and image.canWrite %}
	    <br />
            <label for="wblitz-invaxis">Invert Z/T Axis</label>
            <input id="wblitz-invaxis" type="checkbox" onchange="viewport.setInvertedAxis(this.checked);" />
	    {% endif %}-->{% endcomment %}
            <br />
            <label>Rendering Settings</label><br />
            <button id="rdef-copy-btn-viewer" class="btn silver btn_text" title="Copy Rendering Settings">
                <span>Copy</span>
            </button>

            <button id="rdef-paste-btn-viewer" class="btn silver btn_text" title="Paste Rendering Settings">
                <span>Paste</span>
            </button>
          </div>
          <div class="odd row">
            <label for="wblitz-interpolate">Interpolate</label>
            <input id="wblitz-interpolate" type="checkbox" {% if interpolate %}checked{% endif %}/>
          </div>
            <h1>Current Image</h1>
          <div class="even row">
            <span style="font-size: 0.9em">
            <!--<span id="wblitz-shortname" style="white-space: nowrap;"></span><br />-->
            Z: <span id="wblitz-z-curr">?</span>/<span id="wblitz-z-count">?</span> |
            T: <span id="wblitz-t-curr">1</span>/<span id="wblitz-t-count">1</span>
            </span>
          </div>
          {% if image.getPixelSizeX %}
          <div class="odd row">
            <label for="wblitz-scalebar">Scale bar</label>
            <input id="wblitz-scalebar" type="checkbox" disabled/>
          </div>
          {% endif %}
          <div class="even row">
            <a href="#" onclick="$('#metadata-postit').toggle(); return false;">Image Information</a><br />
          </div>
          <div class="odd row">
                      <a href="#" onmouseover="this.href=viewport.getUrl('img_detail')"
                      onclick="show_image_link();
                        show_tooltip(this, 'curr-link'); return false;">
                Image Link
            </a><br />
          </div>
{% block roi_buttons %}
          <div id="roi_controls">
                <h1>ROI Count: {{ roiCount }}</h1>
                {% if roiCount > 0 %}
                  <!-- 'link is enabled on imageLoad callback -->
                    <a id="show-rois-a" href="#" style="color:gray"
                        {% if roiCount > roiLimit  %}
                            title="Cannot display more than {{roiLimit}} ROIs"
                        {% endif %}>Show ROIs</a> |
                    <a id="hide-rois-a" style="color:gray">Hide</a>
                {% endif %}
          </div>
{% endblock roi_buttons %}
          <div class="odd row">
             <button id="prevImage" class="btn prev_next_image" title="Previous Image" disabled="disabled">
                <span>< Prev</span>
            </button>
            <button id="nextImage" class="btn prev_next_image" title="Next Image" disabled="disabled">
                <span>Next ></span>
            </button>
          </div>
          {% block current_image_tools %}{% endblock %}
        </div>

        <!-- Image Viewport -->
        <div id="weblitz-viewport"></div>
        <img id="z-axis-legend" src="{% static "webgateway/img/z_axis.gif" %}" />
        <img id="t-axis-legend" src="{% static "webgateway/img/t_axis.gif" %}" />
        <div class="figure-box-holder">
        </div>
      </div>
    </div>
    <div id="footer">
    {% block footer_content %}
      &copy; 2007-{{ build_year }} Glencoe Software Inc. All rights reserved.
    {% endblock %}
    </div>
{% endblock full_body %}

<script type="text/javascript">
  /* <![CDATA[ */
  $(document).ready(function () {
    $.ajaxSettings.cache = false;
  });
{% block content_script %}

  var gs_static_location_prefix='{% static "" %}';

  $(document).ready(function () {

    // Load Lookup Tables - need them ASAP
    $.getJSON("{% url 'webgateway_listLuts_json' %}", function(data){
      OME.LUTS = data.luts;
      OME.PNG_LUTS = data.png_luts;
    });

    /* Prepare the viewport */


    viewport = $.WeblitzViewport($('#weblitz-viewport'), '{{ viewport_server }}',{% block viewport_opts %}{'mediaroot': '{{ STATIC_URL }}' }{% endblock %});
    viewport.bind('imageLoad', _refresh_cb);
    viewport.bind('imageLoad', _load_metadata);

    /* Bind zoom changes to the zoom button */
    viewport.bind('zoom', function(e, percent) {
      $("#wblitz-zoom").val(''+percent);
      $(".popped").removeClass('popped');
    });

    /* Bind projection changes */
    viewport.bind('projectionChange', projectionChange);
    /* Bind model changes */
    viewport.bind('modelChange', modelChange);
    /* Bind channel changes */
    viewport.bind('channelChange', channelChange);
    viewport.bind('imageChange', function(){
      syncChannelsActive(viewport);
    });
    /* Bind image changes */
    viewport.bind('imageChange', function(){
      imageChange(viewport);
      axisChange();
    });
    /* Bind line plot changes */
    viewport.bind('linePlotChange', linePlotChange);
    /* Bind line plot position pick */
    viewport.bind('linePlotPos', linePlotPos);

    // once image loads, check session via /getImgRDef/ to see if we can paste
    viewport.bind('imageLoad', function() {
      // disable histogram for big images
      if (viewport.loadedImg.tiles) {
        $("#showhistogram").attr('disabled', true)
          .parent().css('color', '#bbb')
          .attr('title', 'Histogram not supported for tiled images');
        $("#wblitz-lp-enable").attr('disabled', true)
          .parent().css('color', '#bbb')
          .attr('title', 'Line plot not supported for tiled images');
      }

      // Enable 'Show ROIs' button
    {% if roiCount > 0 and roiCount <= roiLimit  %}
        $("#show-rois-a").on("click", function () { show_rois(); return false; })
            .attr("href", "#").css("color", "");
    {% endif %}
      $.getJSON(viewport.viewport_server + "/getImgRDef/",
        function(data){
            if (data.rdef) {
              var channels = data.rdef.c.split(","); // c=1|3336:38283$FF0000,2|1649:17015$00FF00
              if (channels.length != viewport.getChannels().length ||
                data.rdef.pixel_range != viewport.loadedImg.pixel_range.join(":")) {
                  // images are not compatible
                  $("#rdef-paste-btn")
                    .attr('title', 'Copied settings are not compatible with this image');
                  return;
                }
                $("#rdef-paste-btn").prop('disabled', false).removeClass("button-disabled");
            }
        }
      );

      // disable 'Full Range' button if pixelsType is 'float' or 'double'
      if ($.inArray(viewport.loadedImg.meta.pixelsType, ["float", "double"]) > -1) {
        $("#rdef-fullrange-btn").attr("disabled", "disabled").addClass("button-disabled");
      }

      var sizes = viewport.getSizes();
      // Currently relies on `pixel_range` coming from the server being based
      // on pixel type byte width
      var bytes_per_pixel = Math.ceil(
        Math.log2(viewport.loadedImg.pixel_range[1]) / 8.0);
      var stack_size = sizes.width * sizes.height * sizes.z
                       * sizes.c * bytes_per_pixel;

      // disable 'Max Intensity' projection for single-Z images or if total
      // amount of data that might be projected is > 256MiB
      var disable_intmax = (
        viewport.loadedImg.rdefs.invertAxis || sizes.z < 2
        || stack_size > 256 * 1024 * 1024
      );
      $('[name="wblitz-proj"][value=intmax]').prop('disabled', disable_intmax);
    });

    // 'Color' checkbox to left of image
    $("#wblitz-rmodel").on('click', function(){
      setModel(viewport, $(this).get(0).checked?'g':'c');
    });

    /* Prepare pop tools */
    $(".popover > h1")
      .prepend('<div class="drop-img drop-left"></div><div class="drop-img drop-right"></div>')
      .on('click', function () {
        var this_popped = $(this).parent().is('.popped');
        $(".popped").removeClass('popped');
        if (this_popped) {
          $(this).parent().removeClass('popped');
        } else {
          $(this).parent().addClass('popped');
        }
        return false;
      });

    $(".popclose").on('click', function () {
      $(".popped").removeClass('popped');
    });

    $("#weblitz-viewport").on('click', function () {
      $(".popped").removeClass('popped');
      return false;
    })
    .on("imageChange", function () {
      $(".popped").removeClass('popped');
    });

//    var pprep = function (t) {
//    return function () {
    /* Prepare the post-its */
    var layout_pos = $("#header").offset(); //$("#weblitz-viewport").offset();
    $(".postit").each(function () {
      if (this.id == 'metadata-postit') {
        $(this).postit({noResize: false, resizeTarget: '#wblitz-image-description'});//.css($("#weblitz-viewport-vp").offset());
      } else if (this.id == 'roi_table_postit') {
          $(this).postit({noResize: true})
            .css(layout_pos);
      } else {
        layout_pos.left += 20;
        layout_pos.top += 20;
        $(this).postit({noResize: true})
          .css(layout_pos);
      }
    });

    // Create Histogram - displayed when #showhistogram checkbox is checked
    // NB: we do this AFTER the postit init above, otherwise $("#showhistogram").on('click', ) gets unbound!
    OME.createViewportHistogram(viewport, "#histogram", "#showhistogram", "{% url 'webgateway' %}");

    var legend_open = function () {
      var d = $(this);
      d.off('opening', legend_open);
      /* Calculate the size for legend post-it */
      var h = $('#weblitz-viewport-vp').height();
      var w = ($('#weblitz-viewport-vp').width() - h) /2;
      d.css('width', Math.max(w, 250));
      if (d.height() > h) {
        d.css('height', h);
      }
      d.trigger('jqResize');
    };
    $("#legend-postit").on('opening', legend_open);

    zindex_automator('.postit', 210);

    /* Make (kind of) sure that closing the rendering defs window closes an eventually opened color picker */
    $("#rdef-postit").on('closed',
      function () {
                    hidePicker();
                  });

    $('.can-collapse').on('click', function () {
      $(this).toggleClass('closed').next().slideToggle();
    });

    $('.can-collapse.defclose').each(function () {
      $(this).removeClass('defclose').toggleClass('closed').next().hide();
    });
//    };
//    setTimeout ( pprep(this), 1000);

    /* Load the selected image into the viewport */
    var did = '{{ dataset.id }}';
    viewport.setQuality('0.9');
    viewport.load({{ image.id }}, did.length ? parseInt(did) : null, location.search);

    /* Bind actions needed on window resize */
    $(window).on('resize', calcResize);

    $('input[name=wblitz-quality]').on('click', function () {
      viewport.setQuality(this.value);
    });

    viewport.bind('imageChange', refresh_rois);
    viewport.bind('instant_zoom', function(e, percent) {
        if (viewport.viewportimg.get(0).setRoiZoom) {
            viewport.viewportimg.get(0).setRoiZoom(percent);
        }
        if (viewport.viewportimg.get(0).setScalebarZoom) {
            viewport.viewportimg.get(0).setScalebarZoom(percent/100);
        }
    });

    var copy_paste_rdef_url = "{% url 'webgateway_copy_image_rdef_json' %}";
    // Handle clicks on Copy/paste in toolbar and left of main viewer
    // NB: Need to use IDs for robot tests
    $("#rdef-copy-btn, #rdef-copy-btn-viewer").on('click', function() {
        copyRdefs(viewport);
    });
    $("#rdef-paste-btn, #rdef-paste-btn-viewer").on('click', function() {
        pasteRdefs(viewport);
    });

    $("#wblitz-interpolate").on('click', function(event){
      var interpolate = $(this).is(":checked");
      if (viewport) {
        viewport.setPixelated(!interpolate);
      }
    });

    // Reset defaults without saving
    $("#rdef-reset-btn").on('click', function(){
      resetImageDefaults(viewport);
    });

    $("#rdef-minmax-btn").on('click', function(){
      viewport.setChannelMinMax();
      syncRDCW(viewport);
      viewport.save_channels();
      updateUndoRedo(viewport);
    });

    $("#rdef-fullrange-btn").on('click', function(){
      viewport.setChannelFullRange();
      syncRDCW(viewport);
      viewport.save_channels();
      updateUndoRedo(viewport);
    });


    var toggle_th = function($roiThead) {
        $roiThead.next().toggle(0, function(){
            var vis = $roiThead.next().is(':visible');
            var arrow_src = '{% static "webgateway/img/arrowRight_grey.png" %}';
            if (vis) {
                arrow_src = '{% static "webgateway/img/arrowDown_grey.png" %}';
            }
            $roiThead.find('img.expand_arrow').attr('src', arrow_src);
        });
    }

    var handleShapeRowClick = function($shapeRow){
        var shape_id = parseInt($shapeRow.attr('id'));      // E.g. id='123_shape'
        var selected_xy = viewport.viewportimg.get(0).set_selected_shape(shape_id);
        var vpb = viewport.viewportimg.get(0).getBigImageContainer();
        if (vpb!= null && viewport.loadedImg.tiles) {
            var scale = vpb.currentScale();
            vpb.recenter({x:selected_xy['x']*scale ,y:selected_xy['y']*scale}, true, true);
        }
        var z = $shapeRow.find('td:nth-child(4)').text();
        if (z != NOZT) {
            viewport.setZPos(parseInt(z));
        }
        var t = $shapeRow.find('td:nth-child(5)').text();
        if (t != NOZT) {
            viewport.setTPos(parseInt(t));
        }
    }

    var check_visibility_column = function() {
        if ( $('.roi_visibility').is(':checked') || $('.shape_visibility').is(':checked') ) {
            $('#toggle_roi_visibility').prop('checked', true);
        } else {
            $('#toggle_roi_visibility').prop('checked', false);
        }
    }

    var check_roi_visibility_checkbox = function(roi_id) {
        var roi_id = parseInt(roi_id);
        var roi_checkbox_id = '#' + roi_id + '_visibility';
        var shape_checkboxes_class = '.roi_' + roi_id + '_vis';
        if ( $(shape_checkboxes_class).is(':checked') ) {
            $(roi_checkbox_id).prop('checked', true);
            $('#toggle_roi_visibility').prop('checked', true);
        } else {
            $(roi_checkbox_id).prop('checked', false);
            check_visibility_column();
        }
    }

    $("#roi_small_table").on('click', function(event) {
        var $target = $(event.target);
        if ($target.attr('id') == "toggle_roi_thumbs") {
            update_roi_thumbs();
            return true;
        } else if ($target.hasClass('color_picker_option')) {
            // change the colour of lines drawn on roi_thumbs
            var line_color = $target.attr('color').substring(1);  // '#f00' -> 'f00'
            update_roi_thumbs(line_color);
        } else if ($target.attr('id') == "toggle_shape_text") {
            var show_labels = ($("#toggle_shape_text").is( ":checked" ));
            viewport.viewportimg.get(0).show_labels(show_labels);
            return true;
        } else if ($target.attr('id') == "toggle_roi_visibility") {
            var activate_rois = ($("#toggle_roi_visibility").is(":checked"));
            if (activate_rois) {
                var theT = viewport.getTPos();
                var theZ = viewport.getZPos();
                viewport.viewportimg.get(0).show_rois(theZ, theT, undefined);
            } else {
                viewport.viewportimg.get(0).hide_rois();
            }
            $('.roi_visibility').prop('checked', activate_rois);
            $('.shape_visibility').prop('checked', activate_rois);
            return true;
        } else if ($target.hasClass('roi_visibility')) {
            var roi_id = $target.attr('roi_id');
            var act_roi = $target.is(':checked');
            if (act_roi) {
                viewport.viewportimg.get(0).activate_roi(roi_id);
            } else {
                viewport.viewportimg.get(0).deactivate_roi(roi_id);
            }
            var theZ = viewport.getZPos();
            var theT = viewport.getTPos();
            viewport.viewportimg.get(0).refresh_active_rois(theZ, theT);
            var check_group_id = '.roi_' + roi_id + '_vis';
            $(check_group_id).prop('checked', act_roi);
            check_visibility_column();
            return true;
        } else if ($target.hasClass('shape_visibility')) {
            var roi_id = $target.attr('roi_id');
            var shape_id = $target.attr('shape_id');
            var act_shape = $target.is(':checked');
            if (act_shape) {
                viewport.viewportimg.get(0).activate_shape(roi_id, shape_id);
            } else {
                viewport.viewportimg.get(0).deactivate_shape(roi_id, shape_id);
            }
            var theZ = viewport.getZPos();
            var theT = viewport.getTPos();
            viewport.viewportimg.get(0).refresh_active_rois(theZ, theT);
            check_roi_visibility_checkbox(roi_id);
            return true;
        } else if ($target.hasClass('shape_cell')) {
            // a shape td click selects the shape.
            var $shapeRow = $target.parent();
            handleShapeRowClick($shapeRow);
        } else if ($target.parent().hasClass('shape_cell')) {
            // a shape <p> click selects the shape.
            var $shapeRow = $target.parent().parent();
            handleShapeRowClick($shapeRow);
        } else if ($target.hasClass('shape_icon')) {
            // need to get to the row
            var $shapeRow = $target.parent().parent();
            handleShapeRowClick($shapeRow);
        } else if ($target.get(0).nodeName.toLowerCase() == 'th'){
            // a ROI (th) click toggles the ROI-shapes 'tbody' below
            if ($target.parent().hasClass('roi_row')) {
                var $roiThead = $target.parent().parent();
                toggle_th($roiThead);
            }
        } else if ($target.parent().get(0).nodeName.toLowerCase() == "th"){
            // a ROI (th <p>) click toggles the ROI-shapes 'tbody' below
            if ($target.parent().parent().hasClass('roi_row')) {
                var $roiThead = $target.parent().parent().parent();
                toggle_th($roiThead);
            }
        } else if ($target.hasClass('expand_arrow') || $target.hasClass('roi_icon')) {
            // clicked on the arrow - need to get the (th)
            var $roiThead = $target.parent().parent().parent();
            toggle_th($roiThead);
        } else if ($target.hasClass('roi_thumb')) {
            // roi thumbnail may be in thead/tr/td (ROI - toggle shapes) or tbody/tr/td (shape - update viewer)
            var $tableRow = $target.parent().parent();
            var nodeName = $tableRow.parent().get(0).nodeName.toLowerCase();
            if (nodeName == 'tbody') {
                handleShapeRowClick($tableRow);
            }
            else if (nodeName == 'thead') {
                toggle_th($tableRow.parent());
            }
        }
        return false;
    });


    // Check the Parent window for Previous / Next images...
    parentWindow = false;
    try {
      // might get permission exception if window was opened from another website
      if (window.opener && window.opener.$) {
        parentWindow = true;
      }
    }
    catch(err) {
      console.log("window.opener not accessible");
    }
    if (parentWindow) {
      var $currentImg = window.opener && window.opener.$("#image_icon-{{ image.id }}"),
          prevImgId, nextImgId;
      if ($currentImg.length === 1) {
        // Main thumbnails window
        prevImgId = $currentImg.prevAll(":visible").first().attr('id');
        if (prevImgId) {prevImgId = prevImgId.split('image_icon-')[1]}
        nextImgId = $currentImg.nextAll(":visible").first().attr('id');
        if (nextImgId) {nextImgId = nextImgId.split('image_icon-')[1]}
      } else if ($currentImg.length === 0) {
        // if not found, try "Search" results page layout
        $currentImg = window.opener.$("#image-{{ image.id }}");
        prevImgId = prevImgId || $currentImg.prevAll(":visible").first().attr('id');  // E.g: image-123
        if (prevImgId) {
          prevImgId = prevImgId.split('image-')[1];     // will be undefined if E.g: 'dataset-123'
        }
        nextImgId = nextImgId || $currentImg.nextAll(":visible").first().attr('id');
        if (nextImgId) {
          nextImgId = nextImgId.split('image-')[1];
        }
      }
      // Enable Prev / Next buttons if available (disabled by default)
      if (prevImgId) {
        $("#prevImage").prop('disabled', false);
      }
      if (nextImgId) {
        $("#nextImage").prop('disabled', false);
      }

      // Handle Prev / Next button clicks or keys
      function nextPrevImage(direction) {
        var id;
        if( direction == -1 ) {
          id = prevImgId;
        } else {
          id = nextImgId
        }
        if( id ) {
          window.location.href = "{{ viewport_server }}/img_detail/" + id
        }
      }

      // Prev / Next keys
      $(document).on('keydown', function(e) {

          // ignore keystrokes on other inputs, sliders etc.
          if ($(e.target).prop("tagName") !== "BODY") return;

          switch(e.which) {
              case 37: // left
                   nextPrevImage(-1);
              break;

              case 39: // right
                  nextPrevImage(1);
              break;

              default: return;
          }
          e.preventDefault();
      });

      $("#prevImage").on('click', function(){
        nextPrevImage(-1);
      });
      $("#nextImage").on('click', function(){
        nextPrevImage(1);
      });
    }
    
    // we can bind events to viewportimg for roi_display-plugin to trigger (plugin not created yet)
    viewport.viewportimg.on("shape_click", handle_shape_selection);
    viewport.viewportimg.on("rois_loaded", handle_rois_loaded);
    
    // 'Scalebar' checkbox to left of image
    $("#wblitz-scalebar").on('change', function() {
        if(this.checked) {
            show_scalebar();
        } else {
            hide_scalebar();
        }
    });
  
    // set up handlers for 'Save' button
    $("#rdef-setdef-btn").on('click', function(){
      setImageDefaults(viewport, this, function() {
        if (window.opener && window.opener.OME.refreshThumbnails) {
            window.opener.OME.refreshThumbnails({'imageId':{{ image.id }},
            'thumbnail_url': "{% url 'get_thumbnail_json' image.id %}" });
        }
      });
    });

    /* And we're done! */

{% block initial_resize %}
    /* Set Window Initial Size */
    //if ($(document).width() < 1024 || $(document).height() < 768)
    //  window.resizeTo(1024,768);
{% endblock %}
    calcResize();
    gs_script_location_prefix="{% static "webgateway/" %}";
  });
{% endblock content_script %}
  /* ]]> */
</script>

{% endblock %}