/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__int_max_preinc_42.java
Label Definition File: CWE190_Integer_Overflow__int.label.xml
Template File: sources-sinks-42.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: max Set data to the maximum value for int
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: increment
 *    GoodSink: Ensure there will not be an overflow before incrementing data
 *    BadSink : Increment data, which can cause an overflow
 * Flow Variant: 42 Data flow: data returned from one method to another in the same class
 *
 * */

package testcases.CWE190_Integer_Overflow;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE190_Integer_Overflow__int_max_preinc_42 extends AbstractTestCase
{
    private int badSource() throws Throwable
    {
        int data;

        /* POTENTIAL FLAW: Use the maximum value for this type */
        data = Integer.MAX_VALUE;

        return data;
    }

    public void bad() throws Throwable
    {
        int data = badSource();

        /* POTENTIAL FLAW: if data == Integer.MAX_VALUE, this will overflow */
        int result = (int)(++data);

        IO.writeLine("result: " + result);

    }

    /* goodG2B() - use goodsource and badsink */
    private int goodG2BSource() throws Throwable
    {
        int data;

        /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
        data = 2;

        return data;
    }

    private void goodG2B() throws Throwable
    {
        int data = goodG2BSource();

        /* POTENTIAL FLAW: if data == Integer.MAX_VALUE, this will overflow */
        int result = (int)(++data);

        IO.writeLine("result: " + result);

    }

    /* goodB2G() - use badsource and goodsink */
    private int goodB2GSource() throws Throwable
    {
        int data;

        /* POTENTIAL FLAW: Use the maximum value for this type */
        data = Integer.MAX_VALUE;

        return data;
    }

    private void goodB2G() throws Throwable
    {
        int data = goodB2GSource();

        /* FIX: Add a check to prevent an overflow from occurring */
        if (data < Integer.MAX_VALUE)
        {
            int result = (int)(++data);
            IO.writeLine("result: " + result);
        }
        else
        {
            IO.writeLine("data value is too large to increment.");
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
