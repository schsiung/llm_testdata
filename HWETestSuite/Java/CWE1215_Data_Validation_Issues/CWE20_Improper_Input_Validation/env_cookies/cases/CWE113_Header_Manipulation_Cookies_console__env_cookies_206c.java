/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_cookies.cases;

import com.google.gwt.user.client.Cookies;

import java.io.IOException;
import java.net.URL;

/*
 * @description 工具类。数据流source点从抽象类产生，在被子类调用时丢失的场景。
 *
 * @cwe 113
 * @tool fortify: Header Manipulation: Cookies;secbrella: SecS_Header_Manipulation;secbrella: HTTP_Header_Manipulation;
 * @author 方健尔 f00563108
 */
public class CWE113_Header_Manipulation_Cookies_console__env_cookies_206c {


    public static String badSource() {
        String data = "";
        /* Read data from an environment variable */
        try {
            URL url = new URL("ssss");
            Object content = url.getContent();
            data = (String) content;
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }


        return data;
    }

    public static void badSink(String data) throws Throwable {
        /* POTENTIAL FLAW: Header Manipulation: Cookies */
        Cookies.setCookie("header", data);

    }
}
