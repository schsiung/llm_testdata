/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

import testcasesupport.IO;
import ognl.Ognl;
import ognl.OgnlContext;
import ognl.OgnlException;

/*
 * @description 数据流source点通过私有静态常量的拷贝和concat方法拼接进行传递。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: OGNL Expression Injection;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_137 {
    private static String dataCopy;
    String pre = "pre";


    public void bad() throws Throwable {
        {
            String data;

            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }


            dataCopy = data;
        }
        {
            String data = pre.concat(dataCopy);

            OgnlContext ctx = new OgnlContext();

            Object expr = null;
            try {
                expr = Ognl.parseExpression(data);
                /* POTENTIAL FLAW: OGNL Expression Injection */
                Object value = Ognl.getValue(expr, ctx, "xxx");
                IO.writeLine(value.toString());
            } catch (OgnlException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }
}
