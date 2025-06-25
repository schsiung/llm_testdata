/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.imei_engine.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

/*
 * @description Android污染数据直接从清单的实例中产生并爆发的场景。
 *
 * @cwe 95
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_android__imei_engine_eval_android_03 extends Activity {

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
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            /* POTENTIAL TEMP FLAW: Dynamic Code Evaluation: Code Injection */
            Object res = engine.eval(data);
        } catch (ScriptException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
