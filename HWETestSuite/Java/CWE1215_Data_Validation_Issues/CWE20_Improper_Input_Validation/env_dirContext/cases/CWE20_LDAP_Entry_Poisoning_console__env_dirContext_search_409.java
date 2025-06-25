/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_dirContext.cases;

import testcasesupport.IO;
import org.apache.naming.resources.FileDirContext;

import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.SearchControls;
import java.util.function.Supplier;

/*
 * @description 调用Supplier类型lambda表达式的get()方法传递的场景。
 *
 * @bad bad
 * @cwe 20
 * @tool fortify: LDAP Entry Poisoning
 * @author 方健尔 f00563108
 */
public class CWE20_LDAP_Entry_Poisoning_console__env_dirContext_search_409 {


    public void bad() throws Throwable {
        Supplier<StringBuffer> sc1 = () -> {
            String data;
            data = ""; /* Initialize data */
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            return new StringBuffer(data);
        };
        String data = sc1.get().toString();

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
}
