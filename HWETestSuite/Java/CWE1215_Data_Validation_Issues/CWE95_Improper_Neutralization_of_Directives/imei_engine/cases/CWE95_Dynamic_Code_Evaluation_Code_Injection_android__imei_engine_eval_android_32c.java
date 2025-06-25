/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.imei_engine.cases;

/*
 * @description Android污染数据通过共享的单例Singleton进行传递的场景。
 *
 * @cwe 95
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_android__imei_engine_eval_android_32c {
    private static CWE95_Dynamic_Code_Evaluation_Code_Injection_android__imei_engine_eval_android_32c v;
    public String s;

    public static CWE95_Dynamic_Code_Evaluation_Code_Injection_android__imei_engine_eval_android_32c v() {
        if (v == null) {
            v = new CWE95_Dynamic_Code_Evaluation_Code_Injection_android__imei_engine_eval_android_32c();
        }

        return v;
    }
}
