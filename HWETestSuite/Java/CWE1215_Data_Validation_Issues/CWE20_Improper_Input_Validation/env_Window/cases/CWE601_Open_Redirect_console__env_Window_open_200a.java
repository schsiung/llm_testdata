/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Window.cases;

import com.google.gwt.user.client.Window;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 601
 * @bad bad
 * @tool fortify: Open Redirect;secbrella: SecS_Open_Redirect;secbrella: Open_Redirect;
 * @author 方健尔 f00563108
 */
public class CWE601_Open_Redirect_console__env_Window_open_200a implements CWE601_Open_Redirect_console__env_Window_open_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {
        /* POTENTIAL FLAW: Open Redirect */
        Window.open(data, "_blank", null);

    }
}
