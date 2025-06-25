/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE501_Trust_Boundary_Violation.env_model.cases;

import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Predicate;

/*
 * @description 调用Predicate类型lambda表达式的and()和test()方法传递的场景。
 *
 * @bad bad
 * @cwe 501
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 方健尔 f00563108
 */
public class CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_419 {


    public void bad() throws Throwable {
        String temp = badSource();
        Predicate<String> predicate1 = data -> {

            Model model = new ConcurrentModel();
            Map map = new HashMap();
            map.put("data", data);
            /* POTENTIAL FLAW: Trust Boundary Violation */
            model.mergeAttributes(map);

            return true;
        };

        Predicate<String> predicate2 = data -> {
            return true;
        };
        predicate1.and(predicate2).test(temp);
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
