/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_jsonParser.cases;

import com.google.gson.JsonParser;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入map，然后通过获取key所对应的value来传递的场景。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_JSON_Injection_console__env_jsonParser_parse_320 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badGoodSource();
        String data = mapSource.get("key1");


        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL FLAW: JSON Injection */
        jsonParser.parse(data);

    }

    private Map<String, String> badGoodSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        map.put("key1", data);
        map.put("key2", "foo");
        return map;
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        Map<String, String> mapSource = badGoodSource();
        String data = mapSource.get("key2");


        JsonParser jsonParser = new JsonParser();
        jsonParser.parse(data);

    }
}
