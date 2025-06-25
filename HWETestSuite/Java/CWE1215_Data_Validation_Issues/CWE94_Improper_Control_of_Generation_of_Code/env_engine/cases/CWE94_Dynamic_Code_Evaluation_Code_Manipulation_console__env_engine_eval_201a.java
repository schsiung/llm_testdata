/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_engine.cases;

import javax.script.*;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Code Manipulation;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("scala");
        Bindings bindings = engine.createBindings();
        try {
            CompiledScript script = ((Compilable) engine).compile("");

            bindings.put("data", data);
            /* POTENTIAL FLAW: Dynamic Code Evaluation Code Manipulation */
            script.eval(bindings);
        } catch (ScriptException e) {
            e.printStackTrace();
        }

    }

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_201b.validUntrustedInput(data);

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("scala");
        Bindings bindings = engine.createBindings();
        try {
            CompiledScript script = ((Compilable) engine).compile("");

            bindings.put("data", data);
            /* POTENTIAL FLAW: Dynamic Code Evaluation Code Manipulation */
            script.eval(bindings);
        } catch (ScriptException e) {
            e.printStackTrace();
        }

    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_201b.checkUntrustedInput(data);

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("scala");
        Bindings bindings = engine.createBindings();
        try {
            CompiledScript script = ((Compilable) engine).compile("");

            bindings.put("data", data);
            /* POTENTIAL FLAW: Dynamic Code Evaluation Code Manipulation */
            script.eval(bindings);
        } catch (ScriptException e) {
            e.printStackTrace();
        }

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
