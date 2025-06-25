/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.imei_java.cases;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import java.util.logging.Logger;

/*
 * @description Android污染数据通过存放至LinkedList中的Intent进行传递的场景。
 *
 * @bad onCreate
 * @cwe 117
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_android__imei_java_core_logging_logger_info_android_27a extends Activity {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent i = getIntent();
        String data = i.getStringExtra("DroidBench");
        /* POTENTIAL TEMP FLAW: log injection */
        LOGGER.info(data);

    }
}
