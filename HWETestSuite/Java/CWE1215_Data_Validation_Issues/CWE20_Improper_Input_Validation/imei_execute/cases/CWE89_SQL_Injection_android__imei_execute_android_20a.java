/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_execute.cases;

import android.app.Activity;
import android.os.Bundle;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @bad bad
 * @good good
 * @cwe 89
 * @tool fortify: SQL Injection;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 方健尔 f00563108
 */
public class CWE89_SQL_Injection_android__imei_execute_android_20a extends Activity {

    private CWE89_SQL_Injection_android__imei_execute_android_20b d1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        d1 = setTaint(d1);
        bad();
        good();
    }

    private CWE89_SQL_Injection_android__imei_execute_android_20b setTaint(CWE89_SQL_Injection_android__imei_execute_android_20b data) {
        data = new CWE89_SQL_Injection_android__imei_execute_android_20b();
        data.setDescription("abc");

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        data.setSecret(imei);

        return data;
    }

    private void bad() {
        String data = d1.getSecret();

        {
            try (Connection dbConnection = DriverManager.getConnection("url://127.0.0.1:8080");
                 Statement statement = dbConnection.createStatement()) {
            /* POTENTIAL TEMP FLAW: data concatenated into SQL statement used in execute(), which could result in SQL
            Injection */
                Boolean result = statement.execute(
                    "insert into system (status) values ('updated') where name='" + data + "'");

                System.out.println(result);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }

    private void good() {
        String data = d1.getDescription();

        {
            try (Connection dbConnection = DriverManager.getConnection("url://127.0.0.1:8080");
                 Statement statement = dbConnection.createStatement()) {
                Boolean result = statement.execute(
                    "insert into system (status) values ('updated') where name='" + data + "'");

                System.out.println(result);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }
}
