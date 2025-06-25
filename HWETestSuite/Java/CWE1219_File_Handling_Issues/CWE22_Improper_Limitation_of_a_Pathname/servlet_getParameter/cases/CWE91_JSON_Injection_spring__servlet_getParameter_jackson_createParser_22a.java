/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.servlet_getParameter.cases;

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
 * @bad badSource
 * @tool Fortify:JSON Injection;SecBrella:SecS_JSON_Injection;
 * @author 张自强 z30004299
 *
 */
@RestController
@RequestMapping("/sample")
public class CWE91_JSON_Injection_spring__servlet_getParameter_jackson_createParser_22a {


    /* The public static variable below is used to drive control flow in the source function.
     * The public static variable mimics a global variable in the C/C++ language family. */
    public static boolean badPublicStatic = false;

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

        badPublicStatic = true;
        data = (new CWE91_JSON_Injection_spring__servlet_getParameter_jackson_createParser_22b()).badSource(request);

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
