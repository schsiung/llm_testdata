/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE597_Wrong_Operator_String_Comparison__basic_05.java
Label Definition File: CWE597_Wrong_Operator_String_Comparison__basic.label.xml
Template File: point-flaw-05.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 597 Use of '==' instead of 'equals()' to test String equivalence
* Sinks:
*    GoodSink: Correctly use .equals() to compare strings
*    BadSink : Use == operator instead of .equals() to compare strings
* Flow Variant: 05 Control flow: if(privateTrue) and if(privateFalse)
*
* */

package testcases.CWE597_Wrong_Operator_String_Comparison;

import testcasesupport.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

import java.util.logging.Level;

public class CWE597_Wrong_Operator_String_Comparison__basic_05 extends AbstractTestCase
{
    /* The two variables below are not defined as "final", but are never
     * assigned any other value, so a tool should be able to identify that
     * reads of these will always return their initialized values.
     */
    private boolean privateTrue = true;
    private boolean privateFalse = false;

    public void bad() throws Throwable
    {
        if (privateTrue)
        {
            BufferedReader readerBuffered = null;
            InputStreamReader readerInputStream = null;
            try
            {
                readerInputStream = new InputStreamReader(System.in, "UTF-8");
                readerBuffered = new BufferedReader(readerInputStream);
                /* read user input from console */
                IO.writeLine("Enter string1: "); /* enter "test" */
                String string1 = readerBuffered.readLine();
                IO.writeLine("Enter string2: "); /* enter "test" */
                String string2 = readerBuffered.readLine();
                if (string1 != null && string2 != null)
                {
                    /* output comparison results */
                    if (string1 == string2)     /* FLAW: using == operator instead of .equals() object method */
                    {
                        IO.writeLine("bad(): Strings are equal");
                    }
                    else
                    {
                        IO.writeLine("bad(): Strings are not equal"); /* This will always display */
                    }
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error!", exceptIO);
            }
            finally
            {
                try
                {
                    if (readerBuffered != null)
                    {
                        readerBuffered.close();
                    }
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error closing BufferedReader", exceptIO);
                }

                try
                {
                    if (readerInputStream != null)
                    {
                        readerInputStream.close();
                    }
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error closing InputStreamReader", exceptIO);
                }
            }
        }
    }

    /* good1() changes privateTrue to privateFalse */
    private void good1() throws Throwable
    {
        if (privateFalse)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
            IO.writeLine("Benign, fixed string");
        }
        else
        {

            BufferedReader readerBuffered = null;
            InputStreamReader readerInputStream = null;

            try
            {
                readerInputStream = new InputStreamReader(System.in, "UTF-8");
                readerBuffered = new BufferedReader(readerInputStream);

                /* read user input from console */
                IO.writeLine("Enter string1: "); /* enter "test" */
                String string1 = readerBuffered.readLine();
                IO.writeLine("Enter string2: "); /* enter "test" */
                String string2 = readerBuffered.readLine();

                if (string1 != null && string2 != null)
                {
                    /* output comparison */
                    if (string1.equals(string2))  /* FIX: use of equals() instead of == operator */
                    {
                        IO.writeLine("good(): Strings are equal");
                    }
                    else
                    {
                        IO.writeLine("good(): Strings are not equal");
                    }
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error!", exceptIO);
            }
            finally
            {
                try
                {
                    if (readerBuffered != null )
                    {
                        readerBuffered.close();
                    }
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error closing BufferedReader", exceptIO);
                }

                try
                {
                    if (readerInputStream != null )
                    {
                        readerInputStream.close();
                    }
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error closing InputStreamReader", exceptIO);
                }
            }

        }
    }

    /* good2() reverses the bodies in the if statement */
    private void good2() throws Throwable
    {
        if (privateTrue)
        {
            BufferedReader readerBuffered = null;
            InputStreamReader readerInputStream = null;
            try
            {
                readerInputStream = new InputStreamReader(System.in, "UTF-8");
                readerBuffered = new BufferedReader(readerInputStream);
                /* read user input from console */
                IO.writeLine("Enter string1: "); /* enter "test" */
                String string1 = readerBuffered.readLine();
                IO.writeLine("Enter string2: "); /* enter "test" */
                String string2 = readerBuffered.readLine();
                if (string1 != null && string2 != null)
                {
                    /* output comparison */
                    if (string1.equals(string2))  /* FIX: use of equals() instead of == operator */
                    {
                        IO.writeLine("good(): Strings are equal");
                    }
                    else
                    {
                        IO.writeLine("good(): Strings are not equal");
                    }
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error!", exceptIO);
            }
            finally
            {
                try
                {
                    if (readerBuffered != null )
                    {
                        readerBuffered.close();
                    }
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error closing BufferedReader", exceptIO);
                }

                try
                {
                    if (readerInputStream != null )
                    {
                        readerInputStream.close();
                    }
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error closing InputStreamReader", exceptIO);
                }
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
