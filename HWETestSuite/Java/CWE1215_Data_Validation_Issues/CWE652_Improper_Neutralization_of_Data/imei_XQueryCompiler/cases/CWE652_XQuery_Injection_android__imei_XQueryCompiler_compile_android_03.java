/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.imei_XQueryCompiler.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XQueryCompiler;

/*
 * @description Android污染数据直接从清单的实例中产生并爆发的场景。
 *
 * @cwe 652
 * @bad bad
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 方健尔 f00563108
 */
public class CWE652_XQuery_Injection_android__imei_XQueryCompiler_compile_android_03 extends Activity {

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
        Processor proc = new Processor(false);
        XQueryCompiler comp = proc.newXQueryCompiler();
        try {
            /* POTENTIAL TEMP FLAW: XQuery Injection */
            comp.compile(data);
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
