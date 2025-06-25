/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_XsltCompiler.cases;

/*
 * @description 实现类。数据流source点从抽象类产生，赋值给抽象类的成员变量，在被子类使用时丢失的场景。
 *
 * @cwe 494
 * @bad bad
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_206a extends CWE494_XSLT_Injection_console__env_XsltCompiler_compile_206b {


    @Override
    public void abstractMethod() {
        System.out.println("override abstract class's abstract method");
    }

    @Override
    public void bad() throws Throwable {
        super.bad();
        CWE494_XSLT_Injection_console__env_XsltCompiler_compile_206c.badSink(super.path);
    }

}
