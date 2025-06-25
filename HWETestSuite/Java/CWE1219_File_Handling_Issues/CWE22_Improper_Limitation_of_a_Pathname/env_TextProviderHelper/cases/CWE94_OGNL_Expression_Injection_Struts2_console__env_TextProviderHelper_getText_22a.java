/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_TextProviderHelper.cases;

import testcasesupport.IO;
import org.apache.struts2.util.TextProviderHelper;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: OGNL Expression Injection: Struts 2;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_OGNL_Expression_Injection_Struts2_console__env_TextProviderHelper_getText_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE94_OGNL_Expression_Injection_Struts2_console__env_TextProviderHelper_getText_22b()).badSource();

        /* POTENTIAL FLAW: OGNL Expression Injection Struct2*/
        String text = TextProviderHelper.getText(data, "not found", null, null);
        IO.writeLine(text);

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
        data = (new CWE94_OGNL_Expression_Injection_Struts2_console__env_TextProviderHelper_getText_22b()).goodG2B1Source();

        String text = TextProviderHelper.getText(data, "not found", null, null);
        IO.writeLine(text);

    }

    private void goodG2B2() throws Throwable {
        String data;

        goodG2B2PublicStatic = true;
        data = (new CWE94_OGNL_Expression_Injection_Struts2_console__env_TextProviderHelper_getText_22b()).goodG2B2Source();

        String text = TextProviderHelper.getText(data, "not found", null, null);
        IO.writeLine(text);

    }
}
