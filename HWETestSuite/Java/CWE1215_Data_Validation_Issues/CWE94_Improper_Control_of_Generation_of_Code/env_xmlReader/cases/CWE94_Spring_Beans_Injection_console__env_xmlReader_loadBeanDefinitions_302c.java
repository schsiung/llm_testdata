/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_xmlReader.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @Description 定义单例方法。该场景模拟多态过程，通过调用父类方法，实际调用子类的场景。
 *
 * @cwe 94
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 张自强 z30004299
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_302c {
    private static Map<String, CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_302a> sFactory = new HashMap<>();

    /**
     * get telephony separated factory.
     *
     * @return CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_302a
     */
    public static CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_302a getInstance() {
        if (sFactory.containsKey("defalut")) {
            return new CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_302a();
        }

        return new CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_302b();
    }
}

