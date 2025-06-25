/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_jsonParser.cases;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过强转的Object类型进行传递。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 董镇山 d00305016
 */
public class CWE91_JSON_Injection_console__env_jsonParser_parse_71a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        (new CWE91_JSON_Injection_console__env_jsonParser_parse_71b()).badSink((Object) data);
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        (new CWE91_JSON_Injection_console__env_jsonParser_parse_71b()).goodG2BSink((Object) data);
    }
}
