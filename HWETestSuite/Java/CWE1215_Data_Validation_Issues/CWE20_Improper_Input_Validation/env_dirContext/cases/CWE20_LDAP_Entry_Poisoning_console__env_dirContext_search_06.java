/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_dirContext.cases;

import testcasesupport.IO;
import org.apache.naming.resources.FileDirContext;

import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.SearchControls;

/*
 * @description 含有if(静态常量数值)[if(PRIVATE_STATIC_FINAL_FIVE==5) and if(PRIVATE_STATIC_FINAL_FIVE!=5)]判断的数据流传递
 * 过程，其中静态常量以final修饰。
 *
 * @cwe 20
 * @bad bad
 * @good good
 * @tool fortify: LDAP Entry Poisoning
 * @author 董镇山 d00305016
 */
public class CWE20_LDAP_Entry_Poisoning_console__env_dirContext_search_06 {


    private static final int PRIVATE_STATIC_FINAL_FIVE = 5;

    public void bad() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_FIVE == 5) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


        DirContext dirContext = new FileDirContext();
        SearchControls searchControls = new SearchControls();
        searchControls.setSearchScope(Integer.parseInt(data));
        try {
            /* POTENTIAL FLAW: LDAP Entry Poisoning */
            dirContext.search("name", "", new Object[2], searchControls);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_FIVE != 5) {
            data = null;
        } else {

            /* FIX: Use a hardcoded string */
            data = "foo";

        }


        DirContext dirContext = new FileDirContext();
        SearchControls searchControls = new SearchControls();
        searchControls.setSearchScope(Integer.parseInt(data));
        try {
            dirContext.search("name", "", new Object[2], searchControls);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_FIVE == 5) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        DirContext dirContext = new FileDirContext();
        SearchControls searchControls = new SearchControls();
        searchControls.setSearchScope(Integer.parseInt(data));
        try {
            dirContext.search("name", "", new Object[2], searchControls);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
