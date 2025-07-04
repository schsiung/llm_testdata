/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__int_Property_postdec_54d.java
Label Definition File: CWE191_Integer_Underflow__int.label.xml
Template File: sources-sinks-54d.tmpl.java
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
 * Flow Variant: 54 Data flow: data passed as an argument from one method through three others to a fifth; all five functions are in different classes in the same package
 *
 * */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE191_Integer_Underflow__int_Property_postdec_54d
{
    public void badSink(int data ) throws Throwable
    {
        (new CWE191_Integer_Underflow__int_Property_postdec_54e()).badSink(data );
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(int data ) throws Throwable
    {
        (new CWE191_Integer_Underflow__int_Property_postdec_54e()).goodG2BSink(data );
    }

    /* goodB2G() - use badsource and goodsink */
    public void goodB2GSink(int data ) throws Throwable
    {
        (new CWE191_Integer_Underflow__int_Property_postdec_54e()).goodB2GSink(data );
    }
}
