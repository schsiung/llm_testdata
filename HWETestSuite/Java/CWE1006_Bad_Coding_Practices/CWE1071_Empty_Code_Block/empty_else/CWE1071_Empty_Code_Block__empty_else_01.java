/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1071_Empty_Code_Block__empty_else_01.java
Label Definition File: CWE1071_Empty_Code_Block.label.xml
Template File: point-flaw-01.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 1071 Empty Code Block
* Sinks: empty_else
*    GoodSink: Else statement contains code
*    BadSink : An empty else statement has no effect
* Flow Variant: 01 Baseline
*
* */

package testcases.CWE1071_Empty_Code_Block;

import testcasesupport.*;

import java.security.SecureRandom;

public class CWE1071_Empty_Code_Block__empty_else_01 extends AbstractTestCase
{
    public void bad() throws Throwable
    {

        int x;

        x = (new SecureRandom()).nextInt();

        if (x == 0)
        {
            IO.writeLine("Inside the else statement");
        }
        /* FLAW: An empty else statement has no effect */
        else
        {

        }

        IO.writeLine("Hello from bad()");

    }

    public void good() throws Throwable
    {
        good1();
    }

    private void good1() throws Throwable
    {

        int x;

        x = (new SecureRandom()).nextInt();

        if (x == 0)
        {
            IO.writeLine("Inside the if statement");
        }
        /* FIX: Do not include an empty else statement */
        else
        {
            IO.writeLine("Inside the else statement");
        }

        IO.writeLine("Hello from good()");

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

