/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE89_SQL_Injection__URLConnection_executeQuery_54c.java
Label Definition File: CWE89_SQL_Injection.label.xml
Template File: sources-sinks-54c.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 89 SQL Injection
 * BadSource: URLConnection Read data from a web server with URLConnection
 * GoodSource: A hardcoded string
 * Sinks: executeQuery
 *    GoodSink: Use prepared statement and executeQuery (properly)
 *    BadSink : data concatenated into SQL statement used in executeQuery(), which could result in SQL Injection
 * Flow Variant: 54 Data flow: data passed as an argument from one method through three others to a fifth; all five functions are in different classes in the same package
 *
 * */

package testcases.CWE89_SQL_Injection;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE89_SQL_Injection__URLConnection_executeQuery_54c
{
    public void badSink(String data ) throws Throwable
    {
        (new CWE89_SQL_Injection__URLConnection_executeQuery_54d()).badSink(data );
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(String data ) throws Throwable
    {
        (new CWE89_SQL_Injection__URLConnection_executeQuery_54d()).goodG2BSink(data );
    }

    /* goodB2G() - use badsource and goodsink */
    public void goodB2GSink(String data ) throws Throwable
    {
        (new CWE89_SQL_Injection__URLConnection_executeQuery_54d()).goodB2GSink(data );
    }
}
