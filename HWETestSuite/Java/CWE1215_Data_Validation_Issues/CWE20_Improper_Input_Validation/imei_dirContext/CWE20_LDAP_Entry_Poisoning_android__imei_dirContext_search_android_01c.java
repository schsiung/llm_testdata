/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_dirContext;

import android.app.Application;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 20
 * @tool fortify: LDAP Entry Poisoning
 * @author 方健尔 f00563108
 */
public class CWE20_LDAP_Entry_Poisoning_android__imei_dirContext_search_android_01c extends Application {

    public String imei = "";
}
