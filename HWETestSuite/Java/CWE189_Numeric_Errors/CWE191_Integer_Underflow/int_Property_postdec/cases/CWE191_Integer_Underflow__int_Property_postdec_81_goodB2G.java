/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__int_Property_postdec_81_goodB2G.java
Label Definition File: CWE191_Integer_Underflow__int.label.xml
Template File: sources-sinks-81_goodB2G.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: Property Read data from a system property
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: decrement
 *    GoodSink: Ensure there will not be an underflow before decrementing data
 *    BadSink : Decrement data, which can cause an Underflow
 * Flow Variant: 81 Data flow: data passed in a parameter to an abstract method
 *
 * */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE191_Integer_Underflow__int_Property_postdec_81_goodB2G extends CWE191_Integer_Underflow__int_Property_postdec_81_base
{
    public void action(int data ) throws Throwable
    {

        /* FIX: Add a check to prevent an underflow from occurring */
        if (data > Integer.MIN_VALUE)
        {
            data--;
            int result = (int)(data);
            IO.writeLine("result: " + result);
        }
        else
        {
            IO.writeLine("data value is too small to decrement.");
        }

    }
}
