/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE369_Divide_by_Zero__int_console_readLine_divide_61a.java
Label Definition File: CWE369_Divide_by_Zero__int.label.xml
Template File: sources-sinks-61a.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 369 Divide by zero
 * BadSource: console_readLine Read data from the console using readLine
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: divide
 *    GoodSink: Check for zero before dividing
 *    BadSink : Dividing by a value that may be zero
 * Flow Variant: 61 Data flow: data returned from one method to another in different classes in the same package
 *
 * */

package testcases.CWE369_Divide_by_Zero;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE369_Divide_by_Zero__int_console_readLine_divide_61a extends AbstractTestCase
{
    public void bad() throws Throwable
    {
        int data = (new CWE369_Divide_by_Zero__int_console_readLine_divide_61b()).badSource();

        /* POTENTIAL FLAW: Zero denominator will cause an issue.  An integer division will
        result in an exception. */
        IO.writeLine("bad: 100/" + data + " = " + (100 / data) + "\n");

    }

    public void good() throws Throwable
    {
        goodG2B();
        goodB2G();
    }

    /* goodG2B() - use goodsource and badsink */
    private void goodG2B() throws Throwable
    {
        int data = (new CWE369_Divide_by_Zero__int_console_readLine_divide_61b()).goodG2BSource();

        /* POTENTIAL FLAW: Zero denominator will cause an issue.  An integer division will
        result in an exception. */
        IO.writeLine("bad: 100/" + data + " = " + (100 / data) + "\n");

    }

    /* goodB2G() - use badsource and goodsink */
    private void goodB2G() throws Throwable
    {
        int data = (new CWE369_Divide_by_Zero__int_console_readLine_divide_61b()).goodB2GSource();

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
