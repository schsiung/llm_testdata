/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_engine.cases;

import javax.script.Bindings;
import javax.script.Compilable;
import javax.script.CompiledScript;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

/*
 * @description 数据流source点通过反射存储在类的成员变量中并且直接读取进行传递。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Code Manipulation;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_151 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Class cls = Class.forName("DynamicCodeEvaluation.CodeManipulation.CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_151.ReflectionClass");
        ReflectionClass reflectionClass = (ReflectionClass) cls.newInstance();
        reflectionClass.data = data;

        badSink(reflectionClass);
    }

    private void badSink(ReflectionClass reflectionClass) {
        String data = reflectionClass.data;


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

    static class ReflectionClass {
        private String data;
    }
}
