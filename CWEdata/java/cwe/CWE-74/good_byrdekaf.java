<?xml version="1.1" encoding="UTF-8"?>

<!--
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
-->

  <web>Menu</web>
<xwikidoc version="1.5" reference="Menu.MenuMacro" locale="">
  <name>MenuMacro</name>
  <language/>
  <defaultLanguage/>
  <translation>0</translation>
  <creator>xwiki:XWiki.Admin</creator>
  <parent>Menu.WebHome</parent>
  <author>xwiki:XWiki.Admin</author>
  <contentAuthor>xwiki:XWiki.Admin</contentAuthor>
  <version>1.1</version>
  <title>Menu Macro</title>
  <comment/>
  <minorEdit>false</minorEdit>
  <syntaxId>xwiki/2.1</syntaxId>
  <hidden>true</hidden>
  <content>{{toc/}}

= Horizontal Menu =

{{velocity}}
#set ($menuTemplateDoc = $xwiki.getDocument('MenuTemplate'))
#set ($menuTemplateDoc = $xwiki.getDocument('MenuTemplate'))
{{code language="none"}}
{{menu type="horizontal fixedWidth"}}
$menuTemplateDoc.content.replace('{', '')
## No way to escape content in the code macro, so just remove {, see https://jira.xwiki.org/browse/XRENDERING-13.
$menuTemplateDoc.content.replace('{', '')
{{/menu}}
{{/code}}
{{/velocity}}

{{menu type="horizontal fixedWidth"}}
## Include the content of the menu template.
{{velocity}}
## Include the content of the menu template.
## Escape {{ in the rendered content to be sure that the HTML macro is not closed unintentionally.
{{html}}$menuTemplateDoc.displayDocument().replace('{{', '&amp;amp;#123;&amp;amp;#123;'){{/html}}
{{/velocity}}
## Escape {{ in the rendered content to be sure that the HTML macro is not closed unintentionally.
{{html}}$menuTemplateDoc.displayDocument().replace('{{', '&amp;amp;#123;&amp;amp;#123;'){{/html}}
{{/velocity}}
{{/menu}}

= Vertical Menu =

{{velocity}}
{{code language="none"}}
{{menu type="vertical"}}
...
{{/menu}}
{{/code}}

