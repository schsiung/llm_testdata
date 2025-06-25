/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_Window.cases;

import com.google.gwt.user.client.Window;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 601
 * @bad bad
 * @good good
 * @tool fortify: Open Redirect;secbrella: SecS_Open_Redirect;secbrella: Open_Redirect;
 * @author 董镇山 d00305016
 */
public class CWE601_Open_Redirect_console__env_Window_open_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE601_Open_Redirect_console__env_Window_open_22b()).badSource();

        /* POTENTIAL FLAW: Open Redirect */
        Window.open(data, "_blank", null);

    }

    public static boolean goodG2B1PublicStatic = false;
    public static boolean goodG2B2PublicStatic = false;

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        goodG2B1PublicStatic = false;
        data = (new CWE601_Open_Redirect_console__env_Window_open_22b()).goodG2B1Source();

        Window.open(data, "_blank", null);
    }

    private void goodG2B2() throws Throwable {
        String data;

        goodG2B2PublicStatic = true;
        data = (new CWE601_Open_Redirect_console__env_Window_open_22b()).goodG2B2Source();

        Window.open(data, "_blank", null);
    }
}
