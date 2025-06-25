/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;


import java.util.HashMap;
import java.util.Map;

/*
 * @description 跨类的成员变量map传递的场景。
 *
 * @cwe 311
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_console__env_URL_337b {

    public Map<String, String> mapSource = new HashMap<>();
}
