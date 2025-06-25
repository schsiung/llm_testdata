/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_engine.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入跨类成员变量map中，然后通过获取key所对应的value来传递的场景，其中put和get在跨类的不同方法中。
 *
 * @cwe 95
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_339b {

    public Map<String, String> mapSource = new HashMap<>();

    public void set(String key, String value) {
        this.mapSource.put(key, value);
    }

    public String get(String key) {
        return this.mapSource.get(key);
    }
}
