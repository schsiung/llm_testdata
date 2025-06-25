/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE99_Improper_Control_of_Resource_Identifiers.env_createTempFile.cases;

/*
 * @description 数据流source点传递方法，其中的source点通过同一包下五个不同类的方法的参数传递。
 *
 * @cwe 99
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 董镇山 d00305016
 */
public class CWE99_Resource_Injection_console__env_createTempFile_54d {


    public void badSink(String data) throws Throwable {
        (new CWE99_Resource_Injection_console__env_createTempFile_54e()).badSink(data);
    }

    public void goodG2BSink(String data) throws Throwable {
        (new CWE99_Resource_Injection_console__env_createTempFile_54e()).goodG2BSink(data);
    }
}
