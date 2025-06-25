/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_RestTemplate.cases;

import java.io.IOException;
import java.net.URL;

/*
 * @description 数据流source点通过同一个包中两个不同类的方法的参数传递。
 *
 * @cwe 918
 * @bad bad
 * @good good
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 董镇山 d00305016
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_51a {


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


        (new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_51b()).badSink(data);
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        (new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_51b()).goodG2BSink(data);
    }
}
