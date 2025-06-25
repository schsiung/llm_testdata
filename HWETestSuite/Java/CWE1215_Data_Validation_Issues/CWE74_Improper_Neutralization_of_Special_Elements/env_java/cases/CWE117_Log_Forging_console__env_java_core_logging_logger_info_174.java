/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_java.cases;

import java.util.logging.Logger;

/*
 * @description 数据流source点通过方法的局部变量传入，通过异常进行传递。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_console__env_java_core_logging_logger_info_174 {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);

            throw new RuntimeException(data);
        } catch (RuntimeException e) {
            badSink(e.getMessage());
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        return data;
    }

    private void badSink(String data) {
        /* POTENTIAL FLAW: log injection */
        LOGGER.info(data);

    }

}

