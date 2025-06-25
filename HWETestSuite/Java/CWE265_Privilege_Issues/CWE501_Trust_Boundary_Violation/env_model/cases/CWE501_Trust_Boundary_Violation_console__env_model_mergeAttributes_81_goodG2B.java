/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE501_Trust_Boundary_Violation.env_model.cases;

import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 继承一个抽象类，数据流source点通过一个抽象类的方法参数进行传递。
 *
 * @cwe 501
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 董镇山 d00305016
 */
public class CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_81_goodG2B extends CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_81_base {


    public void action(String data) throws Throwable {

        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        model.mergeAttributes(map);

    }
}
