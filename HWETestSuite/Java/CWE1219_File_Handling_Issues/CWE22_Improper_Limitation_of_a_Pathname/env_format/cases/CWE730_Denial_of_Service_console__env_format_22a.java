/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_format.cases;

import testcasesupport.IO;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 730
 * @bad bad
 * @good good
 * @tool fortify:Denial of Service: Format String;secbrella: SecS_Denial_of_Service;secbrella: Regex_Injection;
 * @author 董镇山 d00305016
 */
public class CWE730_Denial_of_Service_console__env_format_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE730_Denial_of_Service_console__env_format_22b()).badSource();


        /* POTENTIAL FLAW:Denial of Service: Format String */
        IO.writeLine(String.format(data));

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
        data = (new CWE730_Denial_of_Service_console__env_format_22b()).goodG2B1Source();

        IO.writeLine(String.format(data));
    }

    private void goodG2B2() throws Throwable {
        String data;

        goodG2B2PublicStatic = true;
        data = (new CWE730_Denial_of_Service_console__env_format_22b()).goodG2B2Source();

        IO.writeLine(String.format(data));
    }
}
