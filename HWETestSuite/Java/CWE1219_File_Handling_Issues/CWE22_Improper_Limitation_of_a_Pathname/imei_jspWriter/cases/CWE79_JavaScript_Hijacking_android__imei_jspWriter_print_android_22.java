/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.imei_jspWriter.cases;

import android.app.Activity;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;
import testcasesupport.IO;
import org.apache.jasper.runtime.JspWriterImpl;

import javax.servlet.jsp.JspWriter;
import java.io.IOException;

/*
 * @description Android污染数据通过工厂类产生并通过getter方法获取传递的场景。
 *
 * @good onCreate
 * @cwe 79
 * @tool fortify: JavaScript Hijacking
 * @author 方健尔 f00563108
 */
public class CWE79_JavaScript_Hijacking_android__imei_jspWriter_print_android_22 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Criteria crit = new Criteria();
        crit.setAccuracy(Criteria.ACCURACY_FINE);
        LocationManager locationManager = (LocationManager) getSystemService(android.content.Context.LOCATION_SERVICE);
        Location location = locationManager.getLastKnownLocation(locationManager.getBestProvider(crit, true));

        String data = String.valueOf(location.getLatitude() + location.getLongitude());


        JspWriter jspWriter = new JspWriterImpl();
        try {
            /* POTENTIAL TEMP FLAW: JavaScript Hijacking */
            jspWriter.print(data);
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
