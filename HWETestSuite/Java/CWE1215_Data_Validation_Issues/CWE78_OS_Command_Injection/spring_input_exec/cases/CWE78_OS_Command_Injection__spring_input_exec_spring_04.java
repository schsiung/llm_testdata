/**
 * @testsuite baihu
 */
package CWE1215_Data_Validation_Issues.CWE78_OS_Command_Injection.spring_input_exec.cases;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;


import testcasesupport.IO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

/*
 * @description Spring注解@Value读取污染数据，污染数据解析成String进行传递。
 *
 * @cwe 78
 * @bad bad
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 方健尔 f00563108
 */
public class CWE78_OS_Command_Injection__spring_input_exec_spring_04 {


    /* 通过@Value注解来读取污染数据 */
    @Value("${password}")
    private String value;

    private void bad() {
        this.badSourceSink(value);
    }

    private void badSourceSink(String contaminationData) {
        String data;

        data = ""; /* Initialize data */

        /* Manipulate data from spring input */
        {
            data = contaminationData.toLowerCase().replace("$", "\\$").trim();
            if (data.length() > 2) {
                data = data.substring(1);
            }
        }


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
