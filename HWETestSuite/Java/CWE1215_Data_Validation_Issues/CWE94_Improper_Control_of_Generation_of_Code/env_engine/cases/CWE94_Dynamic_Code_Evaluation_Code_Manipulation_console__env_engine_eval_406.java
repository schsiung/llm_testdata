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
import java.util.function.Function;

/*
 * @description 先调用lambda表达式的andThen然后再调用apply传递的场景。
 *
 * @bad bad
 * @cwe 94
 * @tool fortify: Dynamic Code Evaluation: Code Manipulation;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_406 {


    public void bad() throws Throwable {
        String temp = badSource();
        System.setProperty("data", temp);
        Function<String, String> sc1 = s1 -> System.getProperty(s1);

        Function<String, Boolean> sc2 = data -> {

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

            return true;
        };

        sc1.andThen(sc2).apply("data");
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
