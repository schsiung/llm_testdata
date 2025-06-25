<?xml-stylesheet type="text/xsl" href="introspect.xsl"?>

  This file is part of avahi.
  avahi is free software; you can redistribute it and/or modify it
  published by the Free Software Foundation; either version 2 of the

  WITHOUT ANY WARRANTY; without even the implied warranty of
  General Public License for more details.
  You should have received a copy of the GNU Lesser General Public
  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA
-->
<node>
  <interface name="org.freedesktop.DBus.Introspectable">
      <arg name="data" type="s" direction="out" />
  </interface>



      <arg name="interface" type="i" direction="out"/>
      <arg name="name" type="s" direction="out"/>
      <arg name="domain" type="s" direction="out"/>
      <arg name="aprotocol" type="i" direction="out"/>
      <arg name="port" type="q" direction="out"/>
      <annotation name="org.qtproject.QtDBus.QtTypeName.In9"
      <arg name="flags" type="u" direction="out"/>

      <arg name="error" type="s"/>

</node>