/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_dirContext.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入跨类静态成员变量map中，然后通过获取key所对应的value来传递的场景，其中put和get在跨类的不同方法中。
 *
 * @cwe 20
 * @tool fortify: LDAP Entry Poisoning
 * @author 方健尔 f00563108
 */
public class CWE20_LDAP_Entry_Poisoning_console__env_dirContext_search_340b {

    public static Map<String, String> mapSource = new HashMap<>();

    public static void set(String key, String value) {
        mapSource.put(key, value);
    }

    public static String get(String key) {
        return mapSource.get(key);
    }
}
