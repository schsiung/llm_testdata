/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description 通过函数式接口创建lambda表达式，直接调用方法返回。
 *
 * @bad bad
 * @cwe 117
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_401 {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        create().badSink(data);
    }

    public MyIntegerCalculator create() {
        return (data) -> {
            /* POTENTIAL FLAW: log injection debug */
            LOGGER.debug(data);

        };
    }

    public interface MyIntegerCalculator {
        void badSink(String s1);
    }
}
