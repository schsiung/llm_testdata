/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

import testcasesupport.IO;
import com.opensymphony.xwork2.ognl.OgnlUtil;
import ognl.OgnlException;

/*
 * @description 数据流source点通过私有静态常量的拷贝和toLowerCase进行传递。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_135 {
    private static String dataCopy;


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
            String data = dataCopy.toLowerCase();

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
}
