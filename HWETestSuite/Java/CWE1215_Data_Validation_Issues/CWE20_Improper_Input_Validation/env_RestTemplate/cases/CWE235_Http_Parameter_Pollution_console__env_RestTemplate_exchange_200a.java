/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_RestTemplate.cases;

import testcasesupport.IO;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 235
 * @bad bad
 * @tool fortify: HTTP Parameter Pollution;secbrella: SecS_HTTP_Parameter_Pollution
 * @author 方健尔 f00563108
 */
public class CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_200a implements CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {
        final String uri = "http://localhost:8080/springrestexample/employees";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

        /* POTENTIAL FLAW: HTTP Parameter Pollution */
        ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class, data);

        IO.writeLine(result.getStatusCodeValue());

    }
}
