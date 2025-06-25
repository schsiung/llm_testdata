/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_engine.cases;

import java.util.concurrent.CountDownLatch;

/*
 * @description 数据流source点通过局部变量传入，经过辅助类覆写Runnable接口的run()方法进行传递。
 *
 * @cwe 95
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_184a {


    public void bad() throws Throwable {
        String data = badSource();
        CountDownLatch countDownLatch = new CountDownLatch(1);
        (new Thread((new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_184b(data, countDownLatch)))).start();
        countDownLatch.await();
    }

    public String badSource() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

}

