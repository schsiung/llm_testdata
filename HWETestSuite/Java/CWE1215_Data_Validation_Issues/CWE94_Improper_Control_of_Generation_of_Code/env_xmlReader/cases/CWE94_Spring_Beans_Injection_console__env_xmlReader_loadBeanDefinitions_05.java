/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_xmlReader.cases;

import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.UrlResource;

import java.net.MalformedURLException;

/*
 * @description 含有if(常量布尔值)[if(privateTrue) and if(privateFalse)]判断的数据流传递过程，该成员变量没有声明成final，但是
 * 初始化后从未被赋值。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 董镇山 d00305016
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_05 {


    private boolean privateTrue = true;
    private boolean privateFalse = false;

    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;
        if (privateTrue) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
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

    private void goodG2B1() throws Throwable {
        String data;
        if (privateFalse) {
            data = null;
        } else {
            data = "foo";

        }


        try {
            GenericApplicationContext ctx = new GenericApplicationContext();
            XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
            xmlReader.loadBeanDefinitions(new UrlResource(data));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (privateTrue) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        try {
            GenericApplicationContext ctx = new GenericApplicationContext();
            XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
            xmlReader.loadBeanDefinitions(new UrlResource(data));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
