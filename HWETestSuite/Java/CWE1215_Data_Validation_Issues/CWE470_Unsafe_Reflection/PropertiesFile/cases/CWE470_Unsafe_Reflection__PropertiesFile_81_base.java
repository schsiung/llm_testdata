/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE470_Unsafe_Reflection__PropertiesFile_81_base.java
Label Definition File: CWE470_Unsafe_Reflection.label.xml
Template File: sources-sink-81_base.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 470 Use of Externally-Controlled Input to Select Classes or Code ('Unsafe Reflection')
 * BadSource: PropertiesFile Read data from a .properties file (in property named data)
 * GoodSource: Set data to a hardcoded class name
 * Sinks:
 *    BadSink : Instantiate class named in data
 * Flow Variant: 81 Data flow: data passed in a parameter to an abstract method
 *
 * */

package testcases.CWE470_Unsafe_Reflection;

import testcasesupport.*;

import javax.servlet.http.*;

public abstract class CWE470_Unsafe_Reflection__PropertiesFile_81_base
{
    public abstract void action(String data ) throws Throwable;
}
