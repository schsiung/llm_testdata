/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE90_LDAP_Injection__console_readLine_53c.java
Label Definition File: CWE90_LDAP_Injection.label.xml
Template File: sources-sink-53c.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 90 LDAP Injection
 * BadSource: console_readLine Read data from the console using readLine()
 * GoodSource: A hardcoded string
 * Sinks:
 *    BadSink : data concatenated into LDAP search, which could result in LDAP Injection
 * Flow Variant: 53 Data flow: data passed as an argument from one method through two others to a fourth; all four functions are in different classes in the same package
 *
 * */

package testcases.CWE90_LDAP_Injection;

import testcasesupport.*;

import javax.servlet.http.*;

public class CWE90_LDAP_Injection__console_readLine_53c
{
    public void badSink(String data ) throws Throwable
    {
        (new CWE90_LDAP_Injection__console_readLine_53d()).badSink(data );
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(String data ) throws Throwable
    {
        (new CWE90_LDAP_Injection__console_readLine_53d()).goodG2BSink(data );
    }
}
