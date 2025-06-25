/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;


import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;

/*
 * @Description 污染数据传播链包括了数字操作符。
 *
 * @cwe 311
 * @bad bad
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 张自强 z30004299
 */
public class CWE311_Insecure_Transport_console__env_URL_305 {


    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);
            data = (Long.parseLong(data) & 0xffL) + "";
        } catch (Exception e) {
            badSink(data);
        }
    }

    private String badSource(String data) {
        /* Read data with hardcode prefix http */
        data = "http:xxxxx";


        return data;
    }

    private void badSink(String data) throws Throwable {

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

