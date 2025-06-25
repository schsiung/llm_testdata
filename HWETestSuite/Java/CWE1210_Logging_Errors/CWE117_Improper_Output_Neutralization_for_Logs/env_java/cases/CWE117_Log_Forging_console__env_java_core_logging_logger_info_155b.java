/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.env_java.cases;

/*
 * @description 数据流source点存储和获取接口，其定义了获取污染数据的方法和污染数据爆发的方法。
 *
 * @cwe 117
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 董镇山 d00305016
 */
public interface CWE117_Log_Forging_console__env_java_core_logging_logger_info_155b {
    String retrieveData();

    void badSink(String data);
}
