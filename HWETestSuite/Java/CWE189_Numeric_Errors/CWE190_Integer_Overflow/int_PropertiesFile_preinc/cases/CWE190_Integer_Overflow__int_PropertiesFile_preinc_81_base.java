/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__int_PropertiesFile_preinc_81_base.java
Label Definition File: CWE190_Integer_Overflow__int.label.xml
Template File: sources-sinks-81_base.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: PropertiesFile Read data from a .properties file (in property named data)
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: increment
 *    GoodSink: Ensure there will not be an overflow before incrementing data
 *    BadSink : Increment data, which can cause an overflow
 * Flow Variant: 81 Data flow: data passed in a parameter to an abstract method
 *
 * */

package testcases.CWE190_Integer_Overflow;
import testcasesupport.*;

import javax.servlet.http.*;

public abstract class CWE190_Integer_Overflow__int_PropertiesFile_preinc_81_base
{
    public abstract void action(int data ) throws Throwable;
}
