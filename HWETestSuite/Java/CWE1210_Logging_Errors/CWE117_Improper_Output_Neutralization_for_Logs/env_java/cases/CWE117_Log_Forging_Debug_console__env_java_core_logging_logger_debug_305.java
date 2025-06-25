/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @Description 污染数据传播链包括了数字操作符。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 张自强 z30004299
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_305 {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);
            data = (Long.parseLong(data) & 0xffL) + "";
        } catch (Exception e) {
            badSink(data);
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    private void badSink(String data) throws Throwable {
        /* POTENTIAL FLAW: log injection debug */
        LOGGER.debug(data);

    }
}

