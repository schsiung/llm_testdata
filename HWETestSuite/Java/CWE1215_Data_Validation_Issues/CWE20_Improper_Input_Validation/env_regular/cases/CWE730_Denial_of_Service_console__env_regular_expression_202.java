/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_regular.cases;

import testcasesupport.IO;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/*
 * @description 污染数据经过lambda表达式传递的场景。
 *
 * @cwe 730
 * @bad bad
 * @tool fortify:Denial of Service: Regular Expression;secbrella: SecS_Denial_of_Service;secbrella: Regex_Injection;
 * @author 方健尔 f00563108
 */
public class CWE730_Denial_of_Service_console__env_regular_expression_202 {

    private ScheduledExecutorService scheduledExecutorService = Executors.newSingleThreadScheduledExecutor();

    public void bad() {
        String data;
        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        badSink(data);
    }

    private void badSink(String data) {
        scheduledExecutorService.scheduleAtFixedRate(() -> {
            try {
                /* POTENTIAL FLAW:Denial of Service: Regular Expression */
                if ("taint".matches(data)) {
                    IO.writeLine(data);
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }, 5, 2, TimeUnit.SECONDS);
    }

}
