/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE83_XSS_Attribute__Servlet_File_54b.java
Label Definition File: CWE83_XSS_Attribute__Servlet.label.xml
Template File: sources-sink-54b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 83 Cross Site Scripting (XSS) in attributes; Examples(replace QUOTE with an actual double quote): ?img_loc=http://www.google.comQUOTE%20onerror=QUOTEalert(1) and ?img_loc=http://www.google.comQUOTE%20onerror=QUOTEjavascript:alert(1)
 * BadSource: File Read data from file (named c:\data.txt)
 * GoodSource: A hardcoded string
 * Sinks: printlnServlet
 *    BadSink : XSS in img src attribute
 * Flow Variant: 54 Data flow: data passed as an argument from one method through three others to a fifth; all five functions are in different classes in the same package
 *
 * */

package testcases.CWE83_XSS_Attribute;

import testcasesupport.*;

import javax.servlet.http.*;

public class CWE83_XSS_Attribute__Servlet_File_54b
{
    public void badSink(String data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        (new CWE83_XSS_Attribute__Servlet_File_54c()).badSink(data , request, response);
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(String data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        (new CWE83_XSS_Attribute__Servlet_File_54c()).goodG2BSink(data , request, response);
    }
}
