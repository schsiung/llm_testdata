/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_ognl.cases;

/*
 * @description 清理函数。污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 94
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_201b {


    /* 配置的合法的清理函数，以valid开头 */
    public static String validUntrustedInput(String input) {
        if (!isBlank(input)) {
            String[] fbsArr = {"\\", "$", "(", ")", "*", "+", ".", "[", "]", "?", "^", "{", "}", "|"};
            for (String key : fbsArr) {
                if (input.contains(key)) {
                    input = input.replace(key, "\\" + key);
                }
            }
        }
        return input;
    }

    /* 配置的合法的清理函数，以check开头 */
    public static String checkUntrustedInput(String input) {
        if (!isBlank(input)) {
            String[] fbsArr = {"\\", "$", "(", ")", "*", "+", ".", "[", "]", "?", "^", "{", "}", "|"};
            for (String key : fbsArr) {
                if (input.contains(key)) {
                    input = input.replace(key, "\\" + key);
                }
            }
        }
        return input;
    }

    private static boolean isBlank(String str) {
        int strLen;
        if (str == null || (strLen = str.length()) == 0) {
            return true;
        }
        for (int i = 0; i < strLen; i++) {
            if ((Character.isWhitespace(str.charAt(i)) == false)) {
                return false;
            }
        }
        return true;
    }
}
