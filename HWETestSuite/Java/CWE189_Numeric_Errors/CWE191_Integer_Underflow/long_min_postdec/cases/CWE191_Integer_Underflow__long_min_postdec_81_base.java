/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__long_min_postdec_81_base.java
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-81_base.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: min Set data to the max value for long
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: decrement
 *    GoodSink: Ensure there will not be an underflow before decrementing data
 *    BadSink : Decrement data, which can cause an Underflow
 * Flow Variant: 81 Data flow: data passed in a parameter to an abstract method
 *
 * */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;

public abstract class CWE191_Integer_Underflow__long_min_postdec_81_base
{
    public abstract void action(long data ) throws Throwable;
}
