/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Files.cases;

import testcasesupport.IO;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.PosixFilePermissions;
import java.util.Set;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 264
 * @bad bad
 * @tool fortify: File Permission Manipulation
 * @author 方健尔 f00563108
 */
public class CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_200a implements CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {

        try {
            Path path = Paths.get("text.txt");
            Set permissions = PosixFilePermissions.fromString(data);

            /* POTENTIAL FLAW: File Permission Manipulation */
            Files.setPosixFilePermissions(path, permissions);
        } catch (Exception e) {
            IO.writeLine(e.getMessage());
        }

    }
}
