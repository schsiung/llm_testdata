/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionconsoleenvjsonParserparse.cases;

import com.google.gson.JsonParser;

/*
 * @description 含有while(布尔值)[while(true)]循环的数据流传递过程。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 董镇山 d00305016
 */
public class CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_16 {


    public void bad() throws Throwable {
        String data;

        while (true) {
            data = ""; /* Initialize data */
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            break;
        }


        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL FLAW: JSON Injection */
        jsonParser.parse(data);

    }

    private void goodG2B1() throws Throwable {
        String data;

        while (true) {
            data = "foo";
            break;
        }


        JsonParser jsonParser = new JsonParser();
        jsonParser.parse(data);

    }

    public void good() throws Throwable {
        goodG2B1();
    }
}
