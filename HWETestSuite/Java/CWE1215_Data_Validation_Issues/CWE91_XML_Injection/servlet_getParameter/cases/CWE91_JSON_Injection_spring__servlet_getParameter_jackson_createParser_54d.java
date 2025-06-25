/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.servlet_getParameter.cases;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * JSON Injection
 *
 * @cwe 91
 *
 * @author 张自强 z30004299
 *
 */
@RestController
@RequestMapping("/sample")
public class CWE91_JSON_Injection_spring__servlet_getParameter_jackson_createParser_54d {


    public void badSink(HttpServletRequest request, HttpServletResponse response, String data) {
        (new CWE91_JSON_Injection_spring__servlet_getParameter_jackson_createParser_54e()).badSink(request, response, data);
    }
}

