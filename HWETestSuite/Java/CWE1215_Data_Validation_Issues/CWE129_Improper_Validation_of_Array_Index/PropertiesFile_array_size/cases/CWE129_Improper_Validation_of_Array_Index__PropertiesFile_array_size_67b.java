/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE129_Improper_Validation_of_Array_Index__PropertiesFile_array_size_67b.java
Label Definition File: CWE129_Improper_Validation_of_Array_Index.label.xml
Template File: sources-sinks-67b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 129 Improper Validation of Array Index
 * BadSource: PropertiesFile Read data from a .properties file (in property named data)
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: array_size
 *    GoodSink: data is used to set the size of the array and it must be greater than 0
 *    BadSink : data is used to set the size of the array, but it could be set to 0
 * Flow Variant: 67 Data flow: data passed in a class from one method to another in different source files in the same package
 *
 * */

package testcases.CWE129_Improper_Validation_of_Array_Index;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE129_Improper_Validation_of_Array_Index__PropertiesFile_array_size_67b
{
    public void badSink(CWE129_Improper_Validation_of_Array_Index__PropertiesFile_array_size_67a.Container dataContainer ) throws Throwable
    {
        int data = dataContainer.containerOne;

        int array[] = null;

        /* POTENTIAL FLAW: Verify that data is non-negative, but still allow it to be 0 */
        if (data >= 0)
        {
            array = new int[data];
        }
        else
        {
            IO.writeLine("Array size is negative");
        }

        /* do something with the array */
        array[0] = 5;
        IO.writeLine(array[0]);

    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(CWE129_Improper_Validation_of_Array_Index__PropertiesFile_array_size_67a.Container dataContainer ) throws Throwable
    {
        int data = dataContainer.containerOne;

        int array[] = null;

        /* POTENTIAL FLAW: Verify that data is non-negative, but still allow it to be 0 */
        if (data >= 0)
        {
            array = new int[data];
        }
        else
        {
            IO.writeLine("Array size is negative");
        }

        /* do something with the array */
        array[0] = 5;
        IO.writeLine(array[0]);

    }

    /* goodB2G() - use badsource and goodsink */
    public void goodB2GSink(CWE129_Improper_Validation_of_Array_Index__PropertiesFile_array_size_67a.Container dataContainer ) throws Throwable
    {
        int data = dataContainer.containerOne;

        /* Need to ensure that the array is of size > 3  and < 101 due to the GoodSource and the large_fixed BadSource */
        int array[] = null;

        /* FIX: Verify that data is non-negative AND greater than 0 */
        if (data > 0)
        {
            array = new int[data];
        }
        else
        {
            IO.writeLine("Array size is negative");
        }

        /* do something with the array */
        array[0] = 5;
        IO.writeLine(array[0]);

    }
}
