/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;


import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入跨类成员变量map中，然后通过获取key所对应的value来传递的场景，其中put和get在跨类的不同方法中。
 *
 * @cwe 311
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_console__env_URL_339b {

    public Map<String, String> mapSource = new HashMap<>();

    public void set(String key, String value) {
        this.mapSource.put(key, value);
    }

    public String get(String key) {
        return this.mapSource.get(key);
    }
}