{{menu type="vertical"}}
{{velocity}}
## Include the content of the menu template.
## Escape {{ in the rendered content to be sure that the HTML macro is not closed unintentionally.
{{html}}$menuTemplateDoc.displayDocument().replace('{{', '&amp;amp;#123;&amp;amp;#123;'){{/html}}
{{/velocity}}
{{velocity}}
## Include the content of the menu template.
## Escape {{ in the rendered content to be sure that the HTML macro is not closed unintentionally.
{{html}}$menuTemplateDoc.displayDocument().replace('{{', '&amp;amp;#123;&amp;amp;#123;'){{/html}}
{{/velocity}}
{{/menu}}</content>
  <object>
    <name>Menu.MenuMacro</name>
    <number>0</number>
    <className>XWiki.JavaScriptExtension</className>
    <guid>4671684e-f58c-4704-850f-7e75208d0e4a</guid>
    <class>
      <name>XWiki.JavaScriptExtension</name>
      <customClass/>
      <customMapping/>
      <defaultViewSheet/>
      <defaultEditSheet/>
      <defaultWeb/>
      <nameField/>
      <validationScript/>
      <cache>
        <cache>0</cache>
        <defaultValue>long</defaultValue>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>cache</name>
        <number>5</number>
        <prettyName>Caching policy</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>long|short|default|forbid</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </cache>
      <code>
        <contenttype>PureText</contenttype>
        <disabled>0</disabled>
        <editor>PureText</editor>
        <name>code</name>
        <number>2</number>
        <prettyName>Code</prettyName>
        <rows>20</rows>
        <size>50</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </code>
      <name>
        <disabled>0</disabled>
        <name>name</name>
        <number>1</number>
        <prettyName>Name</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </name>
      <parse>
        <disabled>0</disabled>
        <displayFormType>select</displayFormType>
        <displayType>yesno</displayType>
        <name>parse</name>
        <number>4</number>
        <prettyName>Parse content</prettyName>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.BooleanClass</classType>
      </parse>
      <use>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>use</name>
        <number>3</number>
        <prettyName>Use this extension</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>currentPage|onDemand|always</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </use>
    </class>
    <property>
      <cache>long</cache>
    </property>
    <property>
      <code>require(['jquery'], function($) {
  // It's not possible to write a CSS selector that targets list items containing lists so we rely on JavaScript.
  // The 'dropdown' CSS class is used only to display the down/left arrow.
  $('.menu-horizontal li ul').parent().addClass('xDropdown');

  // Make sure the menu separators are really empty.
  $('.menu-horizontal, .menu-vertical').find('li &gt; br:first-child').remove();

  // Collapsible menu bahavior.
  $('.menu-vertical.collapsible').each(function(){
    var open = $(this).hasClass('open');
    $(this).find('li ul').each(function() {
      $(this).addClass('xDropdown-menu').parent().addClass('xDropdown' + (open ? ' open' : ''));
      // Wrap everything (including text nodes) before the sub-menu in a DIV that will toggle its state.
      var toggle = this.ownerDocument.createElement('div');
      $(this).parent().prepend(toggle);
      for(var next = toggle.nextSibling; next != this; next = toggle.nextSibling) {
        toggle.appendChild(next);
      }
      $(toggle).addClass('xDropdown-toggle').on('click', function() {
        $(this).parent().toggleClass('open');
      });
    });
  });

  // In case of horizontal responsive menus, make sub-submenus in the navbar work on mobile devices
  $(document).on('touchstart.dropdown.data-api', '.dropdown-submenu &gt; a', function (event) {
    event.preventDefault();
  });
})</code>
    </property>
    <property>
      <name/>
    </property>
    <property>
      <parse>0</parse>
    </property>
    <property>
      <use>onDemand</use>
    </property>
  </object>
  <object>
    <name>Menu.MenuMacro</name>
    <number>0</number>
    <className>XWiki.StyleSheetExtension</className>
    <guid>75fa0b90-a8bc-4a88-a9e9-bc938d79da85</guid>
    <class>
      <name>XWiki.StyleSheetExtension</name>
      <customClass/>
      <customMapping/>
      <defaultViewSheet/>
      <defaultEditSheet/>
      <defaultWeb/>
      <nameField/>
      <validationScript/>
      <cache>
        <cache>0</cache>
        <defaultValue>long</defaultValue>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>cache</name>
        <number>5</number>
        <prettyName>Caching policy</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>long|short|default|forbid</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </cache>
      <code>
        <contenttype>PureText</contenttype>
        <disabled>0</disabled>
        <editor>PureText</editor>
        <name>code</name>
        <number>2</number>
        <prettyName>Code</prettyName>
        <rows>20</rows>
        <size>50</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </code>
      <contentType>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>contentType</name>
        <number>6</number>
        <prettyName>Content Type</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>CSS|LESS</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </contentType>
      <name>
        <disabled>0</disabled>
        <name>name</name>
        <number>1</number>
        <prettyName>Name</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </name>
      <parse>
        <disabled>0</disabled>
        <displayFormType>select</displayFormType>
        <displayType>yesno</displayType>
        <name>parse</name>
        <number>4</number>
        <prettyName>Parse content</prettyName>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.BooleanClass</classType>
      </parse>
      <use>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>use</name>
        <number>3</number>
        <prettyName>Use this extension</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>currentPage|onDemand|always</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </use>
    </class>
    <property>
      <cache>long</cache>
    </property>
    <property>
      <code>#template('colorThemeInit.vm')

/* Since Colibri doesn't support LESS, we manually prefix selectors with '.skin-colibri' */

/* General Styles */

.skin-colibri .menu-vertical ul,
.skin-colibri .menu-horizontal ul {
  list-style-type: none;
  margin: auto;
  padding: 0;
}

.skin-colibri .menu-vertical ul *,
.skin-colibri .menu-horizontal ul * {
  line-height: normal;
}

.skin-colibri .menu-vertical li,
.skin-colibri .menu-horizontal li {
  cursor: default;
  line-height: 16px;
  min-height: 16px;
}

.skin-colibri .menu-vertical img,
.skin-colibri .menu-horizontal img {
  vertical-align: middle;
}

/* Horizontal separator */
.skin-colibri .menu-vertical li:empty,
.skin-colibri .menu-horizontal li li:empty {
  border-top: 1px solid $theme.borderColor;
  line-height: 1px;
  min-height: 0;
  padding: 0;
}

/* Horizontal Menu */

