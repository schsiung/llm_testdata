/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_transformer.cases;

import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import java.util.function.Function;

/*
 * @description 使用双冒号调用本类的泛型方法初始化lambda表达式。
 *
 * @bad bad
 * @cwe 91
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_416 {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        Function<String, String> sc1 = CWE91_XML_Injection_console__env_transformer_setOutputProperty_416::cp;
        String temp1 = sc1.apply(data);
        badSink(temp1);

        Function<Integer, Integer> sc2 = CWE91_XML_Injection_console__env_transformer_setOutputProperty_416::cp;
        Integer temp2 = sc2.apply(Integer.valueOf(data));
        badSink(String.valueOf(temp2));
    }

    public void badSink(String data) {

        try {
            ContentHandler contentHandler = new DefaultHandler();
            /* POTENTIAL FLAW: XML Injection */
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }


    }

    public static <T> T cp(T s1) {
        return s1;
    }
}
