/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE520_Use_of_Impersonation.env_LocateRegistry.cases;

import testcasesupport.IO;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;

/*
 * @description 数据流source点通过内部类中的方法参数进行传递。
 *
 * @cwe 520
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Unsafe Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_145 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        new InnerClass().badSink(data);
    }

    class InnerClass {
        private void badSink(String data) throws Throwable {

            try {
                /* POTENTIAL FLAW: Dynamic Code Evaluation: Unsafe Deserialization */
                LocateRegistry.getRegistry(data);
            } catch (RemoteException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }
}
