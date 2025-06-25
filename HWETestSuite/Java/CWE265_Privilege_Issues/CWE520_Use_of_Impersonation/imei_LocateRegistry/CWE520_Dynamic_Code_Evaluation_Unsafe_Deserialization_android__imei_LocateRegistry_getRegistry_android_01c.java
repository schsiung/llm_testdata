/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE520_Use_of_Impersonation.imei_LocateRegistry;

import android.app.Application;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 520
 * @tool fortify: Dynamic Code Evaluation: Unsafe Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE520_Dynamic_Code_Evaluation_Unsafe_Deserialization_android__imei_LocateRegistry_getRegistry_android_01c extends Application {

    public String imei = "";
}
