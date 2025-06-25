/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Runtime.cases;

/*
 * @description 接口。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public interface CWE114_Process_Control_console__env_Runtime_load_200b {

    String CONTAMINANT = CWE114_Process_Control_console__env_Runtime_load_200c.getBadSource();

    void bad() throws Throwable;
}
