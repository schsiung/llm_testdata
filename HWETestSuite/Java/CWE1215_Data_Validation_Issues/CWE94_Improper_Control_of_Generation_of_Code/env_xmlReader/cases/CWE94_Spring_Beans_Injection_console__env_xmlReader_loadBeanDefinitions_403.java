/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_xmlReader.cases;

import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.UrlResource;

import java.net.MalformedURLException;

/*
 * @description 通过强转类型创建lambda表达式。
 *
 * @bad bad
 * @cwe 94
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 方健尔 f00563108
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_403 {


    public void bad() throws Throwable {
        String temp = badSource();

        badSink((MyStringCalculator) (data) -> {

            try {
                GenericApplicationContext ctx = new GenericApplicationContext();
                XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
                /* POTENTIAL FLAW: Spring Beans Injection */
                xmlReader.loadBeanDefinitions(new UrlResource(data));
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }

        }, temp);
    }

    public void badSink(MyIntegerCalculator integerCalculator, String data) {
        integerCalculator.badSink(Integer.valueOf(data));
    }

    public void badSink(MyStringCalculator stringCalculator, String data) {
        stringCalculator.badSink(data);
    }

    public interface MyIntegerCalculator {
        void badSink(Integer s1);
    }

    public interface MyStringCalculator {
        void badSink(String s1);
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
