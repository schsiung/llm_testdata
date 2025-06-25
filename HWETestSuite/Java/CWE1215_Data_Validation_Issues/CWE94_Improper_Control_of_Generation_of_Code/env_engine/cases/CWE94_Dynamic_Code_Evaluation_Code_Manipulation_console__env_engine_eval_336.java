/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_engine.cases;

import javax.script.*;
import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入全局静态变量map中，然后通过获取key所对应的value来传递的场景，其中put和get在同一个方法中，不存在callFlow分析。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Code Manipulation;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_336 {

    private static Map<String, String> mapSource = new HashMap<>();

    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        mapSource.put("key1", data);

        data = mapSource.get("key1");

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

    public void good() throws Throwable {
        String dataSource = "foo";
        mapSource.put("key2", dataSource);
        String data = mapSource.get("key2");

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("scala");
        Bindings bindings = engine.createBindings();
        try {
            CompiledScript script = ((Compilable) engine).compile("");

            bindings.put("data", data);
            script.eval(bindings);
        } catch (ScriptException e) {
            e.printStackTrace();
        }

    }
}
