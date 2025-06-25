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
 * @Description 污染数据通过构造器的参数进行传递。
 *
 * @cwe 918
 * @bad bad
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306a {

    public CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306b model;

    public CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306a() {
    }

    public CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306a(CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306b model) {
        this.model = new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306b();
        // 污染源
        this.model.userPassWord = badSource();
    }

    public void bad() throws Throwable {
        CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306a message = new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306a(new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306b());

        badSink(message);
    }

    private String badSource() {
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

    private void badSink(CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_306a message) throws Throwable {
        String data = message.model.userPassWord;


        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }
}
