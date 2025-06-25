/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_URL.cases;


/*
 * @description 工具类，产生source点。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 311
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_console__env_URL_200c {


    public static String getBadSource() {
        String data = "";
        /* Read data with hardcode prefix http */
        data = "http:xxxxx";


        return data;
    }
}
