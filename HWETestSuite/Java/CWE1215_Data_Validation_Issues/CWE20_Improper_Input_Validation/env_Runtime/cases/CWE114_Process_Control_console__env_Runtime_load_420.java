/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Runtime.cases;

import java.util.function.Consumer;

/*
 * @description 调用Consumer类型lambda表达式的accept()方法传递的场景。
 *
 * @bad bad
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_console__env_Runtime_load_420 {


    public void bad() throws Throwable {
        String temp = badSource();
        Consumer<String> consumer = data -> {

            /* POTENTIAL FLAW: Process Control */
            java.lang.Runtime.getRuntime().load(data);

        };
        consumer.accept(temp);
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
