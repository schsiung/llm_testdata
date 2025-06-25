/**
 * @testsuite baihu
 */
package CWE1215_Data_Validation_Issues.CWE78_OS_Command_Injection.Environment.cases;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;


import testcasesupport.IO;

import java.nio.file.Files;
import java.io.File;
import java.util.concurrent.CountDownLatch;

/*
 * @description 辅助类覆写Thread类的run()方法。
 *
 * @cwe 78
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 董镇山 d00305016
 */
public class CWE78_OS_Command_Injection___Environment_185b extends Thread {

    private String data;
    private CountDownLatch countDownLatch;

    public CWE78_OS_Command_Injection___Environment_185b(String data, CountDownLatch countDownLatch) {
        this.data = data;
        this.countDownLatch = countDownLatch;
    }

    @Override
    public void run() {
        try {
            badSink(this.data);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            countDownLatch.countDown();
        }
    }

    private void badSink(String data) {
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

