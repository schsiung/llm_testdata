/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_XsltCompiler.cases;

/*
 * @description 通过反射得到子类并转化为接口后调用获取污染数据的方法和污染数据爆发的方法进行数据流source点的传递。
 *
 * @cwe 494
 * @bad bad
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 董镇山 d00305016
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_155a {

    public void bad() throws Throwable {
        Class cls = Class.forName("XSLTInjection.CWE494_XSLT_Injection_console__env_XsltCompiler_compile_155c");

        CWE494_XSLT_Injection_console__env_XsltCompiler_compile_155b baseClass = (CWE494_XSLT_Injection_console__env_XsltCompiler_compile_155b) cls.newInstance();
        String data = baseClass.retrieveData();
        baseClass.badSink(data);
    }
}
