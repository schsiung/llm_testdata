/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.imei_URL.cases;

import android.app.Activity;
import android.os.Bundle;

/*
 * @description Android污染数据通过共享的单例Singleton进行传递的场景。
 *
 * @cwe 311
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public class CWE311_Insecure_Transport_android__imei_URL_android_32b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* hard code prefix http */
        String imei = "http:xxxxx";

        CWE311_Insecure_Transport_android__imei_URL_android_32c.v().s = imei;
    }
}
