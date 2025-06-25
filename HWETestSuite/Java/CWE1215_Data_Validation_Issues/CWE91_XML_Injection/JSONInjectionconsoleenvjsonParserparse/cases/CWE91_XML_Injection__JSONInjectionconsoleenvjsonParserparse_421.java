/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionconsoleenvjsonParserparse.cases;

import com.google.gson.JsonParser;

import java.util.ArrayList;
import java.util.List;

/*
 * @description 在ArrayList中的forEach方法中调用lambda表达式。
 *
 * @bad bad
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_421 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.forEach(data -> {

            JsonParser jsonParser = new JsonParser();
            /* POTENTIAL FLAW: JSON Injection */
            jsonParser.parse(data);

        });
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
