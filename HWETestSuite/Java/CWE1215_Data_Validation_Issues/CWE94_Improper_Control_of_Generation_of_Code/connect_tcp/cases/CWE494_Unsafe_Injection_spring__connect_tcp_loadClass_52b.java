/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.connect_tcp.cases;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * Unsafe Injection
 *
 * @cwe 494
 *
 * @author 张自强 z30004299
 *
 */
@RestController
@RequestMapping("/sample")
public class CWE494_Unsafe_Injection_spring__connect_tcp_loadClass_52b {


    public void badSink(HttpServletRequest request, HttpServletResponse response, String data) {
        (new CWE494_Unsafe_Injection_spring__connect_tcp_loadClass_52c()).badSink(request, response, data);
    }
}

