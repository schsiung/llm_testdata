/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__int_Property_predec_01.java
Label Definition File: CWE191_Integer_Underflow__int.label.xml
Template File: sources-sinks-01.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 191 Integer Underflow
* BadSource: Property Read data from a system property
* GoodSource: A hardcoded non-zero, non-min, non-max, even number
* Sinks: decrement
*    GoodSink: Ensure there will not be an underflow before decrementing data
*    BadSink : Decrement data, which can cause an Underflow
* Flow Variant: 01 Baseline
*
* */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;

import javax.servlet.http.*;

import java.util.logging.Level;

public class CWE191_Integer_Underflow__int_Property_predec_01 extends AbstractTestCase
{
    public void bad() throws Throwable
    {
        int data;

        data = Integer.MIN_VALUE; /* Initialize data */

        /* get system property user.home */
        /* POTENTIAL FLAW: Read data from a system property */
        {
            String stringNumber = System.getProperty("user.home");
            try
            {
                data = Integer.parseInt(stringNumber.trim());
            }
            catch(NumberFormatException exceptNumberFormat)
            {
                IO.logger.log(Level.WARNING, "Number format exception parsing data from string", exceptNumberFormat);
            }
        }

        /* POTENTIAL FLAW: if data == Integer.MIN_VALUE, this will overflow */
        int result = (int)(--data);

        IO.writeLine("result: " + result);

    }

    public void good() throws Throwable
    {
        goodG2B();
        goodB2G();
    }

    /* goodG2B() - use goodsource and badsink */
    private void goodG2B() throws Throwable
    {
        int data;

        /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
        data = 2;

        /* POTENTIAL FLAW: if data == Integer.MIN_VALUE, this will overflow */
        int result = (int)(--data);

        IO.writeLine("result: " + result);

    }

    /* goodB2G() - use badsource and goodsink */
    private void goodB2G() throws Throwable
    {
        int data;

        data = Integer.MIN_VALUE; /* Initialize data */

        /* get system property user.home */
        /* POTENTIAL FLAW: Read data from a system property */
        {
            String stringNumber = System.getProperty("user.home");
            try
            {
                data = Integer.parseInt(stringNumber.trim());
            }
            catch(NumberFormatException exceptNumberFormat)
            {
                IO.logger.log(Level.WARNING, "Number format exception parsing data from string", exceptNumberFormat);
            }
        }

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

