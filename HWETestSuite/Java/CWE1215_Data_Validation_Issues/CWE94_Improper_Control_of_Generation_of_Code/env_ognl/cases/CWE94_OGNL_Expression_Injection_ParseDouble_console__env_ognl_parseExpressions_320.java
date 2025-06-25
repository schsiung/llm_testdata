/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

import testcasesupport.IO;
import com.opensymphony.xwork2.ognl.OgnlUtil;
import ognl.OgnlException;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以value的形式存入map，然后通过获取key所对应的value来传递的场景。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_320 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badGoodSource();
        String data = mapSource.get("key1");

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

    private Map<String, String> badGoodSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        map.put("key1", data);
        map.put("key2", "foo");
        return map;
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        Map<String, String> mapSource = badGoodSource();
        String data = mapSource.get("key2");

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
