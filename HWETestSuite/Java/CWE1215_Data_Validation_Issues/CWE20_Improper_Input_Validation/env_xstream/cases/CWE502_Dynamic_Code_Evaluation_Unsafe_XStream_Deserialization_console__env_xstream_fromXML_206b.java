/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_xstream.cases;

/*
 * @description 抽象类。数据流source点从抽象类产生，在被子类调用时丢失的场景。
 *
 * @cwe 502
 * @tool fortify: Dynamic Code Evaluation: Unsafe XStream Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public abstract class CWE502_Dynamic_Code_Evaluation_Unsafe_XStream_Deserialization_console__env_xstream_fromXML_206b {

    protected String path;

    public abstract void abstractMethod();

    public void bad() throws Throwable {
        path = CWE502_Dynamic_Code_Evaluation_Unsafe_XStream_Deserialization_console__env_xstream_fromXML_206c.badSource();
    }
}
