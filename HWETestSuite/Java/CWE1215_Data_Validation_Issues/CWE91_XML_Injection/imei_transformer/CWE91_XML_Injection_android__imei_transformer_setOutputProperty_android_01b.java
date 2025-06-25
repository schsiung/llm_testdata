/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.imei_transformer;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 91
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_android__imei_transformer_setOutputProperty_android_01b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        ((CWE91_XML_Injection_android__imei_transformer_setOutputProperty_android_01c) getApplication()).imei = imei;

        Intent i = new Intent(this, CWE91_XML_Injection_android__imei_transformer_setOutputProperty_android_01a.class);
    }
}
