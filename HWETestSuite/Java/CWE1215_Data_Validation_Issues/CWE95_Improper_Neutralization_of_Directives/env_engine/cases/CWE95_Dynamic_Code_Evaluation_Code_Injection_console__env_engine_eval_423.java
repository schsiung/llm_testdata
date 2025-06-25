/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_engine.cases;

import testcasesupport.IO;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.ArrayList;
import java.util.List;

/*
 * @description 封装source的对象在ArrayList中的stream流中调用lambda表达式传递的场景。
 *
 * @bad bad
 * @cwe 95
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_423 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<Model_423> list = new ArrayList<>();
        list.add(new Model_423(temp));
        list.add(new Model_423("data"));
        list.stream().map(s -> s.getData()).forEach(data -> {
            ScriptEngineManager manager = new ScriptEngineManager();
            ScriptEngine engine = manager.getEngineByName("javascript");
            try {
                /* POTENTIAL FLAW: Dynamic Code Evaluation: Code Injection */
                Object res = engine.eval(data);
            } catch (ScriptException e) {
                IO.writeLine(e.getMessage());
            }

        });
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

    class Model_423 {
        private String data;

        public Model_423(String data) {
            this.data = data;
        }

        public String getData() {
            return data;
        }
    }
}
