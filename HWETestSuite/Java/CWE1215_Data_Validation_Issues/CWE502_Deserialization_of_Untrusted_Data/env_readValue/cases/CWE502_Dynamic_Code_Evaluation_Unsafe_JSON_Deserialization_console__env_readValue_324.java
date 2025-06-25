/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_readValue.cases;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import testcasesupport.IO;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据用map的replace(key, value)方法以value的形式存入map，然后通过迭代器遍历value的方式来传递的场景。
 *
 * @cwe 502
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Unsafe JSON Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE502_Dynamic_Code_Evaluation_Unsafe_JSON_Deserialization_console__env_readValue_324 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.values()) {

            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.enableDefaultTyping();

            try {
                /* POTENTIAL FLAW: Dynamic Code Evaluation Unsafe JSON Deserialization */
                objectMapper.readValue(data, String.class);
            } catch (JsonProcessingException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }

    private Map<String, String> badSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        map.put("key1", "value1");
        map.put("key2", "value2");
        map.replace("key1", data);
        return map;
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        Map<String, String> mapSource = goodSource();
        for (String data : mapSource.values()) {

            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.enableDefaultTyping();
            try {
                objectMapper.readValue(data, String.class);
            } catch (JsonProcessingException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }

    private Map<String, String> goodSource() throws Throwable {
        Map<String, String> map = new HashMap<>();
        map.put("key1", "foo1");
        map.put("key2", "foo2");
        map.replace("key1", "foo3");
        return map;
    }
}
