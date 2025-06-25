/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_lookup.cases;

import testcasesupport.IO;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/*
 * @description 接口类型的for-each循环不应该调用用户自己覆写接口的迭代器的next()方法。
 *
 * @cwe 502
 * @good good
 * @tool fortify: Dynamic Code Evaluation: JNDI Reference Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_205a<T> {


    public void good() throws InstantiationException, IllegalAccessException {
        CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_205a invokeMbean = new CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_console__env_lookup_205a<String>();
        List<String> list = invokeMbean.getList(String.class);
        invokeMbean.goodG2B1(list);
    }

    public void goodG2B1(List<String> list) {
        for (String data : list) {
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

    public List<T> getList(Class<T> clazz) throws IllegalAccessException, InstantiationException {
        List<T> list = new ArrayList<>();
        list.add(clazz.newInstance());
        return list;
    }
}
