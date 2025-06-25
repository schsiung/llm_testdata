/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.imei_java;

import android.app.Activity;
import android.os.Bundle;

import java.util.logging.Logger;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging;secbrella:SecS_Log_Forging
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_android__imei_java_core_logging_logger_info_android_01a extends Activity {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String data = ((CWE117_Log_Forging_android__imei_java_core_logging_logger_info_android_01c) getApplication()).imei;

        /* POTENTIAL TEMP FLAW: log injection */
        LOGGER.info(data);

    }
}
