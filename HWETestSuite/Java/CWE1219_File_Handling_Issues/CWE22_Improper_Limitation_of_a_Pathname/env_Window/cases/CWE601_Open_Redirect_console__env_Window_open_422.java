/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_Window.cases;

import com.google.gwt.user.client.Window;

import java.util.ArrayList;
import java.util.List;

/*
 * @description 在ArrayList中的stream流中调用lambda表达式。
 *
 * @bad bad
 * @cwe 601
 * @tool fortify: Open Redirect;secbrella: SecS_Open_Redirect;secbrella: Open_Redirect;
 * @author 方健尔 f00563108
 */
public class CWE601_Open_Redirect_console__env_Window_open_422 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.stream().map(data -> {
            /* POTENTIAL FLAW: Open Redirect */
            Window.open(data, "_blank", null);

            return data.equals("data");
        });
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
