/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_SpringApplication.cases;

/*
 * @description 工具类，产生source点。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 94
 * @tool fortify: Setting Manipulation;secbrella: SecS_Setting_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE94_Setting_Manipulation_console__env_SpringApplication_setDefaultProperties_200c {


    public static String getBadSource() {
        String data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
