/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_transformer.cases;

/*
 * @description 工具类，产生source点。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 91
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_console__env_transformer_setOutputProperty_200c {


    public static String getBadSource() {
        String data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
