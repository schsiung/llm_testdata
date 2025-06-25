/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 跨类的静态成员变量map传递的场景。
 *
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_console__env_Runtime_load_334b {

    public static Map<String, String> mapSource = new HashMap<>();
}
