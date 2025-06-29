/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE476_NULL_Pointer_Dereference__Integer_73b.java
Label Definition File: CWE476_NULL_Pointer_Dereference.label.xml
Template File: sources-sinks-73b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 476 Null Pointer Dereference
 * BadSource:  Set data to null
 * GoodSource: Set data to a non-null value
 * Sinks:
 *    GoodSink: add check to prevent possibility of null dereference
 *    BadSink : possibility of null dereference
 * Flow Variant: 73 Data flow: data passed in a LinkedList from one method to another in different source files in the same package
 *
 * */

package testcases.CWE476_NULL_Pointer_Dereference;

import testcasesupport.*;
import java.util.LinkedList;

public class CWE476_NULL_Pointer_Dereference__Integer_73b
{
    public void badSink(LinkedList<Integer> dataLinkedList ) throws Throwable
    {
        Integer data = dataLinkedList.remove(2);

        /* POTENTIAL FLAW: null dereference will occur if data is null */
        IO.writeLine("" + data.toString());

    }

    /* goodG2B() - use GoodSource and BadSink */
    public void goodG2BSink(LinkedList<Integer> dataLinkedList ) throws Throwable
    {
        Integer data = dataLinkedList.remove(2);

        /* POTENTIAL FLAW: null dereference will occur if data is null */
        IO.writeLine("" + data.toString());

    }

    /* goodB2G() - use BadSource and GoodSink */
    public void goodB2GSink(LinkedList<Integer> dataLinkedList ) throws Throwable
    {
        Integer data = dataLinkedList.remove(2);

        /* FIX: validate that data is non-null */
        if (data != null)
        {
            IO.writeLine("" + data.toString());
        }
        else
        {
            IO.writeLine("data is null");
        }

    }
}
