/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_jsonParser.cases;

import com.google.gson.JsonParser;

/*
 * @description 数据流source点通过方法的局部变量传入，显式抛出异常，并在异常处理块中爆发。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 董镇山 d00305016
 */
public class CWE91_JSON_Injection_console__env_jsonParser_parse_171 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);

            throw new RuntimeException();
        } catch (RuntimeException e) {
            badSink(data);
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    private void badSink(String data) {

        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL FLAW: JSON Injection */
        jsonParser.parse(data);

    }
}

