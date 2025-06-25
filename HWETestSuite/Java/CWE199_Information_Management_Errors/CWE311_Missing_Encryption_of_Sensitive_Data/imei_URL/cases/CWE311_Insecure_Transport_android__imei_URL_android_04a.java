/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.imei_URL.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;

/*
 * @description Android污染数据从外部类中通过带Context参数的方法读取然后在app程序中爆发的场景。
 *
 * @cwe 311
 * @bad bad
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_android__imei_URL_android_04a extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        CWE311_Insecure_Transport_android__imei_URL_android_04b lc = new CWE311_Insecure_Transport_android__imei_URL_android_04b();
        String data = lc.getIMEI(this);

        URL url = null;
        try {
            /* POTENTIAL TEMP FLAW: Insecure Transport */
            url = new URL(data);
        } catch (MalformedURLException e) {
            IO.writeLine(e.getMessage());
        }
        IO.writeLine(url.getPath());

    }
}
