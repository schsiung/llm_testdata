/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE90_LDAP_Injection__console_readLine_54d.java
Label Definition File: CWE90_LDAP_Injection.label.xml
Template File: sources-sink-54d.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 90 LDAP Injection
 * BadSource: console_readLine Read data from the console using readLine()
 * GoodSource: A hardcoded string
 * Sinks:
 *    BadSink : data concatenated into LDAP search, which could result in LDAP Injection
 * Flow Variant: 54 Data flow: data passed as an argument from one method through three others to a fifth; all five functions are in different classes in the same package
 *
 * */

package testcases.CWE90_LDAP_Injection;

import testcasesupport.*;

import javax.servlet.http.*;

public class CWE90_LDAP_Injection__console_readLine_54d
{
    public void badSink(String data ) throws Throwable
    {
        (new CWE90_LDAP_Injection__console_readLine_54e()).badSink(data );
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(String data ) throws Throwable
    {
        (new CWE90_LDAP_Injection__console_readLine_54e()).goodG2BSink(data );
    }
}
