/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionconsoleenvjsonParserparse.cases;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

/*
 * @description 数据流source点通过局部变量传入，经过辅助类覆写Callable接口的call()方法进行传递。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 董镇山 d00305016
 */
public class CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_186a {


    public void bad() throws Throwable {
        String data = badSource();
        ExecutorService executor = Executors.newFixedThreadPool(1);
        Future future = executor.submit(new CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_186b(data));
        try {
            future.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        } finally {
            executor.shutdown();
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

