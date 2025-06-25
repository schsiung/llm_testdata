/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_transformer.cases;

import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/*
 * @description 污染数据经过lambda表达式传递的场景。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_202 {

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

                try {
                    ContentHandler contentHandler = new DefaultHandler();
                    /* POTENTIAL FLAW: XML Injection */
                    contentHandler.startPrefixMapping(data, "");
                } catch (SAXException e) {
                    IO.writeLine(e.getMessage());
                }


            } catch (Exception e) {
                e.printStackTrace();
            }
        }, 5, 2, TimeUnit.SECONDS);
    }

}
