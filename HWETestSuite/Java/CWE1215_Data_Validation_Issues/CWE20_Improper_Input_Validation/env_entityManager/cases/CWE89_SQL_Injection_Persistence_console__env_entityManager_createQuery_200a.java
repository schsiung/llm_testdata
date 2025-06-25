/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_entityManager.cases;

import testcasesupport.IO;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.Query;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 89
 * @bad bad
 * @tool fortify: SQL Injection: Persistence;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 方健尔 f00563108
 */
public class CWE89_SQL_Injection_Persistence_console__env_entityManager_createQuery_200a implements CWE89_SQL_Injection_Persistence_console__env_entityManager_createQuery_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {
        // obtain the initial JNDI context
        Context initCtx = null;
        try {
            initCtx = new InitialContext();
            // perform JNDI lookup to obtain container-managed entity manager
            javax.persistence.EntityManager entityManager = (javax.persistence.EntityManager)
                    initCtx.lookup("java:comp/env/persistence/InventoryAppMgr");

            /* POTENTIAL FLAW: execute a persistence query */
            Query queryEmployees = entityManager.createQuery("SELECT emp FROM employee emp WHERE emp.firstName ='" +
                    data + "'");
            IO.writeLine(queryEmployees.executeUpdate());
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
