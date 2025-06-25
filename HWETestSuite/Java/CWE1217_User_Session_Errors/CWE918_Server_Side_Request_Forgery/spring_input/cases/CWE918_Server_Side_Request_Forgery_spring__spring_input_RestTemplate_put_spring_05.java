/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.spring_input.cases;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

/*
 * @description Spring注解@Value读取污染数据，污染数据解析成List进行传递。
 *
 * @cwe 918
 * @bad bad1,bad2
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public class CWE918_Server_Side_Request_Forgery_spring__spring_input_RestTemplate_put_spring_05 {


    /* 通过@Value注解来读取污染数据方式1 */
    @Value("${password.list.ids:1,2,3}")
    private List<String> value1;

    /* 通过@Value注解来读取污染数据方式2 */
    @Value("#{'${password.list}'.split(',')}")
    private List<String> value2;

    private void bad1() {
        if (value1 != null) {
            this.badSourceSink(value1.get(0));
        }
    }

    private void bad2() {
        if (value2 != null) {
            this.badSourceSink(value2.get(0));
        }
    }

    private void badSourceSink(String contaminationData) {
        String data;

        data = ""; /* Initialize data */

        /* Manipulate data from spring input */
        {
            data = contaminationData.toLowerCase().trim();
            if (data.length() > 2) {
                data = data.substring(1);
            }
        }


        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }
}
