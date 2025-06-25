<node>
    <signal name="mountStatus">
      <arg name="pid" type="i" direction="out"/>
    </signal>
      <arg name="src" type="s" direction="out"/>
      <arg name="st" type="i" direction="out"/>
    <method name="mount">
      <arg name="mountPoint" type="s" direction="in"/>
      <arg name="gid" type="i" direction="in"/>
      <annotation name="org.freedesktop.DBus.Method.NoReply" value="true"/>
    <method name="umount">
      <arg name="pid" type="i" direction="in"/>
    </method>
</node>