/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.servlet_cookie.cases;

import testcasesupport.IO;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;

/*
 * @description Servlet设置过滤器的场景。
 *
 * @cwe 74
 * @bad doGet
 * @tool fortify: Formula Injection
 * @author 董镇山 d00305016
 */
public class CWE74_Formula_Injection_servlet__servlet_cookie_Writer_print_servlet_02 extends HttpServlet {


    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    // TODO
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String data;
        if (true) {
            data = ""; /* Initialize data */

            /* Read data from cookies */
            {
                Cookie cookieSources[] = request.getCookies();
                if (cookieSources != null) {
                    data = cookieSources[0].getValue();
                }
            }


        } else {
            data = null;
        }


        try {
            Writer writer = new PrintWriter("text.txt");

            /* POTENTIAL FLAW: Formula Injection */
            ((PrintWriter) writer).print(data);
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
