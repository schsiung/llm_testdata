/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_transformer.cases;

import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/*
 * @description 含有if(静态不可变常量布尔值)[if(PRIVATE_STATIC_FINAL_TRUE) and if(PRIVATE_STATIC_FINAL_FALSE)]判断的数据流
 * 传递过程，其中静态常量以final修饰。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 董镇山 d00305016
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_04 {


    private static final boolean PRIVATE_STATIC_FINAL_TRUE = true;
    private static final boolean PRIVATE_STATIC_FINAL_FALSE = false;

    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_TRUE) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


        try {
            ContentHandler contentHandler = new DefaultHandler();
            /* POTENTIAL FLAW: XML Injection */
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }


    }

    private void goodG2B1() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_FALSE) {
            data = null;
        } else {
            data = "foo";

        }


        try {
            ContentHandler contentHandler = new DefaultHandler();
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_TRUE) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        try {
            ContentHandler contentHandler = new DefaultHandler();
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
