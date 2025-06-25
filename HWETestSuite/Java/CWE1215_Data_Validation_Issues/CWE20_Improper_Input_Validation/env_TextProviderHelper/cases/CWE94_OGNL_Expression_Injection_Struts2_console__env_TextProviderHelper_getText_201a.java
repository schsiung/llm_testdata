/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_TextProviderHelper.cases;

import testcasesupport.IO;
import org.apache.struts2.util.TextProviderHelper;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: OGNL Expression Injection: Struts 2;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_OGNL_Expression_Injection_Struts2_console__env_TextProviderHelper_getText_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        /* POTENTIAL FLAW: OGNL Expression Injection Struct2*/
        String text = TextProviderHelper.getText(data, "not found", null, null);
        IO.writeLine(text);

    }

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE94_OGNL_Expression_Injection_Struts2_console__env_TextProviderHelper_getText_201b.validUntrustedInput(data);
        /* POTENTIAL FLAW: OGNL Expression Injection Struct2*/
        String text = TextProviderHelper.getText(data, "not found", null, null);
        IO.writeLine(text);

    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE94_OGNL_Expression_Injection_Struts2_console__env_TextProviderHelper_getText_201b.checkUntrustedInput(data);
        /* POTENTIAL FLAW: OGNL Expression Injection Struct2*/
        String text = TextProviderHelper.getText(data, "not found", null, null);
        IO.writeLine(text);

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
