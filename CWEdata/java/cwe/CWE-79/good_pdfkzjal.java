<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://rhn.redhat.com/rhn" prefix="rhn" %>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ include file="/WEB-INF/pages/common/fragments/editarea.jspf" %>
<c:choose>
    <c:when test="${empty requestScope.invalid}">
        <html:form method="post"
                   styleClass="form-horizontal"
                   action="${param.url}?csrf_token=${csrfToken}"
                   enctype="multipart/form-data">
            <rhn:csrf />
            <p><bean:message key="${param.summary_key}"/></p>
            <h2><bean:message key="${param.title_key}"/></h2>
            <div class="form-group">
                <label class="col-lg-3 control-label">
                    <rhn:required-field key="kickstart.jsp.create.wizard.kickstart.profile.label"/>:
                </label>
                <div class="col-lg-6">
                    <html:text property="kickstartLabel" styleClass="form-control" size="40" maxlength="80" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">
                    <rhn:required-field key="kickstart.jsp.create.wizard.kstree.label"/>:
                </label>
                <div class="col-lg-6">
                    <c:choose>
                        <c:when test="${notrees == null}">
                            <html:select property="kstreeId" styleClass="form-control">
                                <html:optionsCollection property="kstrees" label="label" value="id" />
                            </html:select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-lg-offset-3 col-lg-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="updateRedHat" id="updateRedHat" value="0"
                                           onclick="clickNewestRHTree(this)"
                                           <c:if test="${param.usingUpdateRedHat == true}">checked=1</c:if> />
                                    <bean:message key="kickstart.jsp.create.wizard.kstree.always_new_RH"/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-lg-offset-3 col-lg-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="updateAll" id="updateAll" value="0"
                                           onclick="clickNewestTree(this)"
                                           <c:if test="${param.usingUpdateAll == true}">checked=1</c:if> />
                                    <bean:message key="kickstart.jsp.create.wizard.kstree.always_new"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </c:when>
                <c:otherwise>
                    <div class="alert alert-warning">
                        <strong><bean:message key="kickstart.edit.software.notrees.jsp" /></strong>
                    </div>
                </div>
            </div>
        </c:otherwise>
    </c:choose>
    <%@ include file="/WEB-INF/pages/common/fragments/kickstart/virtoptions.jspf" %>

    <c:if test="${empty requestScope.create}">
        <div class="form-group">
            <div class="col-lg-offset-3 col-lg-6">
                <div class="checkbox">
                    <label>
                        <html:checkbox property="active" />
                        <bean:message key="kickstartdetails.jsp.active"/>
                    </label>
                </div>
                <span class="help-block"><bean:message key="kickstartdetails.jsp.activeDescription"/></span>
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-3 control-label">
                <bean:message key="kickstartdetails.jsp.kernel_options"/>
            </label>
            <div class="col-lg-6">
                <html:text property="kernel_options" styleClass="form-control" maxlength="1024" size="32" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-3 control-label">
                <bean:message key="kickstartdetails.jsp.post_kernel_options"/>
            </label>
            <div class="col-lg-6">
                <html:text property="post_kernel_options" styleClass="form-control" maxlength="1024" size="32" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-offset-3 col-lg-6">
                <div class="checkbox">
                    <label>
                        <html:checkbox property="org_default" />
                        <bean:message key="kickstartdetails.jsp.org_default" />
                    </label>
                </div>
                <span class="help-block">
                    <bean:message key="kickstartdetails.jsp.summary2" arg0="${fn:escapeXml(param.ksurl)}" />
                </span>
            </div>
        </div>
    </c:if>
    <div class="form-group">
        <label class="col-lg-3 control-label">
            <bean:message key="addfiles.create.jspf.content-name" />
        </label>
        <div class="col-lg-6">
            <html:textarea property="contents" styleClass="form-control" rows="20" cols="80" styleId="contents" />
            <%@ include file="/WEB-INF/pages/common/fragments/kickstart/kickstart-rules.jspf" %>
            <span class="help-block">
                <bean:message key="kickstart.advanced.filedetails.jsp.tip.edit"
                              arg0 = "${rhn:localize('kickstart.advanced.jsp.uploadtab')}"
                              arg1 = "${rhn:localize(requestScope.uploadKey)}"/>
            </span>
            <span class="help-block">
                <bean:message key="kickstart.advanced.filedetails.jsp.tip.copypaste"/>
            </span>
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 control-label">
            <bean:message key="kickstart.advanced.jsp.uploadtab"/>
        </label>
        <div class="col-lg-6">
            <html:file property="fileUpload" size="30" styleClass="form-control"/>
        </div>
    </div>
    <div class="form-group">
        <div class="col-lg-offset-3 col-lg-6">
            <html:submit property="dispatch" styleClass="btn btn-success">
                <bean:message key="${param.action_key}"/>
            </html:submit>
        </div>
    </div>
    <rhn:submitted/>
    <c:if test="${not empty param.ksid}">
        <rhn:hidden name="ksid" value="${param.ksid}"/>
    </c:if>
</html:form>
</c:when>
<c:when test="${empty requestScope.create}">
    <p>
        <bean:message key="kickstartdetails.invalid.jsp.summary"/>
        <bean:message key="kickstartdetails.invalid.jsp.summary-option1"
                      arg0="${fn:escapeXml(ksdata.tree.label)}"
                      arg1="/rhn/kickstart/TreeEdit.do?kstid=${ksdata.tree.id}"/>
    </p>
    <p>
        <bean:message key="kickstartdetails.advanced.invalid.jsp.summary-option2"
                  arg0="${rhn:localize(param.action_key)}"/>
    </p>
    <html:form method="post" action="${param.url}"
               styleClass="form-horizontal">
        <rhn:csrf />
            <div class="form-group">
                <label class="col-lg-3 control-label">
                    <rhn:required-field key="kickstart.jsp.create.wizard.kstree.label"/>:
                </label>
                <div class="col-lg-6">
                    <c:choose>
                        <c:when test="${empty notrees}">
                            <html:select property="kstreeId" styleClass="form-control">
                                <html:optionsCollection property="kstrees" label="label" value="id" />
                            </html:select>
                        </c:when>
                        <c:otherwise>
                            <div class="alert alert-warning">
                                <strong><bean:message key="kickstart.edit.software.notrees.jsp" /></strong>
                            </div>
                        </c:otherwise>
                    </c:choose>
                </div>
            </div>
        <c:if test="${empty notrees}">
            <div class="form-group">
                <div class="col-lg-offset-3 col-lg-6">
                    <html:submit property="dispatch" styleClass="btn btn-success">
                        <bean:message key="${param.action_key}"/>
                    </html:submit>
                </div>
            </div>
            <rhn:submitted/>
            <rhn:hidden name="ksid" value="${param.ksid}"/>
        </c:if>
    </html:form>
</c:when>
</c:choose>