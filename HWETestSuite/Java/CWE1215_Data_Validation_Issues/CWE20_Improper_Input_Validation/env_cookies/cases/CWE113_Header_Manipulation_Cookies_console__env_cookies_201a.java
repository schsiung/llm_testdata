/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_cookies.cases;

import com.google.gwt.user.client.Cookies;

import java.io.IOException;
import java.net.URL;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 113
 * @bad bad
 * @good good
 * @tool fortify: Header Manipulation: Cookies;secbrella: SecS_Header_Manipulation;secbrella: HTTP_Header_Manipulation;
 * @author 方健尔 f00563108
 */
public class CWE113_Header_Manipulation_Cookies_console__env_cookies_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        /* Read data from an environment variable */
        try {
            URL url = new URL("ssss");
            Object content = url.getContent();
            data = (String) content;
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        /* POTENTIAL FLAW: Header Manipulation: Cookies */
        Cookies.setCookie("header", data);

    }

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        /* Read data from an environment variable */
        try {
            URL url = new URL("ssss");
            Object content = url.getContent();
            data = (String) content;
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        data = CWE113_Header_Manipulation_Cookies_console__env_cookies_201b.validUntrustedInput(data);
        /* POTENTIAL FLAW: Header Manipulation: Cookies */
        Cookies.setCookie("header", data);

    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        /* Read data from an environment variable */
        try {
            URL url = new URL("ssss");
            Object content = url.getContent();
            data = (String) content;
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        data = CWE113_Header_Manipulation_Cookies_console__env_cookies_201b.checkUntrustedInput(data);
        /* POTENTIAL FLAW: Header Manipulation: Cookies */
        Cookies.setCookie("header", data);

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
