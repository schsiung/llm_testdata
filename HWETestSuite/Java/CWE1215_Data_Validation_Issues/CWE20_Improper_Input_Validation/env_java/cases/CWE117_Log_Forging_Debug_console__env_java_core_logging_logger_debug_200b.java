/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description 接口。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 117
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 方健尔 f00563108
 */
public interface CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_200b {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");

    String CONTAMINANT = CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_200c.getBadSource();

    void bad() throws Throwable;
}
