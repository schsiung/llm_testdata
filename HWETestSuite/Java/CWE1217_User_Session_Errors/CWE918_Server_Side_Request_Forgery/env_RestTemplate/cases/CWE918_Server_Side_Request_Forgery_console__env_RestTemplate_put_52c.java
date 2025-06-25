/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.env_RestTemplate.cases;

import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

/*
 * @description 数据流sink点爆发方法，其中的source点通过同一包下三个不同类的方法的参数传递。
 *
 * @cwe 918
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 董镇山 d00305016
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_52c {


    public void badSink(String data) throws Throwable {

        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }

    public void goodG2BSink(String data) throws Throwable {

        RestTemplate restTemplate = new RestTemplate();
        try {
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }
}
