/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.spring_input;

import com.google.gson.JsonParser;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * @description Spring最简单的@Requestmapping注解方法String入参作为污染数据。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
@RestController
@RequestMapping("/sample")
public class CWE91_JSON_Injection_spring__spring_input_jsonParser_parse_spring_01 {


    @RequestMapping("/bad")
    public String bad(String contaminationData) {
        this.badSourceSink(contaminationData);

        return "success";
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


        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL FLAW: JSON Injection */
        jsonParser.parse(data);

    }
}
