/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.imei_XPath.cases;

import android.app.Activity;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;
import org.jdom.JDOMException;
import org.jdom.xpath.XPath;

/*
 * @description Android污染数据通过工厂类产生并通过getter方法获取传递的场景。
 *
 * @good onCreate
 * @cwe 643
 * @tool fortify: XPATH Injection;secbrella: SecS_XPath_Injection;secbrella: XPath_Injection;
 * @author 方健尔 f00563108
 */
public class CWE643_XPATH_Injection_android__imei_XPath_newInstance_android_22 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Criteria crit = new Criteria();
        crit.setAccuracy(Criteria.ACCURACY_FINE);
        LocationManager locationManager = (LocationManager) getSystemService(android.content.Context.LOCATION_SERVICE);
        Location location = locationManager.getLastKnownLocation(locationManager.getBestProvider(crit, true));

        String data = String.valueOf(location.getLatitude() + location.getLongitude());


        try {
            /* POTENTIAL TEMP FLAW: XPath Injection */
            XPath xPath = XPath.newInstance(data);
        } catch (JDOMException e) {
            e.printStackTrace();
        }

    }
}
