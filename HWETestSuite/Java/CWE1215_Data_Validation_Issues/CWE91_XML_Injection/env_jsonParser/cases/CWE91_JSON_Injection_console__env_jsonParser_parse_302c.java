/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_jsonParser.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @Description 定义单例方法。该场景模拟多态过程，通过调用父类方法，实际调用子类的场景。
 *
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 张自强 z30004299
 */
public class CWE91_JSON_Injection_console__env_jsonParser_parse_302c {
    private static Map<String, CWE91_JSON_Injection_console__env_jsonParser_parse_302a> sFactory = new HashMap<>();

    /**
     * get telephony separated factory.
     *
     * @return CWE91_JSON_Injection_console__env_jsonParser_parse_302a
     */
    public static CWE91_JSON_Injection_console__env_jsonParser_parse_302a getInstance() {
        if (sFactory.containsKey("defalut")) {
            return new CWE91_JSON_Injection_console__env_jsonParser_parse_302a();
        }

        return new CWE91_JSON_Injection_console__env_jsonParser_parse_302b();
    }
}

