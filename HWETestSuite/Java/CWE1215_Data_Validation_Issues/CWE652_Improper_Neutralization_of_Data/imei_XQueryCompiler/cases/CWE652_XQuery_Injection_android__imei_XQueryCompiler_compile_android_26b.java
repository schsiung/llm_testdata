/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.imei_XQueryCompiler.cases;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;

/*
 * @description Android污染数据通过Activity组件Component(Context pkg, String cls)进行传递的场景。
 *
 * @cwe 652
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 方健尔 f00563108
 */
public class CWE652_XQuery_Injection_android__imei_XQueryCompiler_compile_android_26b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        ComponentName comp = new ComponentName(this, "edu.mit.icc_intent_component_name.InFlowActivity");
        Intent i = new Intent().setComponent(comp);
        i.putExtra("DroidBench", imei);

        startActivity(i);
    }
}
