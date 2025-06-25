/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.imei_URL.cases;

import android.app.Activity;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;
import testcasesupport.IO;

import javax.crypto.spec.PBEParameterSpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

/*
 * @description Android污染数据通过工厂类产生并通过getter方法获取传递的场景。
 *
 * @good onCreate
 * @cwe 328
 * @tool fortify: Weak Cryptographic Hash: User-Controlled PBE Salt;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 方健尔 f00563108
 */
public class CWE328_Weak_Cryptographic_Hash_User_Controlled_PBE_Salt_android__imei_URL_android_22 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Criteria crit = new Criteria();
        crit.setAccuracy(Criteria.ACCURACY_FINE);
        LocationManager locationManager = (LocationManager) getSystemService(android.content.Context.LOCATION_SERVICE);
        Location location = locationManager.getLastKnownLocation(locationManager.getBestProvider(crit, true));

        String data = String.valueOf(location.getLatitude() + location.getLongitude());


        byte[] salt = data.getBytes();
        SecureRandom random = null;
        try {
            random = SecureRandom.getInstance("SHA1PRNG");
            byte[] saltSeed = new byte[8];
            random.nextBytes(saltSeed);

            /* POTENTIAL TEMP FLAW: 基于密码的密钥派生函数所使用的迭代计数过低。*/
            PBEParameterSpec spec = new PBEParameterSpec(salt, 50);
        } catch (NoSuchAlgorithmException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
