/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_Window.cases;

import com.google.gwt.user.client.Window;

/*
 * @description 数据流source点通过方法的局部变量传入，通过异常进行传递。
 *
 * @cwe 601
 * @bad bad
 * @tool fortify: Open Redirect;secbrella: SecS_Open_Redirect;secbrella: Open_Redirect;
 * @author 董镇山 d00305016
 */
public class CWE601_Open_Redirect_console__env_Window_open_174 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);

            throw new RuntimeException(data);
        } catch (RuntimeException e) {
            badSink(e.getMessage());
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        return data;
    }

    private void badSink(String data) {
        /* POTENTIAL FLAW: Open Redirect */
        Window.open(data, "_blank", null);

    }

}

