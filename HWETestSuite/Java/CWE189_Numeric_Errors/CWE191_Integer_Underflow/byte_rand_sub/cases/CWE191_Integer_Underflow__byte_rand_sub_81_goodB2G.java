/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__byte_rand_sub_81_goodB2G.java
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-81_goodB2G.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: rand Set data to result of rand()
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: sub
 *    GoodSink: Ensure there will not be an underflow before subtracting 1 from data
 *    BadSink : Subtract 1 from data, which can cause an Underflow
 * Flow Variant: 81 Data flow: data passed in a parameter to an abstract method
 *
 * */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;

public class CWE191_Integer_Underflow__byte_rand_sub_81_goodB2G extends CWE191_Integer_Underflow__byte_rand_sub_81_base
{
    public void action(byte data ) throws Throwable
    {

        /* FIX: Add a check to prevent an overflow from occurring */
        if (data > Byte.MIN_VALUE)
        {
            byte result = (byte)(data - 1);
            IO.writeLine("result: " + result);
        }
        else
        {
            IO.writeLine("data value is too small to perform subtraction.");
        }

    }
}
