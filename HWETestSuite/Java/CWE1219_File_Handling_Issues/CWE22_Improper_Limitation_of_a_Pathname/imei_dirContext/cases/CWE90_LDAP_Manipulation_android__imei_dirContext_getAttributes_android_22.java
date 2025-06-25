/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.imei_dirContext.cases;

import android.app.Activity;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;

import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;

/*
 * @description Android污染数据通过工厂类产生并通过getter方法获取传递的场景。
 *
 * @good onCreate
 * @cwe 90
 * @tool fortify: LDAP Manipulation;secbrella: SecS_LDAP_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE90_LDAP_Manipulation_android__imei_dirContext_getAttributes_android_22 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Criteria crit = new Criteria();
        crit.setAccuracy(Criteria.ACCURACY_FINE);
        LocationManager locationManager = (LocationManager) getSystemService(android.content.Context.LOCATION_SERVICE);
        Location location = locationManager.getLastKnownLocation(locationManager.getBestProvider(crit, true));

        String data = String.valueOf(location.getLatitude() + location.getLongitude());


        try {
            DirContext dirContext = new InitialDirContext();
            /* POTENTIAL TEMP FLAW: LDAP Manipulation */
            dirContext.getAttributes(data);
        } catch (NamingException e) {
            e.printStackTrace();
        }

    }
}
