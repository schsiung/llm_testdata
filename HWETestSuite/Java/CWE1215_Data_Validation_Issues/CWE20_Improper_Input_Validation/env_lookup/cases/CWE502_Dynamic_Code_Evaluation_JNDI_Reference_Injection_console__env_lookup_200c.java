/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_lookup.cases;

/*
 * @description 工具类，产生source点。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 502
 * @tool fortify: Dynamic Code Evaluation: JNDI Reference Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_200c {


    public static String getBadSource() {
        String data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
