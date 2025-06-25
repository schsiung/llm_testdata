/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE520_Use_of_Impersonation.env_LocateRegistry.cases;

/*
 * @description 污染数据经过一个类中某个静态方法调用，而该类中还有其他静态方法被调用，将导致告警增多的场景。
 *
 * @cwe 520
 * @tool fortify: Dynamic Code Evaluation: Unsafe Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_console__env_LocateRegistry_getRegistry_309c {

    public static String source() {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        return data;
    }
}

