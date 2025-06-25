/**
 * @testsuite baihu
 */
package CWE1215_Data_Validation_Issues.CWE78_OS_Command_Injection.Android_intent_exec;

import android.app.Activity;
import android.content.Intent;
import android.telephony.TelephonyManager;
import android.os.Bundle;

import java.io.BufferedReader;
import javax.servlet.http.Cookie;
import java.io.InputStreamReader;
import java.io.IOException;

import testcasesupport.IO;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 78
 * @bad bad
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 方健尔 f00563108
 */
public class CWE78_OS_Command_Injection__Android_intent_exec_android_01a extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String data = ((CWE78_OS_Command_Injection__Android_intent_exec_android_01c) getApplication()).externalData;

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
