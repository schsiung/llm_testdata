/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_exec.cases;

import testcasesupport.IO;

import java.io.IOException;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 78
 * @bad bad
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection;secbrella: Command_Injection;
 * @author 方健尔 f00563108
 */
public class CWE78_Command_Injection_console__env_exec_200a implements CWE78_Command_Injection_console__env_exec_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {
        String osCommand;
        if (System.getProperty("os.name").toLowerCase().indexOf("win") >= 0) {
            /* running on Windows */
            osCommand = "c:\\WINDOWS\\SYSTEM32\\cmd.exe /c dir ";
        } else {
            /* running on non-Windows */
            osCommand = "/bin/ls ";
        }


        Process process = null;
        try {
            /* POTENTIAL FLAW: command injection */
            process = Runtime.getRuntime().exec(osCommand + data);
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }
        try {
            process.waitFor();
        } catch (InterruptedException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
