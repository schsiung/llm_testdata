/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE520_Use_of_Impersonation.env_LocateRegistry;

import testcasesupport.IO;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;

/*
 * @description 最简单的数据流传递过程。
 *
 * @cwe 520
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Unsafe Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_01 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        try {
            /* POTENTIAL FLAW: Dynamic Code Evaluation: Unsafe Deserialization */
            LocateRegistry.getRegistry(data);
        } catch (RemoteException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";


        try {
            LocateRegistry.getRegistry(data);
        } catch (RemoteException e) {
            IO.writeLine(e.getMessage());
        }

    }
}

