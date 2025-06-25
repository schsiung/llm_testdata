/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.imei_transformer.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/*
 * @description Android污染数据直接从清单的实例中产生并爆发的场景。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_android__imei_transformer_setOutputProperty_android_03 extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        bad();
    }

    class A {
        public String b = "Y";
    }

    class B {
        public A attr;
    }

    private void bad() {
        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        A b, q, y;
        B a, p, x;

        a = new B();
        p = new B();

        b = new A();
        q = new A();

        if (Math.random() < 0.5) {
            x = a;
            y = b;
        } else {
            x = p;
            y = q;
        }

        x.attr = y;
        q.b = imei;

        sink(a.attr.b);
    }

    private void sink(String data) {

        try {
            ContentHandler contentHandler = new DefaultHandler();
            /* POTENTIAL TEMP FLAW: XML Injection */
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }


    }
}
