/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_RestTemplate.cases;

import testcasesupport.IO;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.HashMap;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 235
 * @tool fortify: HTTP Parameter Pollution;secbrella: SecS_HTTP_Parameter_Pollution
 * @author 董镇山 d00305016
 */
public class CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_74b {


    public void badSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);

        final String uri = "http://localhost:8080/springrestexample/employees";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

        /* POTENTIAL FLAW: HTTP Parameter Pollution */
        ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class, data);

        IO.writeLine(result.getStatusCodeValue());

    }

    public void goodG2BSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);

        final String uri = "http://localhost:8080/springrestexample/employees";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

        ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class, data);

        IO.writeLine(result.getStatusCodeValue());

    }
}
