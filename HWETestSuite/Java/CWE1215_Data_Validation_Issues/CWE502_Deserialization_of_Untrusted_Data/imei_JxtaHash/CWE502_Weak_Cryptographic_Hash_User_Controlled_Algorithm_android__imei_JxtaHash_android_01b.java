/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.imei_JxtaHash;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 502
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 方健尔 f00563108
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_android__imei_JxtaHash_android_01b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        ((CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_android__imei_JxtaHash_android_01c) getApplication()).imei = imei;

        Intent i = new Intent(this, CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_android__imei_JxtaHash_android_01a.class);
    }
}
