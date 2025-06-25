/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_RestTemplate.cases;

/*
 * @description 实现类。数据流source点从抽象类产生，赋值给抽象类的成员变量，在被子类使用时丢失的场景。
 *
 * @cwe 235
 * @bad bad
 * @tool fortify: HTTP Parameter Pollution;secbrella: SecS_HTTP_Parameter_Pollution
 * @author 方健尔 f00563108
 */
public class CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_206a extends CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_206b {


    @Override
    public void abstractMethod() {
        System.out.println("override abstract class's abstract method");
    }

    @Override
    public void bad() throws Throwable {
        super.bad();
        CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_206c.badSink(super.path);
    }

}
