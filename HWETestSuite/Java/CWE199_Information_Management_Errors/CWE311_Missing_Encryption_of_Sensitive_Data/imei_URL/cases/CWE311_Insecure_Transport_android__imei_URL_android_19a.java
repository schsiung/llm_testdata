/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.imei_URL.cases;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.telephony.TelephonyManager;
import android.util.Log;
import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;

/*
 * @description Android污染数据在应用层(全局)层面的生命周期产生并爆发的场景。
 *
 * @bad onActivityPaused
 * @cwe 311
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_android__imei_URL_android_19a extends Application {


    private final class ApplicationCallbacks implements ActivityLifecycleCallbacks {
        String imei;

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
            imei = telephonyManager.getDeviceId();
        }

        @Override
        public void onActivitySaveInstanceState(Activity activity, Bundle outState) {
        }

        @Override
        public void onActivityResumed(Activity activity) {
        }

        @Override
        public void onActivityPaused(Activity activity) {
            String data = imei;

            URL url = null;
            try {
                /* POTENTIAL TEMP FLAW: Insecure Transport */
                url = new URL(data);
            } catch (MalformedURLException e) {
                IO.writeLine(e.getMessage());
            }
            IO.writeLine(url.getPath());

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
