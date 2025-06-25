/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_jsonParser.cases;

import com.google.gson.JsonParser;

/*
 * @Description 污染数据通过一个方法产生，在同一个方法内爆发，控制产生和爆发的是一个布尔变量。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_JSON_Injection_console__env_jsonParser_parse_303 {

    public void bad() throws Throwable {
        Contaminant contaminant = new Contaminant();
        // data变成污染数据
        badSink(contaminant, false);

        // data传入，并爆发
        badSink(contaminant, true);
    }

    private void badSink(Contaminant contaminant, boolean status) throws Throwable {
        if (status) {
            String data = contaminant.data;

            JsonParser jsonParser = new JsonParser();
            /* POTENTIAL FLAW: JSON Injection */
            jsonParser.parse(data);

        } else {
            String data = "";
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            contaminant.data = data;
        }
    }

    private class Contaminant {
        public String data;
    }
}
