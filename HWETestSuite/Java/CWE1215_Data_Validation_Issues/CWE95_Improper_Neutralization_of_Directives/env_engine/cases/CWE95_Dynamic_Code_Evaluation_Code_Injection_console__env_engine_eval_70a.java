/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_engine.cases;

import testcasesupport.IO;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

/*
 * @description 数据流source点在一个静态方法中通过同一个类的两个实例的filed赋值进行传递。
 *
 * @cwe 95
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70a {


    public static void bad() throws Throwable {
        CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70a fs = new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70a();
        fs.test();
    }

    private void test() throws Throwable {
        String source = badSource();
        CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b front = new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b(source);
        CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b rear = new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b();
        assign(front, rear);
        String data = rear.filedB;

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            /* POTENTIAL FLAW: Dynamic Code Evaluation: Code Injection */
            Object res = engine.eval(data);
        } catch (ScriptException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private String badSource() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    // 非静态方法成员变量赋值
    private void assign(CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b x, CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b y) {
        y.filedB = x.filedB;
    }

    public static void good() throws Throwable {
        CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70a fs = new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70a();
        fs.goodG2B();
    }

    private void goodG2B() throws Throwable {
        /* FIX: Use a hardcoded string */
        String source = "foo";
        CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b front = new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b(source);
        CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b rear = new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_70b();
        assign(front, rear);
        String data = rear.filedB;

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            Object res = engine.eval(data);
        } catch (ScriptException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
