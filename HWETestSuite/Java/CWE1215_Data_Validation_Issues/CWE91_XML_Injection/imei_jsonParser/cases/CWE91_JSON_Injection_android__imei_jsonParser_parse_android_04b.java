/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.imei_jsonParser.cases;

import android.telephony.TelephonyManager;

/*
 * @description Android污染数据从外部类中通过带Context参数的方法读取然后在app程序中爆发的场景。
 *
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_JSON_Injection_android__imei_jsonParser_parse_android_04b {

    public String getIMEI(android.content.Context context) {
        TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
        return telephonyManager.getDeviceId();
    }
}
