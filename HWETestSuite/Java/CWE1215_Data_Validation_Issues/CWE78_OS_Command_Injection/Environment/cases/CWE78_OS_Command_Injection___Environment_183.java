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
import java.util.concurrent.*;

/*
 * @description 数据流source点通过局部变量传入覆写Callable接口的call()方法并通过线程池进行传递。
 *
 * @cwe 78
 * @bad bad
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 董镇山 d00305016
 */
public class CWE78_OS_Command_Injection___Environment_183 {


    public void bad() throws Throwable {
        String data = badSource();

        ExecutorService executor = Executors.newFixedThreadPool(1);
        Callable myCallable = new Callable() {
            @Override
            public Object call() throws Exception {
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

                return null;
            }
        };
        Future future = executor.submit(myCallable);
        try {
            future.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }

    public String badSource() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

}

