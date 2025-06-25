/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.env_RestTemplate.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入跨类成员变量map中，然后通过获取key所对应的value来传递的场景，其中put和get在跨类的不同方法中。
 *
 * @cwe 918
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public class CWE918_Server_Side_Request_Forgery_console__env_RestTemplate_put_339b {

    public Map<String, String> mapSource = new HashMap<>();

    public void set(String key, String value) {
        this.mapSource.put(key, value);
    }

    public String get(String key) {
        return this.mapSource.get(key);
    }
}
