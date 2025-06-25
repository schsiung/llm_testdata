/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_dirContext.cases;

import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import java.security.AccessController;
import java.security.PrivilegedAction;

/*
 * @description 污染数据从覆写了PrivilegedAction<T>的run方法中传递，当调用了doPrivilege方法时缺失了该污染数据。
 *
 * @cwe 90
 * @bad bad
 * @tool fortify: LDAP Manipulation;secbrella: SecS_LDAP_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE90_LDAP_Manipulation_console__env_dirContext_getAttributes_204 {


    public void bad() throws Throwable {
        final String data = badSource();

        /* local inner class */
        class MyPrivilegedAction implements PrivilegedAction<String> {
            @Override
            public String run() {
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
                return "loader";
            }
        }
        String str = AccessController.doPrivileged(new MyPrivilegedAction());
    }

    private String badSource() {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
