<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <th:block th:replace="~{/_include/header}" />
    <meta name="page-help" content="https://getrebuild.com/docs/manual/basic#%E5%88%97%E8%A1%A8%E6%93%8D%E4%BD%9C" />
    <link rel="stylesheet" type="text/css" th:href="@{/assets/css/list-page.css}" />
    <link rel="stylesheet" type="text/css" th:href="@{/assets/css/charts.css}" />
    <title th:text="${entityLabel}"></title>
  </head>
  <body>
    <div class="rb-wrapper rb-fixed-sidebar rb-collapsible-sidebar rb-collapsible-sidebar-hide-logo" th:classappend="${sideCollapsedClazz + (hideAside ? '' : ' rb-aside')}">
      <th:block th:replace="~{/_include/nav-top}" />
      <th:block th:replace="~{/_include/nav-left(active=${'nav_entity-' + entityName})}" />
      <div class="rb-content">
        <aside class="page-aside widgets" th:if="${!hideAside}">
          <a class="side-toggle" th:title="${bundle.L('展开/收起')}"><i class="zmdi zmdi-arrow-left"></i></a>
          <div class="tab-container">
            <ul class="nav nav-tabs">
              <li class="nav-item" th:if="${advListHideFilters != 'true'}"><a class="nav-link" href="#asideFilters" data-toggle="tab">[[${bundle.L('常用查询')}]]</a></li>
              <li class="nav-item" th:if="${advListShowCategory}"><a class="nav-link J_load-category" href="#asideCategory" data-toggle="tab">[[${bundle.L('分组')}]]</a></li>
              <li class="nav-item" th:if="${advListHideCharts != 'true'}"><a class="nav-link J_load-charts" href="#asideWidgets" data-toggle="tab">[[${bundle.L('图表')}]]</a></li>
            </ul>
            <div class="tab-content rb-scroller">
              <div class="ph-item rb">
                <div class="ph-col-12 p-0">
                  <div class="ph-row">
                    <div class="ph-col-12 big"></div>
                    <div class="ph-col-12 big"></div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="asideFilters"></div>
              <div class="tab-pane" id="asideCategory"></div>
              <div class="tab-pane" id="asideWidgets">
                <div class="charts-wrap"></div>
                <div class="text-center">
                  <button class="btn btn-secondary J_add-chart"><i class="icon zmdi zmdi-plus"></i> [[${bundle.L('选择图表')}]]</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div class="main-content container-fluid">
          <div class="quick-filter-tabs" th:if="${advListFilterTabs == 'true'}">
            <div>
              <div class="dropdown-item"><a>[[${bundle.L('全部数据')}]]</a></div>
            </div>
          </div>
          <div class="quick-filter-tabs" th:if="${advListFilterTabs == 'true'}">
            <div>
              <div class="dropdown-item"><a>[[${bundle.L('全部数据')}]]</a></div>
            </div>
          </div>
          <div class="quick-filter-pane" th:if="${advListFilterPane == 'true'}">
            <div class="ph-item rb"></div>
            <span></span>
          </div>

          <ul th:if="${detailEntity != null}" class="nav nav-tabs nav-tabs-classic">
            <li class="nav-item">
              <a class="nav-link active"><span class="icon zmdi" th:classappend="${'zmdi-' + mainEntityIcon}"></span> [[${mainEntityLabel}]]</a>
            </li>
            <li class="nav-item">
              <a th:href="|../${detailEntity}/list|" class="nav-link"><span class="icon zmdi" th:classappend="${'zmdi-' + detailEntityIcon}"></span> [[${detailEntityLabel}]]</a>
            </li>
          </ul>

          <div class="card card-table card-topcolor">
            <div class="card-body">
              <div class="dataTables_wrapper container-fluid">
                <div class="row rb-datatable-header">
                  <div class="col-12 col-md-6">
                    <div class="dataTables_filter">
                      <div class="adv-search float-left">
                        <div class="btn-group btn-space">
                          <button th:title="${bundle.L('常用查询')}" class="btn btn-secondary dropdown-toggle J_filterlist" type="button" data-toggle="dropdown">
                            <span class="text-truncate J_name">[[${bundle.L('全部数据')}]]</span><i class="icon zmdi zmdi-caret-down"></i>
                          </button>
                          <div class="dropdown-menu rb-scroller">
                            <div class="dropdown-item" data-id="$ALL$"><a>[[${bundle.L('全部数据')}]]</a></div>
                          </div>
                          <div class="input-group-append">
                            <button th:title="${bundle.L('高级查询')}" class="btn btn-secondary J_filterbtn" type="button"><i class="icon zmdi zmdi-filter-list"></i></button>
                          </div>
                        </div>
                      </div>
                      <div class="input-group input-search float-left">
                        <input class="form-control" type="text" th:placeholder="${quickFieldsLabel ?:bundle.L('快速查询')}" th:title="${quickFieldsLabel}" maxlength="40" />
                        <button class="btn btn-input-clear" type="button"></button>
                        <span class="input-group-btn">
                          <button class="btn btn-secondary" type="button"><i class="icon zmdi zmdi-search"></i></button>
                        </span>
                      </div>
                      <span id="dropdown-menu-advfilter"></span>
                    </div>
                  <div class="col-12 col-md-6">
                    <div class="dataTables_oper">
                      <button class="btn btn-space btn-secondary J_view" type="button" disabled="disabled"><i class="icon zmdi zmdi-folder"></i> [[${bundle.L('打开')}]]</button>
                      <button class="btn btn-space btn-secondary J_edit" type="button" disabled="disabled"><i class="icon zmdi zmdi-edit"></i> [[${bundle.L('编辑')}]]</button>
                      <button class="btn btn-space btn-primary J_new" type="button" disabled="disabled"><i class="icon zmdi zmdi-plus"></i> [[${bundle.L('新建')}]]</button>
                      <div class="btn-group btn-space J_action">
                      <button class="btn btn-space btn-primary J_new" type="button" disabled="disabled"><i class="icon zmdi zmdi-plus"></i> [[${bundle.L('新建')}]]</button>
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">[[${bundle.L('更多')}]] <i class="icon zmdi zmdi-more-vert"></i></button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item J_delete"><i class="icon zmdi zmdi-delete"></i> [[${bundle.L('删除')}]]</a>
                          <a class="dropdown-item J_assign"><i class="icon zmdi zmdi-mail-reply-all"></i> [[${bundle.L('分配')}]]</a>
                          <a class="dropdown-item J_share"><i class="icon zmdi zmdi-portable-wifi"></i> [[${bundle.L('共享')}]]</a>
                          <a class="dropdown-item J_unshare"><i class="icon zmdi zmdi-portable-wifi-off"></i> [[${bundle.L('取消共享')}]]</a>
                          <div class="dropdown-divider"></div>
                          <a th:if="${AllowDataExport}" class="dropdown-item J_export"><i class="icon mdi mdi-microsoft-excel"></i> [[${bundle.L('数据导出')}]]</a>
                          <a class="dropdown-item admin-show" th:href="|${baseUrl}/admin/data/data-imports?entity=${entityName}|">
                            <i class="icon mdi mdi-database-import-outline"></i> [[${bundle.L('数据导入')}]]
                          </a>
                          <a th:if="${AllowBatchUpdate}" class="dropdown-item J_batch"><i class="icon mdi mdi-playlist-edit"></i> [[${bundle.L('批量修改')}]]</a>
                          <a th:if="${AllowCustomDataList}" class="dropdown-item J_columns"><i class="icon mdi mdi-view-column-outline"></i> [[${bundle.L('列显示')}]]</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="react-list" class="rb-loading rb-loading-active data-list">
                  <th:block th:replace="~{/_include/spinner}" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <th:block th:replace="~{/_include/footer}" />
    <script>
      window.__PageConfig = {
        type: 'RecordList',
        entity: ['[[${entityName}]]', '[[${entityLabel}]]', '[[${entityIcon}]]'],
        privileges: [(${entityPrivileges})],
        listConfig: [(${DataListConfig})],
        advFilter: true,
        statsField: true,
        paneFields: [(${paneFields ?:'null'})],
      }
    </script>
    <script th:src="@{/assets/lib/charts/echarts.min.js}"></script>
    <script th:src="@{/assets/js/charts/charts.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/metadata/field-compatible.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/metadata/field-valueset.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/rb-forms.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/rb-forms.append.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/rb-forms.protable.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/rb-advfilter.js}" type="text/babel"></script>
    <th:block th:if="${commercial > 1}"><script th:src="@{/assets/js/rb-filterpane.js}" type="text/babel"></script></th:block>
    <script th:src="@{/assets/js/rb-assignshare.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/rb-approval.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/settings-share2.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/rb-datalist.common.js}" type="text/babel"></script>
    <script th:src="@{/assets/js/rb-datalist.js}" type="text/babel"></script>
  </body>
</html>