/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE520_Use_of_Impersonation.env_LocateRegistry.cases;

import java.util.concurrent.CountDownLatch;

/*
 * @description 数据流source点通过局部变量传入，经过辅助类覆写Runnable接口的run()方法进行传递。
 *
 * @cwe 520
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Unsafe Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_184a {


    public void bad() throws Throwable {
        String data = badSource();
        CountDownLatch countDownLatch = new CountDownLatch(1);
        (new Thread((new CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_184b(data, countDownLatch)))).start();
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

