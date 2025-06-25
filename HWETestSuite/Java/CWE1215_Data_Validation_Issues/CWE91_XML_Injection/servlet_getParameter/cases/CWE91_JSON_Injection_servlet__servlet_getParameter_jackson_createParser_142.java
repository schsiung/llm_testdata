/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.servlet_getParameter.cases;

import testcasesupport.IO;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * JSON Injection
 *
 * @cwe 91
 *
 * @bad doPost
 * @tool Fortify:JSON Injection;SecBrella:SecS_JSON_Injection;
 * @author 董镇山 d00305016
 *
 */
public class CWE91_JSON_Injection_servlet__servlet_getParameter_jackson_createParser_142 extends HttpServlet {


    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String data;

        data = ""; /* Initialize data */

        /* Read data from parameter */
        data = request.getParameter("name");

        data = doSomething(data);

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

    private static String doSomething(String param) {
        String data = param;

        return data;
    }
}
