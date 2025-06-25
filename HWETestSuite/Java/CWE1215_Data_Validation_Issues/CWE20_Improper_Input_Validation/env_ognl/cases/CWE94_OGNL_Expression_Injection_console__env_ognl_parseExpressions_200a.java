/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_ognl.cases;

import testcasesupport.IO;
import ognl.Ognl;
import ognl.OgnlContext;
import ognl.OgnlException;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: OGNL Expression Injection;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_200a implements CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {
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