.skin-colibri .menu.menu-horizontal {
  #css3_backgroundLinearGradient({
    'to': 'bottom',
    'colors': [
      {'color': $theme.menuGradientColor, 'position': '0%'},
      {'color': $theme.menuBackgroundColor, 'position': '50%'}
    ]
  })
}

.skin-colibri .menu.menu-horizontal {
  background-color: $theme.menuBackgroundColor;
  color: $theme.menuLinkColor;
  font-size: .85em;
  height: 2em;
  padding-left: 25px;
}

.skin-colibri .menu-horizontal li {
  padding: 0.2em 1.3em;
}

.skin-colibri .menu-horizontal li li:empty {
  border-top: 1px solid $theme.textSecondaryColor;
  margin: .5em 1em;
}

/* Vertical separator */
.skin-colibri .menu-horizontal &gt; ul &gt; li:empty {
  border-left: 1px solid $theme.textSecondaryColor;
  margin: 0 .5em;
  padding: 0;
  vertical-align: middle;
}

.skin-colibri .menu-horizontal li a,
.skin-colibri .menu-horizontal li a:visited {
  color: inherit;
}

.skin-colibri .menu-horizontal &gt; ul &gt; li {
  display: inline-block;
}

.skin-colibri .menu-horizontal &gt; ul &gt; li.xDropdown:after {
  content: '\25BC';
  font-size: .8em;
  margin-left: .5em;
}

.skin-colibri .menu-horizontal li li.xDropdown:after {
  content: '\25B8';
  float: right;
  margin-left: .5em;
}

.skin-colibri .menu-horizontal &gt; ul ul {
  background: none repeat scroll 0 0 $theme.menuBackgroundColor;
  border-radius: 0 0 .8em .8em;
  box-shadow: 0 1px 1px $theme.borderColor;
  display: none;
  margin: 0.2em 0 0 -1.3em;
  padding-bottom: .3em;
  position: absolute;
  z-index: 1000;
}

.skin-colibri .menu-horizontal li:hover &gt; ul {
  display: block;
}

/* The only way to have a menu with more than 2 levels without JavaScript is to use a fixed width. */
.skin-colibri .menu-horizontal.fixedWidth li li {
  position: relative;
}

.skin-colibri .menu-horizontal.fixedWidth ul ul {
  width: 12em;
}

.skin-colibri .menu-horizontal.fixedWidth ul ul ul {
  left: 12em;
  margin: 0;
  top: 0;
}

/* Vertical Menu */

.skin-colibri .menu.menu-vertical {
  color: inherit;
}

.skin-colibri .menu.menu-vertical ul {
  margin-top: .3em;
}

.skin-colibri .menu.menu-vertical ul ul {
  margin-left: 1em;
}

.skin-colibri .menu-vertical li {
  padding: .3em;
}

.skin-colibri .menu-vertical li:empty {
  margin: .3em 0;
}

.skin-colibri .menu-vertical .xDropdown-toggle {
  cursor: pointer;
}

.skin-colibri .menu-vertical .xDropdown-toggle:hover {
  background-color: $theme.highlightColor;
}

.skin-colibri .menu-vertical .xDropdown-toggle:after {
  content: '\25C2';
  float: right;
}

.skin-colibri .menu-vertical .xDropdown.open .xDropdown-toggle:after {
  content: '\25BE';
}

.skin-colibri .menu-vertical .xDropdown-menu {
  display: none;
}

