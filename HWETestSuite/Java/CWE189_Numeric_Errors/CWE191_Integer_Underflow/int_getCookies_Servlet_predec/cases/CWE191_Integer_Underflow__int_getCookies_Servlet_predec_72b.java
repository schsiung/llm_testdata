/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__int_getCookies_Servlet_predec_72b.java
Label Definition File: CWE191_Integer_Underflow__int.label.xml
Template File: sources-sinks-72b.tmpl.java
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
 * Flow Variant: 72 Data flow: data passed in a Vector from one method to another in different source files in the same package
 *
 * */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;
import java.util.Vector;

import javax.servlet.http.*;

public class CWE191_Integer_Underflow__int_getCookies_Servlet_predec_72b
{
    public void badSink(Vector<Integer> dataVector , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        int data = dataVector.remove(2);

        /* POTENTIAL FLAW: if data == Integer.MIN_VALUE, this will overflow */
        int result = (int)(--data);

        IO.writeLine("result: " + result);

    }

    /* goodG2B() - use GoodSource and BadSink */
    public void goodG2BSink(Vector<Integer> dataVector , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        int data = dataVector.remove(2);

        /* POTENTIAL FLAW: if data == Integer.MIN_VALUE, this will overflow */
        int result = (int)(--data);

        IO.writeLine("result: " + result);

    }

    /* goodB2G() - use BadSource and GoodSink */
    public void goodB2GSink(Vector<Integer> dataVector , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        int data = dataVector.remove(2);

        /* FIX: Add a check to prevent an underflow from occurring */
        if (data > Integer.MIN_VALUE)
        {
            int result = (int)(--data);
            IO.writeLine("result: " + result);
        }
        else
        {
            IO.writeLine("data value is too small to decrement.");
        }

    }
}
