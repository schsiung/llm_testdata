/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_XMLDecoder.cases;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @cwe 328
 * @tool fortify: Dynamic Code Evaluation: XMLDecoder Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE328_Dynamic_Code_Evaluation_XMLDecoder_Injection_android__imei_XMLDecoder_android_20b {
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
