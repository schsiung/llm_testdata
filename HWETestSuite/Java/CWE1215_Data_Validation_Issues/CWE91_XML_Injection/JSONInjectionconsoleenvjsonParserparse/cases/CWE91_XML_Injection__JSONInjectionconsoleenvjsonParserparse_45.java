/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionconsoleenvjsonParserparse.cases;

import com.google.gson.JsonParser;

/*
 * @description 数据流source点通过同一个类中的私有成员变量dataBad传递。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 董镇山 d00305016
 */
public class CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_45 {


    private String dataBad;
    private String dataGoodG2B;

    private void badSink() throws Throwable {
        String data = dataBad;


        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL FLAW: JSON Injection */
        jsonParser.parse(data);

    }

    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        dataBad = data;
        badSink();
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2BSink() throws Throwable {
        String data = dataGoodG2B;


        JsonParser jsonParser = new JsonParser();
        jsonParser.parse(data);

    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        dataGoodG2B = data;
        goodG2BSink();
    }
}
