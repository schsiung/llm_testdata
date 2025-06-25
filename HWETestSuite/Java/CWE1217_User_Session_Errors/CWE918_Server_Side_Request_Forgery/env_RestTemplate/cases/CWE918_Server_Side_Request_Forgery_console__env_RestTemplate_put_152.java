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
 * @description 数据流source点通过反射存储在类的成员变量中并且通过get方法进行传递。
 *
 * @cwe 918
 * @bad bad
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 董镇山 d00305016
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_152 {


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


        Class cls = Class.forName("ServerSideRequestForgery.JavaSpringWeb.CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_152.ReflectionClass");
        ReflectionClass reflectionClass = (ReflectionClass) cls.newInstance();
        reflectionClass.data = data;

        badSink(reflectionClass);
    }

    private void badSink(ReflectionClass reflectionClass) {
        String data = reflectionClass.getData();


        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }

    static class ReflectionClass {
        private String data;

        public String getData() {
            return this.data;
        }
    }
}
