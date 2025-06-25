/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.servlet_getParameter.cases;

import testcasesupport.IO;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * JSON Injection
 *
 * @cwe 91
 *
 * @bad badSink
 * @tool Fortify:JSON Injection;SecBrella:SecS_JSON_Injection;
 * @author 董镇山 d00305016
 *
 */
public class CWE91_JSON_Injection_servlet__servlet_getParameter_jackson_createParser_68b {


    public void badSink(HttpServletRequest request, HttpServletResponse response) {
        String data = CWE91_JSON_Injection_servlet__servlet_getParameter_jackson_createParser_68a.data;

        JsonFactory factory = new JsonFactory();
        JsonParser parser = null;
        try {
            /* POTENTIAL FLAW: JSON Injection */
            parser = factory.createParser(data);
            while (!parser.isClosed()) {
                JsonToken jsonToken = parser.nextToken();

                IO.writeLine(jsonToken.toString());
            }
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }
    }
}
