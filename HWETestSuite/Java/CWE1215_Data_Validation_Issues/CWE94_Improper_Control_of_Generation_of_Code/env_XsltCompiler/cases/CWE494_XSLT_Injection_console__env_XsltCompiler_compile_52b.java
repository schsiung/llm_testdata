/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_XsltCompiler.cases;

/*
 * @description 数据流source点传递方法，其中的source点通过同一包下三个不同类的方法的参数传递。
 *
 * @cwe 494
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 董镇山 d00305016
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_52b {


    public void badSink(String data) throws Throwable {
        (new CWE494_XSLT_Injection_console__env_XsltCompiler_compile_52c()).badSink(data);
    }

    public void goodG2BSink(String data) throws Throwable {
        (new CWE494_XSLT_Injection_console__env_XsltCompiler_compile_52c()).goodG2BSink(data);
    }
}
