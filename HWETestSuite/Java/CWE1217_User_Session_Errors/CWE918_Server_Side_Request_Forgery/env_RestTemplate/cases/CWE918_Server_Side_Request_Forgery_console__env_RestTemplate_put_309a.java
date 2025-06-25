/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.env_RestTemplate.cases;

import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

/*
 * @description 污染数据经过一个类中某个静态方法调用，而该类中还有其他静态方法被调用，将导致告警增多的场景。
 *
 * @cwe 918
 * @bad bad
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_309a {

    private static final String data = CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_309c.source();

    public static void bad1() {
    }

    public static void bad2() {
    }

    public static void bad3() {
    }

    public static void bad() {

        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }
}

