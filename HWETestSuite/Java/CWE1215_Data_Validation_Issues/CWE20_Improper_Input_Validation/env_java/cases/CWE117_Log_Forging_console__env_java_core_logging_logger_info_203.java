/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_java.cases;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

/*
 * @description 污染数据在方法中产生，并且赋值给方法参数，当方法调用结束后，丢失污染数据的场景。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_console__env_java_core_logging_logger_info_203 {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

    public void bad() throws Throwable {
        List<String> dataList = new ArrayList<>();

        badSource(dataList);

        for (String data : dataList) {
            /* POTENTIAL FLAW: log injection */
            LOGGER.info(data);

        }
    }

    private void badSource(List<String> list) {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        String[] datas = {data, data, data};
        for (String str : datas) {
            list.add(str);
        }
    }
}
