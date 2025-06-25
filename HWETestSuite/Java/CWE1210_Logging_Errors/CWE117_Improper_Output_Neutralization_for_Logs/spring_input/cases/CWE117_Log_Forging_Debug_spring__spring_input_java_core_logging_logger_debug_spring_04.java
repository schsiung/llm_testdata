/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.spring_input.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

/*
 * @description Spring注解@Value读取污染数据，污染数据解析成String进行传递。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_Debug_spring__spring_input_java_core_logging_logger_debug_spring_04 {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    /* 通过@Value注解来读取污染数据 */
    @Value("${password}")
    private String value;

    private void bad() {
        this.badSourceSink(value);
    }

    private void badSourceSink(String contaminationData) {
        String data;

        data = ""; /* Initialize data */

        /* Manipulate data from spring input */
        {
            data = contaminationData.toLowerCase().trim();
            if (data.length() > 2) {
                data = data.substring(1);
            }
        }


        /* POTENTIAL FLAW: log injection debug */
        LOGGER.debug(data);

    }
}
