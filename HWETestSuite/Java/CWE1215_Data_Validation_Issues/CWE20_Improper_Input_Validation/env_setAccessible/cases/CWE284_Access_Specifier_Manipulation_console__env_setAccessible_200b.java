/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_setAccessible.cases;

/*
 * @description 接口。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 284
 * @tool fortify: Access Specifier Manipulation;secbrella: SecJ_Access_Specifier_Manipulation
 * @author 方健尔 f00563108
 */
public interface CWE284_Access_Specifier_Manipulation_console__env_setAccessible_200b {

    String CONTAMINANT = CWE284_Access_Specifier_Manipulation_console__env_setAccessible_200c.getBadSource();

    void bad() throws Throwable;
}
