/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.imei_java.cases;

import android.app.Activity;
import android.os.Bundle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @description Android污染数据存入array中并通过arraycopy拷贝至另一个数组中，通过常量值的数组下标访问另一个数组数据爆发的场景。
 *
 * @bad bad
 * @good good
 * @cwe 117
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_Debug_android__imei_java_core_logging_logger_debug_android_12 extends Activity {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        bad();

        good();
    }

    private void bad() {
        String[] arrayData = new String[3];
        arrayData[0] = "element 1 is tainted:";

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        arrayData[1] = imei;
        arrayData[2] = "neutral text";

        String[] arraycopy = new String[1];
        System.arraycopy(arrayData, 0, arraycopy, 0, 3);

        String data = arraycopy[1];
        /* POTENTIAL TEMP FLAW: log injection debug */
        LOGGER.debug(data);

    }

    private void good() {
        String[] arrayData = new String[2];
        arrayData[0] = "element 1 is tainted:";
        arrayData[1] = "neutral text";

        String[] arraycopy = new String[2];
        System.arraycopy(arrayData, 0, arraycopy, 0, 2);

        String data = arraycopy[0];
        LOGGER.debug(data);
    }

}
