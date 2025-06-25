/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_xmlReader;

import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.UrlResource;

import java.net.MalformedURLException;

/*
 * @description 最简单的数据流传递过程。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 董镇山 d00305016
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_01 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        try {
            GenericApplicationContext ctx = new GenericApplicationContext();
            XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
            /* POTENTIAL FLAW: Spring Beans Injection */
            xmlReader.loadBeanDefinitions(new UrlResource(data));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";


        try {
            GenericApplicationContext ctx = new GenericApplicationContext();
            XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
            xmlReader.loadBeanDefinitions(new UrlResource(data));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }
}

