<beans xmlns="http://www.springframework.org/schema/beans" xmlns:sec="http://www.springframework.org/schema/security"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:osgi="http://www.springframework.org/schema/osgi"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/osgi
       http://www.springframework.org/schema/osgi/spring-osgi.xsd
       http://www.springframework.org/schema/security
       http://www.springframework.org/schema/security/spring-security-3.1.xsd">

  <!-- ######################################## -->
  <!-- # Open and unsecured url patterns      # -->
  <!-- ######################################## -->

  <sec:http pattern="/admin/img/**" security="none" />
  <sec:http pattern="/favicon.ico" security="none" />
  <sec:http pattern="/img/**" security="none" />
  <sec:http pattern="/js/**" security="none" />
  <sec:http pattern="/lib/**" security="none" />
  <sec:http pattern="/admin-ng/fonts/**" security="none" />
  <sec:http pattern="/admin-ng/scripts/**" security="none" />
  <sec:http pattern="/admin-ng/styles/**" security="none" />
  <sec:http pattern="/play/*" security="none" />

  <sec:http create-session="ifRequired" servlet-api-provision="true" realm="Opencast"
    entry-point-ref="opencastEntryPoint">

    <!-- ################ -->
    <!-- # URL SECURITY # -->
    <!-- ################ -->

    <!-- Allow anonymous access to the login form -->
    <sec:intercept-url pattern="/admin-ng/login.html" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/sysinfo/bundles/version" method="GET" access="ROLE_ANONYMOUS" />

    <!-- Protect admin UI facade -->
    <sec:intercept-url pattern="/workflow/definitions.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/acl/acls.json" method="GET" access="ROLE_ADMIN, ROLE_UI_ACLS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/acl/*" method="GET" access="ROLE_ADMIN, ROLE_UI_ACLS_VIEW" />
    <sec:intercept-url pattern="/acl-manager/acl/*" method="GET" access="ROLE_ADMIN, ROLE_UI_ACLS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/capture-agents/agents.json" method="GET" access="ROLE_ADMIN, ROLE_UI_LOCATIONS_VIEW, ROLE_UI_EVENTS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/capture-agents/*" method="GET" access="ROLE_ADMIN, ROLE_UI_LOCATIONS_DETAILS_CAPABILITIES_VIEW, ROLE_UI_LOCATIONS_DETAILS_CONFIGURATION_VIEW, ROLE_UI_LOCATIONS_DETAILS_GENERAL_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/asset/assets.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ASSETS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/asset/attachment/*.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ASSETS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/asset/catalog/*.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ASSETS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/asset/media/*.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ASSETS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/asset/publication/*.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ASSETS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/catalogAdapters" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_METADATA_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/events.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/workflowProperties" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_CREATE, ROLE_UI_TASKS_CREATE, ROLE_UI_EVENTS_EDITOR_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/new/metadata" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_METADATA_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/new/processing" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_CREATE, ROLE_UI_TASKS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/event/*/attachments.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ATTACHMENTS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/comments" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_COMMENTS_VIEW"/>
    <sec:intercept-url pattern="/admin-ng/event/*/comment/*" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_COMMENTS_VIEW"/>
    <sec:intercept-url pattern="/admin-ng/event/*/publications.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_PUBLICATIONS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/hasActiveTransaction" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/hasSnapshots.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DELETE" />
    <sec:intercept-url pattern="/admin-ng/event/*/media.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_MEDIA_VIEW"/>
    <sec:intercept-url pattern="/admin-ng/event/*/media/*.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_MEDIA_VIEW"/>
    <sec:intercept-url pattern="/admin-ng/event/*/metadata.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_METADATA_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/scheduling.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_SCHEDULING_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/workflows.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/workflows/*/operations.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_VIEW"/>
    <sec:intercept-url pattern="/admin-ng/event/*/workflows/*/operations/*" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_VIEW"/>
    <sec:intercept-url pattern="/admin-ng/event/*/workflows/*/errors.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_VIEW"/>
    <sec:intercept-url pattern="/admin-ng/event/*/workflows/*/errors/*.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_VIEW"/>
    <sec:intercept-url pattern="/admin-ng/event/*/workflows/*" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_VIEW"/>
    <sec:intercept-url pattern="/admin-ng/event/*/access.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ACL_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/groups/groups.json" method="GET" access="ROLE_ADMIN, ROLE_UI_GROUPS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/groups/*" method="GET" access="ROLE_ADMIN, ROLE_UI_GROUPS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/job/jobs.json" method="GET" access="ROLE_ADMIN, ROLE_UI_JOBS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/series/series.json" method="GET" access="ROLE_ADMIN, ROLE_UI_SERIES_VIEW" />
    <sec:intercept-url pattern="/admin-ng/series/new/metadata" method="GET" access="ROLE_ADMIN, ROLE_UI_SERIES_DETAILS_METADATA_VIEW" />
    <sec:intercept-url pattern="/admin-ng/series/new/themes" method="GET" access="ROLE_ADMIN, ROLE_UI_SERIES_DETAILS_THEMES_EDIT" />
    <sec:intercept-url pattern="/admin-ng/series/*/access.json" method="GET" access="ROLE_ADMIN, ROLE_UI_SERIES_DETAILS_ACL_VIEW" />
    <sec:intercept-url pattern="/admin-ng/series/*/metadata.json" method="GET" access="ROLE_ADMIN, ROLE_UI_SERIES_DETAILS_METADATA_VIEW" />
    <sec:intercept-url pattern="/admin-ng/series/*/theme.json" method="GET" access="ROLE_ADMIN, ROLE_UI_SERIES_DETAILS_THEMES_VIEW" />
    <sec:intercept-url pattern="/admin-ng/server/servers.json" method="GET" access="ROLE_ADMIN, ROLE_UI_SERVERS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/services/services.json" method="GET" access="ROLE_ADMIN, ROLE_UI_SERVICES_VIEW" />
    <sec:intercept-url pattern="/admin-ng/tasks/processing.json" method="GET" access="ROLE_ADMIN, ROLE_UI_TASKS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/themes/themes.json" method="GET" access="ROLE_ADMIN, ROLE_UI_THEMES_VIEW" />
    <sec:intercept-url pattern="/admin-ng/themes/*/usage.json" method="GET" access="ROLE_ADMIN, ROLE_UI_THEMES_DETAILS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/themes/*.json" method="GET" access="ROLE_ADMIN, ROLE_UI_THEMES_DETAILS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/tools/*/editor.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_EDITOR_VIEW" />
    <sec:intercept-url pattern="/admin-ng/tools/*/thumbnail.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_EDITOR_VIEW" />
    <sec:intercept-url pattern="/admin-ng/tools/*.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_EDITOR_VIEW" />
    <sec:intercept-url pattern="/admin-ng/users/users.json" method="GET" access="ROLE_ADMIN, ROLE_UI_USERS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/users/*.json" method="GET" access="ROLE_ADMIN, ROLE_UI_USERS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/user-settings/signature" method="GET" access="ROLE_ADMIN, ROLE_ADMIN_UI" />
    <sec:intercept-url pattern="/admin-ng/resources/events/filters.json" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/resources/series/filters.json" method="GET" access="ROLE_ADMIN, ROLE_UI_SERIES_VIEW" />
    <sec:intercept-url pattern="/admin-ng/resources/themes/filters.json" method="GET" access="ROLE_ADMIN, ROLE_UI_THEMES_VIEW" />
    <sec:intercept-url pattern="/admin-ng/resources/recordings/filters.json" method="GET" access="ROLE_ADMIN, ROLE_UI_LOCATIONS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/resources/users/filters.json" method="GET" access="ROLE_ADMIN, ROLE_UI_USERS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/resources/groups/filters.json" method="GET" access="ROLE_ADMIN, ROLE_UI_GROUPS_VIEW" />
    <sec:intercept-url pattern="/admin-ng/resources/components.json" method="GET" access="ROLE_ADMIN, ROLE_ADMIN_UI" />
    <sec:intercept-url pattern="/admin-ng/resources/providers.json" method="GET" access="ROLE_ADMIN, ROLE_ADMIN_UI" />
    <sec:intercept-url pattern="/admin-ng/resources/THEMES.json" method="GET" access="ROLE_ADMIN, ROLE_UI_THEMES_VIEW" />
    <sec:intercept-url pattern="/admin-ng/resources/*.json" method="GET" access="ROLE_ADMIN, ROLE_ADMIN_UI" />
    <sec:intercept-url pattern="/assets/assets/**" method="GET" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ASSETS_VIEW" />

    <sec:intercept-url pattern="/admin-ng/acl/*" method="PUT" access="ROLE_ADMIN, ROLE_UI_ACLS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/metadata" method="PUT" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_METADATA_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/scheduling" method="PUT" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_SCHEDULING_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/workflows" method="PUT" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/workflows/*/action/stop" method="PUT" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/workflows/*/action/retry" method="PUT" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/workflows/*/action/none" method="PUT" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/comment/*/*" method="PUT" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_COMMENTS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/comment/*" method="PUT" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_COMMENTS_EDIT"/>
    <sec:intercept-url pattern="/admin-ng/event/bulk/update" method="PUT" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_SCHEDULING_EDIT" />
    <sec:intercept-url pattern="/admin-ng/groups/*" method="PUT" access="ROLE_ADMIN, ROLE_UI_GROUPS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/series/*/metadata" method="PUT" access="ROLE_ADMIN, ROLE_UI_SERIES_DETAILS_METADATA_EDIT" />
    <sec:intercept-url pattern="/admin-ng/series/*/theme" method="PUT" access="ROLE_ADMIN, ROLE_UI_SERIES_DETAILS_THEMES_EDIT" />
    <sec:intercept-url pattern="/admin-ng/themes/*" method="PUT" access="ROLE_ADMIN, ROLE_UI_THEMES_EDIT" />
    <sec:intercept-url pattern="/admin-ng/users/*" method="PUT" access="ROLE_ADMIN, ROLE_UI_USERS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/user-settings/signature/*" method="PUT" access="ROLE_ADMIN, ROLE_ADMIN_UI" />

    <sec:intercept-url pattern="/services/maintenance" method="POST" access="ROLE_ADMIN, ROLE_UI_SERVERS_MAINTENANCE_EDIT" />
    <sec:intercept-url pattern="/services/sanitize" method="POST" access="ROLE_ADMIN, ROLE_UI_SERVICES_STATUS_EDIT" />
    <sec:intercept-url pattern="/staticfiles" method="POST" access="ROLE_ADMIN, ROLE_UI_THEMES_CREATE, ROLE_UI_THEMES_EDIT" />
    <sec:intercept-url pattern="/admin-ng/acl" method="POST" access="ROLE_ADMIN, ROLE_UI_ACLS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/event/bulk/conflicts" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_SCHEDULING_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/deleteEvents" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_DELETE" />
    <sec:intercept-url pattern="/admin-ng/event/new" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/event/new/conflicts" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/event/scheduling.json" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_SCHEDULING_VIEW" />
    <sec:intercept-url pattern="/admin-ng/event/*/access" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ACL_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/assets" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_ASSETS_EDIT" />
    <sec:intercept-url pattern="/admin-ng/event/*/comment" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_COMMENTS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/event/*/comment/*/reply" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_COMMENTS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/event/*/comment/*" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_COMMENTS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/groups" method="POST" access="ROLE_ADMIN, ROLE_UI_GROUPS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/index/*" method="POST" access="ROLE_ADMIN" />
    <sec:intercept-url pattern="/admin-ng/series/deleteSeries" method="POST" access="ROLE_ADMIN, ROLE_UI_SERIES_DELETE" />
    <sec:intercept-url pattern="/admin-ng/series/new" method="POST" access="ROLE_ADMIN, ROLE_UI_SERIES_CREATE" />
    <sec:intercept-url pattern="/admin-ng/series/*/access" method="POST" access="ROLE_ADMIN, ROLE_UI_SERIES_DETAILS_ACL_EDIT" />
    <sec:intercept-url pattern="/admin-ng/tasks/new" method="POST" access="ROLE_ADMIN, ROLE_UI_TASKS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/themes" method="POST" access="ROLE_ADMIN, ROLE_UI_THEMES_CREATE" />
    <sec:intercept-url pattern="/admin-ng/tools/*/editor.json" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_EDITOR_EDIT" />
    <sec:intercept-url pattern="/admin-ng/tools/*/thumbnail.json" method="POST" access="ROLE_ADMIN, ROLE_UI_EVENTS_EDITOR_EDIT" />
    <sec:intercept-url pattern="/admin-ng/users" method="POST" access="ROLE_ADMIN, ROLE_UI_USERS_CREATE" />
    <sec:intercept-url pattern="/admin-ng/user-settings/signature" method="POST" access="ROLE_ADMIN, ROLE_ADMIN_UI" />

    <sec:intercept-url pattern="/admin-ng/acl/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_ACLS_DELETE" />
    <sec:intercept-url pattern="/admin-ng/capture-agents/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_LOCATIONS_DELETE" />
    <sec:intercept-url pattern="/admin-ng/event/*/comment/*/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_COMMENTS_DELETE" />
    <sec:intercept-url pattern="/admin-ng/event/*/comment/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_COMMENTS_DELETE" />
    <sec:intercept-url pattern="/admin-ng/event/*/workflows/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_EVENTS_DETAILS_WORKFLOWS_DELETE" />
    <sec:intercept-url pattern="/admin-ng/event/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_EVENTS_DELETE" />
    <sec:intercept-url pattern="/admin-ng/groups/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_GROUPS_DELETE" />
    <sec:intercept-url pattern="/admin-ng/series/*/theme" method="DELETE" access="ROLE_ADMIN, ROLE_UI_SERIES_DETAILS_THEMES_EDIT" />
    <sec:intercept-url pattern="/admin-ng/series/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_SERIES_DELETE" />
    <sec:intercept-url pattern="/admin-ng/themes/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_THEMES_DELETE" />
    <sec:intercept-url pattern="/admin-ng/users/*" method="DELETE" access="ROLE_ADMIN, ROLE_UI_USERS_DELETE" />

    <!-- Securing the URLs for the external API interface -->
    <!-- External API GET Endpoints -->
    <sec:intercept-url pattern="/api" method="GET" access="ROLE_ADMIN, ROLE_API"/>
    <sec:intercept-url pattern="/api/agents" method="GET" access="ROLE_ADMIN, ROLE_API_CAPTURE_AGENTS_VIEW"/>
    <sec:intercept-url pattern="/api/agents/*" method="GET" access="ROLE_ADMIN, ROLE_API_CAPTURE_AGENTS_VIEW"/>
    <sec:intercept-url pattern="/api/events" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_VIEW"/>
    <sec:intercept-url pattern="/api/events/*" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_VIEW"/>
    <sec:intercept-url pattern="/api/events/*/acl" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_ACL_VIEW"/>
    <sec:intercept-url pattern="/api/events/*/media" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_MEDIA_VIEW"/>
    <sec:intercept-url pattern="/api/events/*/media/*" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_MEDIA_VIEW"/>
    <sec:intercept-url pattern="/api/events/*/metadata" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_METADATA_VIEW"/>
    <sec:intercept-url pattern="/api/events/*/metadata/*" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_METADATA_VIEW"/>
    <sec:intercept-url pattern="/api/events/*/publications" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_PUBLICATIONS_VIEW"/>
    <sec:intercept-url pattern="/api/events/*/publications/*" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_PUBLICATIONS_VIEW"/>
    <sec:intercept-url pattern="/api/events/*/scheduling" method="GET" access="ROLE_ADMIN, ROLE_API_EVENTS_SCHEDULING_VIEW"/>
    <sec:intercept-url pattern="/api/groups" method="GET" access="ROLE_ADMIN, ROLE_API_GROUPS_VIEW"/>
    <sec:intercept-url pattern="/api/groups/*" method="GET" access="ROLE_ADMIN, ROLE_API_GROUPS_VIEW"/>
    <sec:intercept-url pattern="/api/info/*" method="GET" access="ROLE_ADMIN, ROLE_API" />
    <sec:intercept-url pattern="/api/info/me/*" method="GET" access="ROLE_ADMIN, ROLE_API" />
    <sec:intercept-url pattern="/api/series" method="GET" access="ROLE_ADMIN, ROLE_API_SERIES_VIEW"/>
    <sec:intercept-url pattern="/api/series/*" method="GET" access="ROLE_ADMIN, ROLE_API_SERIES_VIEW"/>
    <sec:intercept-url pattern="/api/series/*/acl" method="GET" access="ROLE_ADMIN, ROLE_API_SERIES_ACL_VIEW"/>
    <sec:intercept-url pattern="/api/series/*/metadata" method="GET" access="ROLE_ADMIN, ROLE_API_SERIES_METADATA_VIEW"/>
    <sec:intercept-url pattern="/api/series/*/metadata/*" method="GET" access="ROLE_ADMIN, ROLE_API_SERIES_METADATA_VIEW"/>
    <sec:intercept-url pattern="/api/series/*/properties" method="GET" access="ROLE_ADMIN, ROLE_API_SERIES_PROPERTIES_VIEW"/>
    <sec:intercept-url pattern="/api/version" method="GET" access="ROLE_ADMIN, ROLE_API"/>
    <sec:intercept-url pattern="/api/version/*" method="GET" access="ROLE_ADMIN, ROLE_API"/>
    <sec:intercept-url pattern="/api/workflows" method="GET" access="ROLE_ADMIN, ROLE_API_WORKFLOW_INSTANCE_VIEW"/>
    <sec:intercept-url pattern="/api/workflows/*" method="GET" access="ROLE_ADMIN, ROLE_API_WORKFLOW_INSTANCE_VIEW"/>
    <sec:intercept-url pattern="/api/workflow-definitions" method="GET" access="ROLE_ADMIN, ROLE_API_WORKFLOW_DEFINITION_VIEW"/>
    <sec:intercept-url pattern="/api/workflow-definitions/*" method="GET" access="ROLE_ADMIN, ROLE_API_WORKFLOW_DEFINITION_VIEW"/>
    <!-- External API PUT Endpoints -->
    <sec:intercept-url pattern="/api/events/*" method="PUT" access="ROLE_ADMIN, ROLE_API_EVENTS_EDIT"/>
    <sec:intercept-url pattern="/api/events/*/acl" method="PUT" access="ROLE_ADMIN, ROLE_API_EVENTS_ACL_EDIT"/>
    <sec:intercept-url pattern="/api/events/*/metadata" method="PUT" access="ROLE_ADMIN, ROLE_API_EVENTS_METADATA_EDIT"/>
    <sec:intercept-url pattern="/api/events/*/metadata/*" method="PUT" access="ROLE_ADMIN, ROLE_API_EVENTS_METADATA_EDIT"/>
    <sec:intercept-url pattern="/api/events/*/scheduling" method="PUT" access="ROLE_ADMIN, ROLE_API_EVENTS_SCHEDULING_EDIT"/>
    <sec:intercept-url pattern="/api/groups/*" method="PUT" access="ROLE_ADMIN, ROLE_API_GROUPS_EDIT"/>
    <sec:intercept-url pattern="/api/series/*" method="PUT" access="ROLE_ADMIN, ROLE_API_SERIES_EDIT"/>
    <sec:intercept-url pattern="/api/series/*/acl" method="PUT" access="ROLE_ADMIN, ROLE_API_SERIES_ACL_EDIT"/>
    <sec:intercept-url pattern="/api/series/*/metadata" method="PUT" access="ROLE_ADMIN, ROLE_API_SERIES_METADATA_EDIT"/>
    <sec:intercept-url pattern="/api/series/*/metadata/*" method="PUT" access="ROLE_ADMIN, ROLE_API_SERIES_METADATA_EDIT"/>
    <sec:intercept-url pattern="/api/series/*/properties" method="PUT" access="ROLE_ADMIN, ROLE_API_SERIES_PROPERTIES_EDIT"/>
    <sec:intercept-url pattern="/api/workflows/*" method="PUT" access="ROLE_ADMIN, ROLE_API_WORKFLOW_INSTANCE_EDIT"/>
    <!-- External API POST Endpoints -->
    <sec:intercept-url pattern="/api/events" method="POST" access="ROLE_ADMIN, ROLE_API_EVENTS_CREATE"/>
    <sec:intercept-url pattern="/api/events/*" method="POST" access="ROLE_ADMIN, ROLE_API_EVENTS_EDIT"/>
    <sec:intercept-url pattern="/api/events/*/acl/*" method="POST" access="ROLE_ADMIN, ROLE_API_EVENTS_ACL_EDIT"/>
    <sec:intercept-url pattern="/api/groups" method="POST" access="ROLE_ADMIN, ROLE_API_GROUPS_CREATE"/>
    <sec:intercept-url pattern="/api/groups/*/members/*" method="POST" access="ROLE_ADMIN, ROLE_API_GROUPS_EDIT"/>
    <sec:intercept-url pattern="/api/clearIndex" method="POST" access="ROLE_ADMIN"/>
    <sec:intercept-url pattern="/api/recreateIndex" method="POST" access="ROLE_ADMIN"/>
    <sec:intercept-url pattern="/api/recreateIndex/*" method="POST" access="ROLE_ADMIN"/>
    <sec:intercept-url pattern="/api/series" method="POST" access="ROLE_ADMIN, ROLE_API_SERIES_CREATE"/>
    <sec:intercept-url pattern="/api/security/sign" method="POST" access="ROLE_ADMIN, ROLE_API_SECURITY_EDIT"/>
    <sec:intercept-url pattern="/api/workflows" method="POST" access="ROLE_ADMIN, ROLE_API_WORKFLOW_INSTANCE_CREATE"/>
    <!-- External API DELETE Endpoints -->
    <sec:intercept-url pattern="/api/events/*" method="DELETE" access="ROLE_ADMIN, ROLE_API_EVENTS_DELETE"/>
    <sec:intercept-url pattern="/api/events/*/acl/*/*" method="DELETE" access="ROLE_ADMIN, ROLE_API_EVENTS_ACL_DELETE"/>
    <sec:intercept-url pattern="/api/events/*/metadata" method="DELETE" access="ROLE_ADMIN, ROLE_API_EVENTS_METADATA_DELETE"/>
    <sec:intercept-url pattern="/api/events/*/metadata/*" method="DELETE" access="ROLE_ADMIN, ROLE_API_EVENTS_METADATA_DELETE"/>
    <sec:intercept-url pattern="/api/groups/*" method="DELETE" access="ROLE_ADMIN, ROLE_API_GROUPS_DELETE"/>
    <sec:intercept-url pattern="/api/groups/*/members/*" method="DELETE" access="ROLE_ADMIN, ROLE_API_GROUPS_EDIT"/>
    <sec:intercept-url pattern="/api/series/*" method="DELETE" access="ROLE_ADMIN, ROLE_API_SERIES_DELETE"/>
    <sec:intercept-url pattern="/api/series/*/metadata" method="DELETE" access="ROLE_ADMIN, ROLE_API_SERIES_METADATA_DELETE"/>
    <sec:intercept-url pattern="/api/series/*/metadata/*" method="DELETE" access="ROLE_ADMIN, ROLE_API_SERIES_METADATA_DELETE"/>
    <sec:intercept-url pattern="/api/workflows/*" method="DELETE" access="ROLE_ADMIN, ROLE_API_WORKFLOW_INSTANCE_DELETE"/>

    <sec:intercept-url pattern="/admin-ng/css/**" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/admin-ng/lib/**" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/admin-ng/img/**" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/admin-ng/js/**" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/admin-ng/modules/**" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/admin-ng/shared/**" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/admin-ng/app.js" access="ROLE_ANONYMOUS" />

    <!-- Enable anonymous access to the admin ui -->
    <sec:intercept-url pattern="/admin-ng/public/**" access="ROLE_ANONYMOUS" />

    <!-- Enable anonymous access to the /info/me.json resource -->
    <sec:intercept-url pattern="/info/me.json" method="GET" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/i18n/languages.json" method="GET" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/info/components.json" method="GET" access="ROLE_ANONYMOUS" />

    <!-- anonymous access to user interface configuration -->
    <sec:intercept-url pattern="/ui/config/**" access="ROLE_ANONYMOUS" />

    <!-- Paella player -->
    <sec:intercept-url pattern="/paella/ui/auth.html" access="ROLE_USER" />
    <sec:intercept-url pattern="/paella/ui/**" access="ROLE_ANONYMOUS" />

    <!-- Enable anonymous access to the engage player and the GET endpoints it requires -->
    <sec:intercept-url pattern="/engage/ui/**" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/engage/**" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/engage-player/**" method="GET" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/search/**" method="GET" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/usertracking/**" method="GET" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/usertracking/**" method="PUT" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/static/**" method="GET" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/export/**" method="GET" access="ROLE_ANONYMOUS" />

    <!-- Enable anonymous access to the annotation and the series endpoints -->
    <sec:intercept-url pattern="/series/**" method="GET" access="ROLE_ANONYMOUS, ROLE_CAPTURE_AGENT" />
    <sec:intercept-url pattern="/annotation/**" method="GET" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/annotation/**" method="PUT" access="ROLE_ANONYMOUS" />

    <!-- Enable anonymous access to the OAI-PMH repository              -->
    <!-- The OAI-PMH specification demands boths GET and POST requests  -->
    <!-- Please make sure that the path configured here matches         -->
    <!-- the path configured for the repository servlet.                -->
    <sec:intercept-url pattern="/oaipmh/**" method="GET" access="ROLE_ADMIN"/>
    <sec:intercept-url pattern="/oaipmh/**" method="POST" access="ROLE_ADMIN"/>

    <!-- Enable anonymous access to the rss and atom feeds -->
    <sec:intercept-url pattern="/feeds/**" method="GET" access="ROLE_ANONYMOUS" />

    <!-- Secure the system management URLs for admins only -->
    <sec:intercept-url pattern="/services/available.*" method="GET" access="ROLE_ADMIN, ROLE_CAPTURE_AGENT" />
    <sec:intercept-url pattern="/services/**" access="ROLE_ADMIN"/>
    <sec:intercept-url pattern="/signing/**" access="ROLE_ADMIN" />
    <sec:intercept-url pattern="/system/**" access="ROLE_ADMIN" />
    <sec:intercept-url pattern="/config/**" access="ROLE_ADMIN" />

    <!-- Enable capture agent updates and ingest -->
    <sec:intercept-url pattern="/capture-admin/**" access="ROLE_ADMIN, ROLE_CAPTURE_AGENT" />
    <sec:intercept-url pattern="/recordings/**" method="GET" access="ROLE_ADMIN, ROLE_CAPTURE_AGENT" />
    <sec:intercept-url pattern="/ingest/**" access="ROLE_ADMIN, ROLE_CAPTURE_AGENT" />

    <!-- Secure the user management URLs for admins only -->
    <sec:intercept-url pattern="/users/**" access="ROLE_ADMIN" />
    <sec:intercept-url pattern="/admin/users.html" access="ROLE_ADMIN" />

    <!-- Enable 2-legged OAuth access ("signed fetch") to the LTI launch servlet -->
    <sec:intercept-url pattern="/lti" access="ROLE_OAUTH_USER" />

    <!-- Enable access to the LTI tools -->
    <sec:intercept-url pattern="/ltitools/**" access="ROLE_OAUTH_USER" />

    <sec:intercept-url pattern="/transcripts/watson/results*" method="GET" access="ROLE_ANONYMOUS" />
    <sec:intercept-url pattern="/transcripts/watson/results*" method="POST" access="ROLE_ANONYMOUS" />

    <!-- Everything else is for the admin users -->
    <sec:intercept-url pattern="/admin-ng/" method="GET" access="ROLE_ADMIN, ROLE_ADMIN_UI" />
    <sec:intercept-url pattern="/index.html" access="ROLE_ADMIN, ROLE_ADMIN_UI" />

    <!-- # LOGIN / LOGOUT MECHANISMS # -->

    <sec:intercept-url pattern="/admin-ng" method="GET" access="ROLE_ADMIN, ROLE_ADMIN_UI" />
    <sec:intercept-url pattern="/admin-ng/" method="GET" access="ROLE_ADMIN, ROLE_ADMIN_UI" />
    <sec:intercept-url pattern="/admin-ng/index.html" access="ROLE_ADMIN, ROLE_ADMIN_UI" />
    <sec:intercept-url pattern="/index.html" access="ROLE_ADMIN, ROLE_ADMIN_UI" />
    <sec:intercept-url pattern="/**" access="ROLE_ADMIN" />
    <!-- Uncomment to enable x509 client certificates for identifying clients -->
    <!-- sec:x509 subject-principal-regex="CN=(.*?)," user-service-ref="userDetailsService" / -->

    <!-- Enable and configure the failure URL for form-based logins -->
    <sec:form-login authentication-failure-url="/admin-ng/login.html?error" authentication-success-handler-ref="authSuccessHandler" />

    <!-- Authentication filter chain -->
    <sec:custom-filter position="BASIC_AUTH_FILTER" ref="authenticationFilters" />

    <sec:custom-filter ref="asyncTimeoutRedirectFilter" after="EXCEPTION_TRANSLATION_FILTER"/>

    <!-- Opencast is shipping its own implementation of the anonymous filter -->
    <sec:custom-filter ref="anonymousFilter" position="ANONYMOUS_FILTER" />

    <!-- Shibboleth header authentication filter
    <sec:custom-filter ref="shibbolethHeaderFilter" position="PRE_AUTH_FILTER"/>
    -->

    <!-- Enables "remember me" functionality -->
    <sec:remember-me services-ref="rememberMeServices" />

    <!-- Set the request cache -->
    <sec:request-cache ref="requestCache" />

    <!-- If any URLs are to be exposed to anonymous users, the "sec:anonymous" filter must be present -->
    <sec:anonymous enabled="false" />

    <!-- Enables log out -->
    <sec:logout success-handler-ref="logoutSuccessHandler" />

    <!-- Shibboleth log out
         Please specifiy the URL to return to after logging out
    <sec:logout logout-success-url="/Shibboleth.sso/Logout?return=http://www.opencast.org" />
    -->

  </sec:http>

  <bean id="rememberMeServices" class="org.opencastproject.kernel.security.SystemTokenBasedRememberMeService">
    <property name="userDetailsService" ref="userDetailsService"/>
    <!-- All following settings are optional -->
    <property name="tokenValiditySeconds" value="1209600"/>
    <property name="cookieName" value="oc-remember-me"/>
    <!-- The following key will be augmented by system properties. Thus, leaving this untouched is okay -->
    <property name="key" value="opencast"/>
  </bean>

  <!-- ############################# -->
  <!-- # Authentication Filters    # -->
  <!-- ############################# -->

  <bean id="authenticationFilters" class="org.springframework.web.filter.CompositeFilter">
    <property name="filters">
      <list>
        <!-- Digest auth is used by capture agents and is used to enable transparent clustering of services -->
        <!-- ATTENTION! Do not deactivate the digest filter, otherwise the distributed setup would not work -->
        <ref bean="digestFilter" />

        <!-- Basic authentication  -->
        <ref bean="basicAuthenticationFilter" />

        <!-- 2-legged OAuth is used by trusted 3rd party applications, including LTI. -->
        <!-- Uncomment the line below to support LTI or other OAuth clients.          -->
        <!-- <ref bean="oauthProtectedResourceFilter" /> -->
      </list>
    </property>
  </bean>

  <!-- ########################################### -->
  <!-- # Custom ajax timeout Filter Definition   # -->
  <!-- ########################################### -->

  <bean id="asyncTimeoutRedirectFilter" class="org.opencastproject.kernel.security.AsyncTimeoutRedirectFilter" />

  <!-- ######################################## -->
  <!-- # Custom Anonymous Filter Definition   # -->
  <!-- ######################################## -->

  <bean id="anonymousFilter" class="org.opencastproject.kernel.security.TrustedAnonymousAuthenticationFilter">
    <property name="userAttribute" ref="anonymousUserAttributes" />
    <property name="key" value="anonymousKey" />
  </bean>

  <bean id="anonymousUserAttributes" class="org.springframework.security.core.userdetails.memory.UserAttribute">
    <property name="authoritiesAsString" value="ROLE_ANONYMOUS"/>
    <property name="password" value="empty"/>
  </bean>

  <!-- ######################################## -->
  <!-- # Authentication Entry and Exit Points # -->
  <!-- ######################################## -->

  <!-- Differentiates between "normal" user requests and those requesting digest auth -->
  <bean id="opencastEntryPoint" class="org.opencastproject.kernel.security.DelegatingAuthenticationEntryPoint">
    <property name="userEntryPoint" ref="userEntryPoint" />
    <property name="digestAuthenticationEntryPoint" ref="digestEntryPoint" />
  </bean>

  <!-- Redirects unauthenticated requests to the login form -->
  <bean id="userEntryPoint" class="org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint">
    <property name="loginFormUrl" value="/admin-ng/login.html" />
  </bean>

  <!-- Returns a 401 request for authentication via digest auth -->
  <bean id="digestEntryPoint" class="org.springframework.security.web.authentication.www.DigestAuthenticationEntryPoint">
    <property name="realmName" value="Opencast" />
    <property name="key" value="opencast" />
    <property name="nonceValiditySeconds" value="300" />
  </bean>

  <bean id="basicEntryPoint" class="org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint">
    <property name="realmName" value="Opencast"/>
  </bean>

  <bean id="authSuccessHandler" class="org.opencastproject.kernel.security.AuthenticationSuccessHandler">
    <property name="securityService" ref="securityService" />
    <property name="welcomePages">
      <map>
        <entry key="ROLE_ADMIN" value="/admin-ng/index.html" />
        <entry key="ROLE_ADMIN_UI" value="/admin-ng/index.html" />
        <entry key="*" value="/engage/ui/index.html" /> <!-- Any role not listed explicitly will redirect here -->
      </map>
    </property>
  </bean>

  <bean id="logoutSuccessHandler" class="org.opencastproject.kernel.security.LogoutSuccessHandler">
    <property name="userDirectoryService" ref="userDirectoryService" />
  </bean>

  <!-- ################# -->
  <!-- # Digest Filter # -->
  <!-- ################# -->

  <!-- Handles the details of the digest authentication dance -->
  <bean id="digestFilter" class="org.springframework.security.web.authentication.www.DigestAuthenticationFilter">
    <!--  Use only the in-memory users, as these have passwords that are not hashed -->
    <property name="userDetailsService" ref="userDetailsService" />
    <property name="authenticationEntryPoint" ref="digestEntryPoint" />
    <property name="createAuthenticatedToken" value="true" />
    <property name="userCache">
      <bean class="org.springframework.security.core.userdetails.cache.NullUserCache" />
    </property>
  </bean>

  <!-- ############################### -->
  <!-- # Basic Authentication Filter # -->
  <!-- ############################### -->

  <!-- Handles the details of the basic authentication dance -->
  <bean id="basicAuthenticationFilter" class="org.springframework.security.web.authentication.www.BasicAuthenticationFilter">
    <property name="authenticationManager" ref="authenticationManager"/>
    <property name="authenticationEntryPoint" ref="basicEntryPoint"/>
  </bean>

  <!-- ####################### -->
  <!-- # OAuth (LTI) Support # -->
  <!-- ####################### -->

  <bean name="oauthProtectedResourceFilter" class="org.opencastproject.kernel.security.LtiProcessingFilter">
    <property name="consumerDetailsService" ref="oAuthConsumerDetailsService" />
    <property name="tokenServices">
      <bean class="org.springframework.security.oauth.provider.token.InMemoryProviderTokenServices" />
    </property>
    <property name="nonceServices">
      <bean class="org.springframework.security.oauth.provider.nonce.InMemoryNonceServices" />
    </property>
    <property name="authHandler" ref="ltiLaunchAuthenticationHandler" />
  </bean>

  <!-- ###################### -->
  <!-- # Shibboleth Support # -->
  <!-- ###################### -->

  <!-- General Shibboleth header extration filter
  <bean id="shibbolethHeaderFilter"
        class="org.opencastproject.security.shibboleth.ShibbolethRequestHeaderAuthenticationFilter">
    <property name="principalRequestHeader" value="<this need to be configured>"/>
    <property name="authenticationManager" ref="authenticationManager" />
    <property name="userDetailsService" ref="userDetailsService" />
    <property name="userDirectoryService" ref="userDirectoryService" />
    <property name="shibbolethLoginHandler" ref="aaiLoginHandler" />
    <property name="exceptionIfHeaderMissing" value="false" />
  </bean>
  -->

  <!-- AAI header extractor and user generator
  <bean id="aaiLoginHandler" class="org.opencastproject.security.aai.ConfigurableLoginHandler">
    <property name="securityService" ref="securityService" />
    <property name="userReferenceProvider" ref="userReferenceProvider" />
  </bean>
  -->

  <!--
  <bean id="preauthAuthProvider"
        class="org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationProvider">
    <property name="preAuthenticatedUserDetailsService">
      <bean id="userDetailsServiceWrapper" class="org.springframework.security.core.userdetails.UserDetailsByNameServiceWrapper">
        <property name="userDetailsService" ref="userDetailsService"/>
      </bean>
    </property>
  </bean>
  -->

  <!-- #################### -->
  <!-- # OSGI Integration # -->
  <!-- #################### -->

  <!-- Obtain services from the OSGI service registry -->
  <osgi:reference id="userDetailsService" cardinality="1..1"
                  interface="org.springframework.security.core.userdetails.UserDetailsService" />

  <osgi:reference id="securityService" cardinality="1..1"
                  interface="org.opencastproject.security.api.SecurityService" />

  <!-- Uncomment to enable external users e.g. used together shibboleth -->
  <!-- <osgi:reference id="userReferenceProvider" cardinality="1..1"
                  interface="org.opencastproject.userdirectory.api.UserReferenceProvider"  /> -->

  <osgi:reference id="userDirectoryService" cardinality="1..1"
                  interface="org.opencastproject.security.api.UserDirectoryService" />

  <osgi:reference id="oAuthConsumerDetailsService" cardinality="1..1"
                  interface="org.springframework.security.oauth.provider.ConsumerDetailsService" />

  <osgi:reference id="ltiLaunchAuthenticationHandler" cardinality="1..1"
                  interface="org.springframework.security.oauth.provider.OAuthAuthenticationHandler" />

  <!-- ############################# -->
  <!-- # Spring Security Internals # -->
  <!-- ############################# -->

  <!-- The JPA user directory stores md5 hashed, salted passwords, so we must use a username-salted md5 password encoder. -->
  <sec:authentication-manager alias="authenticationManager">
    <!-- Uncomment this if using Shibboleth authentication -->
    <!--sec:authentication-provider ref="preauthAuthProvider" /-->
    <sec:authentication-provider user-service-ref="userDetailsService">
      <sec:password-encoder hash="md5"><sec:salt-source user-property="username" /></sec:password-encoder>
    </sec:authentication-provider>
  </sec:authentication-manager>

  <!-- Do not use a request cache -->
  <bean id="requestCache" class="org.springframework.security.web.savedrequest.NullRequestCache" />

</beans>