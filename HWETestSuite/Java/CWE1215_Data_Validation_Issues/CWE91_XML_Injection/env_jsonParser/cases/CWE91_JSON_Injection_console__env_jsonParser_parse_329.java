/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_jsonParser.cases;

import com.google.gson.JsonParser;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据通过局部变量key以value的形式存入map，然后通过局部变量map和常量值key来获取value的方式传递的场景。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_JSON_Injection_console__env_jsonParser_parse_329 {


    public void bad() throws Throwable {
        String key = "key1";
        Map<String, String> mapSource = badSource(key);
        sink(mapSource);
    }

    private Map<String, String> badSource(String key) throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        map.put(key, data);
        return map;
    }

    private void sink(Map<String, String> mapSink) {
        String data = mapSink.get("key1");

        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL FLAW: JSON Injection */
        jsonParser.parse(data);

    }

    public void good() throws Throwable {
        String key = "key1";
        Map<String, String> mapSource = goodSource(key);
        goodG2B(mapSource);
    }

    private void goodG2B(Map<String, String> mapSink) throws Throwable {
        String data = mapSink.get("key1");

        JsonParser jsonParser = new JsonParser();
        jsonParser.parse(data);

    }

    private Map<String, String> goodSource(String key) throws Throwable {
        Map<String, String> map = new HashMap<>();
        map.put(key, "foo1");
        return map;
    }

}
