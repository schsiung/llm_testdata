/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE501_Trust_Boundary_Violation.env_model.cases;

import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 含有if(数值成员变量)[if(privateFive==5) and if(privateFive!=5)]判断的数据流传递过程，其中该成员变量没有声明成
 * final，但是初始化后从未被重新赋值。
 *
 * @cwe 501
 * @bad bad
 * @good good
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 董镇山 d00305016
 */
public class CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_07 {


    private int privateFive = 5;

    public void bad() throws Throwable {
        String data;
        if (privateFive == 5) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        /* POTENTIAL FLAW: Trust Boundary Violation */
        model.mergeAttributes(map);

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (privateFive != 5) {
            data = null;
        } else {
            data = "foo";

        }


        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        model.mergeAttributes(map);

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (privateFive == 5) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        model.mergeAttributes(map);

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
