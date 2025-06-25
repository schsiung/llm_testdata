/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以key的形式存入map，然后通过迭代器遍历key的方式来传递的场景。
 *
 * @cwe 114
 * @bad bad
 * @good good
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_console__env_Runtime_load_322 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.keySet()) {

            /* POTENTIAL FLAW: Process Control */
            java.lang.Runtime.getRuntime().load(data);

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
        map.put(data, "value1");
        map.put("key2", "value2");
        return map;
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        Map<String, String> mapSource = goodSource();
        for (String data : mapSource.keySet()) {

            java.lang.Runtime.getRuntime().load(data);

        }
    }

    private Map<String, String> goodSource() throws Throwable {
        Map<String, String> map = new HashMap<>();
        map.put("key1", "foo1");
        map.put("key2", "foo2");
        map.put("key3", "foo3");
        return map;
    }
}
