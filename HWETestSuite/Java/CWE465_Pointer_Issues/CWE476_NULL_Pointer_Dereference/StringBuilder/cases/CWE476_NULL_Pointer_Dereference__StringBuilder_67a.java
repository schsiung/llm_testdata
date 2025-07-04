/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE476_NULL_Pointer_Dereference__StringBuilder_67a.java
Label Definition File: CWE476_NULL_Pointer_Dereference.label.xml
Template File: sources-sinks-67a.tmpl.java
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
 * Flow Variant: 67 Data flow: data passed in a class from one method to another in different source files in the same package
 *
 * */

package testcases.CWE476_NULL_Pointer_Dereference;

import testcasesupport.*;

public class CWE476_NULL_Pointer_Dereference__StringBuilder_67a extends AbstractTestCase
{
    static class Container
    {
        public StringBuilder containerOne;
    }

    public void bad() throws Throwable
    {
        StringBuilder data;

        /* POTENTIAL FLAW: data is null */
        data = null;

        Container dataContainer = new Container();
        dataContainer.containerOne = data;
        (new CWE476_NULL_Pointer_Dereference__StringBuilder_67b()).badSink(dataContainer  );
    }

    public void good() throws Throwable
    {
        goodG2B();
        goodB2G();
    }

    /* goodG2B() - use goodsource and badsink */
    private void goodG2B() throws Throwable
    {
        StringBuilder data;

        /* FIX: hardcode data to non-null */
        data = new StringBuilder();

        Container dataContainer = new Container();
        dataContainer.containerOne = data;
        (new CWE476_NULL_Pointer_Dereference__StringBuilder_67b()).goodG2BSink(dataContainer  );
    }

    /* goodB2G() - use badsource and goodsink */
    private void goodB2G() throws Throwable
    {
        StringBuilder data;

        /* POTENTIAL FLAW: data is null */
        data = null;

        Container dataContainer = new Container();
        dataContainer.containerOne = data;
        (new CWE476_NULL_Pointer_Dereference__StringBuilder_67b()).goodB2GSink(dataContainer  );
    }

    /* Below is the main(). It is only used when building this testcase on
     * its own for testing or for building a binary to use in testing binary
     * analysis tools. It is not used when compiling all the testcases as one
     * application, which is how source code analysis tools are tested.
     */
    public static void main(String[] args) throws ClassNotFoundException,
           InstantiationException, IllegalAccessException
    {
        mainFromParent(args);
    }

}
