/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE690_NULL_Deref_From_Return__System_getProperty_equals_74b.java
Label Definition File: CWE690_NULL_Deref_From_Return.label.xml
Template File: sources-sinks-74b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 690 Unchecked return value is null, leading to a null pointer dereference.
 * BadSource: System_getProperty Set data to return of System.getProperty
 * GoodSource: Set data to fixed, non-null String
 * Sinks: equals
 *    GoodSink: Call equals() on string literal (that is not null)
 *    BadSink : Call equals() on possibly null object
 * Flow Variant: 74 Data flow: data passed in a HashMap from one method to another in different source files in the same package
 *
 * */

package testcases.CWE690_NULL_Deref_From_Return;

import testcasesupport.*;
import java.util.HashMap;

import javax.servlet.http.*;

public class CWE690_NULL_Deref_From_Return__System_getProperty_equals_74b
{
    public void badSink(HashMap<Integer,String> dataHashMap ) throws Throwable
    {
        String data = dataHashMap.get(2);

        /* POTENTIAL FLAW: data could be null */
        if(data.equals("CWE690"))
        {
            IO.writeLine("data is CWE690");
        }

    }

    /* goodG2B() - use GoodSource and BadSink */
    public void goodG2BSink(HashMap<Integer,String> dataHashMap ) throws Throwable
    {
        String data = dataHashMap.get(2);

        /* POTENTIAL FLAW: data could be null */
        if(data.equals("CWE690"))
        {
            IO.writeLine("data is CWE690");
        }

    }

    /* goodB2G() - use BadSource and GoodSink */
    public void goodB2GSink(HashMap<Integer,String> dataHashMap ) throws Throwable
    {
        String data = dataHashMap.get(2);

        /* FIX: call equals() on string literal (that is not null) */
        if("CWE690".equals(data))
        {
            IO.writeLine("data is CWE690");
        }

    }
}
