/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.servlet_cookie.cases;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.logging.Logger;

/*
 * @description Servlet设置过滤器的场景。
 *
 * @cwe 117
 * @bad doGet
 * @tool fortify: Log Forging;secbrella: SecS_Log_Forging;secbrella: Log_Forging;
 * @author 董镇山 d00305016
 */
public class CWE117_Log_Forging_servlet__servlet_cookie_java_core_logging_logger_info_servlet_02 extends HttpServlet {
    public static final Logger LOGGER = Logger.getLogger("LogInjectionTestCase");

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

        /* POTENTIAL FLAW: log injection */
        LOGGER.info(data);

    }
}
