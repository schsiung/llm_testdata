/**
 * @testsuite baihu
 */
package CWE1215_Data_Validation_Issues.CWE78_OS_Command_Injection.Android_intent_exec.cases;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;
import android.telephony.TelephonyManager;

import java.io.BufferedReader;
import javax.servlet.http.Cookie;
import java.io.InputStreamReader;
import java.io.IOException;

import testcasesupport.IO;

/*
 * @description Android污染数据通过Activity组件Component(Context pkg, String cls)进行传递的场景。
 *
 * @cwe 78
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 方健尔 f00563108
 */
public class CWE78_OS_Command_Injection__Android_intent_exec_android_26b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        /* Read data from intent */
        String externalData = new Activity().getIntent().getStringExtra("data");


        ComponentName comp = new ComponentName(this, "edu.mit.icc_intent_component_name.InFlowActivity");
        Intent i = new Intent().setComponent(comp);
        i.putExtra("DroidBench", externalData);

        startActivity(i);
    }
}
