<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>RemoteDevicePropertiesWidget</class>
 <widget class="QWidget" name="RemoteDevicePropertiesWidget">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>516</width>
    <height>447</height>
   </rect>
  </property>
  <layout class="QVBoxLayout" name="verticalLayout_2">
   <item>
    <widget class="PlainNoteLabel" name="connectionNote">
     <property name="text">
      <string>These settings are only editable when the device is not connected.</string>
     </property>
    </widget>
   </item>
   <item>
    <layout class="QFormLayout" name="formLayout">
     <property name="fieldGrowthPolicy">
      <enum>QFormLayout::ExpandingFieldsGrow</enum>
     </property>
     <item row="0" column="0">
      <widget class="BuddyLabel" name="typeLabel">
       <property name="text">
        <string>Type:</string>
       </property>
       <property name="buddy">
        <cstring>type</cstring>
       </property>
      </widget>
     </item>
     <item row="0" column="1">
      <widget class="QComboBox" name="type"/>
     </item>
     <item row="1" column="0">
      <widget class="BuddyLabel" name="nameLabel">
       <property name="text">
        <string>Name:</string>
       </property>
       <property name="buddy">
        <cstring>name</cstring>
       </property>
      </widget>
     </item>
     <item row="1" column="1">
      <widget class="LineEdit" name="name"/>
     </item>
    </layout>
   </item>
   <item>
    <widget class="QGroupBox" name="groupBox">
     <property name="title">
      <string>Options</string>
     </property>
     <layout class="QVBoxLayout" name="verticalLayout">
      <item>
       <widget class="QStackedWidget" name="stackedWidget">
        <property name="currentIndex">
         <number>0</number>
        </property>
        <widget class="QWidget" name="sshPage">
         <layout class="QVBoxLayout" name="verticalLayout_4">
          <item>
           <layout class="QFormLayout" name="formLayout_2">
            <item row="0" column="0">
             <widget class="BuddyLabel" name="hostLabel">
              <property name="text">
               <string>Host:</string>
              </property>
              <property name="buddy">
               <cstring>sshHost</cstring>
              </property>
             </widget>
            </item>
            <item row="0" column="1">
             <widget class="LineEdit" name="sshHost"/>
            </item>
            <item row="1" column="0">
             <widget class="BuddyLabel" name="portLabel">
              <property name="text">
               <string>Port:</string>
              </property>
              <property name="buddy">
               <cstring>sshPort</cstring>
              </property>
             </widget>
            </item>
            <item row="1" column="1">
             <widget class="QSpinBox" name="sshPort">
              <property name="maximum">
               <number>65535</number>
              </property>
             </widget>
            </item>
            <item row="2" column="0">
             <widget class="BuddyLabel" name="userLabel">
              <property name="text">
               <string>User:</string>
              </property>
              <property name="buddy">
               <cstring>sshUser</cstring>
              </property>
             </widget>
            </item>
            <item row="2" column="1">
             <widget class="LineEdit" name="sshUser"/>
            </item>
            <item row="3" column="0">
             <widget class="BuddyLabel" name="folderLabel">
              <property name="text">
               <string>Folder:</string>
              </property>
              <property name="buddy">
               <cstring>sshFolder</cstring>
              </property>
             </widget>
            </item>
            <item row="3" column="1">
             <widget class="LineEdit" name="sshFolder"/>
            </item>
            <item row="4" column="0">
             <widget class="BuddyLabel" name="sshExtraLabel">
              <property name="text">
               <string>Extra Options:</string>
              </property>
              <property name="buddy">
               <cstring>sshExtra</cstring>
              </property>
             </widget>
            </item>
            <item row="4" column="1">
             <widget class="LineEdit" name="sshExtra"/>
            </item>
           </layout>
          </item>
          <item>
           <widget class="PlainNoteLabel" name="label_5">
            <property name="text">
             <string>Due to the way sshfs works, a suitable ssh-askpass application (ksshaskpass, ssh-askpass-gnome, etc.) will be required to enter the password.</string>
            </property>
            <property name="wordWrap">
             <bool>true</bool>
            </property>
            <property name="textInteractionFlags">
             <set>Qt::NoTextInteraction</set>
            </property>
           </widget>
          </item>
          <item>
           <spacer name="verticalSpacer_2">
            <property name="orientation">
             <enum>Qt::Vertical</enum>
            </property>
            <property name="sizeHint" stdset="0">
             <size>
              <width>20</width>
              <height>78</height>
             </size>
            </property>
           </spacer>
          </item>
         </layout>
        </widget>
        <widget class="QWidget" name="filePage">
         <layout class="QFormLayout" name="formLayout_3">
          <item row="0" column="0">
           <widget class="BuddyLabel" name="label">
            <property name="text">
             <string>Folder:</string>
            </property>
            <property name="buddy">
             <cstring>fileFolder</cstring>
            </property>
           </widget>
          </item>
          <item row="0" column="1">
           <widget class="PathRequester" name="fileFolder"/>
          </item>
         </layout>
        </widget>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="PlainNoteLabel" name="infoLabel">
     <property name="text">
      <string>This dialog is only used to add remote devices (e.g. via sshfs), or to access locally mounted folders. For normal media players, attached via USB, Cantata will automatically display the device when it is attached.</string>
     </property>
    </widget>
   </item>
  </layout>
 </widget>
 <customwidgets>
  <customwidget>
   <class>PathRequester</class>
   <extends>QLineEdit</extends>
   <header>support/pathrequester.h</header>
  </customwidget>
  <customwidget>
   <class>LineEdit</class>
   <extends>QLineEdit</extends>
   <header>support/lineedit.h</header>
  </customwidget>
  <customwidget>
   <class>BuddyLabel</class>
   <extends>QLabel</extends>
   <header>support/buddylabel.h</header>
  </customwidget>
  <customwidget>
   <class>PlainNoteLabel</class>
   <extends>QLabel</extends>
   <header>widgets/notelabel.h</header>
  </customwidget>
 </customwidgets>
 <tabstops>
  <tabstop>type</tabstop>
 </tabstops>
 <resources/>
 <connections>
  <connection>
   <sender>type</sender>
   <signal>activated(int)</signal>
   <receiver>stackedWidget</receiver>
   <slot>setCurrentIndex(int)</slot>
   <hints>
    <hint type="sourcelabel">
     <x>65</x>
     <y>22</y>
    </hint>
    <hint type="destinationlabel">
     <x>101</x>
     <y>94</y>
    </hint>
   </hints>
  </connection>
 </connections>
</ui>