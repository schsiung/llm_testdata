/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description 数据流source点通过同一个类中不同方法的参数传递。
 *
 * @cwe 117
 * @bad bad
 * @good good
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_41 {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    private void badSink(String data) throws Throwable {
        /* POTENTIAL FLAW: log injection debug */
        LOGGER.debug(data);

    }

    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        badSink(data);
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2BSink(String data) throws Throwable {
        LOGGER.debug(data);
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        goodG2BSink(data);
    }
}
