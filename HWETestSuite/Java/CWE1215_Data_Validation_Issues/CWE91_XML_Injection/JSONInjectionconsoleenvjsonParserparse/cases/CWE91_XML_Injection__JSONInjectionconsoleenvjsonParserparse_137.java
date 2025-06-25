/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionconsoleenvjsonParserparse.cases;

import com.google.gson.JsonParser;

/*
 * @description 数据流source点通过私有静态常量的拷贝和concat方法拼接进行传递。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 董镇山 d00305016
 */
public class CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_137 {
    private static String dataCopy;
    String pre = "pre";


    public void bad() throws Throwable {
        {
            String data;

            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }


            dataCopy = data;
        }
        {
            String data = pre.concat(dataCopy);


            JsonParser jsonParser = new JsonParser();
            /* POTENTIAL FLAW: JSON Injection */
            jsonParser.parse(data);

        }
    }
}
