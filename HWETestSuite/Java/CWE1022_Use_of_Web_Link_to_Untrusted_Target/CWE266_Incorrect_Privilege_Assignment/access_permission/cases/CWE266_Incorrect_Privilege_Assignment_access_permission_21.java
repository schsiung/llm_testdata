/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE266_Incorrect_Privilege_Assignment_access_permission_21.java
Label Definition File: CWE15_External_Control_of_System_or_Configuration_Setting.label.xml
Template File: sources-sink-01.tmpl.java
*/
/*
 * @testsuite baihu
 * @description
 * CWE: 266 Incorrect Privilege Assignment
 * BadSource: connect_tcp Read data using an outbound tcp connection
 * GoodSource: A hardcoded string
 * BadSink:  Set the catalog name with the value of data
 * Flow Variant: 01 Baseline
 *
 * */

package CWE1022_Use_of_Web_Link_to_Untrusted_Target_with_window.opener_Access.CWE266_Incorrect_Privilege_Assignment.access_permission.cases;

import testcasesupport.R;

import android.app.Activity;
import android.os.Bundle;
import android.os.Environment;

import java.io.File;

/**
 * @cwe 266
 * @bad test01Bad;test02Bad;test03Bad;test04Bad
 * @good test01Good;
 * @tool Fortify:Insecure Storage: Android External Storage;SecBrella:SecJ_Insecure_Storage_External_Storage;CodeMars:Insecure_Storage_External_Storage;
 * @author 周通 zwx453582
 */
public class CWE266_Incorrect_Privilege_Assignment_access_permission_21 extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        test01Bad();
        test02Bad();
        test03Bad();
        test04Bad();
        test01Good();
    }

    private void test01Bad() {
        /* POTENTIAL FLAW: 文件的MODE_WORLD_WRITEABLE模式表示该文件可以被其他应用写操作，存在数据被其他应用程序篡改的风险。 */
        final File file1 = new File(Environment.getExternalStorageDirectory().getAbsoluteFile() + "/111.txt");
    }

    private void test02Bad() {
        /* POTENTIAL FLAW: 文件的MODE_WORLD_WRITEABLE模式表示该文件可以被其他应用写操作，存在数据被其他应用程序篡改的风险。 */
        final File file2 = new File(Environment.getExternalStoragePublicDirectory("type").getAbsoluteFile() + "/111.txt");
    }

    private void test03Bad() {
        /* POTENTIAL FLAW: 文件的MODE_WORLD_WRITEABLE模式表示该文件可以被其他应用写操作，存在数据被其他应用程序篡改的风险。 */
        final File file3 = new File(getExternalCacheDir().getAbsoluteFile() + "/111.txt");
    }

    private void test04Bad() {
        /* POTENTIAL FLAW: 文件的MODE_WORLD_WRITEABLE模式表示该文件可以被其他应用写操作，存在数据被其他应用程序篡改的风险。 */
        final File file4 = new File(getExternalFilesDir("type").getAbsoluteFile() + "/111.txt");
    }

    private void test01Good() {
        final File file = new File(Environment.getDownloadCacheDirectory().getAbsoluteFile() + "/111.txt");
    }
}
