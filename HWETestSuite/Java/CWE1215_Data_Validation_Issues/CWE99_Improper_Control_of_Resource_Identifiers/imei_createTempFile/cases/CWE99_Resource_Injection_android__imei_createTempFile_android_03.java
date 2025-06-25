/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE99_Improper_Control_of_Resource_Identifiers.imei_createTempFile.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/*
 * @description Android污染数据直接从清单的实例中产生并爆发的场景。
 *
 * @cwe 99
 * @bad bad
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 方健尔 f00563108
 */
public class CWE99_Resource_Injection_android__imei_createTempFile_android_03 extends Activity {

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
            /* POTENTIAL TEMP FLAW: Resource Injection */
            Path path = Files.createTempFile(data, ".tpl");

            IO.writeLine(path.getNameCount());

        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
