/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_engine.cases;

import testcasesupport.IO;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

/*
 * @description 数据流source点通过反射存储在类的成员变量中并且直接读取进行传递。
 *
 * @cwe 95
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_151 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Class cls = Class.forName("DynamicCodeEvaluation.CodeInjection.CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_151.ReflectionClass");
        ReflectionClass reflectionClass = (ReflectionClass) cls.newInstance();
        reflectionClass.data = data;

        badSink(reflectionClass);
    }

    private void badSink(ReflectionClass reflectionClass) {
        String data = reflectionClass.data;

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            /* POTENTIAL FLAW: Dynamic Code Evaluation: Code Injection */
            Object res = engine.eval(data);
        } catch (ScriptException e) {
            IO.writeLine(e.getMessage());
        }

    }

    static class ReflectionClass {
        private String data;
    }
}
