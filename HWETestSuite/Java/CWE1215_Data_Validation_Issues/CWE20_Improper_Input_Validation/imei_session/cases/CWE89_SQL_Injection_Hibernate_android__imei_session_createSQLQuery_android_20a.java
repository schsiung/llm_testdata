/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_session.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;

import java.io.File;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @bad bad
 * @good good
 * @cwe 89
 * @tool fortify: SQL Injection: Hibernate;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 方健尔 f00563108
 */
public class CWE89_SQL_Injection_Hibernate_android__imei_session_createSQLQuery_android_20a extends Activity {

    private CWE89_SQL_Injection_Hibernate_android__imei_session_createSQLQuery_android_20b d1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        d1 = setTaint(d1);
        bad();
        good();
    }

    private CWE89_SQL_Injection_Hibernate_android__imei_session_createSQLQuery_android_20b setTaint(CWE89_SQL_Injection_Hibernate_android__imei_session_createSQLQuery_android_20b data) {
        data = new CWE89_SQL_Injection_Hibernate_android__imei_session_createSQLQuery_android_20b();
        data.setDescription("abc");

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        data.setSecret(imei);

        return data;
    }

    private void bad() {
        String data = d1.getSecret();
        SessionFactory sessionFactory = new AnnotationConfiguration().configure(
            new File("hibernate.cgf.xml")).buildSessionFactory();
        Session session = sessionFactory.openSession();
        /* POTENTIAL TEMP FLAW: execute a hibernate query */
        int result = session.createSQLQuery("insert into users (status) values ('updated') where name='" + data +
            "'")
            .executeUpdate();

        IO.writeLine(result);

    }

    private void good() {
        String data = d1.getDescription();
        SessionFactory sessionFactory = new AnnotationConfiguration().configure(
            new File("hibernate.cgf.xml")).buildSessionFactory();
        Session session = sessionFactory.openSession();
        int result = session.createSQLQuery("insert into users (status) values ('updated') where name='" + data +
            "'")
            .executeUpdate();

        IO.writeLine(result);

    }
}
