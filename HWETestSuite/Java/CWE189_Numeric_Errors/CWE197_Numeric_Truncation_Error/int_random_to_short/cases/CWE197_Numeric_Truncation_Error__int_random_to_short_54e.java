/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE197_Numeric_Truncation_Error__int_random_to_short_54e.java
Label Definition File: CWE197_Numeric_Truncation_Error__int.label.xml
Template File: sources-sink-54e.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 197 Numeric Truncation Error
 * BadSource: random Set data to a random value
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: to_short
 *    BadSink : Convert data to a short
 * Flow Variant: 54 Data flow: data passed as an argument from one method through three others to a fifth; all five functions are in different classes in the same package
 *
 * */

package testcases.CWE197_Numeric_Truncation_Error;
import testcasesupport.*;

public class CWE197_Numeric_Truncation_Error__int_random_to_short_54e
{
    public void badSink(int data ) throws Throwable
    {

        {
            /* POTENTIAL FLAW: Convert data to a short, possibly causing a truncation error */
            IO.writeLine((short)data);
        }

    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(int data ) throws Throwable
    {

        {
            /* POTENTIAL FLAW: Convert data to a short, possibly causing a truncation error */
            IO.writeLine((short)data);
        }

    }
}
