/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_java.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description 数据流source点产生，其被另一个文件的公有成员变量badPublicStatic控制。
 *
 * @cwe 117
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_22b {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    public String badSource() throws Throwable {
        String data;

        if (CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_22a.badPublicStatic) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }
        return data;
    }

    public String goodG2B1Source() throws Throwable {
        String data;

        if (CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_22a.goodG2B1PublicStatic) {
            data = null;
        } else {
            data = "foo";

        }

        return data;
    }

    public String goodG2B2Source() throws Throwable {
        String data;

        if (CWE117_Log_Forging_Debug_console__env_java_core_logging_logger_debug_22a.goodG2B2PublicStatic) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }

        return data;
    }
}
