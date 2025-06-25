/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

import testcasesupport.IO;
import com.opensymphony.xwork2.ognl.OgnlUtil;
import ognl.OgnlException;

import java.util.ArrayList;
import java.util.List;

/*
 * @description 接口类型的for-each循环不应该调用用户自己覆写接口的迭代器的next()方法。
 *
 * @cwe 94
 * @good good
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_205a<T> {


    public void good() throws InstantiationException, IllegalAccessException {
        CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_205a invokeMbean = new CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_205a<String>();
        List<String> list = invokeMbean.getList(String.class);
        invokeMbean.goodG2B1(list);
    }

    public void goodG2B1(List<String> list) {
        for (String data : list) {
            OgnlUtil ognlUtil = new OgnlUtil();
            Object value = null;
            try {
                /* POTENTIAL FLAW: OGNL Expression Injection: Parse Double*/
                value = ognlUtil.getValue(data, null, null);

                if (value != null) {
                    IO.writeLine(value.toString());
                }
            } catch (OgnlException e) {
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
