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

<xwikidoc version="1.1">
  <web>IconThemesCode</web>
  <name>IconPickerMacro</name>
  <language/>
  <defaultLanguage/>
  <translation>0</translation>
  <creator>xwiki:XWiki.Admin</creator>
  <parent>IconThemes.WebHome</parent>
  <author>xwiki:XWiki.Admin</author>
  <contentAuthor>xwiki:XWiki.Admin</contentAuthor>
  <version>1.1</version>
  <title>Icon Picker Macro</title>
  <comment/>
  <minorEdit>false</minorEdit>
  <syntaxId>xwiki/2.1</syntaxId>
  <hidden>true</hidden>
  <content>= Usage =
{{code}}
{{iconPicker id="" class="" prefix="" /}}
{{/code}}

**Where:**
|=id (optional)|DOM id of the input field where the picker will apply
|=class (optional)|CSS class of inputs where the picker will apply
|=prefix (optional)|Prefix to add before the name of the icon in the input field (default: "{{{image:icon:}}}")
== Live example ==
{{code}}
{{html}}
  &lt;p&gt;Field 1: &lt;input type="text" id="myPicker" /&gt;&lt;/p&gt;
  &lt;p&gt;Field 2: &lt;input type="text" class="fieldWithPicker" /&gt;&lt;/p&gt;
{{/html}}

{{iconPicker id="myPicker" class="fieldWithPicker" prefix="icon:" /}}
{{/code}}
== Play with it ==
{{html}}
  &lt;p&gt;Field 1: &lt;input type="text" id="myPicker" /&gt;&lt;/p&gt;
  &lt;p&gt;Field 2: &lt;input type="text" class="fieldWithPicker" /&gt;&lt;/p&gt;
{{/html}}

{{iconPicker id="myPicker" class="fieldWithPicker" prefix="icon:" /}}</content>
  <object>
    <name>IconThemesCode.IconPickerMacro</name>
    <number>0</number>
    <className>XWiki.WikiMacroClass</className>
    <guid>a5daaf5a-bdf5-4a63-b0de-db25061f5874</guid>
    <class>
      <name>XWiki.WikiMacroClass</name>
      <customClass/>
      <customMapping/>
      <defaultViewSheet/>
      <defaultEditSheet/>
      <defaultWeb/>
      <nameField/>
      <validationScript/>
      <code>
        <disabled>0</disabled>
        <name>code</name>
        <number>9</number>
        <prettyName>Macro code</prettyName>
        <rows>20</rows>
        <size>40</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </code>
      <contentDescription>
        <disabled>0</disabled>
        <name>contentDescription</name>
        <number>8</number>
        <prettyName>Content description (Not applicable for "No content" type)</prettyName>
        <rows>5</rows>
        <size>40</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </contentDescription>
      <contentType>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <multiSelect>0</multiSelect>
        <name>contentType</name>
        <number>7</number>
        <prettyName>Macro content type</prettyName>
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
        <disabled>0</disabled>
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
      <code>{{velocity output="false"}}
  $xwiki.ssx.use('IconThemesCode.IconPicker')
  ## The icons themes may need some SSX, so we ask for a rendering of an icon of each icon theme, to be able to display
  ## all icon themes in the picker
  ## ToDo: since it is a bit hacky, a better system would be to dynamically load the needed SSX on demand
  #foreach($iconSetName in $services.icon.iconSetNames)
    $services.icon.render('wiki', $iconSetName)
  #end
{{/velocity}}

{{velocity}}
{{html clean="false"}}
&lt;script&gt;
  require.config({
    paths: {
      'xwiki-icon-picker': '$xwiki.getURL($services.model.createDocumentReference('', 'IconThemesCode', 'IconPicker'), 'jsx', "minify=$!{escapetool.url($request.minify)}")'
    }
  });
  require(['jquery', 'xwiki-icon-picker'], function($) {
    var options = {};
    #if($xcontext.macro.params.parameterNames.contains('prefix'))
      options['prefix'] = '$escapetool.javascript($xcontext.macro.params.prefix)';
    #end
    #if("$!xcontext.macro.params.id" != '')
      $('#${escapetool.javascript(${xcontext.macro.params.id})}').xwikiIconPicker(options);
    #end
    #if("$!xcontext.macro.params.get('class')" != '')
      $('.${escapetool.javascript(${xcontext.macro.params.get('class')})}').xwikiIconPicker(options);
    #end
  });
&lt;/script&gt;
{{/html}}
{{/velocity}}</code>
    </property>
    <property>
      <contentDescription/>
    </property>
    <property>
      <contentType>No content</contentType>
    </property>
    <property>
      <defaultCategory>Development</defaultCategory>
    </property>
    <property>
      <description>Select an icon within the XWiki icon set.</description>
    </property>
    <property>
      <id>iconPicker</id>
    </property>
    <property>
      <name>Icon Picker</name>
    </property>
    <property>
      <supportsInlineMode>1</supportsInlineMode>
    </property>
    <property>
      <visibility>Current Wiki</visibility>
    </property>
  </object>
  <object>
    <name>IconThemesCode.IconPickerMacro</name>
    <number>0</number>
    <className>XWiki.WikiMacroParameterClass</className>
    <guid>bff4d631-8c3a-47fd-b54a-a542874bb81e</guid>
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
    </class>
    <property>
      <defaultValue/>
    </property>
    <property>
      <description>DOM id of the input field where the picker will apply</description>
    </property>
    <property>
      <mandatory>0</mandatory>
    </property>
    <property>
      <name>id</name>
    </property>
  </object>
  <object>
    <name>IconThemesCode.IconPickerMacro</name>
    <number>1</number>
    <className>XWiki.WikiMacroParameterClass</className>
    <guid>f9169e0d-a47c-4598-b0d7-4211940d1886</guid>
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
    </class>
    <property>
      <defaultValue/>
    </property>
    <property>
      <description>CSS class of inputs where the picker will apply</description>
    </property>
    <property>
      <mandatory>0</mandatory>
    </property>
    <property>
      <name>class</name>
    </property>
  </object>
  <object>
    <name>IconThemesCode.IconPickerMacro</name>
    <number>2</number>
    <className>XWiki.WikiMacroParameterClass</className>
    <guid>3a99d1ba-b108-45c6-a828-e76902f25783</guid>
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
    </class>
    <property>
      <defaultValue/>
    </property>
    <property>
      <description>Prefix to add before the name of the icon in the input field (default: "image:icon:")</description>
    </property>
    <property>
      <mandatory>0</mandatory>
    </property>
    <property>
      <name>prefix</name>
    </property>
  </object>
</xwikidoc>