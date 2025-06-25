/**
 * @testsuite baihu
 */
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.imei_URL.cases;


/*
 * @description Android污染数据存储在成员变量中，通过一个覆写接口方法的类注册位置更新的回调函数onLocationChanged进行传递并爆发的场景，
 * 其中Activity和回调函数通过一个接口解耦。
 *
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 方健尔 f00563108
 */
public interface CWE311_Insecure_Transport_android__imei_URL_android_17c {

    void setData(String data);

}