/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_JxtaHash.cases;

import net.jxta.impl.util.JxtaHash;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/*
 * @description 数据流source点通过局部变量传入，经过覆写Runnable接口的run()方法并通过线程池进行传递。
 *
 * @cwe 502
 * @bad bad
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 董镇山 d00305016
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_187 {


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

            /* POTENTIAL FLAW: Weak Cryptographic Hash: User-Controlled Algorithm */
            JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

        }
    }

}

