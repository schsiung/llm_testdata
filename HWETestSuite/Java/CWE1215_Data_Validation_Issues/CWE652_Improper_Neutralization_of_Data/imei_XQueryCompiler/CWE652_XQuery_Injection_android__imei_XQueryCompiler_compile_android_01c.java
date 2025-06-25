/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.imei_XQueryCompiler;

import android.app.Application;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 652
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 方健尔 f00563108
 */
public class CWE652_XQuery_Injection_android__imei_XQueryCompiler_compile_android_01c extends Application {

    public String imei = "";
}