.skin-colibri .menu-vertical .xDropdown.open &gt; .xDropdown-menu {
  display: block;
}</code>
    </property>
    <property>
      <contentType>CSS</contentType>
    </property>
    <property>
      <name>Colibri Styling</name>
    </property>
    <property>
      <parse>1</parse>
    </property>
    <property>
      <use>onDemand</use>
    </property>
  </object>
  <object>
    <name>Menu.MenuMacro</name>
    <number>1</number>
    <className>XWiki.StyleSheetExtension</className>
    <guid>81584261-5cad-4a9c-b96d-9d6237122407</guid>
    <class>
      <name>XWiki.StyleSheetExtension</name>
      <customClass/>
      <customMapping/>
      <defaultViewSheet/>
      <defaultEditSheet/>
      <defaultWeb/>
      <nameField/>
      <validationScript/>
      <cache>
        <cache>0</cache>
        <defaultValue>long</defaultValue>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>cache</name>
        <number>5</number>
        <prettyName>Caching policy</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>long|short|default|forbid</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </cache>
      <code>
        <contenttype>PureText</contenttype>
        <disabled>0</disabled>
        <editor>PureText</editor>
        <name>code</name>
        <number>2</number>
        <prettyName>Code</prettyName>
        <rows>20</rows>
        <size>50</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </code>
      <contentType>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>contentType</name>
        <number>6</number>
        <prettyName>Content Type</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>CSS|LESS</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </contentType>
      <name>
        <disabled>0</disabled>
        <name>name</name>
        <number>1</number>
        <prettyName>Name</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </name>
      <parse>
        <disabled>0</disabled>
        <displayFormType>select</displayFormType>
        <displayType>yesno</displayType>
        <name>parse</name>
        <number>4</number>
        <prettyName>Parse content</prettyName>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.BooleanClass</classType>
      </parse>
      <use>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>use</name>
        <number>3</number>
        <prettyName>Use this extension</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>currentPage|onDemand|always</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </use>
    </class>
    <property>
      <cache>long</cache>
    </property>
    <property>
      <code>@media print {
  .menu {
    display: none;
  }
}
.menu {
  &amp;.menu-vertical {
    ul {
      list-style-type: none;
      margin-top: .3em;
      padding: 0;
      ul {
        padding: 0 1em;
      }
    }
    li {
      padding: .3em;
      /* Separator horizontal inside menu */
      &amp;:empty {
        .nav-divider(@dropdown-divider-bg);
        margin: .3em 0;
        padding: 0;
      }
    }
    .xDropdown-menu {
      display: none;
    }
    .xDropdown-toggle {
      cursor: pointer;
      position: relative;
      &amp;:hover {
        background-color: @nav-link-hover-bg;
      }
      &amp;:after {
        .caret;
        content: '';
        /* Positioning */
        position: absolute;
        margin-top: @line-height-computed / 3;
        right: 1em;
        /* Collapsed arrow style */
        border-bottom: 4px solid transparent;
        border-right: 4px solid;
        border-top: 4px solid transparent;
      }
    }
    .xDropdown.open {
      &gt; .xDropdown-toggle:after {
        /* Expanded arrow style */
        .caret;
        margin-top: @line-height-computed / 2;
      }
      &gt; .xDropdown-menu {
        display: block;
      }
    }
  }
  &amp;.menu-horizontal {
    /* Stylization: Navbars */
    .clearfix;
    background-color: @navbar-default-bg;
    border-color: @navbar-default-border;
    /* Custom styling */
    .box-shadow(0 2px 8px rgba(0,0,0,0.4) inset);
    min-height: @navbar-height;
    padding-left: 25px;
    &amp; &gt; ul {
      padding-left: 0;
      list-style-type: none;
      margin: 0;
      &amp; &gt; li {
        position: relative;
        display: block;
        padding: @nav-link-padding;
        padding-top: @navbar-padding-vertical;
        padding-bottom: @navbar-padding-vertical;
        @media (min-width: @grid-float-breakpoint) {
          float: left;
        }
        line-height: @line-height-computed;
        color: @navbar-default-link-color;
        &amp;:hover {
          color: @navbar-default-link-hover-color;
          background-color: @navbar-default-link-hover-bg;
          background-color: @navbar-default-link-active-bg;
          color: @navbar-default-link-active-color;
          /* When hovering, have the same color for text and link usage */
          &amp; &gt; span &gt; a {
            background-color: @navbar-default-link-active-bg;
            color: @navbar-default-link-active-color;
          }
        }
        /* Links inside menu */
        a {
          color: @navbar-default-link-color;
          &amp;:hover {
            text-decoration: none;
          }
        }
        /* Containers, images inside menu */
        div, img {
          /* Limit the height to the nav height minus the padding and minus border */
          max-height: @navbar-height - (2 * @navbar-padding-vertical) - 2px;
          overflow: hidden;
        }
        /* Separator vertical inside menu */
        &amp;:empty {
          height: @navbar-height;
          margin: 0 ((@line-height-computed / 2) - 1);
          padding: 0;
          border-right: 1px solid @navbar-default-border;
        }
      }
      /* Stylization: Dropdowns */
      ul {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: @zindex-dropdown;
        display: none; // none by default, but block on "open" of the menu
        float: left;
        min-width: 160px;
        padding: 5px 0;
        margin: 2px 0 0; // override default ul
        list-style: none;
        font-size: @font-size-base;
        text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)
        background-color: @dropdown-bg;
        border: 1px solid @dropdown-border;
        border-radius: @border-radius-base;
        .box-shadow(0 6px 12px rgba(0,0,0,.175));
        background-clip: padding-box;
        margin-top: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        li {
          /* Text inside menu */
          color: @dropdown-link-color;
          /* Links inside menu */
          a {
            display: block;
            padding: 3px 20px;
            clear: both;
            font-weight: normal;
            line-height: @line-height-base;
            color: @dropdown-link-color;
            overflow: hidden;
            text-overflow: ellipsis; // Displaying ... if the text is too long
            &amp;:hover {
              /* &amp;:extend(.dropdown-menu&gt;li&gt;a:hover); */
              text-decoration: none;
              color: @dropdown-link-hover-color;
              background-color: @dropdown-link-hover-bg;
            }
          }
          /* Submenus inside menu */
          &amp;.xDropdown {
            /* Even if we don't have links, display the content the same way */
            display: block;
            padding: 3px 20px;
            clear: both;
            font-weight: normal;
            line-height: @line-height-base;
            color: @dropdown-link-color;
            /* Empty dropdowns should have height in order to display the arrow */
            min-height: 2 * @font-size-base;
            &amp;:hover {
              text-decoration: none;
              color: @dropdown-link-hover-color;
              background-color: @dropdown-link-hover-bg;
              /* When in dropdown we also have a link, adjust the hover color */
              &amp; &gt; span &gt; a {
                color: @dropdown-link-hover-color;
              }
            }
            /* When in dropdown we also have a link, reset the duplicated padding */
            &amp; &gt; span &gt; a {
              padding: 0;
              display: inherit;
            }
            /* Place the arrow on the right */
            &amp;:after {
              position: absolute;
              margin-top: @line-height-computed / 2;
              right: 8px;
            }
          }
          /* Separator horizontal inside menu */
          &amp;:empty {
            .nav-divider(@dropdown-divider-bg);
            padding: 0;
          }
        }
      }
    }
    /* Stylization: Generic */
    li {
      /* Display submenus on hover */
      &amp;:hover &gt; ul {
        display: block;
      }
      /* Display an arrow for expandable items */
      &amp;.xDropdown {
        &amp;:after {
          .caret;
          content: '';
          margin-left: .5em;
        }
      }
    }
    /* The only way to have a menu with more than 2 levels without JavaScript is to use a fixed width. */
    &amp;.fixedWidth {
      li li {
        position: relative;
      }
      ul ul {
        width: 12em;
        ul {
          left: 12em;
          margin: 0;
          top: 0;
          /* Bring the dropdown closer in order to hover it */
          margin-left: -2px;
          /* Adjust corner to better look as a submenu */
          border-top-left-radius: 0;
        }
      }
    }
    /* Resetting rules for mobile view */
    @media (max-width: @screen-xs-max) {
      &gt; ul { 
        margin: 0 0 0 -25px; /* Remove padding added in normal view */
        &gt; li {
          &amp;:empty {
            .nav-divider(@navbar-default-border);
          }
        }
        ul {
          /* Resetting rules for mobile view */
          position: static;
          float: none;
          width: auto;
          margin-top: 0;
          background-color: transparent;
          border: 0;
          box-shadow: none;
          li {
            /* Text inside menu */
            color: @navbar-default-link-color;
            /* Links inside menu */
            a {
              color: @navbar-default-link-color;
              &amp;:hover {
                /* Preserve the styling from dropdown */
              }
            }
            /* Submenus inside menu */
            &amp;.xDropdown {
              color: @navbar-default-link-color;
              &amp;:hover {
                background-color: transparent;
                color: inherit;
              }
              /* When in dropdown we also have a link */
              &gt; span &gt; a { 
                color: @navbar-default-link-color;
              }
            }
            &amp;:empty {
              .nav-divider(@navbar-default-border);
            }
          }
        }
      }
      li {
        &amp;.xDropdown {
          /* Place the arrow on the right */
          &amp;:after {
            position: absolute;
            margin-top: @line-height-computed;
            right: 1em;
            top: 0;
          }
        }
      }
      &amp;.fixedWidth ul ul {
        width: auto;
      }
    }
  }
}

