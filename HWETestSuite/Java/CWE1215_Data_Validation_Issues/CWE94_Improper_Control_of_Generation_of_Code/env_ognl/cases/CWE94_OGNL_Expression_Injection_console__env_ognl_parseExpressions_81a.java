/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

/*
 * @description 继承一个抽象类，数据流source点通过调用该抽象类实例的方法参数进行传递。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: OGNL Expression Injection;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 董镇山 d00305016
 */
public class CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_81a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_81_base baseObject = new CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_81_bad();
        baseObject.action(data);
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_81_base baseObject = new CWE94_OGNL_Expression_Injection_console__env_ognl_parseExpressions_81_goodG2B();
        baseObject.action(data);
    }
}
