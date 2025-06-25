/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.imei_Writer;

import android.app.Application;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 74
 * @tool fortify: Formula Injection
 * @author 方健尔 f00563108
 */
public class CWE74_Formula_Injection_android__imei_Writer_print_android_01c extends Application {

    public String imei = "";
}
