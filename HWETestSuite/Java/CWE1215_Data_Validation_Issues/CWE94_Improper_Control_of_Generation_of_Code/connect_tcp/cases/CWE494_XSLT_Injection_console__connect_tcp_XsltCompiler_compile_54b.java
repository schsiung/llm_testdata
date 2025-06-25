/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.connect_tcp.cases;

/*
 * XSLT Injection
 *
 * @cwe 494
 *
 * @good goodG2BSink
 * @author 董镇山 d00305016
 *
 */
public class CWE494_XSLT_Injection_console__connect_tcp_XsltCompiler_compile_54b {


    public void badSink(String data) throws Throwable {
        (new CWE494_XSLT_Injection_console__connect_tcp_XsltCompiler_compile_54c()).badSink(data);
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(String data) throws Throwable {
        (new CWE494_XSLT_Injection_console__connect_tcp_XsltCompiler_compile_54c()).goodG2BSink(data);
    }
}
