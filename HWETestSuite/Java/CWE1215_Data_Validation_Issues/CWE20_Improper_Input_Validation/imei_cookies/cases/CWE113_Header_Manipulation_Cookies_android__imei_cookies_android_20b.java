/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_cookies.cases;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @cwe 113
 * @tool fortify: Header Manipulation: Cookies;secbrella: SecS_Header_Manipulation;secbrella: HTTP_Header_Manipulation;
 * @author 方健尔 f00563108
 */
public class CWE113_Header_Manipulation_Cookies_android__imei_cookies_android_20b {
    private String secret;
    private String description;


    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
