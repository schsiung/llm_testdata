/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_engine.cases;

import testcasesupport.IO;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.security.AccessController;
import java.security.PrivilegedAction;

/*
 * @description 污染数据从覆写了PrivilegedAction<T>的run方法中传递，当调用了doPrivilege方法时缺失了该污染数据。
 *
 * @cwe 95
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_204 {


    public void bad() throws Throwable {
        final String data = badSource();

        /* local inner class */
        class MyPrivilegedAction implements PrivilegedAction<String> {
            @Override
            public String run() {
                try {
                    ScriptEngineManager manager = new ScriptEngineManager();
                    ScriptEngine engine = manager.getEngineByName("javascript");
                    try {
                        /* POTENTIAL FLAW: Dynamic Code Evaluation: Code Injection */
                        Object res = engine.eval(data);
                    } catch (ScriptException e) {
                        IO.writeLine(e.getMessage());
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                }
                return "loader";
            }
        }
        String str = AccessController.doPrivileged(new MyPrivilegedAction());
    }

    private String badSource() {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
