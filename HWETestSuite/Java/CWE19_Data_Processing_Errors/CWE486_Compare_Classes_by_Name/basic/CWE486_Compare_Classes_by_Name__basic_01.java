/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE486_Compare_Classes_by_Name__basic_01.java
Label Definition File: CWE486_Compare_Classes_by_Name__basic.label.xml
Template File: point-flaw-01.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 486 Compare Classes by Name
* Sinks:
*    GoodSink: properly compare class
*    BadSink : Compare class names
* Flow Variant: 01 Baseline
*
* */

package testcases.CWE486_Compare_Classes_by_Name;

import testcasesupport.*;

public class CWE486_Compare_Classes_by_Name__basic_01 extends AbstractTestCase
{
    public void bad() throws Throwable
    {

        /* FLAW: Differentiating by name is not enough, since different classes in different packages may use the same name */

        testcasesupport.CWE486_Compare_Classes_by_Name.HelperClass.CWE486_Compare_Classes_by_Name__Helper helperClass = new testcasesupport.CWE486_Compare_Classes_by_Name.HelperClass.CWE486_Compare_Classes_by_Name__Helper();

        testcasesupport.CWE486_Compare_Classes_by_Name.CWE486_Compare_Classes_by_Name__Helper helperClassRoot = new testcasesupport.CWE486_Compare_Classes_by_Name.CWE486_Compare_Classes_by_Name__Helper();

        if (helperClassRoot.getClass().getSimpleName().equals(helperClass.getClass().getSimpleName()))
        {
            IO.writeLine("Classes are the same");
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
            IO.writeLine("Classes are different");
        }

    }

    public void good() throws Throwable
    {
        good1();
    }

    private void good1() throws Throwable
    {

        testcasesupport.CWE486_Compare_Classes_by_Name.HelperClass.CWE486_Compare_Classes_by_Name__Helper helperClass = new testcasesupport.CWE486_Compare_Classes_by_Name.HelperClass.CWE486_Compare_Classes_by_Name__Helper();

        testcasesupport.CWE486_Compare_Classes_by_Name.CWE486_Compare_Classes_by_Name__Helper helperClassRoot = new testcasesupport.CWE486_Compare_Classes_by_Name.CWE486_Compare_Classes_by_Name__Helper();

        /* FIX: Compare the class types and not the names */
        if (helperClassRoot.getClass().equals(helperClass.getClass()))
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
            IO.writeLine("Classes are the same");
        }
        else
        {
            IO.writeLine("Classes are different");
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

