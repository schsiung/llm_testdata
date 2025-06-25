/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.connect_tcp.cases;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * XSLT Injection
 *
 * @cwe 494
 *
 * @author 张自强 z30004299
 *
 */
@RestController
@RequestMapping("/sample")
public class CWE494_XSLT_Injection_spring__connect_tcp_XsltCompiler_compile_54b {


    public void badSink(HttpServletRequest request, HttpServletResponse response, String data) {
        (new CWE494_XSLT_Injection_spring__connect_tcp_XsltCompiler_compile_54c()).badSink(request, response, data);
    }
}

