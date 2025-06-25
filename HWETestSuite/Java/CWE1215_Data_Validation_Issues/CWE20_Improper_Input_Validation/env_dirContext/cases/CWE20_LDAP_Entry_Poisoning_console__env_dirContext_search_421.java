/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_dirContext.cases;

import testcasesupport.IO;
import org.apache.naming.resources.FileDirContext;

import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.SearchControls;
import java.util.ArrayList;
import java.util.List;

/*
 * @description 在ArrayList中的forEach方法中调用lambda表达式。
 *
 * @bad bad
 * @cwe 20
 * @tool fortify: LDAP Entry Poisoning
 * @author 方健尔 f00563108
 */
public class CWE20_LDAP_Entry_Poisoning_console__env_dirContext_search_421 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.forEach(data -> {

            DirContext dirContext = new FileDirContext();
            SearchControls searchControls = new SearchControls();
            searchControls.setSearchScope(Integer.parseInt(data));
            try {
                /* POTENTIAL FLAW: LDAP Entry Poisoning */
                dirContext.search("name", "", new Object[2], searchControls);
            } catch (NamingException e) {
                IO.writeLine(e.getMessage());
            }

        });
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
