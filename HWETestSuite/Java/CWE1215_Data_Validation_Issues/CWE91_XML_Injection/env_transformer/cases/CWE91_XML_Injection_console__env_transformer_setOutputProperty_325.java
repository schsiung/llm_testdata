/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_transformer.cases;

import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import javax.faces.el.PropertyResolver;
import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据用特殊函数propertyResolver.setValue(map, key, value)的方式存入map，然后通过迭代器遍历value的方式来传递的场景。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_325 {


    public void bad(PropertyResolver propertyResolver) throws Throwable {
        Map<String, String> mapSource = badSource(propertyResolver);
        for (String data : mapSource.values()) {

            try {
                ContentHandler contentHandler = new DefaultHandler();
                /* POTENTIAL FLAW: XML Injection */
                contentHandler.startPrefixMapping(data, "");
            } catch (SAXException e) {
                IO.writeLine(e.getMessage());
            }


        }
    }

    private Map<String, String> badSource(PropertyResolver propertyResolver) throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        propertyResolver.setValue(map, "key1", data);
        propertyResolver.setValue(map, "key2", "value2");
        return map;
    }

    public void good(PropertyResolver propertyResolver) throws Throwable {
        goodG2B(propertyResolver);
    }

    private void goodG2B(PropertyResolver propertyResolver) throws Throwable {
        Map<String, String> mapSource = goodSource(propertyResolver);
        for (String data : mapSource.values()) {

            try {
                ContentHandler contentHandler = new DefaultHandler();
                contentHandler.startPrefixMapping(data, "");
            } catch (SAXException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }

    private Map<String, String> goodSource(PropertyResolver propertyResolver) throws Throwable {
        Map<String, String> map = new HashMap<>();
        propertyResolver.setValue(map, "key1", "value1");
        propertyResolver.setValue(map, "key2", "value2");
        return map;
    }
}
