/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_HtmlPolicyBuilder.cases;

import org.owasp.html.HtmlPolicyBuilder;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以key的形式存入map，然后通过迭代器遍历key的方式来传递的场景。
 *
 * @cwe 79
 * @bad bad
 * @good good
 * @tool fortify: Insecure Sanitizer Policy
 * @author 方健尔 f00563108
 */
public class CWE79_Insecure_Sanitizer_Policy_console__env_HtmlPolicyBuilder_allowAttributes_322 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.keySet()) {

            HtmlPolicyBuilder htmlPolicyBuilder = new HtmlPolicyBuilder();

            /* POTENTIAL FLAW: Insecure Sanitizer Policy */
            htmlPolicyBuilder.allowAttributes(data);

        }
    }

    private Map<String, String> badSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        map.put(data, "value1");
        map.put("key2", "value2");
        return map;
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        Map<String, String> mapSource = goodSource();
        for (String data : mapSource.keySet()) {

            HtmlPolicyBuilder htmlPolicyBuilder = new HtmlPolicyBuilder();

            htmlPolicyBuilder.allowAttributes(data);

        }
    }

    private Map<String, String> goodSource() throws Throwable {
        Map<String, String> map = new HashMap<>();
        map.put("key1", "foo1");
        map.put("key2", "foo2");
        map.put("key3", "foo3");
        return map;
    }
}
