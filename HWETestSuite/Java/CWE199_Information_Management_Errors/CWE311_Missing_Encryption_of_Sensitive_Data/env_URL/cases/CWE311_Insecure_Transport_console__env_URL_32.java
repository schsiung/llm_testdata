/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;


import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;

/*
 * @description if条件逻辑判断是否继续可以执行
 *
 * @cwe 311
 * @bad bad
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 董镇山 d00305016
 */
public class CWE311_Insecure_Transport_console__env_URL_32 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        /* Read data with hardcode prefix http */
        data = "http:xxxxx";


        int paramLoc = -1;
        if (data != null) {
            paramLoc = data.indexOf("$");
        }

        if (paramLoc == -1) {
            return;
        }


        URL url = null;
        try {
            /* POTENTIAL FLAW: Insecure Transport */
            url = new URL(data);
        } catch (MalformedURLException e) {
            IO.writeLine(e.getMessage());
        }
        IO.writeLine(url.getPath());

    }
}
