/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_method.cases;

import java.lang.reflect.Method;
import java.util.HashMap;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 470
 * @tool fortify: Unsafe Reflection;secbrella: SecS_Unsafe_Reflection;secbrella: Unsafe_Reflection;
 * @author 董镇山 d00305016
 */
public class CWE470_Unsafe_Reflection_console__env_method_invoke_74b {


    public void badSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        try {
            Method method = Object.class.getMethod("toString");
            /* POTENTIAL FLAW: Unsafe Reflection */
            method.invoke(data);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void goodG2BSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        try {
            Method method = Object.class.getMethod("toString");
            method.invoke(data);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
