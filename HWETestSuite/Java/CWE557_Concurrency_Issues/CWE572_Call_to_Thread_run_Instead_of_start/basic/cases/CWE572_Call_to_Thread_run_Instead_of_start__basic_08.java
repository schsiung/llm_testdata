/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE572_Call_to_Thread_run_Instead_of_start__basic_08.java
Label Definition File: CWE572_Call_to_Thread_run_Instead_of_start__basic.label.xml
Template File: point-flaw-08.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 572 Call to Thread run instead of Thread start
* Sinks:
*    GoodSink: calls thread start
*    BadSink : calls thread run
* Flow Variant: 08 Control flow: if(privateReturnsTrue()) and if(privateReturnsFalse())
*
* */

package testcases.CWE572_Call_to_Thread_run_Instead_of_start;

import testcasesupport.*;

public class CWE572_Call_to_Thread_run_Instead_of_start__basic_08 extends AbstractTestCase
{
    /* The methods below always return the same value, so a tool
     * should be able to figure out that every call to these
     * methods will return true or return false.
     */
    private boolean privateReturnsTrue()
    {
        return true;
    }

    private boolean privateReturnsFalse()
    {
        return false;
    }

    public void bad() throws Throwable
    {
        if (privateReturnsTrue())
        {
            IO.writeLine("bad() Main thread name is: " + Thread.currentThread().getName());
            Thread threadOne = new Thread()
            {
                public void run()
                {
                    IO.writeLine("bad() In thread: " + Thread.currentThread().getName());
                }
            };
            threadOne.run(); /* FLAW: Called Thread.run() instead of Thread.start() */
        }
    }

    /* good1() changes privateReturnsTrue() to privateReturnsFalse() */
    private void good1() throws Throwable
    {
        if (privateReturnsFalse())
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
            IO.writeLine("Benign, fixed string");
        }
        else
        {

            IO.writeLine("good() Main thread name is: " + Thread.currentThread().getName());
            Thread threadTwo = new Thread()
            {
                public void run()
                {
                    IO.writeLine("good() In thread: " + Thread.currentThread().getName());
                }
            };

            threadTwo.start(); /* FIX: Correctly called Thread.start() */

        }
    }

    /* good2() reverses the bodies in the if statement */
    private void good2() throws Throwable
    {
        if (privateReturnsTrue())
        {
            IO.writeLine("good() Main thread name is: " + Thread.currentThread().getName());
            Thread threadTwo = new Thread()
            {
                public void run()
                {
                    IO.writeLine("good() In thread: " + Thread.currentThread().getName());
                }
            };
            threadTwo.start(); /* FIX: Correctly called Thread.start() */
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
