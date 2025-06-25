/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import java.util.logging.Logger;

/*
 * @description 数据流source点通过同一个类中不同方法的参数传递。
 *
 * @cwe 117
 * @bad bad
 * @good good
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_console__env_java_core_logging_logger_info_41 {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

    private void badSink(String data) throws Throwable {
        /* POTENTIAL FLAW: log injection */
        LOGGER.info(data);

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
        LOGGER.info(data);
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        goodG2BSink(data);
    }
}
