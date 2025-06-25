/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.servlet_cookie.cases;

import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
@RestController
@RequestMapping("/sample")
public class CWE918_Server_Side_Request_Forgery_spring__servlet_cookie_url_connection_66b {


    public void badSink(HttpServletRequest request, HttpServletResponse response, String dataArray[]) {
        String data = dataArray[2];


        ResourceLoader resourceLoader = new DefaultResourceLoader();
        /* POTENTIAL FLAW: Server-Side Request Forgery */
        resourceLoader.getResource(data);

    }
}
