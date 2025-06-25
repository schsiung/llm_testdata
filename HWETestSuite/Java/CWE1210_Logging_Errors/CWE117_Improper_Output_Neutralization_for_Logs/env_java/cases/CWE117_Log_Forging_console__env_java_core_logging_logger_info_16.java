/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import java.util.logging.Logger;

/*
 * @description 含有while(布尔值)[while(true)]循环的数据流传递过程。
 *
 * @cwe 117
 * @bad bad
 * @good good
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_console__env_java_core_logging_logger_info_16 {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

    public void bad() throws Throwable {
        String data;

        while (true) {
            data = ""; /* Initialize data */
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            break;
        }

        /* POTENTIAL FLAW: log injection */
        LOGGER.info(data);

    }

    private void goodG2B1() throws Throwable {
        String data;

        while (true) {
            data = "foo";
            break;
        }

        LOGGER.info(data);
    }

    public void good() throws Throwable {
        goodG2B1();
    }
}
