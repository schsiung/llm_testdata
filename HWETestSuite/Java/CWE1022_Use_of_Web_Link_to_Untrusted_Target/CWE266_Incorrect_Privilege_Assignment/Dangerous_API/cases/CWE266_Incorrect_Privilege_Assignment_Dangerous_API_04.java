/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE266_Incorrect_Privilege_Assignment_Dangerous_API_04.java
Label Definition File: CWE15_External_Control_of_System_or_Configuration_Setting.label.xml
Template File: sources-sink-01.tmpl.java
*/
/*
 * @testsuite baihu
 * @description
 * CWE: 266 Incorrect Privilege Assignment
 * BadSource: connect_tcp Read data using an outbound tcp connection
 * GoodSource: A hardcoded string
 * BadSink:  Set the catalog name with the value of data
 * Flow Variant: 01 Baseline
 *
 * */

package CWE1022_Use_of_Web_Link_to_Untrusted_Target.CWE266_Incorrect_Privilege_Assignment.Dangerous_API.cases;

import javax.servlet.FilterChain;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

/**
 * @cwe 266
 * @bad doFilterBad
 * @tool CodeMars:API_Abuse;
 * @author 周通 zwx453582
 */
public class CWE266_Incorrect_Privilege_Assignment_Dangerous_API_04 {
    public final void doFilterBad(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws Exception {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        /* POTENTIAL FLAW: 危险API使用不当(getRequestURL/getRequestURI)。 */
        if (request.getRequestURL().toString().contains("huawei")) {
            filterChain.doFilter(request, servletResponse);
        }
        filterChain.doFilter(request, servletResponse);
    }
}
