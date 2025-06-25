/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.servlet_getParameter.cases;

import testcasesupport.IO;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import org.springframework.web.bind.annotation.*;
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
 * @author 张自强 z30004299
 *
 */
@RestController
@RequestMapping("/sample")
public class CWE91_JSON_Injection_spring__servlet_getParameter_jackson_createParser_172 {


    @DeleteMapping("/bad")
    public void bad(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @GetMapping("/bad1")
    public void bad1(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @PatchMapping("/bad2")
    public void bad2(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @PostMapping("/bad3")
    public void bad3(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @PutMapping("/bad4")
    public void bad4(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    private void badSource(HttpServletRequest request, HttpServletResponse response) {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data, request, response);

            String[] array = new String[4];
            if ("matched".equals(array[5])) {
                IO.writeLine("matched");
            }
        } catch (RuntimeException e) {
            badSink(data, request, response);
        }
    }

    private String badSource(String data, HttpServletRequest request, HttpServletResponse response) {
        /* Read data from parameter */
        data = request.getParameter("name");

        return data;
    }

    private void badSink(String data, HttpServletRequest request, HttpServletResponse response) {
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
