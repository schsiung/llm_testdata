/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE586_Explicit_Call_to_Finalize__basic_09.java
Label Definition File: CWE586_Explicit_Call_to_Finalize__basic.label.xml
Template File: point-flaw-09.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 586 Explicit call to finalize()
* Sinks:
*    GoodSink: let garbage collection invoke finalize
*    BadSink : explictly calling finalize()
* Flow Variant: 09 Control flow: if(IO.STATIC_FINAL_TRUE) and if(IO.STATIC_FINAL_FALSE)
*
* */

package testcases.CWE586_Explicit_Call_to_Finalize;

import testcasesupport.*;

public class CWE586_Explicit_Call_to_Finalize__basic_09 extends AbstractTestCase
{
    public void bad() throws Throwable
    {
        if (IO.STATIC_FINAL_TRUE)
        {
            CWE586_Explicit_Call_to_Finalize__basic_Helper badObj = new CWE586_Explicit_Call_to_Finalize__basic_Helper();
            try
            {
                badObj.sayHello();
            }
            catch (Exception exception)
            {
                IO.writeLine("An error occurred.");
            }
            finally
            {
                /* cleanup */
                /* FLAW: avoid explicitly invoking the finalize method on an object */
                badObj.finalize();
            }
        }
    }

    /* good1() changes IO.STATIC_FINAL_TRUE to IO.STATIC_FINAL_FALSE */
    private void good1() throws Throwable
    {
        if (IO.STATIC_FINAL_FALSE)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
            IO.writeLine("Benign, fixed string");
        }
        else
        {

            CWE586_Explicit_Call_to_Finalize__basic_Helper goodObj = new CWE586_Explicit_Call_to_Finalize__basic_Helper();

            try
            {
                goodObj.sayHello();
            }
            catch (Exception exception)
            {
                IO.writeLine("An error occurred.");
            }
            finally
            {
                /* cleanup */
                /* FIX: set reference to null and garbage collector will eventually finalize the object */
                goodObj = null;
            }

        }
    }

    /* good2() reverses the bodies in the if statement */
    private void good2() throws Throwable
    {
        if (IO.STATIC_FINAL_TRUE)
        {
            CWE586_Explicit_Call_to_Finalize__basic_Helper goodObj = new CWE586_Explicit_Call_to_Finalize__basic_Helper();
            try
            {
                goodObj.sayHello();
            }
            catch (Exception exception)
            {
                IO.writeLine("An error occurred.");
            }
            finally
            {
                /* cleanup */
                /* FIX: set reference to null and garbage collector will eventually finalize the object */
                goodObj = null;
            }
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
