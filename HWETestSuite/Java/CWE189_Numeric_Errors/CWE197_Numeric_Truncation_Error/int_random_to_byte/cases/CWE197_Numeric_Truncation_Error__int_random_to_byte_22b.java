/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE197_Numeric_Truncation_Error__int_random_to_byte_22b.java
Label Definition File: CWE197_Numeric_Truncation_Error__int.label.xml
Template File: sources-sink-22b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 197 Numeric Truncation Error
 * BadSource: random Set data to a random value
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: to_byte
 *    BadSink : Convert data to a byte
 * Flow Variant: 22 Control flow: Flow controlled by value of a public static variable. Sink functions are in a separate file from sources.
 *
 * */

package testcases.CWE197_Numeric_Truncation_Error;
import testcasesupport.*;

import java.security.SecureRandom;

public class CWE197_Numeric_Truncation_Error__int_random_to_byte_22b
{
    public int badSource() throws Throwable
    {
        int data;

        if (CWE197_Numeric_Truncation_Error__int_random_to_byte_22a.badPublicStatic)
        {
            /* POTENTIAL FLAW: Set data to a random value */
            data = (new SecureRandom()).nextInt();
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }
        return data;
    }

    /* goodG2B1() - use goodsource and badsink by setting the static variable to false instead of true */
    public int goodG2B1Source() throws Throwable
    {
        int data;

        if (CWE197_Numeric_Truncation_Error__int_random_to_byte_22a.goodG2B1PublicStatic)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }
        else
        {

            /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
            data = 2;

        }

        return data;
    }

    /* goodG2B2() - use goodsource and badsink by reversing the blocks in the if in the sink function */
    public int goodG2B2Source() throws Throwable
    {
        int data;

        if (CWE197_Numeric_Truncation_Error__int_random_to_byte_22a.goodG2B2PublicStatic)
        {
            /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
            data = 2;
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = 0;
        }

        return data;
    }
}
