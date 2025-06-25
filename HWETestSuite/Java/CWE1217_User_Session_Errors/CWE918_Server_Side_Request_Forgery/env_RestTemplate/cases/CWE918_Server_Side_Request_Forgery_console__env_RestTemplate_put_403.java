/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.env_RestTemplate.cases;

import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

/*
 * @description 通过强转类型创建lambda表达式。
 *
 * @bad bad
 * @cwe 918
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_403 {


    public void bad() throws Throwable {
        String temp = badSource();

        badSink((MyStringCalculator) (data) -> {

            RestTemplate restTemplate = new RestTemplate();
            try {
                /* POTENTIAL FLAW: Server-Side Request Forgery */
                restTemplate.put(new URI(data), null);
            } catch (URISyntaxException e) {
                e.printStackTrace();
            }


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
        /* Read data from an environment variable */
        try {
            URL url = new URL("ssss");
            Object content = url.getContent();
            data = (String) content;
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }


        return data;
    }
}
