/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description 数据流source点通过私有成员变量经过内部类进行传递。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_144 {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    private String dataBad;

    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        this.dataBad = data;

        new InnerClass().badSink();
    }

    class InnerClass {
        private void badSink() throws Throwable {
            String data = CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_144.this.dataBad;

            /* POTENTIAL FLAW: log injection debug */
            LOGGER.debug(data);

        }
    }
}
