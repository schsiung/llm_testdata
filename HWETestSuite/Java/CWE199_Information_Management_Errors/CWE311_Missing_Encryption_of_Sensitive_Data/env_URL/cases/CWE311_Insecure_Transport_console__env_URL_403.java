/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;


import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;

/*
 * @description 通过强转类型创建lambda表达式。
 *
 * @bad bad
 * @cwe 311
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_console__env_URL_403 {


    public void bad() throws Throwable {
        String temp = badSource();

        badSink((MyStringCalculator) (data) -> {

            URL url = null;
            try {
                /* POTENTIAL FLAW: Insecure Transport */
                url = new URL(data);
            } catch (MalformedURLException e) {
                IO.writeLine(e.getMessage());
            }
            IO.writeLine(url.getPath());

        }, temp);
    }

    public void badSink(MyIntegerCalculator integerCalculator, String data) {
        integerCalculator.badSink(Integer.valueOf(data));
    }

    public void badSink(MyStringCalculator stringCalculator, String data) {
        stringCalculator.badSink(data);
    }

    public interface MyIntegerCalculator {
        void badSink(Integer s1);
    }

    public interface MyStringCalculator {
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
