/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_RestTemplate.cases;

import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayDeque;
import java.util.Deque;

/*
 * @Description 实现子类的方法。该场景模拟多态过程，通过调用父类方法，实际调用子类的场景。
 *
 * @cwe 918
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 张自强 z30004299
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_302b extends CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_302a {
    /**
     * 污染数据
     */
    private final Deque<Contaminant> contaminants = new ArrayDeque<Contaminant>();


    public void badSource() {
        String data = "";
        /* Read data from an environment variable */
        try {
            URL url = new URL("ssss");
            Object content = url.getContent();
            data = (String) content;
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        Contaminant contaminant = new Contaminant();
        contaminant.data = data;
        contaminants.add(contaminant);
    }

    public void badSink() throws Throwable {
        for (Contaminant contaminant : contaminants) {
            badSinkTwo(contaminant.data);
        }
    }

    private void badSinkTwo(String data) throws Throwable {

        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }


    }

    private class Contaminant {
        public String data;
    }
}

