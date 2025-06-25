/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_XPath.cases;

import org.jdom.JDOMException;
import org.jdom.xpath.XPath;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 643
 * @bad bad
 * @good good
 * @tool fortify: XPATH Injection;secbrella: SecS_XPath_Injection;secbrella: XPath_Injection;
 * @author 方健尔 f00563108
 */
public class CWE643_XPATH_Injection_console__env_XPath_newInstance_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        try {
            /* POTENTIAL FLAW: XPath Injection */
            XPath xPath = XPath.newInstance(data);
        } catch (JDOMException e) {
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

        data = CWE643_XPATH_Injection_console__env_XPath_newInstance_201b.validUntrustedInput(data);

        try {
            /* POTENTIAL FLAW: XPath Injection */
            XPath xPath = XPath.newInstance(data);
        } catch (JDOMException e) {
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

        data = CWE643_XPATH_Injection_console__env_XPath_newInstance_201b.checkUntrustedInput(data);

        try {
            /* POTENTIAL FLAW: XPath Injection */
            XPath xPath = XPath.newInstance(data);
        } catch (JDOMException e) {
            e.printStackTrace();
        }

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
