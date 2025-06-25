/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_lookup.cases;

import testcasesupport.IO;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.util.Properties;
import java.util.concurrent.CountDownLatch;

/*
 * @description 辅助类覆写Runnable接口的run()方法。
 *
 * @cwe 502
 * @tool fortify: Dynamic Code Evaluation: JNDI Reference Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_184b implements Runnable {

    private String data;
    private CountDownLatch countDownLatch;

    public CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_184b(String data, CountDownLatch countDownLatch) {
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
        Properties props = new Properties();
        props.put("URL", "rmi://secure-server:1099/");
        InitialContext ctx = null;
        try {
            ctx = new InitialContext(props);
            /* POTENTIAL FLAW: Dynamic Code Evaluation: JNDI Reference Injection */
            ctx.lookup(data);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }

}

