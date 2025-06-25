/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_dirContext.cases;

import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 90
 * @bad bad
 * @good good
 * @tool fortify: LDAP Manipulation;secbrella: SecS_LDAP_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE90_LDAP_Manipulation_console__env_dirContext_getAttributes_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        try {
            DirContext dirContext = new InitialDirContext();
            /* POTENTIAL FLAW: LDAP Manipulation */
            dirContext.getAttributes(data);
        } catch (NamingException e) {
            e.printStackTrace();
        }

    }

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE90_LDAP_Manipulation_console__env_dirContext_getAttributes_201b.validUntrustedInput(data);

        try {
            DirContext dirContext = new InitialDirContext();
            /* POTENTIAL FLAW: LDAP Manipulation */
            dirContext.getAttributes(data);
        } catch (NamingException e) {
            e.printStackTrace();
        }

    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE90_LDAP_Manipulation_console__env_dirContext_getAttributes_201b.checkUntrustedInput(data);

        try {
            DirContext dirContext = new InitialDirContext();
            /* POTENTIAL FLAW: LDAP Manipulation */
            dirContext.getAttributes(data);
        } catch (NamingException e) {
            e.printStackTrace();
        }

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
