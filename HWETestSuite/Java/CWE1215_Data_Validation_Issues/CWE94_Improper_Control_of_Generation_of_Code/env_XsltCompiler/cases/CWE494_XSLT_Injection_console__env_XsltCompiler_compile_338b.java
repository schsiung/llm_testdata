/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_XsltCompiler.cases;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 跨类的静态成员变量map传递的场景。
 *
 * @cwe 494
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_338b {

    public static Map<String, String> mapSource = new HashMap<>();
}
