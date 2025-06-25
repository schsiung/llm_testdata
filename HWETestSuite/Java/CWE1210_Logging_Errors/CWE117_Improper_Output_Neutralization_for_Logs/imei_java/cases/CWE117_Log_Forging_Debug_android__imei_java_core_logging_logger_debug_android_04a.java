/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.imei_java.cases;

import android.app.Activity;
import android.os.Bundle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description Android污染数据从外部类中通过带Context参数的方法读取然后在app程序中爆发的场景。
 *
 * @cwe 117
 * @bad bad
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_Debug_android__imei_java_core_logging_logger_debug_android_04a extends Activity {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        CWE117_Log_Forging_Debug_android__imei_java_core_logging_logger_debug_android_04b lc = new CWE117_Log_Forging_Debug_android__imei_java_core_logging_logger_debug_android_04b();
        String data = lc.getIMEI(this);
        /* POTENTIAL TEMP FLAW: log injection debug */
        LOGGER.debug(data);

    }
}
