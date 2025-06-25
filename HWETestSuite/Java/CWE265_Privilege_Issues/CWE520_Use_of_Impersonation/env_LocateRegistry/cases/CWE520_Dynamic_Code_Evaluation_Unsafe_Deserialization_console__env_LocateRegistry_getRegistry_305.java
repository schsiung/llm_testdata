/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE520_Use_of_Impersonation.env_LocateRegistry.cases;

import testcasesupport.IO;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;

/*
 * @Description 污染数据传播链包括了数字操作符。
 *
 * @cwe 520
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Unsafe Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 张自强 z30004299
 */
public class CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_305 {


    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);
            data = (Long.parseLong(data) & 0xffL) + "";
        } catch (Exception e) {
            badSink(data);
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    private void badSink(String data) throws Throwable {

        try {
            /* POTENTIAL FLAW: Dynamic Code Evaluation: Unsafe Deserialization */
            LocateRegistry.getRegistry(data);
        } catch (RemoteException e) {
            IO.writeLine(e.getMessage());
        }

    }
}

