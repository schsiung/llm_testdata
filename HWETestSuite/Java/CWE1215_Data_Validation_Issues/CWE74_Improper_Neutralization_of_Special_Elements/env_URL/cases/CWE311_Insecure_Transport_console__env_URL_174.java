/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_URL.cases;


import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;

/*
 * @description 数据流source点通过方法的局部变量传入，通过异常进行传递。
 *
 * @cwe 311
 * @bad bad
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 董镇山 d00305016
 */
public class CWE311_Insecure_Transport_console__env_URL_174 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);

            throw new RuntimeException(data);
        } catch (RuntimeException e) {
            badSink(e.getMessage());
        }
    }

    private String badSource(String data) {
        /* Read data with hardcode prefix http */
        data = "http:xxxxx";

        return data;
    }

    private void badSink(String data) {

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

