/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_RestTemplate.cases;

import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

/*
 * @description 封装source的对象在ArrayList中的stream流中调用lambda表达式传递的场景。
 *
 * @bad bad
 * @cwe 918
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_423 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<Model_423> list = new ArrayList<>();
        list.add(new Model_423(temp));
        list.add(new Model_423("data"));
        list.stream().map(s -> s.getData()).forEach(data -> {

            RestTemplate restTemplate = new RestTemplate();
            try {
                /* POTENTIAL FLAW: Server-Side Request Forgery */
                restTemplate.put(new URI(data), null);
            } catch (URISyntaxException e) {
                e.printStackTrace();
            }


        });
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

    class Model_423 {
        private String data;

        public Model_423(String data) {
            this.data = data;
        }

        public String getData() {
            return data;
        }
    }
}
