/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

/*
 * @description 通过反射得到子类并转化为接口后调用获取污染数据的方法和污染数据爆发的方法进行数据流source点的传递。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_155a {

    public void bad() throws Throwable {
        Class cls = Class.forName("OGNLExpressionInjection.ParseDouble.CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_155c");

        CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_155b baseClass = (CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_155b) cls.newInstance();
        String data = baseClass.retrieveData();
        baseClass.badSink(data);
    }
}
