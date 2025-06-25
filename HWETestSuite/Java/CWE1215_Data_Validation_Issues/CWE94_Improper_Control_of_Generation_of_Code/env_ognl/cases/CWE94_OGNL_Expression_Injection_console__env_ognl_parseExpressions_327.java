/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

import testcasesupport.IO;
import ognl.Ognl;
import ognl.OgnlContext;
import ognl.OgnlException;

import java.io.FileInputStream;
import java.util.Properties;

/*
 * @description 将污染数据以value的形式存入map，然后通过局部变量map和局部变量key来获取value的方式传递的场景。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: OGNL Expression Injection;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_327 {


    public void bad() throws Throwable {
        Properties properties = new Properties();
        properties.load(new FileInputStream("fileInput"));
        sink(properties);
    }

    private void sink(Properties propertiesSink) {
        String data = propertiesSink.getProperty("data");
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
