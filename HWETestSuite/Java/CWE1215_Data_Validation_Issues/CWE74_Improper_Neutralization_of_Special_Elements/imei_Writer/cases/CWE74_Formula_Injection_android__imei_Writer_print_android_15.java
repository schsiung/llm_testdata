/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.imei_Writer.cases;

import android.app.Activity;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.widget.Toast;
import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;

/*
 * @description Android污染数据存储在静态字段中，通过在匿名内部类中注册位置更新的回调函数onLocationChanged进行传递并爆发的场景。
 *
 * @bad onResume
 * @cwe 74
 * @tool fortify: Formula Injection
 * @author 方健尔 f00563108
 */
public class CWE74_Formula_Injection_android__imei_Writer_print_android_15 extends Activity {

    private static double latitude;
    private static double longitude;
    private LocationManager locationManager;

    LocationListener locationListener = new LocationListener() {
        @Override
        public void onStatusChanged(String provider, int status, Bundle extras) {
        }

        @Override
        public void onProviderEnabled(String provider) {
        }

        @Override
        public void onProviderDisabled(String provider) {
        }

        @Override
        public void onLocationChanged(Location location) {
            Toast.makeText(getApplicationContext(), "aa", Toast.LENGTH_LONG).show();
            // source
            latitude = location.getLatitude();
            longitude = location.getLongitude();
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Acquire a reference to the system Location Manager
        locationManager = (LocationManager) getSystemService(android.content.Context.LOCATION_SERVICE);

        // Register the listener with the Location Manager to receive location updates
        locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 5000, 10, locationListener);
    }

    @Override
    protected void onResume() {
        super.onResume();
        String data = String.valueOf(latitude + longitude);

        try {
            Writer writer = new PrintWriter("text.txt");

            /* POTENTIAL TEMP FLAW: Formula Injection */
            ((PrintWriter) writer).print(data);
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }

}
