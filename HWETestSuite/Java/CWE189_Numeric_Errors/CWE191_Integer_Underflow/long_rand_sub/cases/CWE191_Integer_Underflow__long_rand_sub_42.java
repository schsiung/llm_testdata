/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__long_rand_sub_42.java
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-42.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: rand Set data to result of rand()
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: sub
 *    GoodSink: Ensure there will not be an underflow before subtracting 1 from data
 *    BadSink : Subtract 1 from data, which can cause an Underflow
 * Flow Variant: 42 Data flow: data returned from one method to another in the same class
 *
 * */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;

public class CWE191_Integer_Underflow__long_rand_sub_42 extends AbstractTestCase
{
    private long badSource() throws Throwable
    {
        long data;

        /* POTENTIAL FLAW: Use a random value */
        data = (new java.security.SecureRandom()).nextLong();

        return data;
    }

    public void bad() throws Throwable
    {
        long data = badSource();

        /* POTENTIAL FLAW: if data == Long.MIN_VALUE, this will overflow */
        long result = (long)(data - 1);

        IO.writeLine("result: " + result);

    }

    /* goodG2B() - use goodsource and badsink */
    private long goodG2BSource() throws Throwable
    {
        long data;

        /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
        data = 2;

        return data;
    }

    private void goodG2B() throws Throwable
    {
        long data = goodG2BSource();

        /* POTENTIAL FLAW: if data == Long.MIN_VALUE, this will overflow */
        long result = (long)(data - 1);

        IO.writeLine("result: " + result);

    }

    /* goodB2G() - use badsource and goodsink */
    private long goodB2GSource() throws Throwable
    {
        long data;

        /* POTENTIAL FLAW: Use a random value */
        data = (new java.security.SecureRandom()).nextLong();

        return data;
    }

    private void goodB2G() throws Throwable
    {
        long data = goodB2GSource();

        /* FIX: Add a check to prevent an overflow from occurring */
        if (data > Long.MIN_VALUE)
        {
            long result = (long)(data - 1);
            IO.writeLine("result: " + result);
        }
        else
        {
            IO.writeLine("data value is too small to perform subtraction.");
        }

    }

    public void good() throws Throwable
    {
        goodG2B();
        goodB2G();
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
