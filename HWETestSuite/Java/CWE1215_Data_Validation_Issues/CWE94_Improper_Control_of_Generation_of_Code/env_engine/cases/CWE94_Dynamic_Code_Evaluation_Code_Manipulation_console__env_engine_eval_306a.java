/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_engine.cases;

import javax.script.*;

/*
 * @Description 污染数据通过构造器的参数进行传递。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Code Manipulation;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306a {

    public CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306b model;

    public CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306a() {
    }

    public CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306a(CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306b model) {
        this.model = new CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306b();
        // 污染源
        this.model.userPassWord = badSource();
    }

    public void bad() throws Throwable {
        CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306a message = new CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306a(new CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306b());

        badSink(message);
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

    private void badSink(CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_306a message) throws Throwable {
        String data = message.model.userPassWord;


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
}
