/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_transformer.cases;

import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入全局变量map中，然后通过获取key所对应的value来传递的场景。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_331 {

    private Map<String, String> mapSource = new HashMap<>();

    public void bad() throws Throwable {
        badSource();
        String data = mapSource.get("key1");


        try {
            ContentHandler contentHandler = new DefaultHandler();
            /* POTENTIAL FLAW: XML Injection */
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }


    }

    private void badSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        mapSource.put("key1", data);
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        goodSource();
        String data = mapSource.get("key2");


        try {
            ContentHandler contentHandler = new DefaultHandler();
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodSource() throws Throwable {
        mapSource.put("key2", "foo");
    }
}
