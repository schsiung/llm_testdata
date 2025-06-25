/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.imei_Runtime.cases;

/*
 * @description Android污染数据存储在成员变量中，通过一个覆写接口方法的类注册位置更新的回调函数onLocationChanged进行传递并爆发的场景，
 * 其中Activity和回调函数通过一个接口解耦。
 *
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public interface CWE114_Process_Control_android__imei_Runtime_load_android_17c {

    void setData(String data);

}
