<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:i18n="http://xml.zope.org/namespaces/i18n"
      i18n:domain="Kotti"
      metal:use-macro="api.macro('kotti:templates/edit/master.pt')">

  <div metal:fill-slot="content">
    <h1 i18n:translate="">
      Share <em i18n:name="title">${context.title}</em>
    </h1>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title" i18n:translate="">Search users and groups</h3>
      </div>
      <div class="panel-body">
        <form action="${request.url}" method="post" class="form"
              id="form-share-search">
          <div class="form-group">
            <label for="query" i18n:translate="" class="sr-only">
              Search users and groups
            </label>
            <input type="search"
                   name="query"
                   id="search-query"
                   value="${request.params.get('query')}"
                   placeholder="Search users and groups"
                   i18n:attributes="placeholder"
                   class="form-control"
                   />
          </div>
          <button type="submit" name="search" class="btn btn-primary">
            <i class="glyphicon glyphicon-search"></i>
            <span i18n:translate="">Search</span>
          </button>
        </form>
      </div>
    </div>

    <form action="${request.url}" method="post" tal:condition="entries"
          id="form-share-assign">
      <input type="hidden" name="csrf_token" value="${csrf_token}">

      <fieldset>
        <legend i18n:translate="">Assign local roles</legend>

        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th i18n:translate="">Type</th>
              <th i18n:translate="">Name</th>
              <th tal:repeat="role available_roles">
                ${role.title}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr tal:repeat="entry entries"
                class="entry ${repeat.entry.even and 'even' or 'odd'}">
              <td tal:define="is_group entry[0].name.startswith('group:');
                              is_user not is_group">
                <span tal:condition="is_user" i18n:translate="">User</span>
                <span tal:condition="is_group" i18n:translate="">Group</span>
              </td>
              <td>
                <img src="${api.avatar_url(entry[0])}" alt="Gravatar"
                     i18n:attributes="alt"/>
                ${entry[0].title}
              </td>
              <td tal:repeat="role available_roles">
                <input type="checkbox" title="Assign role" i18n:attributes="title"
                       name="role::${entry[0].name}::${role.name}"
                       checked="${role.name in entry[1][0] and 'checked' or None}"
                       disabled="${role.name in entry[1][1] and 'disabled' or None}"
                       />
                <input type="hidden"
                       name="orig-role::${entry[0].name}::${role.name}"
                       value="${role.name in entry[1][0] and '1' or None}"
                       />
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" name="apply" class="btn btn-primary"
                i18n:translate="">
          Apply changes
        </button>
      </fieldset>
      </form>
    </div>

</html>