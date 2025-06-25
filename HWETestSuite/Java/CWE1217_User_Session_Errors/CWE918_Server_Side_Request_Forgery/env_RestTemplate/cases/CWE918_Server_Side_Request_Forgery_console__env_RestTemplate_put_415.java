/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.env_RestTemplate.cases;

import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.function.Function;

/*
 * @description 使用双冒号调用本类的方法初始化lambda表达式。
 *
 * @bad bad
 * @cwe 918
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_415 {


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

        Function<String, String> sc1 = this::append;
        String temp = sc1.apply(data);
        badSink(temp);
    }

    public void badSink(String data) {

        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }

    public String append(String s1) {
        System.out.println(s1);
        return s1;
    }
}
