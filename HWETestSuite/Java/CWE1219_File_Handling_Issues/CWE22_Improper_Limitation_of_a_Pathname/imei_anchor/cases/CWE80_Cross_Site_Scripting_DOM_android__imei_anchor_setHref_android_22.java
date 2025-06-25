/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.imei_anchor.cases;

import android.app.Activity;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;
import com.google.gwt.user.client.ui.Anchor;

/*
 * @description Android污染数据通过工厂类产生并通过getter方法获取传递的场景。
 *
 * @good onCreate
 * @cwe 80
 * @tool fortify: Cross-Site Scripting: DOM;secbrella: SecS_Cross_Site_Scripting
 * @author 方健尔 f00563108
 */
public class CWE80_Cross_Site_Scripting_DOM_android__imei_anchor_setHref_android_22 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Criteria crit = new Criteria();
        crit.setAccuracy(Criteria.ACCURACY_FINE);
        LocationManager locationManager = (LocationManager) getSystemService(android.content.Context.LOCATION_SERVICE);
        Location location = locationManager.getLastKnownLocation(locationManager.getBestProvider(crit, true));

        String data = String.valueOf(location.getLatitude() + location.getLongitude());

        if (data != null) {
            Anchor anchor = new Anchor();
            /* POTENTIAL TEMP FLAW: 向一个 Web 浏览器发送未经验证的数据会导致该浏览器执行恶意代码。 */
            anchor.setHref(data);
        }

    }
}
