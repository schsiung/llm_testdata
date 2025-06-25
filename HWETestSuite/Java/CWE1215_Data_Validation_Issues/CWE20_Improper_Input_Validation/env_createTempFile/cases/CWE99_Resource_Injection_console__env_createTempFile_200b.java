/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_createTempFile.cases;

/*
 * @description 接口。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 99
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 方健尔 f00563108
 */
public interface CWE99_Resource_Injection_console__env_createTempFile_200b {

    String CONTAMINANT = CWE99_Resource_Injection_console__env_createTempFile_200c.getBadSource();

    void bad() throws Throwable;
}
