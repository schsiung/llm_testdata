/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

import testcasesupport.IO;
import com.opensymphony.xwork2.ognl.OgnlUtil;
import ognl.OgnlException;

/*
 * @description 数据流sink点爆发方法，其中的source点通过同一包下两个不同类的方法的参数传递。
 *
 * @cwe 94
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_51b {


    public void badSink(String data) throws Throwable {
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

    public void goodG2BSink(String data) throws Throwable {
        OgnlUtil ognlUtil = new OgnlUtil();
        Object value = null;
        try {
            value = ognlUtil.getValue(data, null, null);

            if (value != null) {
                IO.writeLine(value.toString());
            }
        } catch (OgnlException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
