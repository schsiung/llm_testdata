/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_transformer.cases;

import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        try {
            ContentHandler contentHandler = new DefaultHandler();
            /* POTENTIAL FLAW: XML Injection */
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }


    }

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE91_XML_Injection_console__env_transformer_setOutputProperty_201b.validUntrustedInput(data);

        try {
            ContentHandler contentHandler = new DefaultHandler();
            /* POTENTIAL FLAW: XML Injection */
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }


    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE91_XML_Injection_console__env_transformer_setOutputProperty_201b.checkUntrustedInput(data);

        try {
            ContentHandler contentHandler = new DefaultHandler();
            /* POTENTIAL FLAW: XML Injection */
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }


    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
