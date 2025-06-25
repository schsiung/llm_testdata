/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_lookup.cases;

import testcasesupport.IO;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.util.Properties;

/*
 * @description 含有switch(字符串)[switch(String)]选择的数据流传递过程。
 *
 * @cwe 502
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: JNDI Reference Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_101 {


    public void bad() throws Throwable {
        String data = null;

        String guess = "ABC";

        char switchTarget = guess.charAt(0);
        switch (switchTarget) {
            case 'A':
                data = "";
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            break;
            case 'B':
            default:
                data = null;
                break;
        }

        Properties props = new Properties();
        props.put("URL", "rmi://secure-server:1099/");
        InitialContext ctx = null;
        try {
            ctx = new InitialContext(props);
            /* POTENTIAL FLAW: Dynamic Code Evaluation: JNDI Reference Injection */
            ctx.lookup(data);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void good() throws Throwable {
        String data = null;

        String guess = "ABC";

        char switchTarget = guess.charAt(1);
        switch (switchTarget) {
            case 'A':
                data = "";
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            break;
            case 'B':
            default:
                data = null;
                break;
        }

        Properties props = new Properties();
        props.put("URL", "rmi://secure-server:1099/");
        InitialContext ctx = null;
        try {
            ctx = new InitialContext(props);
            /* POTENTIAL FLAW: Dynamic Code Evaluation: JNDI Reference Injection */
            ctx.lookup(data);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
