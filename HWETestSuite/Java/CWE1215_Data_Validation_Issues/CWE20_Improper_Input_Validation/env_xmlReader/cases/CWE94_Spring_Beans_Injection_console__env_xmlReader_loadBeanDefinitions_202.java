/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_xmlReader.cases;

import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.UrlResource;

import java.net.MalformedURLException;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/*
 * @description 污染数据经过lambda表达式传递的场景。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 方健尔 f00563108
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_202 {

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
                    GenericApplicationContext ctx = new GenericApplicationContext();
                    XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
                    /* POTENTIAL FLAW: Spring Beans Injection */
                    xmlReader.loadBeanDefinitions(new UrlResource(data));
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }, 5, 2, TimeUnit.SECONDS);
    }

}
