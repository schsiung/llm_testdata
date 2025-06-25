/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_ognl.cases;

import testcasesupport.IO;
import com.opensymphony.xwork2.ognl.OgnlUtil;
import ognl.OgnlException;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_22b()).badSource();

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

    public static boolean goodG2B1PublicStatic = false;
    public static boolean goodG2B2PublicStatic = false;

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        goodG2B1PublicStatic = false;
        data = (new CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_22b()).goodG2B1Source();

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

    private void goodG2B2() throws Throwable {
        String data;

        goodG2B2PublicStatic = true;
        data = (new CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_22b()).goodG2B2Source();

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
