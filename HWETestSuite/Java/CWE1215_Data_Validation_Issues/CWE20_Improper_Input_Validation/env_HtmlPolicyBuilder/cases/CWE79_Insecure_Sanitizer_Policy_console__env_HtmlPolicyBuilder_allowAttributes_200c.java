/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_HtmlPolicyBuilder.cases;

/*
 * @description 工具类，产生source点。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 79
 * @tool fortify: Insecure Sanitizer Policy
 * @author 方健尔 f00563108
 */
public class CWE79_Insecure_Sanitizer_Policy_console__env_HtmlPolicyBuilder_allowAttributes_200c {


    public static String getBadSource() {
        String data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
