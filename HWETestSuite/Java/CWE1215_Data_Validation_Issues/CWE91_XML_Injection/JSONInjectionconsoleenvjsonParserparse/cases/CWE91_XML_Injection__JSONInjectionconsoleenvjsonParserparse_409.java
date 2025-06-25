/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionconsoleenvjsonParserparse.cases;

import com.google.gson.JsonParser;

import java.util.function.Supplier;

/*
 * @description 调用Supplier类型lambda表达式的get()方法传递的场景。
 *
 * @bad bad
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_409 {


    public void bad() throws Throwable {
        Supplier<StringBuffer> sc1 = () -> {
            String data;
            data = ""; /* Initialize data */
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            return new StringBuffer(data);
        };
        String data = sc1.get().toString();

        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL FLAW: JSON Injection */
        jsonParser.parse(data);

    }
}
