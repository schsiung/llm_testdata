/**
* @testsuite baihu
*/
package CWE19_Data_Processing_Errors.CWE235_Improper_Handling_of_Extra_Parameters.env_RestTemplate.cases;

import java.io.IOException;
import java.net.URL;

/*
 * @description 数据流source点通过辅助类的参数传入，并通过System.arraycopy进行传递。
 *
 * @cwe 235
 * @bad bad
 * @tool fortify: HTTP Parameter Pollution;secbrella: SecS_HTTP_Parameter_Pollution
 * @author 董镇山 d00305016
 */
public class CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_161a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        /* Read data from an environment variable */
        try {
            URL url = new URL("ssss");
            Object content = url.getContent();
            data = (String) content;
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }


        String[] dataArray = new String[5];
        dataArray[2] = data;
        (new CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_161b()).badSink(dataArray);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        /* FIX: Use a hardcoded string */
        data = "foo";

        String[] dataArray = new String[5];
        dataArray[2] = data;
        (new CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_161b()).goodG2BSink(dataArray);
    }

    private void goodG2B2() throws Throwable {
        String data;

        data = ""; /* Initialize data */
        /* Read data from an environment variable */
        try {
            URL url = new URL("ssss");
            Object content = url.getContent();
            data = (String) content;
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }


        String[] dataArray = new String[5];
        dataArray[3] = data;
        (new CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_161b()).goodG2BSink(dataArray);
    }
}
