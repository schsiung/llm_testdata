/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_xmlReader.cases;

import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.UrlResource;

import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据用map的replace(key, oldValue, newValue)方法以value的形式存入map，然后通过迭代器遍历value的方式来传递的场景。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 方健尔 f00563108
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_323 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.values()) {

            try {
                GenericApplicationContext ctx = new GenericApplicationContext();
                XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
                /* POTENTIAL FLAW: Spring Beans Injection */
                xmlReader.loadBeanDefinitions(new UrlResource(data));
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }

        }
    }

    private Map<String, String> badSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        map.put("key1", "value1");
        map.put("key2", "value2");
        map.replace("key1", "value1", data);
        return map;
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        Map<String, String> mapSource = goodSource();
        for (String data : mapSource.values()) {

            try {
                GenericApplicationContext ctx = new GenericApplicationContext();
                XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
                xmlReader.loadBeanDefinitions(new UrlResource(data));
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }

        }
    }

    private Map<String, String> goodSource() throws Throwable {
        Map<String, String> map = new HashMap<>();
        map.put("key1", "foo1");
        map.put("key2", "foo2");
        map.replace("key1", "foo1", "foo3");
        return map;
    }
}
