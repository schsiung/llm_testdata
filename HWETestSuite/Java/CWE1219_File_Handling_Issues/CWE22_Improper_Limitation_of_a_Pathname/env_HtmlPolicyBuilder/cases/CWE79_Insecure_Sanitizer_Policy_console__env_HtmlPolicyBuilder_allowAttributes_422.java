/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_HtmlPolicyBuilder.cases;

import org.owasp.html.HtmlPolicyBuilder;

import java.util.ArrayList;
import java.util.List;

/*
 * @description 在ArrayList中的stream流中调用lambda表达式。
 *
 * @bad bad
 * @cwe 79
 * @tool fortify: Insecure Sanitizer Policy
 * @author 方健尔 f00563108
 */
public class CWE79_Insecure_Sanitizer_Policy_console__env_HtmlPolicyBuilder_allowAttributes_422 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.stream().map(data -> {

            HtmlPolicyBuilder htmlPolicyBuilder = new HtmlPolicyBuilder();

            /* POTENTIAL FLAW: Insecure Sanitizer Policy */
            htmlPolicyBuilder.allowAttributes(data);

            return data.equals("data");
        });
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
