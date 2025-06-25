/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

/*
 * @description 将污染数据通过方法参数key以value的形式存入map，然后通过局部变量map和常量值key来获取value的方式传递的场景。
 *
 * @cwe 117
 * @bad bad
 * @good good
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_console__env_java_core_logging_logger_info_330 {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

    public void bad(String key) throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> mapSource = new HashMap<>();
        mapSource.put(key, data);
        sink(mapSource);
    }

    private void sink(Map<String, String> mapSink) {
        String data = mapSink.get("key1");
        /* POTENTIAL FLAW: log injection */
        LOGGER.info(data);

    }

    public void good(String key) throws Throwable {
        Map<String, String> mapSource = new HashMap<>();
        mapSource.put(key, "foo1");
        goodG2B(mapSource);
    }

    private void goodG2B(Map<String, String> mapSink) throws Throwable {
        String data = mapSink.get("key1");
        LOGGER.info(data);
    }

}
