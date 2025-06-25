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
 * @description 含有if(其它类的静态布尔常量)[if(IO.STATIC_FINAL_TRUE) and if(IO.STATIC_FINAL_FALSE)]判断的数据流传递过程，静态
 * 布尔常量以final修饰。
 *
 * @cwe 235
 * @bad bad
 * @good good
 * @tool fortify: HTTP Parameter Pollution;secbrella: SecS_HTTP_Parameter_Pollution
 * @author 董镇山 d00305016
 */
public class CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_09 {


    public void bad() throws Throwable {
        String data;
        if (IO.STATIC_FINAL_TRUE) {
            data = ""; /* Initialize data */

            /* Read data from an environment variable */
            try {
                URL url = new URL("ssss");
                Object content = url.getContent();
                data = (String) content;
            } catch (IOException e) {
                System.out.println(e.getMessage());
            }

        } else {
            data = null;
        }

        final String uri = "http://localhost:8080/springrestexample/employees";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

        /* POTENTIAL FLAW: HTTP Parameter Pollution */
        ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class, data);

        IO.writeLine(result.getStatusCodeValue());

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (IO.STATIC_FINAL_FALSE) {
            data = null;
        } else {
            data = "foo";

        }

        final String uri = "http://localhost:8080/springrestexample/employees";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

        ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class, data);

        IO.writeLine(result.getStatusCodeValue());

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (IO.STATIC_FINAL_TRUE) {
            data = "foo";
        } else {
            data = null;
            /* Read data from an environment variable */
            try {
                URL url = new URL("ssss");
                Object content = url.getContent();
                data = (String) content;
            } catch (IOException e) {
                System.out.println(e.getMessage());
            }

        }

        final String uri = "http://localhost:8080/springrestexample/employees";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

        ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class, data);

        IO.writeLine(result.getStatusCodeValue());

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
