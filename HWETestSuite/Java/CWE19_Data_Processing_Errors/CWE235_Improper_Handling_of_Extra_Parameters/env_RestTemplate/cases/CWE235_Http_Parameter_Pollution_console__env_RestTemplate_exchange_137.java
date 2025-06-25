/**
* @testsuite baihu
*/
package CWE19_Data_Processing_Errors.CWE235_Improper_Handling_of_Extra_Parameters.env_RestTemplate.cases;

import testcasesupport.IO;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URL;
import java.util.Arrays;

/*
 * @description 数据流source点通过私有静态常量的拷贝和concat方法拼接进行传递。
 *
 * @cwe 235
 * @bad bad
 * @tool fortify: HTTP Parameter Pollution;secbrella: SecS_HTTP_Parameter_Pollution
 * @author 董镇山 d00305016
 */
public class CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_137 {
    private static String dataCopy;
    String pre = "pre";


    public void bad() throws Throwable {
        {
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


            dataCopy = data;
        }
        {
            String data = pre.concat(dataCopy);

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
}
