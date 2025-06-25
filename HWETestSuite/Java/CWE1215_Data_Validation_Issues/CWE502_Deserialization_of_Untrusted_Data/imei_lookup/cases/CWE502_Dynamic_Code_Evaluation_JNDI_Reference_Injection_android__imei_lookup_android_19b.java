/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.imei_lookup.cases;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

/*
 * @description Android污染数据在应用层(全局)层面的生命周期产生并爆发的场景。
 *
 * @cwe 502
 * @tool fortify: Dynamic Code Evaluation: JNDI Reference Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_android__imei_lookup_android_19b extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        Log.d("EX", "Activity.onCreate()");
        super.onCreate(savedInstanceState);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        Log.d("EX", "Activity.onRestoreInstanceState()");
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        Log.d("EX", "Activity.onSaveInstanceState()");
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onPostCreate(Bundle savedInstanceState) {
        Log.d("EX", "Activity.onPostCreate()");
        super.onPostCreate(savedInstanceState);
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d("EX", "Activity.onStart()");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d("EX", "Activity.onPause()");
    }

}
