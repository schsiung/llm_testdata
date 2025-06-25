/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE501_Trust_Boundary_Violation.env_model.cases;

import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过其中一个类的静态成员变量进行传递。
 *
 * @cwe 501
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 董镇山 d00305016
 */
public class CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_68b {


    public void badSink() throws Throwable {
        String data = CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_68a.data;


        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        /* POTENTIAL FLAW: Trust Boundary Violation */
        model.mergeAttributes(map);

    }

    public void goodG2BSink() throws Throwable {
        String data = CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_68a.data;


        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        model.mergeAttributes(map);

    }
}
