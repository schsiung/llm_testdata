/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_transformer.cases;

import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/*
 * @description 数据流source点通过私有静态常量的拷贝和字符串的+运算拼接进行传递。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 董镇山 d00305016
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_138 {
    private static String dataCopy;
    String pre = "pre";


    public void bad() throws Throwable {
        {
            String data;

            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }


            dataCopy = data;
        }
        {
            String data = pre + dataCopy;


            try {
                ContentHandler contentHandler = new DefaultHandler();
                /* POTENTIAL FLAW: XML Injection */
                contentHandler.startPrefixMapping(data, "");
            } catch (SAXException e) {
                IO.writeLine(e.getMessage());
            }


        }
    }
}
