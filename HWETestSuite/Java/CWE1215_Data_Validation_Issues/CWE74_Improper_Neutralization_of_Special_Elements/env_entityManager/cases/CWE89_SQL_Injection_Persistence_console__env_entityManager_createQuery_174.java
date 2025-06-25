/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_entityManager.cases;

import testcasesupport.IO;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.Query;

/*
 * @description 数据流source点通过方法的局部变量传入，通过异常进行传递。
 *
 * @cwe 89
 * @bad bad
 * @tool fortify: SQL Injection: Persistence;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 董镇山 d00305016
 */
public class CWE89_SQL_Injection_Persistence_console__env_entityManager_createQuery_174 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);

            throw new RuntimeException(data);
        } catch (RuntimeException e) {
            badSink(e.getMessage());
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        return data;
    }

    private void badSink(String data) {
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

