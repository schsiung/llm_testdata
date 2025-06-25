/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.env_XsltCompiler.cases;

/*
 * @description 数据流source点存储类，其通过反射调用set方法存储在成员变量中，并且通过反射调用get方法进行获取传递。
 *
 * @cwe 494
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 董镇山 d00305016
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_153b {
    private String data;

    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }
}
