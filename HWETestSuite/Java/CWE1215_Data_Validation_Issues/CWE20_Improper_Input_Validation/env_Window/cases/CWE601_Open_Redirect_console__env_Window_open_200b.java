/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Window.cases;

/*
 * @description 接口。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 601
 * @tool fortify: Open Redirect;secbrella: SecS_Open_Redirect;secbrella: Open_Redirect;
 * @author 方健尔 f00563108
 */
public interface CWE601_Open_Redirect_console__env_Window_open_200b {

    String CONTAMINANT = CWE601_Open_Redirect_console__env_Window_open_200c.getBadSource();

    void bad() throws Throwable;
}
