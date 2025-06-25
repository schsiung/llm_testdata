/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

import testcasesupport.IO;
import com.opensymphony.xwork2.ognl.OgnlUtil;
import ognl.OgnlException;

import java.util.function.Predicate;

/*
 * @description 调用Predicate类型lambda表达式的negate()和test()方法传递的场景。
 *
 * @bad bad
 * @cwe 94
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_418 {


    public void bad() throws Throwable {
        String temp = badSource();
        Predicate<String> predicate = data -> {
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

            return true;
        };
        predicate.negate().test(temp);
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
