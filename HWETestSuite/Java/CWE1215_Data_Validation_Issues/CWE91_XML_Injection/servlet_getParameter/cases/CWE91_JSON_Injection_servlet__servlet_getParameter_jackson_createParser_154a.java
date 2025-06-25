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
 * @bad badSink
 * @tool Fortify:JSON Injection;SecBrella:SecS_JSON_Injection;
 * @author 张自强 z30004299
 *
 */
public class CWE91_JSON_Injection_servlet__servlet_getParameter_jackson_createParser_154a extends HttpServlet {


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

        try {
            Class cls = Class.forName("JSONInjection.JavaJackson.CWE91_JSON_Injection_servlet__servlet_getParameter_jackson_createParser_154c");
            CWE91_JSON_Injection_servlet__servlet_getParameter_jackson_createParser_154b baseClass = (CWE91_JSON_Injection_servlet__servlet_getParameter_jackson_createParser_154b) cls.newInstance();
            baseClass.setData(data);

            badSink(baseClass, request, response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void badSink(CWE91_JSON_Injection_servlet__servlet_getParameter_jackson_createParser_154b baseClass, HttpServletRequest request, HttpServletResponse response) {
        String data = baseClass.getData();

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
