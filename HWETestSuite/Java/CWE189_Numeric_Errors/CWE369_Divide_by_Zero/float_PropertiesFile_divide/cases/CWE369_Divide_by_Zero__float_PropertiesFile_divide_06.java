/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE369_Divide_by_Zero__float_PropertiesFile_divide_06.java
Label Definition File: CWE369_Divide_by_Zero__float.label.xml
Template File: sources-sinks-06.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 369 Divide by zero
* BadSource: PropertiesFile Read data from a .properties file (in property named data)
* GoodSource: A hardcoded non-zero number (two)
* Sinks: divide
*    GoodSink: Check for zero before dividing
*    BadSink : Dividing by a value that may be zero
* Flow Variant: 06 Control flow: if(PRIVATE_STATIC_FINAL_FIVE==5) and if(PRIVATE_STATIC_FINAL_FIVE!=5)
*
* */

package testcases.CWE369_Divide_by_Zero;
import testcasesupport.*;

import java.util.Properties;

import java.io.FileInputStream;
import java.io.IOException;

import java.util.logging.Level;

public class CWE369_Divide_by_Zero__float_PropertiesFile_divide_06 extends AbstractTestCase
{
    /* The variable below is declared "final", so a tool should be able
     * to identify that reads of this will always give its initialized
     * value. */
    private static final int PRIVATE_STATIC_FINAL_FIVE = 5;

    public void bad() throws Throwable
    {
        float data;
        if (PRIVATE_STATIC_FINAL_FIVE==5)
        {
            data = -1.0f; /* Initialize data */
            /* retrieve the property */
            Properties properties = new Properties();
            FileInputStream streamFileInput = null;
            try
            {
                streamFileInput = new FileInputStream("../common/config.properties");
                properties.load(streamFileInput);
                /* POTENTIAL FLAW: Read data from a .properties file */
                String stringNumber = properties.getProperty("data");
                if (stringNumber != null)
                {
                    try
                    {
                        data = Float.parseFloat(stringNumber.trim());
                    }
                    catch (NumberFormatException exceptNumberFormat)
                    {
                        IO.logger.log(Level.WARNING, "Number format exception parsing data from string", exceptNumberFormat);
                    }
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error with stream reading", exceptIO);
            }
            finally
            {
                /* Close stream reading object */
                try
                {
                    if (streamFileInput != null)
                    {
                        streamFileInput.close();
                    }
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error closing FileInputStream", exceptIO);
                }
            }
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0.0f;
        }

        if (PRIVATE_STATIC_FINAL_FIVE==5)
        {
            /* POTENTIAL FLAW: Possibly divide by zero */
            int result = (int)(100.0 / data);
            IO.writeLine(result);
        }
    }

    /* goodG2B1() - use goodsource and badsink by changing first PRIVATE_STATIC_FINAL_FIVE==5 to PRIVATE_STATIC_FINAL_FIVE!=5 */
    private void goodG2B1() throws Throwable
    {
        float data;
        if (PRIVATE_STATIC_FINAL_FIVE!=5)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0.0f;
        }
        else
        {

            /* FIX: Use a hardcoded number that won't a divide by zero */
            data = 2.0f;

        }

        if (PRIVATE_STATIC_FINAL_FIVE==5)
        {
            /* POTENTIAL FLAW: Possibly divide by zero */
            int result = (int)(100.0 / data);
            IO.writeLine(result);
        }
    }

    /* goodG2B2() - use goodsource and badsink by reversing statements in first if */
    private void goodG2B2() throws Throwable
    {
        float data;
        if (PRIVATE_STATIC_FINAL_FIVE==5)
        {
            /* FIX: Use a hardcoded number that won't a divide by zero */
            data = 2.0f;
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0.0f;
        }

        if (PRIVATE_STATIC_FINAL_FIVE==5)
        {
            /* POTENTIAL FLAW: Possibly divide by zero */
            int result = (int)(100.0 / data);
            IO.writeLine(result);
        }
    }

    /* goodB2G1() - use badsource and goodsink by changing second PRIVATE_STATIC_FINAL_FIVE==5 to PRIVATE_STATIC_FINAL_FIVE!=5 */
    private void goodB2G1() throws Throwable
    {
        float data;
        if (PRIVATE_STATIC_FINAL_FIVE==5)
        {
            data = -1.0f; /* Initialize data */
            /* retrieve the property */
            Properties properties = new Properties();
            FileInputStream streamFileInput = null;
            try
            {
                streamFileInput = new FileInputStream("../common/config.properties");
                properties.load(streamFileInput);
                /* POTENTIAL FLAW: Read data from a .properties file */
                String stringNumber = properties.getProperty("data");
                if (stringNumber != null)
                {
                    try
                    {
                        data = Float.parseFloat(stringNumber.trim());
                    }
                    catch (NumberFormatException exceptNumberFormat)
                    {
                        IO.logger.log(Level.WARNING, "Number format exception parsing data from string", exceptNumberFormat);
                    }
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error with stream reading", exceptIO);
            }
            finally
            {
                /* Close stream reading object */
                try
                {
                    if (streamFileInput != null)
                    {
                        streamFileInput.close();
                    }
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error closing FileInputStream", exceptIO);
                }
            }
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0.0f;
        }

        if (PRIVATE_STATIC_FINAL_FIVE!=5)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
            IO.writeLine("Benign, fixed string");
        }
        else
        {

            /* FIX: Check for value of or near zero before dividing */
            if (Math.abs(data) > 0.000001)
            {
                int result = (int)(100.0 / data);
                IO.writeLine(result);
            }
            else
            {
                IO.writeLine("This would result in a divide by zero");
            }

        }
    }

    /* goodB2G2() - use badsource and goodsink by reversing statements in second if  */
    private void goodB2G2() throws Throwable
    {
        float data;
        if (PRIVATE_STATIC_FINAL_FIVE==5)
        {
            data = -1.0f; /* Initialize data */
            /* retrieve the property */
            Properties properties = new Properties();
            FileInputStream streamFileInput = null;
            try
            {
                streamFileInput = new FileInputStream("../common/config.properties");
                properties.load(streamFileInput);
                /* POTENTIAL FLAW: Read data from a .properties file */
                String stringNumber = properties.getProperty("data");
                if (stringNumber != null)
                {
                    try
                    {
                        data = Float.parseFloat(stringNumber.trim());
                    }
                    catch (NumberFormatException exceptNumberFormat)
                    {
                        IO.logger.log(Level.WARNING, "Number format exception parsing data from string", exceptNumberFormat);
                    }
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error with stream reading", exceptIO);
            }
            finally
            {
                /* Close stream reading object */
                try
                {
                    if (streamFileInput != null)
                    {
                        streamFileInput.close();
                    }
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error closing FileInputStream", exceptIO);
                }
            }
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0.0f;
        }

        if (PRIVATE_STATIC_FINAL_FIVE==5)
        {
            /* FIX: Check for value of or near zero before dividing */
            if (Math.abs(data) > 0.000001)
            {
                int result = (int)(100.0 / data);
                IO.writeLine(result);
            }
            else
            {
                IO.writeLine("This would result in a divide by zero");
            }
        }
    }

    public void good() throws Throwable
    {
        goodG2B1();
        goodG2B2();
        goodB2G1();
        goodB2G2();
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
