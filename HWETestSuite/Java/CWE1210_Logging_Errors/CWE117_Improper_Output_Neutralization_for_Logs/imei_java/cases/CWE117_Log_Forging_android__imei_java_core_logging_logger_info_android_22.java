/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.imei_java.cases;

import android.app.Activity;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;

import java.util.logging.Logger;

/*
 * @description Android污染数据通过工厂类产生并通过getter方法获取传递的场景。
 *
 * @good onCreate
 * @cwe 117
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 方健尔 f00563108
 */
public class CWE117_Log_Forging_android__imei_java_core_logging_logger_info_android_22 extends Activity {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Criteria crit = new Criteria();
        crit.setAccuracy(Criteria.ACCURACY_FINE);
        LocationManager locationManager = (LocationManager) getSystemService(android.content.Context.LOCATION_SERVICE);
        Location location = locationManager.getLastKnownLocation(locationManager.getBestProvider(crit, true));

        String data = String.valueOf(location.getLatitude() + location.getLongitude());

        /* POTENTIAL TEMP FLAW: log injection */
        LOGGER.info(data);

    }
}
