/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_model.cases;

import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 501
 * @bad bad
 * @good good
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 董镇山 d00305016
 */
public class CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_22b()).badSource();


        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        /* POTENTIAL FLAW: Trust Boundary Violation */
        model.mergeAttributes(map);

    }

    public static boolean goodG2B1PublicStatic = false;
    public static boolean goodG2B2PublicStatic = false;

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        goodG2B1PublicStatic = false;
        data = (new CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_22b()).goodG2B1Source();


        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        model.mergeAttributes(map);

    }

    private void goodG2B2() throws Throwable {
        String data;

        goodG2B2PublicStatic = true;
        data = (new CWE501_Trust_Boundary_Violation_console__env_model_mergeAttributes_22b()).goodG2B2Source();


        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        model.mergeAttributes(map);

    }
}
