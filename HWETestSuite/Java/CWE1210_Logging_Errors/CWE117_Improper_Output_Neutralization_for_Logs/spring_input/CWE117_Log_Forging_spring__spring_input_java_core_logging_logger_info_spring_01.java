/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.spring_input;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

/*
 * @description Spring最简单的@Requestmapping注解方法String入参作为污染数据。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 方健尔 f00563108
 */
@RestController
@RequestMapping("/sample")
public class CWE117_Log_Forging_spring__spring_input_java_core_logging_logger_info_spring_01 {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

    @RequestMapping("/bad")
    public String bad(String contaminationData) {
        this.badSourceSink(contaminationData);

        return "success";
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


        /* POTENTIAL FLAW: log injection */
        LOGGER.info(data);

    }
}
