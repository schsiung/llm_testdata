/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_method.cases;

/*
 * @description 抽象类。数据流source点从抽象类产生，在被子类调用时丢失的场景。
 *
 * @cwe 470
 * @tool fortify: Unsafe Reflection;secbrella: SecS_Unsafe_Reflection;secbrella: Unsafe_Reflection;
 * @author 方健尔 f00563108
 */
public abstract class CWE470_Unsafe_Reflection_console__env_method_invoke_206b {

    protected String path;

    public abstract void abstractMethod();

    public void bad() throws Throwable {
        path = CWE470_Unsafe_Reflection_console__env_method_invoke_206c.badSource();
    }
}
