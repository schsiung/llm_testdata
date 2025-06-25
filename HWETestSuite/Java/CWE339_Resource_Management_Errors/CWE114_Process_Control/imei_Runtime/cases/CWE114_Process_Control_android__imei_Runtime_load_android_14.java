/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.imei_Runtime.cases;

import android.app.Activity;
import android.os.Bundle;

/*
 * @description Android污染数据存入多维的array中并通过常量值的数组下标进行污染数据访问爆发的场景。
 *
 * @bad bad
 * @good good
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_android__imei_Runtime_load_android_14 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        bad();

        good();
    }

    private void bad() {
        String[][] arrayData = new String[1][1];

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        arrayData[0][0] = imei;

        String[] slice = arrayData[0];
        String data = slice[0];

        /* POTENTIAL TEMP FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }

    private void good() {
        String[][] arrayData = new String[1][1];

        arrayData[0][0] = "element 1 is tainted:";

        String[] slice = arrayData[0];
        String data = slice[0];

        java.lang.Runtime.getRuntime().load(data);

    }


}
