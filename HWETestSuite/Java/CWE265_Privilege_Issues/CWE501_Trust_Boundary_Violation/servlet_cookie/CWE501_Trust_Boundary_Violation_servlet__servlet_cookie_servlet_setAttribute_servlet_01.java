/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE501_Trust_Boundary_Violation.servlet_cookie;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/*
 * @description Servlet最简单的通过HttpServletRequest、HttpServletResponse入参传递污染数据。
 *
 * @cwe 501
 * @bad doGet
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 董镇山 d00305016
 */
public class CWE501_Trust_Boundary_Violation_servlet__servlet_cookie_servlet_setAttribute_servlet_01 extends HttpServlet {


    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String data;

        data = ""; /* Initialize data */

        /* Read data from cookies */
        {
            Cookie cookieSources[] = request.getCookies();
            if (cookieSources != null) {
                data = cookieSources[0].getValue();
            }
        }


        /* POTENTIAL FLAW: Trust Boundary Violation */
        request.setAttribute("header", data);

    }
}

