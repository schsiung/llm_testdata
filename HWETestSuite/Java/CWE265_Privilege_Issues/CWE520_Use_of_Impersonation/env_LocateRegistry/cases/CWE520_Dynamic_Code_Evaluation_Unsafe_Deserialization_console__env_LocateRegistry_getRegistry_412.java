/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE520_Use_of_Impersonation.env_LocateRegistry.cases;

import testcasesupport.IO;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.util.function.Function;

/*
 * @description 使用双冒号调用自定义类的方法初始化lambda表达式。
 *
 * @bad bad
 * @cwe 520
 * @tool fortify: Dynamic Code Evaluation: Unsafe Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_412 {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        Model_412 sb = new Model_412();
        Function<String, String> sc1 = sb::append;
        String temp = sc1.apply(data);
        badSink(temp);
    }

    public void badSink(String data) {

        try {
            /* POTENTIAL FLAW: Dynamic Code Evaluation: Unsafe Deserialization */
            LocateRegistry.getRegistry(data);
        } catch (RemoteException e) {
            IO.writeLine(e.getMessage());
        }

    }

    class Model_412 {
        public String append(String s1) {
            return s1;
        }
    }
}
