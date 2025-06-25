/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_Runtime.cases;

import android.app.Activity;
import android.os.Bundle;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @bad bad
 * @good good
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_android__imei_Runtime_load_android_20a extends Activity {

    private CWE114_Process_Control_android__imei_Runtime_load_android_20b d1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        d1 = setTaint(d1);
        bad();
        good();
    }

    private CWE114_Process_Control_android__imei_Runtime_load_android_20b setTaint(CWE114_Process_Control_android__imei_Runtime_load_android_20b data) {
        data = new CWE114_Process_Control_android__imei_Runtime_load_android_20b();
        data.setDescription("abc");

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        data.setSecret(imei);

        return data;
    }

    private void bad() {
        String data = d1.getSecret();

        /* POTENTIAL TEMP FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }

    private void good() {
        String data = d1.getDescription();

        java.lang.Runtime.getRuntime().load(data);

    }
}