.menu .wikiexternallink {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 center;
  padding: 0;
}

.menu-horizontal-toggle {
  .clearfix;
  background-color: @navbar-default-bg;
  border-color: @navbar-default-border;
  .box-shadow(0 2px 8px rgba(0,0,0,0.4) inset);
  min-height: @navbar-height;
  &amp; .navbar-toggle {
    float: left;
    padding-left: 15px;
    &amp; .icon-bar {
      background-color: @navbar-default-link-color;
      transition: .3s ease all;
      &amp;:nth-of-type(2) {
        opacity: 0;
      }
      &amp;:nth-of-type(3) {
        transform: rotate(45deg);
      }
      &amp;:nth-of-type(4) {
        transform: rotate(-45deg);
        margin-top: -2px;
        margin-bottom: 6px;
      }
    }
    &amp;.collapsed {
      .icon-bar {
        &amp;:nth-of-type(2) {
          opacity: 1;
        }
        &amp;:nth-of-type(3) {
          transform: rotate(0);
        }
        &amp;:nth-of-type(4) {
          transform: rotate(0);
          margin-top: 4px;
          margin-bottom: 0;
        }
      }
    }
  }
}</code>
    </property>
    <property>
      <contentType>LESS</contentType>
    </property>
    <property>
      <name>Flamingo Styling</name>
    </property>
    <property>
      <parse/>
    </property>
    <property>
      <use>onDemand</use>
    </property>
  </object>
  <object>
    <name>Menu.MenuMacro</name>
    <number>0</number>
    <className>XWiki.WikiMacroClass</className>
    <guid>1f17c513-df60-481f-b8d0-15ef11b75d45</guid>
    <class>
      <name>XWiki.WikiMacroClass</name>
      <customClass/>
      <customMapping/>
      <defaultViewSheet/>
      <defaultEditSheet/>
      <defaultWeb/>
      <nameField/>
      <validationScript/>
        <defaultValue>0</defaultValue>
        <disabled>0</disabled>
        <displayFormType>select</displayFormType>
        <displayType/>
        <name>async_cached</name>
        <number>13</number>
        <prettyName>Cached</prettyName>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.BooleanClass</classType>
      </async_cached>
      <async_context>
        <number>13</number>
        <cache>0</cache>
        <disabled>0</disabled>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>1</multiSelect>
        <name>async_context</name>
        <prettyName>Context elements</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator>, </separator>
        <separators>|, </separators>
        <size>5</size>
        <number>14</number>
        <values>action=Action|doc.reference=Document|icon.theme=Icon theme|locale=Language|rendering.defaultsyntax=Default syntax|rendering.restricted=Restricted|rendering.targetsyntax=Target syntax|request.base=Request base URL|request.cookies|request.parameters=Request parameters|request.url=Request URL|request.wiki=Request wiki|user=User|wiki=Wiki</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </async_context>
      <async_enabled>
        <separator>, </separator>
        <defaultValue>0</defaultValue>
        <disabled>0</disabled>
        <displayFormType>select</displayFormType>
        <displayType/>
        <values>action=Action|doc.reference=Document|icon.theme=Icon theme|locale=Language|rendering.defaultsyntax=Default syntax|rendering.restricted=Restricted|rendering.targetsyntax=Target syntax|request.base=Request base URL|request.cookies|request.parameters=Request parameters|request.url=Request URL|request.wiki=Request wiki|user=User|wiki=Wiki</values>
        <number>12</number>
        <prettyName>Asynchronous rendering</prettyName>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.BooleanClass</classType>
      </async_enabled>
      <code>
        <disabled>0</disabled>
        <editor>Text</editor>
        <name>code</name>
        <number>10</number>
        <number>12</number>
        <prettyName>Macro code</prettyName>
        <rows>20</rows>
        <size>40</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </code>
      <contentDescription>
        <contenttype>PureText</contenttype>
        <disabled>0</disabled>
        <editor>PureText</editor>
        <name>contentDescription</name>
        <number>9</number>
        <prettyName>Content description (Not applicable for "No content" type)</prettyName>
        <rows>5</rows>
        <size>40</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </contentDescription>
      <contentJavaType>
        <cache>0</cache>
        <defaultValue>Unknown</defaultValue>
        <disabled>0</disabled>
        <displayType>input</displayType>
        <freeText>allowed</freeText>
        <largeStorage>1</largeStorage>
        <multiSelect>0</multiSelect>
        <name>contentJavaType</name>
        <number>8</number>
        <picker>1</picker>
        <prettyName>Macro content type</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator>|</separator>
        <separators>|</separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>Unknown|Wiki</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </contentJavaType>
      <contentType>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>contentType</name>
        <number>7</number>
        <prettyName>Macro content availability</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator>|</separator>
        <separators>|</separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>Optional|Mandatory|No content</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </contentType>
      <defaultCategory>
        <disabled>0</disabled>
        <name>defaultCategory</name>
        <number>4</number>
        <prettyName>Default category</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </defaultCategory>
      <description>
        <contenttype>PureText</contenttype>
        <disabled>0</disabled>
        <editor>PureText</editor>
        <name>description</name>
        <number>3</number>
        <prettyName>Macro description</prettyName>
        <rows>5</rows>
        <size>40</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </description>
      <id>
        <disabled>0</disabled>
        <name>id</name>
        <number>1</number>
        <prettyName>Macro id</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </id>
      <name>
        <disabled>0</disabled>
        <name>name</name>
        <number>2</number>
        <prettyName>Macro name</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </name>
      <priority>
        <disabled>0</disabled>
        <name>priority</name>
        <number>11</number>
        <numberType>integer</numberType>
        <prettyName>Priority</prettyName>
        <size>10</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.NumberClass</classType>
      <priority>
        <disabled>0</disabled>
        <name>priority</name>
        <number>11</number>
        <numberType>integer</numberType>
        <prettyName>Priority</prettyName>
        <size>10</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.NumberClass</classType>
      </priority>
      </priority>
      <supportsInlineMode>
        <disabled>0</disabled>
        <displayFormType>select</displayFormType>
        <displayType>yesno</displayType>
        <name>supportsInlineMode</name>
        <number>5</number>
        <prettyName>Supports inline mode</prettyName>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.BooleanClass</classType>
      </supportsInlineMode>
      <visibility>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>0</multiSelect>
        <name>visibility</name>
        <number>6</number>
        <prettyName>Macro visibility</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator>|</separator>
        <separators>|</separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>Current User|Current Wiki|Global</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </visibility>
    </class>
    <property>
      <async_cached>0</async_cached>
    </property>
    <property>
      <async_context/>
    </property>
    <property>
      <async_enabled>0</async_enabled>
    </property>
    <property>
      <code>{{velocity}}
