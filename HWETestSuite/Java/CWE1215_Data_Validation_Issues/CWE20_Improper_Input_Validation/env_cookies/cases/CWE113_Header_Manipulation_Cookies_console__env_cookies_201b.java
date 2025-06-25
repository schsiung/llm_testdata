/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_cookies.cases;

/*
 * @description 清理函数。污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 113
 * @tool fortify: Header Manipulation: Cookies;secbrella: SecS_Header_Manipulation;secbrella: HTTP_Header_Manipulation;
 * @author 方健尔 f00563108
 */
public class CWE113_Header_Manipulation_Cookies_console__env_cookies_201b {


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
