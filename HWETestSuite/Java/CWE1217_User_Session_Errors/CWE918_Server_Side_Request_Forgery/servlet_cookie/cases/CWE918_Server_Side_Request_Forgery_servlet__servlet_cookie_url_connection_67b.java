/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.servlet_cookie.cases;

import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.ResourceLoader;
import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * Server Side Request Forgery
 *
 * @cwe 918
 *
 * @bad badSink
 * @tool Fortify:Server-Side Request Forgery;SecBrella:SecS_Server_Side_Request_Forgery;
 * @author 董镇山 d00305016
 *
 */
public class CWE918_Server_Side_Request_Forgery_servlet__servlet_cookie_url_connection_67b {


    public void badSink(HttpServletRequest request, HttpServletResponse response, CWE918_Server_Side_Request_Forgery_servlet__servlet_cookie_url_connection_67a.Container dataContainer) throws IOException {
        String data = dataContainer.containerOne;


        ResourceLoader resourceLoader = new DefaultResourceLoader();
        /* POTENTIAL FLAW: Server-Side Request Forgery */
        resourceLoader.getResource(data);

    }
}
