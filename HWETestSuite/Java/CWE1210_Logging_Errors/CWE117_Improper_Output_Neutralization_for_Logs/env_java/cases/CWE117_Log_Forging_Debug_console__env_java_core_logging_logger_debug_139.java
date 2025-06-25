/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description 数据流source点通过私有静态常量的拷贝和字符串toString方法进行传递。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_139 {
    private static String dataCopy;
    String pre = "pre";
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


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
            String data = dataCopy.toString();

            /* POTENTIAL FLAW: log injection debug */
            LOGGER.debug(data);

        }
    }
}
