/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以key的形式存入map，然后通过迭代器遍历key的方式来传递的场景。
 *
 * @cwe 117
 * @bad bad
 * @good good
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_322 {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.keySet()) {
            /* POTENTIAL FLAW: log injection debug */
            LOGGER.debug(data);

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
            LOGGER.debug(data);
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
