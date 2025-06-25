/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.imei_includeTag;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 95
 * @tool fortify: Dangerous File Inclusion;secbrella: SecS_Dangerous_File_Inclusion
 * @author 方健尔 f00563108
 */
public class CWE95_Dangerous_File_Inclusion_android__imei_includeTag_setHref_android_01b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        ((CWE95_Dangerous_File_Inclusion_android__imei_includeTag_setHref_android_01c) getApplication()).imei = imei;

        Intent i = new Intent(this, CWE95_Dangerous_File_Inclusion_android__imei_includeTag_setHref_android_01a.class);
    }
}
