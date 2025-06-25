/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_dirContext.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;
import org.apache.naming.resources.FileDirContext;

import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.SearchControls;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @bad bad
 * @good good
 * @cwe 20
 * @tool fortify: LDAP Entry Poisoning
 * @author 方健尔 f00563108
 */
public class CWE20_LDAP_Entry_Poisoning_android__imei_dirContext_search_android_20a extends Activity {

    private CWE20_LDAP_Entry_Poisoning_android__imei_dirContext_search_android_20b d1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        d1 = setTaint(d1);
        bad();
        good();
    }

    private CWE20_LDAP_Entry_Poisoning_android__imei_dirContext_search_android_20b setTaint(CWE20_LDAP_Entry_Poisoning_android__imei_dirContext_search_android_20b data) {
        data = new CWE20_LDAP_Entry_Poisoning_android__imei_dirContext_search_android_20b();
        data.setDescription("abc");

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        data.setSecret(imei);

        return data;
    }

    private void bad() {
        String data = d1.getSecret();

        DirContext dirContext = new FileDirContext();
        SearchControls searchControls = new SearchControls();
        searchControls.setSearchScope(Integer.parseInt(data));
        try {
            /* POTENTIAL TEMP FLAW: LDAP Entry Poisoning */
            dirContext.search("name", "", new Object[2], searchControls);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void good() {
        String data = d1.getDescription();

        DirContext dirContext = new FileDirContext();
        SearchControls searchControls = new SearchControls();
        searchControls.setSearchScope(Integer.parseInt(data));
        try {
            dirContext.search("name", "", new Object[2], searchControls);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
