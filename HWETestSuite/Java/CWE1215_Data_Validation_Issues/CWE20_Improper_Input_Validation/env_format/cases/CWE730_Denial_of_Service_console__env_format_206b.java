/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_format.cases;

/*
 * @description 抽象类。数据流source点从抽象类产生，在被子类调用时丢失的场景。
 *
 * @cwe 730
 * @tool fortify:Denial of Service: Format String;secbrella: SecS_Denial_of_Service;secbrella: Regex_Injection;
 * @author 方健尔 f00563108
 */
public abstract class CWE730_Denial_of_Service_console__env_format_206b {

    protected String path;

    public abstract void abstractMethod();

    public void bad() throws Throwable {
        path = CWE730_Denial_of_Service_console__env_format_206c.badSource();
    }
}
