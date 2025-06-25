/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description 含有if(语句是否成立)[if(5==5) and if(5!=5)]判断的数据流传递过程。
 *
 * @cwe 117
 * @bad bad
 * @good good
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_03 {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    public void bad() throws Throwable {
        String data;
        if (5 == 5) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }

        /* POTENTIAL FLAW: log injection debug */
        LOGGER.debug(data);

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (5 != 5) {
            data = null;
        } else {
            data = "foo";

        }

        LOGGER.debug(data);
    }

    private void goodG2B2() throws Throwable {
        String data;
        if (5 == 5) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }

        LOGGER.debug(data);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
