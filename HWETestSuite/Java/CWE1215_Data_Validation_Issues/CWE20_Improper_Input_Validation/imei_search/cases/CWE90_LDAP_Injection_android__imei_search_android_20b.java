/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_search.cases;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @cwe 90
 * @tool fortify: LDAP Injection;SecBrella:LDAP_Injection;
 * @author 方健尔 f00563108
 */
public class CWE90_LDAP_Injection_android__imei_search_android_20b {
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
