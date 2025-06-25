/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_engine.cases;

import testcasesupport.IO;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入map，然后通过获取key所对应的value来传递的场景。
 *
 * @cwe 95
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_320 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badGoodSource();
        String data = mapSource.get("key1");

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            /* POTENTIAL FLAW: Dynamic Code Evaluation: Code Injection */
            Object res = engine.eval(data);
        } catch (ScriptException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private Map<String, String> badGoodSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        map.put("key1", data);
        map.put("key2", "foo");
        return map;
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        Map<String, String> mapSource = badGoodSource();
        String data = mapSource.get("key2");

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            Object res = engine.eval(data);
        } catch (ScriptException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
