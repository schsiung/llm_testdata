/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_SecretKeySpec.cases;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @cwe 320
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 方健尔 f00563108
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_android__imei_SecretKeySpec_android_20b {
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
