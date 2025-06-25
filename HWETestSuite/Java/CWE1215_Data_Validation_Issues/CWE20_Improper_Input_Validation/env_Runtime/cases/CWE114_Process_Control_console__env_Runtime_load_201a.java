/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Runtime.cases;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 114
 * @bad bad
 * @good good
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_console__env_Runtime_load_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        /* POTENTIAL FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE114_Process_Control_console__env_Runtime_load_201b.validUntrustedInput(data);

        /* POTENTIAL FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE114_Process_Control_console__env_Runtime_load_201b.checkUntrustedInput(data);

        /* POTENTIAL FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
