/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE369_Divide_by_Zero__int_getQueryString_Servlet_divide_22b.java
Label Definition File: CWE369_Divide_by_Zero__int.label.xml
Template File: sources-sinks-22b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 369 Divide by zero
 * BadSource: getQueryString_Servlet Parse id param out of the URL query string (without using getParameter())
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: divide
 *    GoodSink: Check for zero before dividing
 *    BadSink : Dividing by a value that may be zero
 * Flow Variant: 22 Control flow: Flow controlled by value of a public static variable. Sink functions are in a separate file from sources.
 *
 * */

package testcases.CWE369_Divide_by_Zero;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE369_Divide_by_Zero__int_getQueryString_Servlet_divide_22b
{
    public void badSink(int data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        if (CWE369_Divide_by_Zero__int_getQueryString_Servlet_divide_22a.badPublicStatic)
        {
            /* POTENTIAL FLAW: Zero denominator will cause an issue.  An integer division will
            result in an exception. */
            IO.writeLine("bad: 100/" + data + " = " + (100 / data) + "\n");
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }
    }

    /* goodB2G1() - use badsource and goodsink by setting the static variable to false instead of true */
    public void goodB2G1Sink(int data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        if (CWE369_Divide_by_Zero__int_getQueryString_Servlet_divide_22a.goodB2G1PublicStatic)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }
        else
        {

            /* FIX: test for a zero denominator */
            if (data != 0)
            {
                IO.writeLine("100/" + data + " = " + (100 / data) + "\n");
            }
            else
            {
                IO.writeLine("This would result in a divide by zero");
            }

        }
    }

    /* goodB2G2() - use badsource and goodsink by reversing the blocks in the if in the sink function */
    public void goodB2G2Sink(int data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        if (CWE369_Divide_by_Zero__int_getQueryString_Servlet_divide_22a.goodB2G2PublicStatic)
        {
            /* FIX: test for a zero denominator */
            if (data != 0)
            {
                IO.writeLine("100/" + data + " = " + (100 / data) + "\n");
            }
            else
            {
                IO.writeLine("This would result in a divide by zero");
            }
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(int data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        if (CWE369_Divide_by_Zero__int_getQueryString_Servlet_divide_22a.goodG2BPublicStatic)
        {
            /* POTENTIAL FLAW: Zero denominator will cause an issue.  An integer division will
            result in an exception. */
            IO.writeLine("bad: 100/" + data + " = " + (100 / data) + "\n");
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }
    }
}
