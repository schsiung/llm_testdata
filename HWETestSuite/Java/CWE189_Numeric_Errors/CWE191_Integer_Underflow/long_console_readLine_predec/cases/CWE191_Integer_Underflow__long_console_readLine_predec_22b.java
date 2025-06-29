/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__long_console_readLine_predec_22b.java
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-22b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: console_readLine Read data from the console using readLine
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: decrement
 *    GoodSink: Ensure there will not be an underflow before decrementing data
 *    BadSink : Decrement data, which can cause an Underflow
 * Flow Variant: 22 Control flow: Flow controlled by value of a public static variable. Sink functions are in a separate file from sources.
 *
 * */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;

public class CWE191_Integer_Underflow__long_console_readLine_predec_22b
{
    public void badSink(long data ) throws Throwable
    {
        if (CWE191_Integer_Underflow__long_console_readLine_predec_22a.badPublicStatic)
        {
            /* POTENTIAL FLAW: if data == Long.MIN_VALUE, this will overflow */
            long result = (long)(--data);
            IO.writeLine("result: " + result);
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0L;
        }
    }

    /* goodB2G1() - use badsource and goodsink by setting the static variable to false instead of true */
    public void goodB2G1Sink(long data ) throws Throwable
    {
        if (CWE191_Integer_Underflow__long_console_readLine_predec_22a.goodB2G1PublicStatic)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0L;
        }
        else
        {

            /* FIX: Add a check to prevent an underflow from occurring */
            if (data > Long.MIN_VALUE)
            {
                long result = (long)(--data);
                IO.writeLine("result: " + result);
            }
            else
            {
                IO.writeLine("data value is too small to decrement.");
            }

        }
    }

    /* goodB2G2() - use badsource and goodsink by reversing the blocks in the if in the sink function */
    public void goodB2G2Sink(long data ) throws Throwable
    {
        if (CWE191_Integer_Underflow__long_console_readLine_predec_22a.goodB2G2PublicStatic)
        {
            /* FIX: Add a check to prevent an underflow from occurring */
            if (data > Long.MIN_VALUE)
            {
                long result = (long)(--data);
                IO.writeLine("result: " + result);
            }
            else
            {
                IO.writeLine("data value is too small to decrement.");
            }
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0L;
        }
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(long data ) throws Throwable
    {
        if (CWE191_Integer_Underflow__long_console_readLine_predec_22a.goodG2BPublicStatic)
        {
            /* POTENTIAL FLAW: if data == Long.MIN_VALUE, this will overflow */
            long result = (long)(--data);
            IO.writeLine("result: " + result);
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0L;
        }
    }
}
