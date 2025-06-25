/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.imei_beanUtils.cases;

import android.app.Activity;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;
import testcasesupport.Contact;
import testcasesupport.IO;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;

/*
 * @description Android污染数据通过工厂类产生并通过getter方法获取传递的场景。
 *
 * @good onCreate
 * @cwe 15
 * @tool fortify: Bean Manipulation;secbrella: SecS_Bean_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE15_Bean_Manipulation_android__imei_beanUtils_populate_android_22 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Criteria crit = new Criteria();
        crit.setAccuracy(Criteria.ACCURACY_FINE);
        LocationManager locationManager = (LocationManager) getSystemService(android.content.Context.LOCATION_SERVICE);
        Location location = locationManager.getLastKnownLocation(locationManager.getBestProvider(crit, true));

        String data = String.valueOf(location.getLatitude() + location.getLongitude());


        Map properties = new HashMap();
        properties.put("name", data);
        Contact contact = new Contact();

        try {
            /* POTENTIAL TEMP FLAW: Bean Manipulation */
            BeanUtils.populate(contact, properties);
        } catch (IllegalAccessException e) {
            IO.writeLine(e.getMessage());
        } catch (InvocationTargetException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
