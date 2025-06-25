/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_cookies.cases;

import android.app.Activity;
import android.os.Bundle;
import com.google.gwt.user.client.Cookies;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @bad bad
 * @good good
 * @cwe 113
 * @tool fortify: Header Manipulation: Cookies;secbrella: SecS_Header_Manipulation;secbrella: HTTP_Header_Manipulation;
 * @author 方健尔 f00563108
 */
public class CWE113_Header_Manipulation_Cookies_android__imei_cookies_android_20a extends Activity {

    private CWE113_Header_Manipulation_Cookies_android__imei_cookies_android_20b d1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        d1 = setTaint(d1);
        bad();
        good();
    }

    private CWE113_Header_Manipulation_Cookies_android__imei_cookies_android_20b setTaint(CWE113_Header_Manipulation_Cookies_android__imei_cookies_android_20b data) {
        data = new CWE113_Header_Manipulation_Cookies_android__imei_cookies_android_20b();
        data.setDescription("abc");

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        data.setSecret(imei);

        return data;
    }

    private void bad() {
        String data = d1.getSecret();
        /* POTENTIAL TEMP FLAW: Header Manipulation: Cookies */
        Cookies.setCookie("header", data);

    }

    private void good() {
        String data = d1.getDescription();
        Cookies.setCookie("header", data);
    }
}
