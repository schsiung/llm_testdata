/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__byte_console_readLine_postdec_72b.java
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-72b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: console_readLine Read data from the console using readLine
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: decrement
 *    GoodSink: Ensure there will not be an underflow before decrementing data
 *    BadSink : Decrement data, which can cause an Underflow
 * Flow Variant: 72 Data flow: data passed in a Vector from one method to another in different source files in the same package
 *
 * */

package testcases.CWE191_Integer_Underflow;
import testcasesupport.*;
import java.util.Vector;

public class CWE191_Integer_Underflow__byte_console_readLine_postdec_72b
{
    public void badSink(Vector<Byte> dataVector ) throws Throwable
    {
        byte data = dataVector.remove(2);

        /* POTENTIAL FLAW: if data == Byte.MIN_VALUE, this will overflow */
        data--;
        byte result = (byte)(data);

        IO.writeLine("result: " + result);

    }

    /* goodG2B() - use GoodSource and BadSink */
    public void goodG2BSink(Vector<Byte> dataVector ) throws Throwable
    {
        byte data = dataVector.remove(2);

        /* POTENTIAL FLAW: if data == Byte.MIN_VALUE, this will overflow */
        data--;
        byte result = (byte)(data);

        IO.writeLine("result: " + result);

    }

    /* goodB2G() - use BadSource and GoodSink */
    public void goodB2GSink(Vector<Byte> dataVector ) throws Throwable
    {
        byte data = dataVector.remove(2);

        /* FIX: Add a check to prevent an underflow from occurring */
        if (data > Byte.MIN_VALUE)
        {
            data--;
            byte result = (byte)(data);
            IO.writeLine("result: " + result);
        }
        else
        {
            IO.writeLine("data value is too small to decrement.");
        }

    }
}
