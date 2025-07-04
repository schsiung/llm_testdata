/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE197_Numeric_Truncation_Error__int_large_to_byte_02.java
Label Definition File: CWE197_Numeric_Truncation_Error__int.label.xml
Template File: sources-sink-02.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 197 Numeric Truncation Error
* BadSource: large Set data to a number larger than Short.MAX_VALUE
* GoodSource: A hardcoded non-zero, non-min, non-max, even number
* BadSink: to_byte Convert data to a byte
* Flow Variant: 02 Control flow: if(true) and if(false)
*
* */

package testcases.CWE197_Numeric_Truncation_Error;
import testcasesupport.*;

public class CWE197_Numeric_Truncation_Error__int_large_to_byte_02 extends AbstractTestCase
{
    /* uses badsource and badsink */
    public void bad() throws Throwable
    {
        int data;
        if (true)
        {
            /* FLAW: Use a number larger than Short.MAX_VALUE */
            data = Short.MAX_VALUE + 5;
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }

        {
            /* POTENTIAL FLAW: Convert data to a byte, possibly causing a truncation error */
            IO.writeLine((byte)data);
        }

    }

    /* goodG2B1() - use goodsource and badsink by changing true to false */
    private void goodG2B1() throws Throwable
    {
        int data;
        if (false)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }
        else
        {

            /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
            data = 2;

        }

        {
            /* POTENTIAL FLAW: Convert data to a byte, possibly causing a truncation error */
            IO.writeLine((byte)data);
        }

    }

    /* goodG2B2() - use goodsource and badsink by reversing statements in if */
    private void goodG2B2() throws Throwable
    {
        int data;
        if (true)
        {
            /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
            data = 2;
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }

        {
            /* POTENTIAL FLAW: Convert data to a byte, possibly causing a truncation error */
            IO.writeLine((byte)data);
        }

    }

    public void good() throws Throwable
    {
        goodG2B1();
        goodG2B2();
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
