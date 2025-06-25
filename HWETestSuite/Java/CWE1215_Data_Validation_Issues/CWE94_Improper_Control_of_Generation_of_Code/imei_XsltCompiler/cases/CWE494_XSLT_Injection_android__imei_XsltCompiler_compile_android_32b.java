/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.imei_XsltCompiler.cases;

import android.app.Activity;
import android.os.Bundle;

/*
 * @description Android污染数据通过共享的单例Singleton进行传递的场景。
 *
 * @cwe 494
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE494_XSLT_Injection_android__imei_XsltCompiler_compile_android_32b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        CWE494_XSLT_Injection_android__imei_XsltCompiler_compile_android_32c.v().s = imei;
    }
}
