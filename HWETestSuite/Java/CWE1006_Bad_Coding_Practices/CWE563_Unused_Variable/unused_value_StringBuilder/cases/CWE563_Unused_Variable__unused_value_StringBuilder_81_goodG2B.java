/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE563_Unused_Variable__unused_value_StringBuilder_81_goodG2B.java
Label Definition File: CWE563_Unused_Variable__unused_value.label.xml
Template File: sources-sinks-81_goodG2B.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 563 Unused Variable
 * BadSource:  Initialize data
 * GoodSource: Initialize and use data
 * Sinks:
 *    GoodSink: Use data
 *    BadSink : re-initialize and use data
 * Flow Variant: 81 Data flow: data passed in a parameter to an abstract method
 *
 * */

package testcases.CWE563_Unused_Variable;

import testcasesupport.*;

public class CWE563_Unused_Variable__unused_value_StringBuilder_81_goodG2B extends CWE563_Unused_Variable__unused_value_StringBuilder_81_base
{
    public void action(StringBuilder data ) throws Throwable
    {

        /* POTENTIAL FLAW: Possibly over-write the initial value of data before using it */

        data = new StringBuilder("Reinitialize");

        IO.writeLine(data.toString());

    }
}
