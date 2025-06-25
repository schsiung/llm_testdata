/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_engine.cases;

import testcasesupport.IO;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.concurrent.Callable;

/*
 * @description 辅助类覆写Callable接口的call()方法。
 *
 * @cwe 95
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_186b implements Callable<Object> {

    private String data;

    public CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_186b(String data) {
        this.data = data;
    }

    @Override
    public Object call() throws Exception {
        try {
            badSink(this.data);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private void badSink(String data) {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            /* POTENTIAL FLAW: Dynamic Code Evaluation: Code Injection */
            Object res = engine.eval(data);
        } catch (ScriptException e) {
            IO.writeLine(e.getMessage());
        }

    }
}

