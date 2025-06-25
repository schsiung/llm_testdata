/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.imei_XsltCompiler.cases;

import android.telephony.TelephonyManager;

/*
 * @description Android污染数据从外部类中通过带Context参数的方法读取然后在app程序中爆发的场景。
 *
 * @cwe 494
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE494_XSLT_Injection_android__imei_XsltCompiler_compile_android_04b {

    public String getIMEI(android.content.Context context) {
        TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
        return telephonyManager.getDeviceId();
    }
}
