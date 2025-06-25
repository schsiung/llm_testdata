/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.servlet_cookie.cases;

import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.ResourceLoader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * Server Side Request Forgery
 *
 * @cwe 918
 *
 * @bad badSink
 * @tool Fortify:Server-Side Request Forgery;SecBrella:SecS_Server_Side_Request_Forgery;
 * @author 张自强 z30004299
 *
 */
public class CWE918_Server_Side_Request_Forgery_servlet__servlet_cookie_url_connection_174 extends HttpServlet {


    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String data;

        data = ""; /* Initialize data */
        try {
            data = badSource(data, request, response);

            throw new RuntimeException(data);
        } catch (RuntimeException e) {
            badSink(e.getMessage(), request, response);
        }
    }

    private String badSource(String data, HttpServletRequest request, HttpServletResponse response) {
        /* Read data from cookies */
        {
            Cookie cookieSources[] = request.getCookies();
            if (cookieSources != null) {
                data = cookieSources[0].getValue();
            }
        }
        return data;
    }

    private void badSink(String data, HttpServletRequest request, HttpServletResponse response) {

        ResourceLoader resourceLoader = new DefaultResourceLoader();
        /* POTENTIAL FLAW: Server-Side Request Forgery */
        resourceLoader.getResource(data);

    }
}
