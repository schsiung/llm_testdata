/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.imei_Runtime.cases;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import java.util.LinkedList;
import java.util.List;

/*
 * @description Android污染数据通过存放至LinkedList中的Intent进行传递的场景。
 *
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_android__imei_Runtime_load_android_27b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        Intent i = new Intent(this, CWE114_Process_Control_android__imei_Runtime_load_android_27a.class);
        i.putExtra("DroidBench", imei);

        List<Intent> iList = new LinkedList<Intent>();
        iList.add(i);

        Intent i2 = iList.get(0);

        startActivity(i2);
    }
}
