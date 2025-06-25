/**
 * @testsuite baihu
 */
package CWE1215_Data_Validation_Issues.CWE78_OS_Command_Injection.Android_intent_exec.cases;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.telephony.SmsManager;
import android.telephony.TelephonyManager;
import android.util.Log;

import java.io.BufferedReader;
import javax.servlet.http.Cookie;
import java.io.InputStreamReader;
import java.io.IOException;

import testcasesupport.IO;

/*
 * @description Android污染数据在应用层(全局)层面的生命周期产生并爆发的场景。
 *
 * @bad onActivityPaused
 * @cwe 78
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 方健尔 f00563108
 */
public class CWE78_OS_Command_Injection__Android_intent_exec_android_19a extends Application {


    private final class ApplicationCallbacks implements ActivityLifecycleCallbacks {
        String externalData;

        public ApplicationCallbacks() {
            Log.d("EX", "ApplicationCallbacks.<init>()");
        }

        @Override
        public void onActivityStopped(Activity activity) {
        }

        @Override
        public void onActivityStarted(Activity activity) {
            Log.d("EX", "Application.onActivityStarted()");
            TelephonyManager telephonyManager = (TelephonyManager) getSystemService(android.content.Context.TELEPHONY_SERVICE);
            externalData = telephonyManager.getDeviceId();
        }

        @Override
        public void onActivitySaveInstanceState(Activity activity, Bundle outState) {
        }

        @Override
        public void onActivityResumed(Activity activity) {
        }

        @Override
        public void onActivityPaused(Activity activity) {
            String data = externalData;
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

        @Override
        public void onActivityDestroyed(Activity activity) {
        }

        @Override
        public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
            Log.d("EX", "Application.onActivityCreated()");
        }
    }

    ActivityLifecycleCallbacks callbacks = new ApplicationCallbacks();

    @Override
    public void onCreate() {
        Log.d("EX", "Application.onCreate()");
        super.onCreate();
        this.registerActivityLifecycleCallbacks(callbacks);
    }

    @Override
    public void onTerminate() {
        super.onTerminate();
        this.unregisterActivityLifecycleCallbacks(callbacks);
    }

}
