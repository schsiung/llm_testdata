/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Files.cases;

/*
 * @description 抽象类。数据流source点从抽象类产生，在被子类调用时丢失的场景。
 *
 * @cwe 264
 * @tool fortify: File Permission Manipulation
 * @author 方健尔 f00563108
 */
public abstract class CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_206b {

    protected String path;

    public abstract void abstractMethod();

    public void bad() throws Throwable {
        path = CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_206c.badSource();
    }
}
