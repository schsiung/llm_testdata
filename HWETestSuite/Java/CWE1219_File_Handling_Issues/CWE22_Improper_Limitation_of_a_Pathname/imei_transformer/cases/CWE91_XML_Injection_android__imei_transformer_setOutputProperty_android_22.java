/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.imei_transformer.cases;

import android.app.Activity;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;
import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/*
 * @description Android污染数据通过工厂类产生并通过getter方法获取传递的场景。
 *
 * @good onCreate
 * @cwe 91
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_android__imei_transformer_setOutputProperty_android_22 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Criteria crit = new Criteria();
        crit.setAccuracy(Criteria.ACCURACY_FINE);
        LocationManager locationManager = (LocationManager) getSystemService(android.content.Context.LOCATION_SERVICE);
        Location location = locationManager.getLastKnownLocation(locationManager.getBestProvider(crit, true));

        String data = String.valueOf(location.getLatitude() + location.getLongitude());


        try {
            ContentHandler contentHandler = new DefaultHandler();
            /* POTENTIAL TEMP FLAW: XML Injection */
            contentHandler.startPrefixMapping(data, "");
        } catch (SAXException e) {
            IO.writeLine(e.getMessage());
        }


    }
}
