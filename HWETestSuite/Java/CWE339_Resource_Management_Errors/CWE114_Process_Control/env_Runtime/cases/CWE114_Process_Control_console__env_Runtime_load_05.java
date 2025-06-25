/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

/*
 * @description 含有if(常量布尔值)[if(privateTrue) and if(privateFalse)]判断的数据流传递过程，该成员变量没有声明成final，但是
 * 初始化后从未被赋值。
 *
 * @cwe 114
 * @bad bad
 * @good good
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 董镇山 d00305016
 */
public class CWE114_Process_Control_console__env_Runtime_load_05 {


    private boolean privateTrue = true;
    private boolean privateFalse = false;

    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;
        if (privateTrue) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


        /* POTENTIAL FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (privateFalse) {
            data = null;
        } else {
            data = "foo";

        }


        java.lang.Runtime.getRuntime().load(data);

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (privateTrue) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        java.lang.Runtime.getRuntime().load(data);

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
