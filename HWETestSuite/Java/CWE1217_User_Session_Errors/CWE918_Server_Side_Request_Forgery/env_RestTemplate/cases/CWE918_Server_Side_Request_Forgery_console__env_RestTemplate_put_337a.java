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
 * @description 将污染数据以value的形式存入跨类全局变量map中，然后通过获取key所对应的value来传递的场景，其中put和get在同一个方法中，不存在callFlow分析。
 *
 * @cwe 918
 * @bad bad
 * @good good
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_337a {


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

        CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_337b mapKeyValue = new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_337b();
        mapKeyValue.mapSource.put("key1", data);
        data = mapKeyValue.mapSource.get("key1");

        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }

    public void good() throws Throwable {
        String dataSource = "foo";
        CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_337b mapKeyValue = new CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_337b();
        mapKeyValue.mapSource.put("key2", dataSource);
        String data = mapKeyValue.mapSource.get("key2");

        RestTemplate restTemplate = new RestTemplate();
        try {
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }
}
