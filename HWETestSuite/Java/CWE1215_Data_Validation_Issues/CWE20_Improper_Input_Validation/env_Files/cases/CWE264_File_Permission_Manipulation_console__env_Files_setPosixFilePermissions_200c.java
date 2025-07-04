/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Files.cases;

/*
 * @description 工具类，产生source点。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 264
 * @tool fortify: File Permission Manipulation
 * @author 方健尔 f00563108
 */
public class CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_200c {


    public static String getBadSource() {
        String data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
