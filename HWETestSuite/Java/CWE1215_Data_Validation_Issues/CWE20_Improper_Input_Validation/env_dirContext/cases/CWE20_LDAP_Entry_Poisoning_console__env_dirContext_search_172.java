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
 * @description 数据流source点通过方法的局部变量传入，隐式抛出异常，并在异常处理块中爆发。
 *
 * @cwe 20
 * @bad bad
 * @tool fortify: LDAP Entry Poisoning
 * @author 董镇山 d00305016
 */
public class CWE20_LDAP_Entry_Poisoning_console__env_dirContext_search_172 {


    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);

            String[] array = new String[4];
            if ("matched".equals(array[5])) {
                IO.writeLine("matched");
            }
        } catch (RuntimeException e) {
            badSink(data);
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    private void badSink(String data) throws Throwable {

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

