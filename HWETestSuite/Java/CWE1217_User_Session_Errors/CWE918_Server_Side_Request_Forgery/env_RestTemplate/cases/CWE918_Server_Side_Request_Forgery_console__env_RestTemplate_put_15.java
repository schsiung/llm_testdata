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
 * @description 含有switch(数值)[switch(int)]选择的数据流传递过程。
 *
 * @cwe 918
 * @bad bad
 * @good good
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 董镇山 d00305016
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_15 {


    public void bad() throws Throwable {
        String data = null;

        switch (6) {
            case 6:
                data = ""; /* Initialize data */
                /* Read data from an environment variable */
                try {
                    URL url = new URL("ssss");
                    Object content = url.getContent();
                    data = (String) content;
                } catch (IOException e) {
                    System.out.println(e.getMessage());
                }

                break;
            default:
                data = null;
                break;
        }


        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }

    private void goodG2B1() throws Throwable {
        String data = null;

        switch (5) {
            case 6:
                data = null;
                break;
            default:
                data = "foo";
                break;
        }


        RestTemplate restTemplate = new RestTemplate();
        try {
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }

    private void goodG2B2() throws Throwable {
        String data = null;

        switch (6) {
            case 6:
                data = "foo";
                break;
            default:
                data = null;
                /* Read data from an environment variable */
                try {
                    URL url = new URL("ssss");
                    Object content = url.getContent();
                    data = (String) content;
                } catch (IOException e) {
                    System.out.println(e.getMessage());
                }

                break;
        }


        RestTemplate restTemplate = new RestTemplate();
        try {
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
