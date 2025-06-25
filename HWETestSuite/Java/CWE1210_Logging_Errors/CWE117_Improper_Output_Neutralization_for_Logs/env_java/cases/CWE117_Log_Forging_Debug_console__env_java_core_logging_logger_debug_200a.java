/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_200a implements CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_200b {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {
        /* POTENTIAL FLAW: log injection debug */
        LOGGER.debug(data);

    }
}
