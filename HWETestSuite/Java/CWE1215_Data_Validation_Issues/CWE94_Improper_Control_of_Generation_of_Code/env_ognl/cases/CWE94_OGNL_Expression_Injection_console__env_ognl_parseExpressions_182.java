/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

import testcasesupport.IO;
import ognl.Ognl;
import ognl.OgnlContext;
import ognl.OgnlException;

import java.util.concurrent.CountDownLatch;

/*
 * @description 数据流source点通过局部变量经过覆写Runnable接口的run()方法进行传递。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: OGNL Expression Injection;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_182 {


    public void bad() throws Throwable {
        String data = badSource();

        CountDownLatch countDownLatch = new CountDownLatch(1);
        new Thread(new Runnable() {
            @Override
            public void run() {
                OgnlContext ctx = new OgnlContext();

                Object expr = null;
                try {
                    expr = Ognl.parseExpression(data);
                    /* POTENTIAL FLAW: OGNL Expression Injection */
                    Object value = Ognl.getValue(expr, ctx, "xxx");
                    IO.writeLine(value.toString());
                } catch (OgnlException e) {
                    IO.writeLine(e.getMessage());
                }

                countDownLatch.countDown();
            }
        }).start();

        try {
            countDownLatch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
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

