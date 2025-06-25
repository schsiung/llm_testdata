/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_Writer.cases;

import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;
import java.util.concurrent.CountDownLatch;

/*
 * @description 数据流source点通过局部变量经过匿名内部类覆写java线程的run()方法进行传递。
 *
 * @cwe 74
 * @bad bad
 * @tool fortify: Formula Injection
 * @author 董镇山 d00305016
 */
public class CWE74_Formula_Injection_console__env_Writer_print_181 {


    public void bad() throws Throwable {
        String data = badSource();

        CountDownLatch countDownLatch = new CountDownLatch(1);
        new Thread() {
            @Override
            public void run() {

                try {
                    Writer writer = new PrintWriter("text.txt");

                    /* POTENTIAL FLAW: Formula Injection */
                    ((PrintWriter) writer).print(data);
                } catch (FileNotFoundException e) {
                    IO.writeLine(e.getMessage());
                }

                countDownLatch.countDown();
            }
        }.start();

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

