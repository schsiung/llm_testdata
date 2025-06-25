/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_SecretKeySpec.cases;

/*
 * @description 数据流source点产生，并且通过方法的返回值传递。
 *
 * @cwe 320
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 董镇山 d00305016
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_console__env_SecretKeySpec_61b {


    public String badSource() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    public String goodG2BSource() throws Throwable {
        String data;

        data = "foo";

        return data;
    }
}
