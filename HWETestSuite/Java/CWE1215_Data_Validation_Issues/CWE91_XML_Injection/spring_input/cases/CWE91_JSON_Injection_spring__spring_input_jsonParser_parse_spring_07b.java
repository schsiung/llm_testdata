/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.spring_input.cases;

import org.springframework.stereotype.Service;

/*
 * @description 接口实现。Spring通过@Autowired引入Bean，传递污染数据。
 *
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
@Service
public class CWE91_JSON_Injection_spring__spring_input_jsonParser_parse_spring_07b implements CWE91_JSON_Injection_spring__spring_input_jsonParser_parse_spring_07c {


    @Override
    public String badSource() {
        String contaminationData = "";
        String data = "";

        /* Read data from an environment variable */
        contaminationData = System.getenv("data");

        /* Manipulate data from spring input */
        {
            data = contaminationData.toLowerCase().trim();
            if (data.length() > 2) {
                data = data.substring(1);
            }
        }


        return data;
    }
}
