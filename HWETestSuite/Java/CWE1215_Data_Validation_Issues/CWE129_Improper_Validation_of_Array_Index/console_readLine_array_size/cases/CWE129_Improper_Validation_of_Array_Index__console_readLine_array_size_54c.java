/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE129_Improper_Validation_of_Array_Index__console_readLine_array_size_54c.java
Label Definition File: CWE129_Improper_Validation_of_Array_Index.label.xml
Template File: sources-sinks-54c.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 129 Improper Validation of Array Index
 * BadSource: console_readLine Read data from the console using readLine
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: array_size
 *    GoodSink: data is used to set the size of the array and it must be greater than 0
 *    BadSink : data is used to set the size of the array, but it could be set to 0
 * Flow Variant: 54 Data flow: data passed as an argument from one method through three others to a fifth; all five functions are in different classes in the same package
 *
 * */

package testcases.CWE129_Improper_Validation_of_Array_Index;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE129_Improper_Validation_of_Array_Index__console_readLine_array_size_54c
{
    public void badSink(int data ) throws Throwable
    {
        (new CWE129_Improper_Validation_of_Array_Index__console_readLine_array_size_54d()).badSink(data );
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(int data ) throws Throwable
    {
        (new CWE129_Improper_Validation_of_Array_Index__console_readLine_array_size_54d()).goodG2BSink(data );
    }

    /* goodB2G() - use badsource and goodsink */
    public void goodB2GSink(int data ) throws Throwable
    {
        (new CWE129_Improper_Validation_of_Array_Index__console_readLine_array_size_54d()).goodB2GSink(data );
    }
}
