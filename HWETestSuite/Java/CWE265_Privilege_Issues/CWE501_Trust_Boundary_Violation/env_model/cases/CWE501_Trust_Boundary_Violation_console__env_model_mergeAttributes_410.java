/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE501_Trust_Boundary_Violation.env_model.cases;

import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/*
 * @description 使用双冒号的方式初始化lambda表达式。
 *
 * @bad bad
 * @cwe 501
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 方健尔 f00563108
 */
public class CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_410 {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        Function<String, StringBuffer> sc2 = StringBuffer::new;
        StringBuffer temp = sc2.apply(data);
        badSink(temp.toString());
    }

    public void badSink(String data) {

        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        /* POTENTIAL FLAW: Trust Boundary Violation */
        model.mergeAttributes(map);

    }
}
