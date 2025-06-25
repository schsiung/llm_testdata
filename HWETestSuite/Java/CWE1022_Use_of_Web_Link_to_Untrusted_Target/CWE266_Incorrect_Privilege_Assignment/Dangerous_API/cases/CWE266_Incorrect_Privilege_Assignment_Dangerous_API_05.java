/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE266_Incorrect_Privilege_Assignment_Dangerous_API_05.java
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

package CWE1022_Use_of_Web_Link_to_Untrusted_Target.CWE266_Incorrect_Privilege_Assignment.Dangerous_API.cases;

import android.app.Activity;

/**
 * @cwe 266
 * @bad test01Bad
 * @good test01Good
 * @tool Fortify:Often Misused: Android Permission Check;SecBrella:SecJ_Android_Bad_Practices_Dangerous_Function;CodeMars:Android_Bad_Practices_Dangerous_Function;
 * @author 周通 zwx453582
 */
public class CWE266_Incorrect_Privilege_Assignment_Dangerous_API_05 extends Activity {
    private static final int PERMISSION_GRANTED = 0;

    public void test01Bad() {
        //不要使用checkCallingOrSelfPermission
        /* POTENTIAL FLAW: checkCallingOrSelfPermission()、checkCallingOrSelfUriPermission()、enforceCallingOrSelfPermission()和enforceCallingOrSelfUriPermission()用来判定调用者是否具备访问某个服务或给定URI所需的权限。但是，若权限检测应用已申请待检测的权限，则利用此类函数可允许缺少相应权限的恶意应用越权访问，导致“混淆代理人攻击”，因此应禁止使用。 */
        int canProcess = checkCallingOrSelfPermission("com.example.perm.READ_INCOMING_MSG");
        if (canProcess != PERMISSION_GRANTED)
            throw new SecurityException();

    }

    public void test01Good() {
        //使用checkCallingPermission()、checkCallingUriPermission()、enforceCallingPermission()和enforceCallingUriPermission()方法
        int canProcess = checkCallingPermission("com.example.perm.READ_INCOMING_MSG");
        int canProcess1 = checkCallingUriPermission("com.example.perm.READ_INCOMING_MSG");
        int canProcess2 = enforceCallingPermission("com.example.perm.READ_INCOMING_MSG");
        int canProcess3 = enforceCallingUriPermission("com.example.perm.READ_INCOMING_MSG");
    }

    private int enforceCallingUriPermission(String string) {
        // TODO Auto-generated method stub
        return 0;
    }

    private int enforceCallingPermission(String string) {
        // TODO Auto-generated method stub
        return 0;
    }

    private int checkCallingUriPermission(String string) {
        // TODO Auto-generated method stub
        return 0;
    }
}