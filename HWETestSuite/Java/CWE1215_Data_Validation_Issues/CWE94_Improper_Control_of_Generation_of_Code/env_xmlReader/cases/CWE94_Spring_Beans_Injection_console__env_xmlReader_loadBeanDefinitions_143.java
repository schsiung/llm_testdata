/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_xmlReader.cases;

import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.UrlResource;

import java.net.MalformedURLException;

/*
 * @description 数据流source点通过公有的实例get方法和set方法进行传递。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 董镇山 d00305016
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_143 {


    private String dataBad;

    private void badSink() throws Throwable {
        String data = getBadData();


        try {
            GenericApplicationContext ctx = new GenericApplicationContext();
            XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
            /* POTENTIAL FLAW: Spring Beans Injection */
            xmlReader.loadBeanDefinitions(new UrlResource(data));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }

    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        this.setBadData(data);

        badSink();
    }

    public String getBadData() {
        return this.dataBad;
    }

    public void setBadData(String dataBad) {
        this.dataBad = dataBad;
    }
}
