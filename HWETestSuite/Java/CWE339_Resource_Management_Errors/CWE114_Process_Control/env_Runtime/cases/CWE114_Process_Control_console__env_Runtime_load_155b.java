/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

/*
 * @description 数据流source点存储和获取接口，其定义了获取污染数据的方法和污染数据爆发的方法。
 *
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 董镇山 d00305016
 */
public interface CWE114_Process_Control_console__env_Runtime_load_155b {
    String retrieveData();

    void badSink(String data);
}
