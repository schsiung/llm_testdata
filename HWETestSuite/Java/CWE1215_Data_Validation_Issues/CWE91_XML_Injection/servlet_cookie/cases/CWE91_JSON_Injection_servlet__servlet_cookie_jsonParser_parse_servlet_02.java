/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.servlet_cookie.cases;

import com.google.gson.JsonParser;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/*
 * @description Servlet设置过滤器的场景。
 *
 * @cwe 91
 * @bad doGet
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 董镇山 d00305016
 */
public class CWE91_JSON_Injection_servlet__servlet_cookie_jsonParser_parse_servlet_02 extends HttpServlet {


    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    // TODO
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String data;
        if (true) {
            data = ""; /* Initialize data */


            /* Read data from cookies */
            {
                Cookie cookieSources[] = request.getCookies();
                if (cookieSources != null) {
                    data = cookieSources[0].getValue();
                }
            }


        } else {
            data = null;
        }


        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL FLAW: JSON Injection */
        jsonParser.parse(data);

    }
}
