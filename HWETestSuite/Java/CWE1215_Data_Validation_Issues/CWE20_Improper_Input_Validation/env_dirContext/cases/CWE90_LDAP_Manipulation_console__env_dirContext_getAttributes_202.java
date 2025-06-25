/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_dirContext.cases;

import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/*
 * @description 污染数据经过lambda表达式传递的场景。
 *
 * @cwe 90
 * @bad bad
 * @tool fortify: LDAP Manipulation;secbrella: SecS_LDAP_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE90_LDAP_Manipulation_console__env_dirContext_getAttributes_202 {

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

                try {
                    DirContext dirContext = new InitialDirContext();
                    /* POTENTIAL FLAW: LDAP Manipulation */
                    dirContext.getAttributes(data);
                } catch (NamingException e) {
                    e.printStackTrace();
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }, 5, 2, TimeUnit.SECONDS);
    }

}
