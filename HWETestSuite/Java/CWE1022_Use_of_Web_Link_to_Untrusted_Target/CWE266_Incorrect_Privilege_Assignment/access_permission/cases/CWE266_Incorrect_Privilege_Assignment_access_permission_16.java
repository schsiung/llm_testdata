/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE266_Incorrect_Privilege_Assignment_access_permission_16.java
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

package CWE1022_Use_of_Web_Link_to_Untrusted_Target.CWE266_Incorrect_Privilege_Assignment.access_permission.cases;

import testcasesupport.NotificationUtil;
import testcasesupport.SecondActivity;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.Service;
import android.content.Intent;

/**
 * @cwe 266
 * @tool SecBrella:SecS_Android_Bad_Practices_Dangerous_PendingIntent
 * @bad test01Bad;test02Bad
 * @author 周通 zwx453582
 */
public class CWE266_Incorrect_Privilege_Assignment_access_permission_16 extends Activity {
    private void test01Bad(NotificationManager notificationManager) {
        /* POTENTIAL FLAW: 使用PendingIntent触发事件时须传入显式Intent。 */
        notificationManager.notify(1, badSource());
    }

    private void test02Bad(Service service) {
        /* POTENTIAL FLAW: 使用PendingIntent触发事件时须传入显式Intent。 */
        service.startForeground(1, badSource());
    }

    private Notification badSource() {
        Intent intent = new Intent();
        // To set implicit Intent.
        intent.setAction("com.huawei.action.MYACTION");
        return NotificationUtil.getNotification(this, intent);
    }

    private void test01Good(NotificationManager notificationManager) {
        notificationManager.notify(1, goodSource());
    }

    private void test02Good(Service service) {
        service.startForeground(1, goodSource());
    }

    private Notification goodSource() {
        Intent intent = new Intent();
        // explicit Intent
        intent.setClass(CWE266_Incorrect_Privilege_Assignment_access_permission_16.this, SecondActivity.class);
        return NotificationUtil.getNotification(this, intent);
    }
}

