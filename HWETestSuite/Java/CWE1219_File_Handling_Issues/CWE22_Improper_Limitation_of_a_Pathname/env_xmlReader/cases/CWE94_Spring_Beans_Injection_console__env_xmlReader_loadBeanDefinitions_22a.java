/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_xmlReader.cases;

import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.UrlResource;

import java.net.MalformedURLException;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 董镇山 d00305016
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_22b()).badSource();


        try {
            GenericApplicationContext ctx = new GenericApplicationContext();
            XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
            /* POTENTIAL FLAW: Spring Beans Injection */
            xmlReader.loadBeanDefinitions(new UrlResource(data));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }

    public static boolean goodG2B1PublicStatic = false;
    public static boolean goodG2B2PublicStatic = false;

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        goodG2B1PublicStatic = false;
        data = (new CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_22b()).goodG2B1Source();


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

        goodG2B2PublicStatic = true;
        data = (new CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_22b()).goodG2B2Source();


        try {
            GenericApplicationContext ctx = new GenericApplicationContext();
            XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
            xmlReader.loadBeanDefinitions(new UrlResource(data));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }
}
