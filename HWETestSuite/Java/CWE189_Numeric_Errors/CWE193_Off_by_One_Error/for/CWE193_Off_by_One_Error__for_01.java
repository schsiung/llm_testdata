/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE193_Off_by_One_Error__for_01.java
Label Definition File: CWE193_Off_by_One_Error.label.xml
Template File: point-flaw-01.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 193 An array index is 1 off from the max array index
* Sinks: for
*    GoodSink: restrict max index value
*    BadSink : access array index outside array max
* Flow Variant: 01 Baseline
*
* */

package testcases.CWE193_Off_by_One_Error;

import testcasesupport.*;

public class CWE193_Off_by_One_Error__for_01 extends AbstractTestCase
{
    public void bad() throws Throwable
    {

        int[] intArray = new int[10];

        /* FLAW: index outside of array, off by one */
        for (int i = 0; i <= intArray.length; i++)
        {
            IO.writeLine("intArray[" + i + "] = " + (intArray[i] = i));
        }

    }

    public void good() throws Throwable
    {
        good1();
    }

    private void good1() throws Throwable
    {

        int[] intArray = new int[10];

        /* FIX: Use < to ensure no out of bounds access */
        for (int i = 0; i < intArray.length; i++)
        {
            IO.writeLine("intArray[" + i + "] = " + (intArray[i] = i));
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

