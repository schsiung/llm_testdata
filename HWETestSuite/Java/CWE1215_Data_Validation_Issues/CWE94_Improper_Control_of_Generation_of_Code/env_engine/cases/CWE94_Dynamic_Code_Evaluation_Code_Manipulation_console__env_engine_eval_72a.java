/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_engine.cases;

import java.util.Vector;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过Vector进行传递。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Code Manipulation;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_72a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Vector<String> dataVector = new Vector<String>(5);
        dataVector.add(0, data);
        dataVector.add(1, data);
        dataVector.add(2, data);

        (new CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_72b()).badSink(dataVector);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        data = "foo";

        Vector<String> dataVector = new Vector<String>(5);
        dataVector.add(0, data);
        dataVector.add(1, data);
        dataVector.add(2, data);
        (new CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_72b()).goodG2BSink(dataVector);
    }

    private void goodG2B2() throws Throwable {
        String data;

        data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Vector<String> dataVector = new Vector<String>(5);
        dataVector.add(0, data);
        dataVector.add(1, data);
        dataVector.add(2, "");
        (new CWE94_Dynamic_Code_Evaluation_Code_Manipulation_console__env_engine_eval_72b()).goodG2BSink(dataVector);
    }
}
