/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE520_Use_of_Impersonation.env_LocateRegistry.cases;

import testcasesupport.IO;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;

/*
 * @description 数据流source点在一个静态方法中通过同一个类的两个实例的filed赋值进行传递。
 *
 * @cwe 520
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Unsafe Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70a {


    public static void bad() throws Throwable {
        CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70a fs = new CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70a();
        fs.test();
    }

    private void test() throws Throwable {
        String source = badSource();
        CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b front = new CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b(source);
        CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b rear = new CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b();
        assign(front, rear);
        String data = rear.filedB;


        try {
            /* POTENTIAL FLAW: Dynamic Code Evaluation: Unsafe Deserialization */
            LocateRegistry.getRegistry(data);
        } catch (RemoteException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private String badSource() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    // 非静态方法成员变量赋值
    private void assign(CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b x, CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b y) {
        y.filedB = x.filedB;
    }

    public static void good() throws Throwable {
        CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70a fs = new CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70a();
        fs.goodG2B();
    }

    private void goodG2B() throws Throwable {
        /* FIX: Use a hardcoded string */
        String source = "foo";
        CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b front = new CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b(source);
        CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b rear = new CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_70b();
        assign(front, rear);
        String data = rear.filedB;


        try {
            LocateRegistry.getRegistry(data);
        } catch (RemoteException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
