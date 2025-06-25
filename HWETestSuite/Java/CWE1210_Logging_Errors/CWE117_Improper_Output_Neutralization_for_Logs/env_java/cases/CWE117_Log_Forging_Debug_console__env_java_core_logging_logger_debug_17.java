/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description 含有for循环的数据流传递过程。
 *
 * @cwe 117
 * @bad bad
 * @good good
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_17 {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        for (int i = 0; i < 1; i++) {
            /* POTENTIAL FLAW: log injection debug */
            LOGGER.debug(data);

        }
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        for (int i = 0; i < 1; i++) {
            LOGGER.debug(data);
        }
    }

    private void goodB2G() throws Throwable {
        String data;

        data = "foo";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        for (int i = 1; i < 1; i++) {
            LOGGER.debug(data);
        }
    }

    public void good() throws Throwable {
        goodG2B();
        goodB2G();
    }
}
