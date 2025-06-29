/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE470_Unsafe_Reflection__getParameter_Servlet_52b.java
Label Definition File: CWE470_Unsafe_Reflection.label.xml
Template File: sources-sink-52b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 470 Use of Externally-Controlled Input to Select Classes or Code ('Unsafe Reflection')
 * BadSource: getParameter_Servlet Read data from a querystring using getParameter()
 * GoodSource: Set data to a hardcoded class name
 * Sinks:
 *    BadSink : Instantiate class named in data
 * Flow Variant: 52 Data flow: data passed as an argument from one method to another to another in three different classes in the same package
 *
 * */

package testcases.CWE470_Unsafe_Reflection;

import testcasesupport.*;

import javax.servlet.http.*;

public class CWE470_Unsafe_Reflection__getParameter_Servlet_52b
{
    public void badSink(String data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        (new CWE470_Unsafe_Reflection__getParameter_Servlet_52c()).badSink(data , request, response);
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(String data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        (new CWE470_Unsafe_Reflection__getParameter_Servlet_52c()).goodG2BSink(data , request, response);
    }
}
