/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_transformer.cases;

import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/*
 * @description 数据流sink点爆发方法，其中的source点通过同一包下五个不同类的方法的参数传递。
 *
 * @cwe 91
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 董镇山 d00305016
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_54e {


    public void badSink(String data) throws Throwable {

        try {
            ContentHandler contentHandler = new DefaultHandler();
            /* POTENTIAL FLAW: XML Injection */
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }


    }

    public void goodG2BSink(String data) throws Throwable {

        try {
            ContentHandler contentHandler = new DefaultHandler();
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
