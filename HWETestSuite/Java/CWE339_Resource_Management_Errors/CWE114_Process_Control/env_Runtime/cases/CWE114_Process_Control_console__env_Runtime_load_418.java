/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

import java.util.function.Predicate;

/*
 * @description 调用Predicate类型lambda表达式的negate()和test()方法传递的场景。
 *
 * @bad bad
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_console__env_Runtime_load_418 {


    public void bad() throws Throwable {
        String temp = badSource();
        Predicate<String> predicate = data -> {

            /* POTENTIAL FLAW: Process Control */
            java.lang.Runtime.getRuntime().load(data);

            return true;
        };
        predicate.negate().test(temp);
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
