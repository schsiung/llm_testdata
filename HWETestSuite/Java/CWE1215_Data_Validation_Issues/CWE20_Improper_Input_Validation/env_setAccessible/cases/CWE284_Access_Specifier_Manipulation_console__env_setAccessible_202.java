/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_setAccessible.cases;

import testcasesupport.IO;

import java.lang.reflect.Method;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/*
 * @description 污染数据经过lambda表达式传递的场景。
 *
 * @cwe 284
 * @bad bad
 * @tool fortify: Access Specifier Manipulation;secbrella: SecJ_Access_Specifier_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE284_Access_Specifier_Manipulation_console__env_setAccessible_202 {

    private ScheduledExecutorService scheduledExecutorService = Executors.newSingleThreadScheduledExecutor();

    public void bad() {
        String data;
        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        badSink(data);
    }

    private void badSink(String data) {
        scheduledExecutorService.scheduleAtFixedRate(() -> {
            try {

                Boolean isAccessible = Boolean.valueOf(data);
                Class cl = null;
                try {
                    cl = Class.forName("com.huawei.Contact");
                    Method m = cl.getMethod("bad", null);

                    /* POTENTIAL FLAW: 方法调用可更改访问说明符 */
                    m.setAccessible(isAccessible);
                    int mods = m.getModifiers();

                    IO.writeLine(mods);
                } catch (ClassNotFoundException e) {
                    IO.writeLine(e.getMessage());
                } catch (NoSuchMethodException e) {
                    IO.writeLine(e.getMessage());
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }, 5, 2, TimeUnit.SECONDS);
    }

}
