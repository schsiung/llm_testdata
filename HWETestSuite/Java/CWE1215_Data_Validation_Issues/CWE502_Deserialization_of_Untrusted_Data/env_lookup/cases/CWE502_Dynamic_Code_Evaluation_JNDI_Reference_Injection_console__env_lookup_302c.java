/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_lookup.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @Description 定义单例方法。该场景模拟多态过程，通过调用父类方法，实际调用子类的场景。
 *
 * @cwe 502
 * @tool fortify: Dynamic Code Evaluation: JNDI Reference Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 张自强 z30004299
 */
public class CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_302c {
    private static Map<String, CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_302a> sFactory = new HashMap<>();

    /**
     * get telephony separated factory.
     *
     * @return CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_302a
     */
    public static CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_302a getInstance() {
        if (sFactory.containsKey("defalut")) {
            return new CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_302a();
        }

        return new CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_302b();
    }
}

