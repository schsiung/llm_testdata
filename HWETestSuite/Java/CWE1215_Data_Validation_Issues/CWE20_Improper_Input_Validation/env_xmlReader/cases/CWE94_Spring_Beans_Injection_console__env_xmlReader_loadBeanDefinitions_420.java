/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_xmlReader.cases;

import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.UrlResource;

import java.net.MalformedURLException;
import java.util.function.Consumer;

/*
 * @description 调用Consumer类型lambda表达式的accept()方法传递的场景。
 *
 * @bad bad
 * @cwe 94
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 方健尔 f00563108
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_420 {


    public void bad() throws Throwable {
        String temp = badSource();
        Consumer<String> consumer = data -> {

            try {
                GenericApplicationContext ctx = new GenericApplicationContext();
                XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
                /* POTENTIAL FLAW: Spring Beans Injection */
                xmlReader.loadBeanDefinitions(new UrlResource(data));
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }

        };
        consumer.accept(temp);
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
