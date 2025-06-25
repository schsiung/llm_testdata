/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE520_Use_of_Impersonation.env_LocateRegistry.cases;

import testcasesupport.IO;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.security.AccessController;
import java.security.PrivilegedAction;

/*
 * @description 污染数据从覆写了PrivilegedAction<T>的run方法中传递，当调用了doPrivilege方法时缺失了该污染数据。
 *
 * @cwe 520
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Unsafe Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_204 {


    public void bad() throws Throwable {
        final String data = badSource();

        /* local inner class */
        class MyPrivilegedAction implements PrivilegedAction<String> {
            @Override
            public String run() {
                try {

                    try {
                        /* POTENTIAL FLAW: Dynamic Code Evaluation: Unsafe Deserialization */
                        LocateRegistry.getRegistry(data);
                    } catch (RemoteException e) {
                        IO.writeLine(e.getMessage());
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
