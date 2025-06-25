/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionconsoleenvjsonParserparse.cases;

import com.google.gson.JsonParser;

/*
 * @description 含有if(语句是否成立)[if(5==5) and if(5!=5)]判断的数据流传递过程。
 *
 * @cwe 91
 * @bad bad
 * @good good
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 董镇山 d00305016
 */
public class CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_03 {


    public void bad() throws Throwable {
        String data;
        if (5 == 5) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL FLAW: JSON Injection */
        jsonParser.parse(data);

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (5 != 5) {
            data = null;
        } else {
            data = "foo";

        }


        JsonParser jsonParser = new JsonParser();
        jsonParser.parse(data);

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (5 == 5) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        JsonParser jsonParser = new JsonParser();
        jsonParser.parse(data);

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
