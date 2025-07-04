<?xml version="1.0" encoding="UTF-8"?>

<ApolloSections xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="opencms://system/modules/org.opencms.apollo/schemas/section.xsd">
  <ApolloSection language="en">
    <Headline><![CDATA[Release Notes for OpenCms 10.5.4]]></Headline>
    <Text name="Text0">
      <links>
        <link name="link0" internal="false" type="A">
          <target><![CDATA[https://github.com/alkacon/opencms-core/tree/branch_11_0_x]]></target>
        </link>
        <link name="link1" internal="false" type="A">
          <target><![CDATA[http://www.alkacon.com/contact/]]></target>
        </link>
        <link name="link2" internal="false" type="A">
          <target><![CDATA[https://github.com/alkacon/apollo-template]]></target>
        </link>
        <link name="link3" internal="false" type="A">
          <target><![CDATA[https://github.com/alkacon/opencms-core]]></target>
        </link>
        <link name="link4" internal="false" type="A">
          <target><![CDATA[https://github.com/alkacon/opencms-core/pulls]]></target>
        </link>
        <link name="link5" internal="false" type="A">
          <target><![CDATA[https://github.com/alkacon/opencms-core/issues]]></target>
          <query><![CDATA[state=open]]></query>
        </link>
      </links>
      <content><![CDATA[<p>May 17, 2018: OpenCms 10.5.4 is a maintenance release for OpenCms 10.5. It adds some security improvements and fixes a number of issues that have been reported in the 10.5.3 release.</p>
<p>Currently the Alkacon team is working hard to finish OpenCms version 11, which will bring numerous new features. You can check out the progress on version OpenCms 11 on <a href="%(link0)">GitHub</a>. We expect OpenCms 11 to be ready by the end of 2018.</p>
<h2>New in OpenCms 10.5.4</h2>
<ul>
<li><span class="label label-warning">#</span> Improved security by always starting a new HttpSession on login.</li>
<li><span class="label label-warning">#</span> Improved security by using a client id token to prevent session hijacking.</li>
<li>Added 'publish scheduled' option to page editor context menus.</li>
</ul>
<p>Items marked with <span class="label label-warning">#</span> are considered important improvements in this version.</p>
<h2>Improved in OpenCms 10.5.4</h2>
<ul>
<li>Updated TinyMCE WYSIWYG editor to version 4.7.12.</li>
<li>Updated CodeMirror code editor to version 5.37.0.</li>
<li>Fixed issue with potential memory leak during PDF extraction.</li>
<li>Fixed issue where sitemap modified and deleted lists could exceed the user "additional info" DB size limit.</li>
<li>Fixed issue #513 where XML contents with locales not configured in opencms-system.xml would jeopardize the locale handling.</li>
<li>Fixed issue #547 where selecting a date with the date picker failed.</li>
<li>Fixed issue #548 where missing detail pages would lead to null pointer exceptions.</li>
<li>Fixed issue #553 where adding a model group to a page failed, PR by koronchik.</li>
<li>Fixed issue #558 where flying saucer PDF library was updated to improve security, PR by andreasrosdal.</li>
<li>Fixed issue #564 with improved handling of invalid formatter configurations, PR by gallardo.</li>
<li>Fixed issue #565 with improved logging in XML entity resolver, PR by gallardo.</li>
<li>Fixed issue #570 with improved logging when creating of SOLR containers failed, PR by gallardo.</li>
<li>Fixed issue #573 where displaying the gallery dialog failed due to missing explorer types.</li>
<li>Fixed issue #590 where request parameters configured in the jsp-search configuration where not taken into account.</li>
</ul>
<h2>General OpenCms features</h2>
<ul>
<li>The page editor allows WYSIWYG inline editing of web pages and arrangement of content by drag &amp; drop.</li>
<li>The form based editor allows editing of structured content in a well defined form mask.</li>
<li>The sitemap editor allows to create new pages and re-arrange the navigation tree by drag &amp; drop.</li>
<li>Responsive "Apollo" default template based on Bootstrap 3 with many features.</li>
<li>Content creation for mobile devices with preview and device specific content control.</li>
<li>Structured contents can be defined using a simple XML schema.</li>
<li>Easy to use "Online / Offline" workflow, changes must be approved before they become visible.</li>
<li>Link management for all internal resources with broken link detection.</li>
<li>Integrated image scaling and cropping.</li>
<li>SEO features with automatic sitemap.xml generation and page alias support.</li>
<li>Full featured user management that supports the concept of "Organizational Units" (OUs).</li>
<li>Allows management of multiple websites within one installation.</li>
<li>Contents can be served dynamically or exported to static HTML files.</li>
<li>Direct access to the OpenCms content repository over a shared network drive.</li>
<li>CMIS and WebDAV access to the OpenCms content repository.</li>
<li>Integrates Apache SOLR for powerful content searching and noSQL like queries.</li>
<li>Full text search for web pages as well as in office documents like PDF, MS Office and Open Office.</li>
<li>Extensions can be added through a flexible module system.</li>
<li>The "time warp" feature allows to view resources which are expired or not yet released.</li>
<li>JSP integration for dynamic functionality in templates, dynamic forms etc.</li>
<li>... and many more</li>
</ul>
<h3>Backward compatibility</h3>
<p>OpenCms 10.5.4 is fully backward compatible with all 10.5, 10.0, 9.5 and 9.0 versions. Templates and other OpenCms developed code from these versions should work "out of the box" with version 10.5.4.</p>
<p><span class="label label-danger">Notice for users of Alkacon OCEE</span> Users of Alkacon OCEE require a new OCEE version for OpenCms 10.5.4. The update is free for Alkacon customers with a valid OCEE update subscription. <a href="%(link1)" target="_blank" rel="noopener noreferrer">Please contact Alkacon</a> to receive the new version.</p>
<h3>About the Apollo Template</h3>
<p>The Apollo template is our main demo showcase. It is build using best practices of the latest OpenCms version. The Apollo template sources are available on Github at <a href="%(link2)">https://github.com/alkacon/apollo-template</a>.</p>
<h3>Compatibility with Java versions, servlet containers and databases</h3>
<p>OpenCms 10.5 has been written and tested for Java 8 and Java 7. We have tested with ORACLEs JDK as well as OpenJDK. OpenCms should run with all compliant JVMs.</p>
<p>We have tested this release on the Tomcat servlet engine. OpenCms works "out of the box" with Tomcat 8.5, 8 or 7, which we recommend. Others have reported deploying OpenCms successfully on other servlet containers like JBoss, WildFly, WebLogic, WebSphere, GlassFish and Resin.</p>
<p>On the database side, we provide support for MySQL, MariaDB, Oracle, PostgreSQL, MS SQL Server, DB2 and HSQLDB.</p>
<h3>Regarding version numbers and build tags</h3>
<p>The main OpenCms Git repository is available on Github at <a href="%(link3)" target="_blank" rel="noopener noreferrer">github.com/alkacon/opencms-core</a>.</p>
<p>In case you want to get the most current OpenCms 10.5 sources from Git, please check out <span class="label label-info">branch_10_5_x</span>. The 10.5.4 release is tagged <span class="label label-info">build_10_5_4</span>.</p>
<h3>How you can help</h3>
<p>Contributions to the OpenCms core development are most welcome. <a href="%(link4)" target="_blank" rel="noopener noreferrer">Please send us your pull requests directly on GitHub.</a></p>
<p>Please report issues found in OpenCms using <a href="%(link5)" target="_blank" rel="noopener noreferrer">our GitHub issue tracker</a>.</p>
<p>Thank you for using OpenCms and have fun with OpenCms :-)</p>]]></content>
    </Text>
  </ApolloSection>
</ApolloSections>