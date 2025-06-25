/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.imei_xmlReader.cases;

import android.app.Activity;
import android.os.Bundle;

/*
 * @description Android污染数据通过共享的单例Singleton进行传递的场景。
 *
 * @cwe 94
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 方健尔 f00563108
 */
public class CWE94_Spring_Beans_Injection_android__imei_xmlReader_loadBeanDefinitions_android_32b extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        CWE94_Spring_Beans_Injection_android__imei_xmlReader_loadBeanDefinitions_android_32c.v().s = imei;
    }
}
