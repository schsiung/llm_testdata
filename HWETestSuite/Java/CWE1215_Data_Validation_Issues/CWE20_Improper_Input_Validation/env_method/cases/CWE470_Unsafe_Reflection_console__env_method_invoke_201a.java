/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_method.cases;

import java.lang.reflect.Method;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 470
 * @bad bad
 * @good good
 * @tool fortify: Unsafe Reflection;secbrella: SecS_Unsafe_Reflection;secbrella: Unsafe_Reflection;
 * @author 方健尔 f00563108
 */
public class CWE470_Unsafe_Reflection_console__env_method_invoke_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        try {
            Method method = Object.class.getMethod("toString");
            /* POTENTIAL FLAW: Unsafe Reflection */
            method.invoke(data);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE470_Unsafe_Reflection_console__env_method_invoke_201b.validUntrustedInput(data);

        try {
            Method method = Object.class.getMethod("toString");
            /* POTENTIAL FLAW: Unsafe Reflection */
            method.invoke(data);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE470_Unsafe_Reflection_console__env_method_invoke_201b.checkUntrustedInput(data);

        try {
            Method method = Object.class.getMethod("toString");
            /* POTENTIAL FLAW: Unsafe Reflection */
            method.invoke(data);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
