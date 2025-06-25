/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_engine.cases;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过数组进行传递。
 *
 * @cwe 95
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_66a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        String[] dataArray = new String[5];
        dataArray[2] = data;
        (new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_66b()).badSink(dataArray);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        data = "foo";

        String[] dataArray = new String[5];
        dataArray[2] = data;
        (new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_66b()).goodG2BSink(dataArray);
    }

    private void goodG2B2() throws Throwable {
        String data;

        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        String[] dataArray = new String[5];
        dataArray[2] = data;
        (new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_66b()).goodG2BSink(dataArray);
    }
}
