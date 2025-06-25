/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入全局静态变量map中，然后通过获取key所对应的value来传递的场景，其中put和get在同一个方法中，不存在callFlow分析。
 *
 * @cwe 114
 * @bad bad
 * @good good
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_console__env_Runtime_load_336 {

    private static Map<String, String> mapSource = new HashMap<>();

    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        mapSource.put("key1", data);

        data = mapSource.get("key1");

        /* POTENTIAL FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }

    public void good() throws Throwable {
        String dataSource = "foo";
        mapSource.put("key2", dataSource);
        String data = mapSource.get("key2");

        java.lang.Runtime.getRuntime().load(data);

    }
}
