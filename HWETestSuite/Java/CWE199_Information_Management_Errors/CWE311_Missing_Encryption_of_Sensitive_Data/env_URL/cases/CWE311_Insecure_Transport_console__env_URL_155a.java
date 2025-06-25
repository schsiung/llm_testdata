/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;

/*
 * @description 通过反射得到子类并转化为接口后调用获取污染数据的方法和污染数据爆发的方法进行数据流source点的传递。
 *
 * @cwe 311
 * @bad bad
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 董镇山 d00305016
 */
public class CWE311_Insecure_Transport_console__env_URL_155a {

    public void bad() throws Throwable {
        Class cls = Class.forName("InsecureTransport.CWE311_Insecure_Transport_console__env_URL_155c");

        CWE311_Insecure_Transport_console__env_URL_155b baseClass = (CWE311_Insecure_Transport_console__env_URL_155b) cls.newInstance();
        String data = baseClass.retrieveData();
        baseClass.badSink(data);
    }
}
