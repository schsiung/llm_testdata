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

<xwikidoc version="1.5" reference="XWiki.Mentions.MentionsMacro" locale="">
  <web>XWiki.Mentions</web>
  <name>MentionsMacro</name>
  <language/>
  <defaultLanguage/>
  <translation>0</translation>
  <creator>xwiki:XWiki.Admin</creator>
  <parent>XWiki.Mentions.WebHome</parent>
  <author>xwiki:XWiki.Admin</author>
  <originalMetadataAuthor>xwiki:XWiki.Admin</originalMetadataAuthor>
  <contentAuthor>xwiki:XWiki.Admin</contentAuthor>
  <version>1.1</version>
  <title>MentionsMacro</title>
  <comment/>
  <minorEdit>false</minorEdit>
  <syntaxId>xwiki/2.1</syntaxId>
  <hidden>true</hidden>
  <content>
</content>
  <object>
    <name>XWiki.Mentions.MentionsMacro</name>
    <number>0</number>
    <className>XWiki.JavaScriptExtension</className>
    <guid>c01bb948-92a0-403d-bcbc-3bb6997529e8</guid>
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
      <code>require.config({
  paths: {
    'xwiki-suggestUsers': $jsontool.serialize($xwiki.getSkinFile('uicomponents/suggest/suggestUsersAndGroups.js', true))
  }
});
require(['deferred!ckeditor', 'xwiki-suggestUsers', 'jquery', 'xwiki-meta'], function (ckeditorPromise, suggestUsers, $, xm) {

  /**
   * Get the current wiki scope for displaying global, local or global and local users
   */
  const userScope = "$!services.wiki.user.userScope";

  // see https://stackoverflow.com/a/6248722/657524
  function random6chars() {
    // I generate the UID from two parts here 
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  }

  /**
   * Compute a new unique anchor for the given reference.
   * The unique anchor is based on the mentionned user id, concatenaed with a random string of 6 alphanumeric
   * characters.
   * The chances of collision are quite low, about 46k mentions for a given mentioned user on a given page (assuming
   * that no mentions are ever deleted).
   */
  const getAnchor = function (reference) {
    const refId = reference.replace(/[.:]/g, '-');
    const randomId = random6chars();
    return refId + '-' + randomId;
  };

  const search = function (text, callback) {
    const params = {
      'input': text,
      'limit': 6,
    };
    suggestUsers.loadUsers(userScope, params).then(users =&gt; {
      const cct = users.map(function (x) {
        // insert an id because that's required by the mentions plugins.
        x.id = x.value;
        // Make sure to display the icon avatar or the image one.
        if (x.icon.cssClass) {
          x.imgClass = "hidden";
          x.cssClass = x.icon.cssClass;
        } else {
          x.imgUrl = x.icon.url;
          x.cssClass = "hidden";
          x.imgClass = "";
        }
        x.iconHtml
        return x;
      });
      callback(cct);
    });
  }

  ckeditorPromise.then(ckeditor =&gt; {
    function getUserMentionsConfig(editor) {
      return {
        feed: function (opts, callback) {
          search(opts.query, callback);
        },
        marker: '@',
        minChars: 0,
        itemsLimit: 6,
        itemTemplate:
         `&lt;li data-id="{id}" class="ckeditor-autocomplete-item"&gt;
            &lt;div&gt;
              &lt;span class="ckeditor-autocomplete-item-icon-wrapper"&gt;
                &lt;span class="{cssClass}"&gt;&lt;/span&gt;
                &lt;img src="{imgUrl}" class="{imgClass}"/&gt;
              &lt;/span&gt;
              &lt;span class="ckeditor-autocomplete-item-label"&gt;{label}&lt;/span&gt;
            &lt;/div&gt;
          &lt;/li&gt;`,
        outputTemplate: function (param) {
          editor.once('afterInsertHtml', function() {
            editor.execCommand('xwiki-macro-insert', {
              name: 'mention',
              inline: 'enforce',
              parameters: {
                reference: param.id,
                style: 'FULL_NAME',
                anchor: getAnchor(param.id)
              }
            });
          });
          // the outputTemplate insert nothing but wait for the afterInsertHtml event to be triggered
          // at this point the xwiki-macro-insert deals with the macro insertion in the rich editor.
          return '';
        }
      };
    }

    function updateConfig(editor) {
      editor.config.mentions = editor.config.mentions || [];
      editor.config.mentions.push(getUserMentionsConfig(editor));
    }

    ckeditor.on('instanceCreated', function(event) {
      // The editor instance was created but it not yet initialized. Unfortunately the configuration object passed when
      // the instance was created has not been merged with the global configuration yet.
      event.editor.once('configLoaded', function(event) {
        // The editor configuration has been loaded (the instance configuration has been merged with the global
        // configuration) but the editor has not been fully initialized yet so we can modify the configuration.
        updateConfig(event.editor);
      });
    });
  });
});</code>
    </property>
    <property>
      <name/>
    </property>
    <property>
      <parse>1</parse>
    </property>
    <property>
      <use>always</use>
    </property>
  </object>
  <object>
    <name>XWiki.Mentions.MentionsMacro</name>
    <number>0</number>
    <className>XWiki.StyleSheetExtension</className>
    <guid>2e1aa3cf-0475-4362-bad1-0b608bcef372</guid>
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
      <cache>forbid</cache>
    </property>
    <property>
      <code>.xwiki-mention {
  background-color: $services.mentions.mentionsColor;
  border-radius: 8px;
  padding: 2px 5px 2px 5px;
}

.xwiki-mention.user.self {
  background-color: $services.mentions.selfMentionsColor;
}

