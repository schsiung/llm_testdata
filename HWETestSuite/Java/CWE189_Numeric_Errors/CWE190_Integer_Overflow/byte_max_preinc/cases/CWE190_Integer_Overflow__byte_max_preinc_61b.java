/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__byte_max_preinc_61b.java
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-61b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: max Set data to the max value for byte
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: increment
 *    GoodSink: Ensure there will not be an overflow before incrementing data
 *    BadSink : Increment data, which can cause an overflow
 * Flow Variant: 61 Data flow: data returned from one method to another in different classes in the same package
 *
 * */

package testcases.CWE190_Integer_Overflow;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE190_Integer_Overflow__byte_max_preinc_61b
{
    public byte badSource() throws Throwable
    {
        byte data;

        /* POTENTIAL FLAW: Use the maximum size of the data type */
        data = Byte.MAX_VALUE;

        return data;
    }

    /* goodG2B() - use goodsource and badsink */
    public byte goodG2BSource() throws Throwable
    {
        byte data;

        /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
        data = 2;

        return data;
    }

    /* goodB2G() - use badsource and goodsink */
    public byte goodB2GSource() throws Throwable
    {
        byte data;

        /* POTENTIAL FLAW: Use the maximum size of the data type */
        data = Byte.MAX_VALUE;

        return data;
    }
}
