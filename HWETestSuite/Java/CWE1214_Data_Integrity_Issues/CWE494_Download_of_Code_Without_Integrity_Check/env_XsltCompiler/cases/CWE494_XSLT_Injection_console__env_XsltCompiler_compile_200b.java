/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.env_XsltCompiler.cases;

/*
 * @description 接口。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 494
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public interface CWE494_XSLT_Injection_console__env_XsltCompiler_compile_200b {

    String CONTAMINANT = CWE494_XSLT_Injection_console__env_XsltCompiler_compile_200c.getBadSource();

    void bad() throws Throwable;
}
