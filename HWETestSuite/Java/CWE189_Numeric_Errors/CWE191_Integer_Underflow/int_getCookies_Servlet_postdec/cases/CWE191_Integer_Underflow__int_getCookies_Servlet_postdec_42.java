/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__int_getCookies_Servlet_postdec_42.java
Label Definition File: CWE191_Integer_Underflow__int.label.xml
Template File: sources-sinks-42.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: getCookies_Servlet Read data from the first cookie using getCookies()
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: decrement
 *    GoodSink: Ensure there will not be an underflow before decrementing data
 *    BadSink : Decrement data, which can cause an Underflow
 * Flow Variant: 42 Data flow: data returned from one method to another in the same class
 *
 * */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;

import javax.servlet.http.*;


import java.util.logging.Level;

public class CWE191_Integer_Underflow__int_getCookies_Servlet_postdec_42 extends AbstractTestCaseServlet
{
    private int badSource(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        int data;

        data = Integer.MIN_VALUE; /* initialize data in case there are no cookies */

        /* Read data from cookies */
        {
            Cookie cookieSources[] = request.getCookies();
            if (cookieSources != null)
            {
                /* POTENTIAL FLAW: Read data from the first cookie value */
                String stringNumber = cookieSources[0].getValue();
                try
                {
                    data = Integer.parseInt(stringNumber.trim());
                }
                catch(NumberFormatException exceptNumberFormat)
                {
                    IO.logger.log(Level.WARNING, "Number format exception reading data from cookie", exceptNumberFormat);
                }
            }
        }

        return data;
    }

    public void bad(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        int data = badSource(request, response);

        /* POTENTIAL FLAW: if data == Integer.MIN_VALUE, this will overflow */
        data--;
        int result = (int)(data);

        IO.writeLine("result: " + result);

    }

    /* goodG2B() - use goodsource and badsink */
    private int goodG2BSource(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        int data;

        /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
        data = 2;

        return data;
    }

    private void goodG2B(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        int data = goodG2BSource(request, response);

        /* POTENTIAL FLAW: if data == Integer.MIN_VALUE, this will overflow */
        data--;
        int result = (int)(data);

        IO.writeLine("result: " + result);

    }

    /* goodB2G() - use badsource and goodsink */
    private int goodB2GSource(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        int data;

        data = Integer.MIN_VALUE; /* initialize data in case there are no cookies */

        /* Read data from cookies */
        {
            Cookie cookieSources[] = request.getCookies();
            if (cookieSources != null)
            {
                /* POTENTIAL FLAW: Read data from the first cookie value */
                String stringNumber = cookieSources[0].getValue();
                try
                {
                    data = Integer.parseInt(stringNumber.trim());
                }
                catch(NumberFormatException exceptNumberFormat)
                {
                    IO.logger.log(Level.WARNING, "Number format exception reading data from cookie", exceptNumberFormat);
                }
            }
        }

        return data;
    }

    private void goodB2G(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        int data = goodB2GSource(request, response);

        /* FIX: Add a check to prevent an underflow from occurring */
        if (data > Integer.MIN_VALUE)
        {
            data--;
            int result = (int)(data);
            IO.writeLine("result: " + result);
        }
        else
        {
            IO.writeLine("data value is too small to decrement.");
        }

    }

    public void good(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        goodG2B(request, response);
        goodB2G(request, response);
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
