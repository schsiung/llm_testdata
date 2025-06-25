/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.env_XQueryCompiler.cases;

import java.util.concurrent.CountDownLatch;

/*
 * @description 数据流source点通过局部变量传入，经过辅助类覆写Thread类的run()方法进行传递。
 *
 * @cwe 652
 * @bad bad
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 董镇山 d00305016
 */
public class CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_185a {


    public void bad() throws Throwable {
        String data = badSource();
        CountDownLatch countDownLatch = new CountDownLatch(1);
        (new CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_185b(data, countDownLatch)).start();
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

