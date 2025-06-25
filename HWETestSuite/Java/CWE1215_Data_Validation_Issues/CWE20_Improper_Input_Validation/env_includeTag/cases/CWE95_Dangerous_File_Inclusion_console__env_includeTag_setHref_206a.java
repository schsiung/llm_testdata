/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_includeTag.cases;

/*
 * @description 实现类。数据流source点从抽象类产生，赋值给抽象类的成员变量，在被子类使用时丢失的场景。
 *
 * @cwe 95
 * @bad bad
 * @tool fortify: Dangerous File Inclusion;secbrella: SecS_Dangerous_File_Inclusion
 * @author 方健尔 f00563108
 */
public class CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_206a extends CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_206b {


    @Override
    public void abstractMethod() {
        System.out.println("override abstract class's abstract method");
    }

    @Override
    public void bad() throws Throwable {
        super.bad();
        CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_206c.badSink(super.path);
    }

}
