/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

/*
 * @description 数据流source点存储类，其通过反射调用set方法存储在成员变量中，并且通过反射调用get方法进行获取传递。
 *
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 董镇山 d00305016
 */
public class CWE114_Process_Control_console__env_Runtime_load_153b {
    private String data;

    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }
}
