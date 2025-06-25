/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.imei_Writer.cases;

/*
 * @description Android污染数据存储在成员变量中，通过一个覆写接口方法的类注册位置更新的回调函数onLocationChanged进行传递并爆发的场景，
 * 其中Activity和回调函数通过一个接口解耦。
 *
 * @tool fortify: Formula Injection
 * @author 方健尔 f00563108
 */
public interface CWE74_Formula_Injection_android__imei_Writer_print_android_17c {

    void setData(String data);

}
