/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

/*
 * @description 污染数据经过一个类中某个静态方法调用，而该类中还有其他静态方法被调用，将导致告警增多的场景。
 *
 * @cwe 117
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_console__env_java_core_logging_logger_info_309c {

    public static String source() {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        return data;
    }
}

