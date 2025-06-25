/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_file.cases;

import testcasesupport.IO;

import java.io.File;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/*
 * @description 数据流source点通过局部变量传入，经过覆写Runnable接口的run()方法并通过线程池进行传递。
 *
 * @cwe 22
 * @bad bad
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 董镇山 d00305016
 */
public class CWE22_Path_Manipulation_console__env_file_187 {


    public void bad() throws Throwable {
        String data = badSource();

        int pool = 1;
        ExecutorService ex = Executors.newFixedThreadPool(pool);
        CountDownLatch countDownLatch = new CountDownLatch(pool);
        try {
            for (int i = 0; i < pool; i++) {
                RunnableTmp rt = new RunnableTmp(data, countDownLatch);
                ex.execute(rt);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            ex.shutdown();
        }
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

    class RunnableTmp implements Runnable {
        private String data;
        private CountDownLatch countDownLatch;

        public RunnableTmp(String data, CountDownLatch countDownLatch) {
            this.data = data;
            this.countDownLatch = countDownLatch;
        }

        @Override
        public void run() {
            try {
                badSink(this.data);
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                countDownLatch.countDown();
            }
        }

        private void badSink(String data) {
            /* POTENTIAL FLAW: path manipulation */
            File file = new File(data);
            IO.writeLine(file.getName());

        }
    }

}

