/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.connect_tcp.cases;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * Unsafe Injection
 *
 * @cwe 494
 *
 * @author 董镇山 d00305016
 *
 */
public class CWE494_Unsafe_Injection_servlet__connect_tcp_loadClass_54d {


    public void badSink(HttpServletRequest request, HttpServletResponse response, String data) {
        (new CWE494_Unsafe_Injection_servlet__connect_tcp_loadClass_54e()).badSink(request, response, data);
    }
}
