/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1071_Empty_Code_Block__equals_03.java
Label Definition File: CWE1071_Empty_Code_Block.label.xml
Template File: point-flaw-03.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 1071 Empty Code Block
* Sinks: equals
*    GoodSink: Set a variable equal to another variable
*    BadSink : Setting a variable equal to itself has no effect
* Flow Variant: 03 Control flow: if(5==5) and if(5!=5)
*
* */

package testcases.CWE1071_Empty_Code_Block;

import testcasesupport.*;

public class CWE1071_Empty_Code_Block__equals_03 extends AbstractTestCase
{
    public void bad() throws Throwable
    {
        if (5 == 5)
        {
            int intOne = 1;
            IO.writeLine(intOne);
            /* FLAW: The statement below has no effect since it is setting a variable to itself */
            intOne = intOne;
            IO.writeLine(intOne);
        }
    }

    /* good1() changes 5==5 to 5!=5 */
    private void good1() throws Throwable
    {
        if (5 != 5)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
            IO.writeLine("Benign, fixed string");
        }
        else
        {

            int intOne = 1, intFive = 5;

            IO.writeLine(intOne);

            /* FIX: Assign intFive to intOne */
            intOne = intFive;

            IO.writeLine(intOne);

        }
    }

    /* good2() reverses the bodies in the if statement */
    private void good2() throws Throwable
    {
        if (5 == 5)
        {
            int intOne = 1, intFive = 5;
            IO.writeLine(intOne);
            /* FIX: Assign intFive to intOne */
            intOne = intFive;
            IO.writeLine(intOne);
        }
    }

    public void good() throws Throwable
    {
        good1();
        good2();
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
