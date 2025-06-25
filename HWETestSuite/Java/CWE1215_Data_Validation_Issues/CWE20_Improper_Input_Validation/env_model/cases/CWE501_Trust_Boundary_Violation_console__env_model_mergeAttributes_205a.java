/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_model.cases;

import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
 * @description 接口类型的for-each循环不应该调用用户自己覆写接口的迭代器的next()方法。
 *
 * @cwe 501
 * @good good
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 方健尔 f00563108
 */
public class CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_205a<T> {


    public void good() throws InstantiationException, IllegalAccessException {
        CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_205a invokeMbean = new CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_205a<String>();
        List<String> list = invokeMbean.getList(String.class);
        invokeMbean.goodG2B1(list);
    }

    public void goodG2B1(List<String> list) {
        for (String data : list) {

            Model model = new ConcurrentModel();
            Map map = new HashMap();
            map.put("data", data);
            /* POTENTIAL FLAW: Trust Boundary Violation */
            model.mergeAttributes(map);

        }
    }

    public List<T> getList(Class<T> clazz) throws IllegalAccessException, InstantiationException {
        List<T> list = new ArrayList<>();
        list.add(clazz.newInstance());
        return list;
    }
}
