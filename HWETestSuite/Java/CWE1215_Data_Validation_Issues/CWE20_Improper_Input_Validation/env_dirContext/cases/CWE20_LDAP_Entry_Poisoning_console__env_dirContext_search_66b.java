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
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过数组进行传递。
 *
 * @cwe 20
 * @tool fortify: LDAP Entry Poisoning
 * @author 董镇山 d00305016
 */
public class CWE20_LDAP_Entry_Poisoning_console__env_dirContext_search_66b {


    public void badSink(String dataArray[]) throws Throwable {
        String data = dataArray[2];


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

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(String dataArray[]) throws Throwable {
        String data = dataArray[1];


        DirContext dirContext = new FileDirContext();
        SearchControls searchControls = new SearchControls();
        searchControls.setSearchScope(Integer.parseInt(data));
        try {
            dirContext.search("name", "", new Object[2], searchControls);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
