/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.imei_XsltCompiler.cases;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import java.util.LinkedList;
import java.util.List;

/*
 * @description Android污染数据通过存放至LinkedList中的Intent进行传递的场景。
 *
 * @cwe 494
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE494_XSLT_Injection_android__imei_XsltCompiler_compile_android_27b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        Intent i = new Intent(this, CWE494_XSLT_Injection_android__imei_XsltCompiler_compile_android_27a.class);
        i.putExtra("DroidBench", imei);

        List<Intent> iList = new LinkedList<Intent>();
        iList.add(i);

        Intent i2 = iList.get(0);

        startActivity(i2);
    }
}
