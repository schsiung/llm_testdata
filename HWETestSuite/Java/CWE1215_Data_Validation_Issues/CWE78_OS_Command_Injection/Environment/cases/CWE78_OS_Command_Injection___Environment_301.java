/**
 * @testsuite baihu
 */
package CWE1215_Data_Validation_Issues.CWE78_OS_Command_Injection.Environment.cases;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;


import testcasesupport.IO;

import java.util.ArrayDeque;
import java.util.Deque;

/*
 * @Description 该场景污染数据通过对象成员变量传递，并且再通过集合成员变量传递。
 *
 * @cwe 78
 * @bad bad
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 张自强 z30004299
 */
public class CWE78_OS_Command_Injection___Environment_301 {
    /**
     * 污染数据
     */
    private final Deque<Contaminant> contaminants = new ArrayDeque<Contaminant>();


    public void bad() throws Throwable {
        badSource();

        for (Contaminant contaminant : contaminants) {
            badSink(contaminant.data);
        }
    }

    private void badSource() {
        String data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        Contaminant contaminant = new Contaminant();
        contaminant.data = data;
        contaminants.add(contaminant);
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

    private class Contaminant {
        public String data;
    }
}

