/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE369_Divide_by_Zero__float_zero_divide_71a.java
Label Definition File: CWE369_Divide_by_Zero__float.label.xml
Template File: sources-sinks-71a.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 369 Divide by zero
 * BadSource: zero Set data to a hardcoded value of zero
 * GoodSource: A hardcoded non-zero number (two)
 * Sinks: divide
 *    GoodSink: Check for zero before dividing
 *    BadSink : Dividing by a value that may be zero
 * Flow Variant: 71 Data flow: data passed as an Object reference argument from one method to another in different classes in the same package
 *
 * */

package testcases.CWE369_Divide_by_Zero;
import testcasesupport.*;

public class CWE369_Divide_by_Zero__float_zero_divide_71a extends AbstractTestCase
{
    public void bad() throws Throwable
    {
        float data;

        data = 0.0f; /* POTENTIAL FLAW: data is set to zero */

        (new CWE369_Divide_by_Zero__float_zero_divide_71b()).badSink((Object)data  );
    }

    public void good() throws Throwable
    {
        goodG2B();
        goodB2G();
    }

    /* goodG2B() - use goodsource and badsink */
    private void goodG2B() throws Throwable
    {
        float data;

        /* FIX: Use a hardcoded number that won't a divide by zero */
        data = 2.0f;

        (new CWE369_Divide_by_Zero__float_zero_divide_71b()).goodG2BSink((Object)data  );
    }

    /* goodB2G() - use badsource and goodsink */
    private void goodB2G() throws Throwable
    {
        float data;

        data = 0.0f; /* POTENTIAL FLAW: data is set to zero */

        (new CWE369_Divide_by_Zero__float_zero_divide_71b()).goodB2GSink((Object)data  );
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
