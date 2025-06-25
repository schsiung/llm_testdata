/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.imei_engine;

import android.app.Activity;
import android.os.Bundle;

import javax.script.Bindings;
import javax.script.Compilable;
import javax.script.CompiledScript;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Code Manipulation;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_Dynamic_Code_Evaluation_Code_Manipulation_android__imei_engine_eval_android_01a extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String data = ((CWE94_Dynamic_Code_Evaluation_Code_Manipulation_android__imei_engine_eval_android_01c) getApplication()).imei;


        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("scala");
        Bindings bindings = engine.createBindings();
        try {
            CompiledScript script = ((Compilable) engine).compile("");

            bindings.put("data", data);
            /* POTENTIAL TEMP FLAW: Dynamic Code Evaluation Code Manipulation */
            script.eval(bindings);
        } catch (ScriptException e) {
            e.printStackTrace();
        }

    }
}
