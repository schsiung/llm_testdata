/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_jsonParser.cases;

/*
 * @description 数据流source点存储和获取接口，其定义了存储set和获取get的方法。
 *
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 董镇山 d00305016
 */
public interface CWE91_JSON_Injection_console__env_jsonParser_parse_154b {
    void setData(String data);

    String getData();
}
