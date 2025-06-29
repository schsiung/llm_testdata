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

<xwikidoc version="1.3" reference="Panels.IncludedDocuments" locale="">
  <web>Panels</web>
  <name>IncludedDocuments</name>
  <language/>
  <defaultLanguage/>
  <translation>0</translation>
  <creator>xwiki:XWiki.Admin</creator>
  <parent>Panels.WebHome</parent>
  <author>xwiki:XWiki.Admin</author>
  <contentAuthor>xwiki:XWiki.Admin</contentAuthor>
  <version>1.1</version>
  <title/>
  <comment/>
  <minorEdit>false</minorEdit>
  <syntaxId>xwiki/2.1</syntaxId>
  <hidden>true</hidden>
  <content/>
  <object>
    <name>Panels.IncludedDocuments</name>
    <number>0</number>
    <className>Panels.PanelClass</className>
    <guid>71817d7c-8af6-45c0-a0ef-c4c8554917b2</guid>
    <class>
      <name>Panels.PanelClass</name>
      <customClass/>
      <customMapping/>
      <defaultViewSheet/>
      <defaultEditSheet/>
      <defaultWeb/>
      <nameField/>
      <validationScript/>
      <category>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <multiSelect>0</multiSelect>
        <name>category</name>
        <number>1</number>
        <prettyName>Category</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>Information|Navigation|Tools|Administration|Other</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </category>
      <content>
        <disabled>0</disabled>
        <editor>Text</editor>
        <name>content</name>
        <number>2</number>
        <prettyName>Content</prettyName>
        <rows>25</rows>
        <size>120</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </content>
      <description>
        <disabled>0</disabled>
        <editor>Text</editor>
        <name>description</name>
        <number>3</number>
        <prettyName>Description</prettyName>
        <rows>5</rows>
        <size>40</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.TextAreaClass</classType>
      </description>
      <name>
        <disabled>0</disabled>
        <name>name</name>
        <number>4</number>
        <prettyName>Name</prettyName>
        <size>40</size>
        <unmodifiable>0</unmodifiable>
        <classType>com.xpn.xwiki.objects.classes.StringClass</classType>
      </name>
      <type>
        <cache>0</cache>
        <disabled>0</disabled>
        <displayType>select</displayType>
        <multiSelect>0</multiSelect>
        <name>type</name>
        <number>5</number>
        <prettyName>Panel type</prettyName>
        <relationalStorage>0</relationalStorage>
        <separator> </separator>
        <separators>|, </separators>
        <size>1</size>
        <unmodifiable>0</unmodifiable>
        <values>view|edit</values>
        <classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
      </type>
    </class>
    <property>
      <category>Information</category>
    </property>
    <property>
      <content>{{velocity}}
#set ($pages = $tdoc.includedPages)
#if ($pages.size() &gt; 0 || $showEmptyPanels)
#largepanelheader($services.localization.render('xe.panels.includedDocs.title'))
$services.localization.render('xe.panels.includedDocs.count', [$pages.size()])
#foreach ($page in $pages)
  #set ($pageName = $services.rendering.escape($services.rendering.escape($page, 'xwiki/2.1'), 'xwiki/2.1'))
  #set ($pageLink = $services.rendering.escape($page, 'xwiki/2.1'))
  #set ($pageName = $services.rendering.escape($services.rendering.escape($page, 'xwiki/2.1'), 'xwiki/2.1'))
  #set ($alt = $services.rendering.escape($services.localization.render('panels.documentInformation.editIncluded', [$page]), 'xwiki/2.1'))
  * [[$pageName&gt;&gt;$pageLink]] [[[[image:icon:page_white_edit||alt="$alt"]]&gt;&gt;path:$xwiki.getURL($page, 'edit')]]
  #set ($alt = $services.rendering.escape($services.localization.render('panels.documentInformation.editIncluded', [$page]), 'xwiki/2.1'))
  * [[$pageName&gt;&gt;$pageLink]] [[[[image:icon:page_white_edit||alt="$alt"]]&gt;&gt;path:$xwiki.getURL($page, 'edit')]]
#end
#panelfooter()
#end
{{/velocity}}</content>
    <property>
      <description>Displays the documents included in the current document.</description>
      <description>Displays the documents included in the current document.</description>
    </property>
    <property>
      <name>Included Documents</name>
    </property>
    <property>
      <type>edit</type>
    </property>
  </object>
</xwikidoc>