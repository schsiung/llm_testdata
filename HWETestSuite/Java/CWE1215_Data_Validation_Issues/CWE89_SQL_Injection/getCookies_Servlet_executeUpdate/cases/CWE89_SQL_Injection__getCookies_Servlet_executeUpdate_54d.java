/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE89_SQL_Injection__getCookies_Servlet_executeUpdate_54d.java
Label Definition File: CWE89_SQL_Injection.label.xml
Template File: sources-sinks-54d.tmpl.java
*/
/*
 * @testsuite Juliet_Java_1.3
* @description
 * CWE: 89 SQL Injection
 * BadSource: getCookies_Servlet Read data from the first cookie using getCookies()
 * GoodSource: A hardcoded string
 * Sinks: executeUpdate
 *    GoodSink: Use prepared statement and executeUpdate (properly)
 *    BadSink : data concatenated into SQL statement used in executeUpdate(), which could result in SQL Injection
 * Flow Variant: 54 Data flow: data passed as an argument from one method through three others to a fifth; all five functions are in different classes in the same package
 *
 * */

package testcases.CWE89_SQL_Injection;
import testcasesupport.*;

import javax.servlet.http.*;

public class CWE89_SQL_Injection__getCookies_Servlet_executeUpdate_54d
{
    public void badSink(String data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        (new CWE89_SQL_Injection__getCookies_Servlet_executeUpdate_54e()).badSink(data , request, response);
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(String data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        (new CWE89_SQL_Injection__getCookies_Servlet_executeUpdate_54e()).goodG2BSink(data , request, response);
    }

    /* goodB2G() - use badsource and goodsink */
    public void goodB2GSink(String data , HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        (new CWE89_SQL_Injection__getCookies_Servlet_executeUpdate_54e()).goodB2GSink(data , request, response);
    }
}
