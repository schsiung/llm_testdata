/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.servlet_cookie.cases;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

/*
 * SQL Injection
 *
 * @cwe 89
 *
 * @author 董镇山 d00305016
 *
 */
public class CWE89_SQL_Injection_servlet__servlet_cookie_PersistenceManager_newQuery_22b {


    public String badSource(HttpServletRequest request) {
        String data;

        if (CWE89_SQL_Injection_servlet__servlet_cookie_PersistenceManager_newQuery_22a.badPublicStatic) {
            data = ""; /* Initialize data */

            /* Read data from cookies */
            {
                Cookie cookieSources[] = request.getCookies();
                if (cookieSources != null) {
                    data = cookieSources[0].getValue();
                }
            }

        } else {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = null;
        }
        return data;
    }
}
