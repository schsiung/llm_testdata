/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_entityManager.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.Query;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @bad bad
 * @good good
 * @cwe 89
 * @tool fortify: SQL Injection: Persistence;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 方健尔 f00563108
 */
public class CWE89_SQL_Injection_Persistence_android__imei_entityManager_createQuery_android_20a extends Activity {

    private CWE89_SQL_Injection_Persistence_android__imei_entityManager_createQuery_android_20b d1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        d1 = setTaint(d1);
        bad();
        good();
    }

    private CWE89_SQL_Injection_Persistence_android__imei_entityManager_createQuery_android_20b setTaint(CWE89_SQL_Injection_Persistence_android__imei_entityManager_createQuery_android_20b data) {
        data = new CWE89_SQL_Injection_Persistence_android__imei_entityManager_createQuery_android_20b();
        data.setDescription("abc");

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        data.setSecret(imei);

        return data;
    }

    private void bad() {
        String data = d1.getSecret();
        // obtain the initial JNDI context
        Context initCtx = null;
        try {
            initCtx = new InitialContext();
            // perform JNDI lookup to obtain container-managed entity manager
            javax.persistence.EntityManager entityManager = (javax.persistence.EntityManager)
                initCtx.lookup("java:comp/env/persistence/InventoryAppMgr");

            /* POTENTIAL TEMP FLAW: execute a persistence query */
            Query queryEmployees = entityManager.createQuery("SELECT emp FROM employee emp WHERE emp.firstName ='" +
                data + "'");
            IO.writeLine(queryEmployees.executeUpdate());
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void good() {
        String data = d1.getDescription();
        // obtain the initial JNDI context
        Context initCtx = null;
        try {
            initCtx = new InitialContext();
            // perform JNDI lookup to obtain container-managed entity manager
            javax.persistence.EntityManager entityManager = (javax.persistence.EntityManager)
                initCtx.lookup("java:comp/env/persistence/InventoryAppMgr");

            Query queryEmployees = entityManager.createQuery("SELECT emp FROM employee emp WHERE emp.firstName ='" +
                data + "'");
            IO.writeLine(queryEmployees.executeUpdate());
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
