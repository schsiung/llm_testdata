/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_SecretKeySpec.cases;

import android.telephony.TelephonyManager;

/*
 * @description Android污染数据从外部类中通过带Context参数的方法读取然后在app程序中爆发的场景。
 *
 * @cwe 320
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 方健尔 f00563108
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_android__imei_SecretKeySpec_android_04b {

    public String getIMEI(android.content.Context context) {
        TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
        return telephonyManager.getDeviceId();
    }
}
