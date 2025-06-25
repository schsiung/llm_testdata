/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_transformer.cases;

import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/*
 * @description 数据流source点通过同一个方法中的局部变量拷贝传递。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 董镇山 d00305016
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_31 {


    public void bad() throws Throwable {
        String dataCopy;
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
            String data = dataCopy;


            try {
                ContentHandler contentHandler = new DefaultHandler();
                /* POTENTIAL FLAW: XML Injection */
                contentHandler.startPrefixMapping(data, "");
            } catch (SAXException e) {
                IO.writeLine(e.getMessage());
            }


        }
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String dataCopy;
        {
            String data;

            data = "foo";

            dataCopy = data;
        }
        {
            String data = dataCopy;


            try {
                ContentHandler contentHandler = new DefaultHandler();
                contentHandler.startPrefixMapping(data, "");
            } catch (SAXException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }
}
