/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.servlet_cookie.cases;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

/*
 * Server Side Request Forgery
 *
 * @cwe 918
 *
 * @author 董镇山 d00305016
 *
 */
public class CWE918_Server_Side_Request_Forgery_servlet__servlet_cookie_url_connection_22b {


    public String badSource(HttpServletRequest request) {
        String data;

        if (CWE918_Server_Side_Request_Forgery_servlet__servlet_cookie_url_connection_22a.badPublicStatic) {
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
