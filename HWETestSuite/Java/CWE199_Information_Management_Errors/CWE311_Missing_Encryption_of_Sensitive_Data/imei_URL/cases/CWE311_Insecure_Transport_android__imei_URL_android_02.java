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
 * @description Android污染数据直接从清单的实例中产生并爆发的场景。
 *
 * @cwe 311
 * @bad bad
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_android__imei_URL_android_02 extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* hard code prefix http */
        String imei = "http:xxxxx";

        String data = imei;

        bad(data);
    }

    private void bad(String data) {

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
