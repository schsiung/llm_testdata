/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.console_password.cases;

/*
 * @description 实现类。数据流source点从抽象类产生，赋值给抽象类的成员变量，在被子类使用时丢失的场景。
 *
 * @cwe 359
 * @bad bad
 * @tool fortify: Privacy Violation;secbrella: SecS_Privacy_Violation
 * @author 方健尔 f00563108
 */
public class CWE359_Privacy_Violation_console__console_password_java_core_nio_files_write_206a extends CWE359_Privacy_Violation_console__console_password_java_core_nio_files_write_206b {


    @Override
    public void abstractMethod() {
        System.out.println("override abstract class's abstract method");
    }

    @Override
    public void bad() throws Throwable {
        super.bad();
        CWE359_Privacy_Violation_console__console_password_java_core_nio_files_write_206c.badSink(super.path);
    }

}
