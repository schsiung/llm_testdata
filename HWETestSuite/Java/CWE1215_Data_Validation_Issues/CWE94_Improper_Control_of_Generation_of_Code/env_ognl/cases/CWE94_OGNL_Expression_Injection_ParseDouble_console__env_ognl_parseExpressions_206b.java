/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

/*
 * @description 抽象类。数据流source点从抽象类产生，在被子类调用时丢失的场景。
 *
 * @cwe 94
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 方健尔 f00563108
 */
public abstract class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_206b {

    protected String path;

    public abstract void abstractMethod();

    public void bad() throws Throwable {
        path = CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_206c.badSource();
    }
}
