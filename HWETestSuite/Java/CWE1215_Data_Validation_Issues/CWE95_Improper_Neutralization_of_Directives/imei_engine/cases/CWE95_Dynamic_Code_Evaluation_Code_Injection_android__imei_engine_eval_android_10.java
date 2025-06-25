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
 * @description Android污染数据和非污染数据存入array中，并通过常量值的数组下标进行污染数据访问爆发的场景。
 *
 * @bad bad
 * @good good
 * @cwe 95
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_android__imei_engine_eval_android_10 extends Activity {

    private static String[] arrayData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        source();

        bad();

        good();
    }

    private void bad() {
        String data = arrayData[1];
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            /* POTENTIAL TEMP FLAW: Dynamic Code Evaluation: Code Injection */
            Object res = engine.eval(data);
        } catch (ScriptException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void good() {
        String data = arrayData[2];
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            Object res = engine.eval(data);
        } catch (ScriptException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void source() {
        arrayData = new String[3];

        arrayData[0] = "element 1 is tainted:";

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        arrayData[1] = imei;

        arrayData[2] = "neutral text";
    }
}
