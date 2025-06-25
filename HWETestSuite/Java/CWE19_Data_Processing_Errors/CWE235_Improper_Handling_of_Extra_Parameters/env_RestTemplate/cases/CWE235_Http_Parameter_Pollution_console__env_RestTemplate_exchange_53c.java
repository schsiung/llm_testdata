/**
* @testsuite baihu
*/
package CWE19_Data_Processing_Errors.CWE235_Improper_Handling_of_Extra_Parameters.env_RestTemplate.cases;

/*
 * @description 数据流source点传递方法，其中的source点通过同一包下四个不同类的方法的参数传递。
 *
 * @cwe 235
 * @tool fortify: HTTP Parameter Pollution;secbrella: SecS_HTTP_Parameter_Pollution
 * @author 董镇山 d00305016
 */
public class CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_53c {


    public void badSink(String data) throws Throwable {
        (new CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_53d()).badSink(data);
    }

    public void goodG2BSink(String data) throws Throwable {
        (new CWE235_Http_Parameter_Pollution_console__env_RestTemplate_exchange_53d()).goodG2BSink(data);
    }
}