#set ($id = $xcontext.macro.params.id)
#set ($type = $xcontext.macro.params.type)
#if ("$!colorTheme" != '')
  ## Make sure we use an absolute reference (see XWIKI-9672)
  #set ($colorTheme = $services.model.resolveDocument($colorTheme, $doc.documentReference))
#end
#set ($discard = $xwiki.ssx.use("$xcontext.macro.doc.prefixedFullName", {'colorTheme': $colorTheme}))
#set ($discard = $xwiki.jsx.use("$xcontext.macro.doc.prefixedFullName"))
#if($type.contains('horizontal'))
  (% role="navigation" class="menu-horizontal-toggle" %)(((
    (% class="navbar-header" %)(((
        &lt;button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#$!{escapetool.xml($id)}" aria-expanded="false"&gt;
          &lt;span class="icon-bar"&gt;&lt;/span&gt;
          &lt;span class="icon-bar"&gt;&lt;/span&gt;
          &lt;span class="icon-bar"&gt;&lt;/span&gt;
        &lt;/button&gt;
      {{/html}}
    )))
      {{wikimacrocontent/}}
        &lt;button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#$!{escapetool.xml($id)}" aria-expanded="false"&gt;
  )))
#else
  (% #if ("$!id" != '') id="${services.rendering.escape($id, 'xwiki/2.1')}"#end class="menu menu-${services.rendering.escape($!type, 'xwiki/2.1')}" %)(((
    {{wikimacrocontent/}}
  )))
