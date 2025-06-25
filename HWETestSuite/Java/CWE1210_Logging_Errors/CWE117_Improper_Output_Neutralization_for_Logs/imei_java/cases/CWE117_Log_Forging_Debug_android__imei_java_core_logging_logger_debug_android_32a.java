/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.imei_java.cases;

import android.app.Activity;
import android.os.Bundle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description Android污染数据通过共享的单例Singleton进行传递的场景。
 *
 * @bad onCreate
 * @cwe 117
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_Debug_android__imei_java_core_logging_logger_debug_android_32a extends Activity {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        CWE117_Log_Forging_Debug_android__imei_java_core_logging_logger_debug_android_32c.v().s = "";
    }

    protected void onStop() {
        super.onStop();
        String data = CWE117_Log_Forging_Debug_android__imei_java_core_logging_logger_debug_android_32c.v().s;
        /* POTENTIAL TEMP FLAW: log injection debug */
        LOGGER.debug(data);

    }
}
