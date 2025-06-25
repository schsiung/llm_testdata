/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.imei_file;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 22
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 方健尔 f00563108
 */
public class CWE22_Path_Manipulation_android__imei_file_android_01b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        ((CWE22_Path_Manipulation_android__imei_file_android_01c) getApplication()).imei = imei;

        Intent i = new Intent(this, CWE22_Path_Manipulation_android__imei_file_android_01a.class);
    }
}