#end
{{/velocity}}</code>
    </property>
    <property>
      <contentDescription>Define the menu structure using wiki syntax. Each menu item should be a list item and should contain the menu item label or link. You can use nested lists for sub-menu items.</contentDescription>
    (% id="$!{services.rendering.escape($id, 'xwiki/2.1')}" class="menu menu-${services.rendering.escape($!type, 'xwiki/2.1')} collapse navbar-collapse" %)(((
      {{wikimacrocontent/}}
    <property>
      <contentJavaType>Wiki</contentJavaType>
    </property>
    <property>
      <contentType>Mandatory</contentType>
    </property>
    <property>
  (% #if ("$!id" != '') id="${services.rendering.escape($id, 'xwiki/2.1')}"#end class="menu menu-${services.rendering.escape($!type, 'xwiki/2.1')}" %)(((
    {{wikimacrocontent/}}
      <defaultCategory>Navigation</defaultCategory>
    </property>
    <property>
      <description>Displays a menu created using simple wiki syntax (nested lists and links).</description>
    </property>
    <property>
      <id>menu</id>
    </property>
    <property>
      <name>Menu</name>
      <contentJavaType>Wiki</contentJavaType>
    </property>
    <property>
      <priority/>
    </property>
    <property>
      <supportsInlineMode>0</supportsInlineMode>
    </property>
    <property>
      <visibility>Global</visibility>
    </property>
  </object>
  <object>
    <name>Menu.MenuMacro</name>
    <number>0</number>
    <className>XWiki.WikiMacroParameterClass</className>
    <guid>bbeba321-44be-4e3a-b102-f59cada761ec</guid>
    <property>
      <priority/>
    </property>
    <class>
      <name>XWiki.WikiMacroParameterClass</name>
      <customClass/>
      <customMapping/>
      <defaultViewSheet/>
      <defaultEditSheet/>
      <defaultWeb/>
      <nameField/>
      <validationScript/>
      <defaultValue>
        <disabled>0</disabled>
        <name>defaultValue</name>
        <number>4</number>
        <prettyName>Parameter default value</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </defaultValue>
      <description>
        <disabled>0</disabled>
        <name>description</name>
        <number>2</number>
        <prettyName>Parameter description</prettyName>
        <rows>5</rows>
        <size>40</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </description>
      <mandatory>
        <disabled>0</disabled>
        <displayFormType>select</displayFormType>
        <displayType>yesno</displayType>
        <name>mandatory</name>
        <number>3</number>
        <prettyName>Parameter mandatory</prettyName>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.BooleanClass</classType>
      </mandatory>
      <name>
        <disabled>0</disabled>
        <name>name</name>
        <number>1</number>
        <prettyName>Parameter name</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </name>
      <type>
        <disabled>0</disabled>
        <name>type</name>
        <number>5</number>
        <prettyName>Parameter type</prettyName>
        <size>60</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </type>
    </class>
    <property>
      <defaultValue>horizontal</defaultValue>
    </property>
    <property>
      <description>The optional menu type determines the menu appearance and behaviour. The supported values are: horizontal (default value) and vertical.</description>
    </property>
    <property>
      <mandatory>0</mandatory>
    </property>
    <property>
      <name>type</name>
    </property>
    <property>
      <type/>
    </property>
  </object>
  <object>
    <name>Menu.MenuMacro</name>
    <number>2</number>
    <className>XWiki.WikiMacroParameterClass</className>
    <guid>00eee99c-d118-4b26-8784-98ade58b5af7</guid>
    <class>
      <name>XWiki.WikiMacroParameterClass</name>
      <customClass/>
      <customMapping/>
      <defaultViewSheet/>
      <defaultEditSheet/>
      <defaultWeb/>
      <nameField/>
      <validationScript/>
      <defaultValue>
        <disabled>0</disabled>
        <name>defaultValue</name>
        <number>4</number>
        <prettyName>Parameter default value</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </defaultValue>
      <description>
        <disabled>0</disabled>
        <name>description</name>
        <number>2</number>
        <prettyName>Parameter description</prettyName>
        <rows>5</rows>
        <size>40</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </description>
      <mandatory>
        <disabled>0</disabled>
        <displayFormType>select</displayFormType>
        <displayType>yesno</displayType>
        <name>mandatory</name>
        <number>3</number>
        <prettyName>Parameter mandatory</prettyName>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.BooleanClass</classType>
      </mandatory>
      <name>
        <disabled>0</disabled>
        <name>name</name>
        <number>1</number>
        <prettyName>Parameter name</prettyName>
        <size>30</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </name>
      <type>
        <disabled>0</disabled>
        <name>type</name>
        <number>5</number>
        <prettyName>Parameter type</prettyName>
        <size>60</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </type>
    </class>
    <property>
      <defaultValue/>
    </property>
    <property>
      <description>Optional menu identifier that will be set on the HTML element that wraps the menu. You can use this identifier in JavaScript code to access the menu DOM or in functional tests to assert the menu items.</description>
    </property>
    <property>
      <mandatory>0</mandatory>
    </property>
    <property>
      <name>id</name>
    </property>
    <property>
      <type/>
    </property>
  </object>
</xwikidoc>