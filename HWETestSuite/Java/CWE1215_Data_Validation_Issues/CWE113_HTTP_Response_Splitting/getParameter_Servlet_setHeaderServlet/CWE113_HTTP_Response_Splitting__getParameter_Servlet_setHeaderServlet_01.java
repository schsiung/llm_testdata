/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE113_HTTP_Response_Splitting__getParameter_Servlet_setHeaderServlet_01.java
Label Definition File: CWE113_HTTP_Response_Splitting.label.xml
Template File: sources-sinks-01.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 113 HTTP Response Splitting
* BadSource: getParameter_Servlet Read data from a querystring using getParameter()
* GoodSource: A hardcoded string
* Sinks: setHeaderServlet
*    GoodSink: URLEncode input
*    BadSink : querystring to setHeader()
* Flow Variant: 01 Baseline
*
* */

package testcases.CWE113_HTTP_Response_Splitting;
import testcasesupport.*;

import javax.servlet.http.*;


import java.net.URLEncoder;

public class CWE113_HTTP_Response_Splitting__getParameter_Servlet_setHeaderServlet_01 extends AbstractTestCaseServlet
{
    public void bad(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        String data;

        /* POTENTIAL FLAW: Read data from a querystring using getParameter */
        data = request.getParameter("name");

        if (data != null)
        {
            /* POTENTIAL FLAW: Input not verified before inclusion in header */
            response.setHeader("Location", "/author.jsp?lang=" + data);
        }

    }

    public void good(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        goodG2B(request, response);
        goodB2G(request, response);
    }

    /* goodG2B() - use goodsource and badsink */
    private void goodG2B(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        String data;

        /* FIX: Use a hardcoded string */
        data = "foo";

        if (data != null)
        {
            /* POTENTIAL FLAW: Input not verified before inclusion in header */
            response.setHeader("Location", "/author.jsp?lang=" + data);
        }

    }

    /* goodB2G() - use badsource and goodsink */
    private void goodB2G(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        String data;

        /* POTENTIAL FLAW: Read data from a querystring using getParameter */
        data = request.getParameter("name");

        if (data != null)
        {
            /* FIX: use URLEncoder.encode to hex-encode non-alphanumerics */
            data = URLEncoder.encode(data, "UTF-8");
            response.setHeader("Location", "/author.jsp?lang=" + data);
        }

    }

    /* Below is the main(). It is only used when building this testcase on
     * its own for testing or for building a binary to use in testing binary
     * analysis tools. It is not used when compiling all the testcases as one
     * application, which is how source code analysis tools are tested.
     */
    public static void main(String[] args) throws ClassNotFoundException,
           InstantiationException, IllegalAccessException
    {
        mainFromParent(args);
    }
}