.xwiki-mention.removed {
  text-decoration: line-through;
}

blockquote.mention-quote {
  font-size: inherit;
}</code>
    </property>
    <property>
      <contentType>CSS</contentType>
    </property>
    <property>
      <name/>
    </property>
    <property>
      <parse>1</parse>
    </property>
    <property>
      <use>always</use>
    </property>
  </object>
  <object>
    <name>XWiki.Mentions.MentionsMacro</name>
    <number>0</number>
    <className>XWiki.WikiMacroClass</className>
    <guid>fe15c3f8-7eff-4a61-a60f-bf2df5e08f24</guid>
    <class>
      <name>XWiki.WikiMacroClass</name>
      <customClass/>
      <customMapping/>
      <defaultViewSheet/>
      <defaultEditSheet/>
      <defaultWeb/>
      <nameField/>
      <validationScript/>
      <async_cached>
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
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <freeText>forbidden</freeText>
        <largeStorage>0</largeStorage>
        <multiSelect>1</multiSelect>
        <name>async_context</name>
        <number>14</number>
        <prettyName>Context elements</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator>, </separator>
        <separators>|, </separators>
        <size>5</size>
        <unmodifiable>0</unmodifiable>
        <values>action=Action|doc.reference=Document|icon.theme=Icon theme|locale=Language|rendering.defaultsyntax=Default syntax|rendering.restricted=Restricted|rendering.targetsyntax=Target syntax|request.base=Request base URL|request.parameters=Request parameters|request.url=Request URL|request.wiki=Request wiki|user=User|wiki=Wiki</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </async_context>
      <async_enabled>
        <defaultValue>0</defaultValue>
        <disabled>0</disabled>
        <displayFormType>select</displayFormType>
        <displayType/>
        <name>async_enabled</name>
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
#set ($reference = $wikimacro.parameters.reference)
#set ($style = $wikimacro.parameters.style)
#set ($type = "$!wikimacro.parameters.type")
#set ($content = $services.mentions.format($reference.reference, $style, $type))
#set ($anchor = $wikimacro.parameters.anchor)
#set ($isCurrentUser = $xcontext.userReference == $reference.reference &amp;&amp; ($type == '' || $type  == 'user'))
#set ($cssClasses = ['xwiki-mention', 'user'])
#if ($isCurrentUser)
  #set ($discard = $cssClasses.add('self'))
#end
#set ($link = $xwiki.getURL($reference.reference, 'view'))
{{html}}
&lt;a id="$escapetool.xml($anchor)" class="$stringtool.join($cssClasses, ' ')" data-reference="$escapetool.xml($services.model.serialize($reference.reference, 'default'))" href="$escapetool.xml($link)"&gt;
  $escapetool.xml($content)
&lt;/a&gt;
{{/html}}
{{/velocity}}</code>
    </property>
    <property>
      <contentDescription/>
    </property>
    <property>
      <contentJavaType/>
    </property>
    <property>
      <contentType>No content</contentType>
    </property>
    <property>
      <defaultCategory>Notifications</defaultCategory>
    </property>
    <property>
      <description>Inserts a user mention.</description>
    </property>
    <property>
      <id>mention</id>
    </property>
    <property>
      <name>User Mention</name>
    </property>
    <property>
      <priority/>
    </property>
    <property>
      <supportsInlineMode>1</supportsInlineMode>
    </property>
    <property>
      <visibility>Current Wiki</visibility>
    </property>
  </object>
  <object>
    <name>XWiki.Mentions.MentionsMacro</name>
    <number>0</number>
    <className>XWiki.WikiMacroParameterClass</className>
    <guid>b1028021-73f8-4f8b-b481-bf9c2f83b4c7</guid>
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
      <description>The mentioned user or group reference.</description>
    </property>
    <property>
      <mandatory>1</mandatory>
    </property>
    <property>
      <name>reference</name>
    </property>
    <property>
      <type>org.xwiki.user.UserReference</type>
    </property>
  </object>
  <object>
    <name>XWiki.Mentions.MentionsMacro</name>
    <number>1</number>
    <className>XWiki.WikiMacroParameterClass</className>
    <guid>80090526-6a61-4284-90d5-bda83f37472d</guid>
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
      <defaultValue>FULL_NAME</defaultValue>
    </property>
    <property>
      <description>The display style of the mention (this is only supported for user mentions).</description>
    </property>
    <property>
      <mandatory>0</mandatory>
    </property>
    <property>
      <name>style</name>
    </property>
    <property>
      <type>org.xwiki.mentions.DisplayStyle</type>
    </property>
  </object>
  <object>
    <name>XWiki.Mentions.MentionsMacro</name>
    <number>2</number>
    <className>XWiki.WikiMacroParameterClass</className>
    <guid>72ef13d4-6a59-4981-b125-0e38ba9e8728</guid>
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
      <description>Anchor name to be used to link to the mention. This should be preferably unique.</description>
    </property>
    <property>
      <mandatory>0</mandatory>
    </property>
    <property>
      <name>anchor</name>
    </property>
    <property>
      <type>java.lang.String</type>
    </property>
  </object>
  <object>
    <name>XWiki.Mentions.MentionsMacro</name>
    <number>3</number>
    <className>XWiki.WikiMacroParameterClass</className>
    <guid>4c992749-364c-49d6-9d8f-2e4a3734c720</guid>
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
      <description>The type of mentioned actor.</description>
    </property>
    <property>
      <mandatory/>
    </property>
    <property>
      <name>type</name>
    </property>
    <property>
      <type>java.lang.String</type>
    </property>
  </object>
</xwikidoc>