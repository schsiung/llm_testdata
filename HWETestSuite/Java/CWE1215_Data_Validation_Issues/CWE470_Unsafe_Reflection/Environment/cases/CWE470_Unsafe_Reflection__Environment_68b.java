/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE470_Unsafe_Reflection__Environment_68b.java
Label Definition File: CWE470_Unsafe_Reflection.label.xml
Template File: sources-sink-68b.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 470 Use of Externally-Controlled Input to Select Classes or Code ('Unsafe Reflection')
 * BadSource: Environment Read data from an environment variable
 * GoodSource: Set data to a hardcoded class name
 * BadSink:  Instantiate class named in data
 * Flow Variant: 68 Data flow: data passed as a member variable in the "a" class, which is used by a method in another class in the same package
 *
 * */

package testcases.CWE470_Unsafe_Reflection;

import testcasesupport.*;

import javax.servlet.http.*;

public class CWE470_Unsafe_Reflection__Environment_68b
{
    public void badSink() throws Throwable
    {
        String data = CWE470_Unsafe_Reflection__Environment_68a.data;

        /* POTENTIAL FLAW: Instantiate object of class named in data (which may be from external input) */
        Class<?> tempClass = Class.forName(data);
        Object tempClassObject = tempClass.newInstance();

        IO.writeLine(tempClassObject.toString()); /* Use tempClassObject in some way */

    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink() throws Throwable
    {
        String data = CWE470_Unsafe_Reflection__Environment_68a.data;

        /* POTENTIAL FLAW: Instantiate object of class named in data (which may be from external input) */
        Class<?> tempClass = Class.forName(data);
        Object tempClassObject = tempClass.newInstance();

        IO.writeLine(tempClassObject.toString()); /* Use tempClassObject in some way */

    }
}
