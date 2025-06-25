/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_URL.cases;


import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/*
 * @description 污染数据经过lambda表达式传递的场景。
 *
 * @cwe 311
 * @bad bad
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_console__env_URL_202 {

    private ScheduledExecutorService scheduledExecutorService = Executors.newSingleThreadScheduledExecutor();

    public void bad() {
        String data;
        data = ""; /* Initialize data */

        /* Read data with hardcode prefix http */
        data = "http:xxxxx";


        badSink(data);
    }

    private void badSink(String data) {
        scheduledExecutorService.scheduleAtFixedRate(() -> {
            try {

                URL url = null;
                try {
                    /* POTENTIAL FLAW: Insecure Transport */
                    url = new URL(data);
                } catch (MalformedURLException e) {
                    IO.writeLine(e.getMessage());
                }
                IO.writeLine(url.getPath());

            } catch (Exception e) {
                e.printStackTrace();
            }
        }, 5, 2, TimeUnit.SECONDS);
    }

}
