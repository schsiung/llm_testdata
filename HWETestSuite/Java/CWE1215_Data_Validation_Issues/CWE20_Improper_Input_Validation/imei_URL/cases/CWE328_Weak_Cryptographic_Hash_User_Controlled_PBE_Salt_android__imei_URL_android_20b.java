/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_URL.cases;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @cwe 328
 * @tool fortify: Weak Cryptographic Hash: User-Controlled PBE Salt;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 方健尔 f00563108
 */
public class CWE328_Weak_Cryptographic_Hash_User_Controlled_PBE_Salt_android__imei_URL_android_20b {
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
