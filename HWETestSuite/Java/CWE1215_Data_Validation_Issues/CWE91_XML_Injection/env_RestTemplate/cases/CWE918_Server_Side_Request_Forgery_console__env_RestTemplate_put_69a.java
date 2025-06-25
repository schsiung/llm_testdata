/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_RestTemplate.cases;

import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

/*
 * @description 数据流source点在一个静态方法中通过同一个类的两个实例的filed赋值进行传递。
 *
 * @cwe 918
 * @bad bad
 * @good good
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69a {


    public static void bad() throws Throwable {
        String source = badSource();
        CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b front = new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b(source);
        CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b rear = new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b();
        assign(front, rear);
        String data = rear.filedB;


        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }

    private static String badSource() throws Throwable {
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

    // 静态方法成员变量赋值
    private static void assign(CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b x, CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b y) {
        y.filedB = x.filedB;
    }

    public static void good() throws Throwable {
        goodG2B();
    }

    private static void goodG2B() throws Throwable {

        /* FIX: Use a hardcoded string */
        String source = "foo";
        CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b front = new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b(source);
        CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b rear = new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_69b();
        assign(front, rear);
        String data = rear.filedB;


        RestTemplate restTemplate = new RestTemplate();
        try {
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }
}
