/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.servlet_cookie.cases;

import testcasesupport.IO;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * Server Side Request Forgery
 *
 * @cwe 918
 *
 * @bad badSource
 * @tool Fortify:Server-Side Request Forgery;SecBrella:SecS_Server_Side_Request_Forgery;
 * @author 张自强 z30004299
 *
 */
@RestController
@RequestMapping("/sample")
public class CWE918_Server_Side_Request_Forgery_spring__servlet_cookie_url_connection_10 {


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
        if (IO.staticTrue) {
            data = ""; /* Initialize data */

            /* Read data from cookies */
            {
                Cookie cookieSources[] = request.getCookies();
                if (cookieSources != null) {
                    data = cookieSources[0].getValue();
                }
            }
        } else {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = null;
        }


        ResourceLoader resourceLoader = new DefaultResourceLoader();
        /* POTENTIAL FLAW: Server-Side Request Forgery */
        resourceLoader.getResource(data);

    }
}
