/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1071_Empty_Code_Block__equals_10.java
Label Definition File: CWE1071_Empty_Code_Block.label.xml
Template File: point-flaw-10.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 1071 Empty Code Block
* Sinks: equals
*    GoodSink: Set a variable equal to another variable
*    BadSink : Setting a variable equal to itself has no effect
* Flow Variant: 10 Control flow: if(IO.staticTrue) and if(IO.staticFalse)
*
* */

package testcases.CWE1071_Empty_Code_Block;

import testcasesupport.*;

public class CWE1071_Empty_Code_Block__equals_10 extends AbstractTestCase
{
    public void bad() throws Throwable
    {
        if (IO.staticTrue)
        {
            int intOne = 1;
            IO.writeLine(intOne);
            /* FLAW: The statement below has no effect since it is setting a variable to itself */
            intOne = intOne;
            IO.writeLine(intOne);
        }
    }

    /* good1() changes IO.staticTrue to IO.staticFalse */
    private void good1() throws Throwable
    {
        if (IO.staticFalse)
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
        if (IO.staticTrue)
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
