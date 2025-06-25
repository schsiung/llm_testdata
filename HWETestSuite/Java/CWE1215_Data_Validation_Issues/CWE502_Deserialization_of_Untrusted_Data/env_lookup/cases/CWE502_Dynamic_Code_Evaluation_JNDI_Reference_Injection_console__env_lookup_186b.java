/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_lookup.cases;

import testcasesupport.IO;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.util.Properties;
import java.util.concurrent.Callable;

/*
 * @description 辅助类覆写Callable接口的call()方法。
 *
 * @cwe 502
 * @tool fortify: Dynamic Code Evaluation: JNDI Reference Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_186b implements Callable<Object> {

    private String data;

    public CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_186b(String data) {
        this.data = data;
    }

    @Override
    public Object call() throws Exception {
        try {
            badSink(this.data);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private void badSink(String data) {
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

