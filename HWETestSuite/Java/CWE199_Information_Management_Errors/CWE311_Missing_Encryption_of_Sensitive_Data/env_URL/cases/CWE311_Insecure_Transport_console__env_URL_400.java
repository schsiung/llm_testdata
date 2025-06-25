/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;


import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;

/*
 * @description 通过函数式接口创建lambda表达式,通过变量返回。
 *
 * @bad bad
 * @cwe 311
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_console__env_URL_400 {


    public void bad() throws Throwable {
        String temp = badSource();

        MyIntegerCalculator myIntegerCalculator = (data) -> {

            URL url = null;
            try {
                /* POTENTIAL FLAW: Insecure Transport */
                url = new URL(data);
            } catch (MalformedURLException e) {
                IO.writeLine(e.getMessage());
            }
            IO.writeLine(url.getPath());

        };

        myIntegerCalculator.badSink(temp);
    }

    public interface MyIntegerCalculator {
        void badSink(String s1);
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        /* Read data with hardcode prefix http */
        data = "http:xxxxx";


        return data;
    }
}
