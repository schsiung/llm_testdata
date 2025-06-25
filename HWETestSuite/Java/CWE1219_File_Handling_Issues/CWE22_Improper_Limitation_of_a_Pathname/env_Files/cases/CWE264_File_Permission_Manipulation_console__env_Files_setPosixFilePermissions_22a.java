/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_Files.cases;

import testcasesupport.IO;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.PosixFilePermissions;
import java.util.Set;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 264
 * @bad bad
 * @good good
 * @tool fortify: File Permission Manipulation
 * @author 董镇山 d00305016
 */
public class CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_22b()).badSource();


        try {
            Path path = Paths.get("text.txt");
            Set permissions = PosixFilePermissions.fromString(data);

            /* POTENTIAL FLAW: File Permission Manipulation */
            Files.setPosixFilePermissions(path, permissions);
        } catch (Exception e) {
            IO.writeLine(e.getMessage());
        }

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
        data = (new CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_22b()).goodG2B1Source();


        try {
            Path path = Paths.get("text.txt");
            Set permissions = PosixFilePermissions.fromString(data);

            Files.setPosixFilePermissions(path, permissions);
        } catch (Exception e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B2() throws Throwable {
        String data;

        goodG2B2PublicStatic = true;
        data = (new CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_22b()).goodG2B2Source();


        try {
            Path path = Paths.get("text.txt");
            Set permissions = PosixFilePermissions.fromString(data);

            Files.setPosixFilePermissions(path, permissions);
        } catch (Exception e) {
            IO.writeLine(e.getMessage());
        }

    }
}
