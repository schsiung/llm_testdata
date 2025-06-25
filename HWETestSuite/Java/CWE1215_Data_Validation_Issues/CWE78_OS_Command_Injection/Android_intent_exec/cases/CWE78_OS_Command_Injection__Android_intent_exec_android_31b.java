/**
 * @testsuite baihu
 */
package CWE1215_Data_Validation_Issues.CWE78_OS_Command_Injection.Android_intent_exec.cases;

import android.app.Activity;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.telephony.TelephonyManager;

import java.io.BufferedReader;
import javax.servlet.http.Cookie;
import java.io.InputStreamReader;
import java.io.IOException;

import testcasesupport.IO;

/*
 * @description Android污染数据通过SharedPreferences进行传递的场景。
 *
 * @cwe 78
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 方健尔 f00563108
 */
public class CWE78_OS_Command_Injection__Android_intent_exec_android_31b extends Activity {
    public static final String PREFS_NAME = "MyPrefsFile";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String externalData = new Activity().getIntent().getStringExtra("data");


        SharedPreferences settings = getSharedPreferences(PREFS_NAME, 0);
        SharedPreferences.Editor editor = settings.edit();
        editor.putString("externalData", externalData);

        // Commit the edits!
        editor.commit();
    }
}
