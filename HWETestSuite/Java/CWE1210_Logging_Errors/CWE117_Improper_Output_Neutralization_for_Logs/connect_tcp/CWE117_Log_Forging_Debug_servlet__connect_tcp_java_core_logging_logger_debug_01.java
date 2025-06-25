/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.connect_tcp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/*
 * Log Forging Debug
 *
 * @cwe 117
 * @tool SecBrella:SecS_Log_Forging;SecBrella:SecS_Log_Forging_Debug;Fortify:Log Forging;Fortify:Log Forging (debug);
 * @bad doPost
 * @author 董镇山 d00305016
 *
 */
public class CWE117_Log_Forging_Debug_servlet__connect_tcp_java_core_logging_logger_debug_01 extends HttpServlet {
    private static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String data;

        data = ""; /* Initialize data */


        /* Read data from cookies */
        {
            Cookie cookieSources[] = request.getCookies();
            if (cookieSources != null) {
                data = cookieSources[0].getValue();
            }
        }
        /* POTENTIAL FLAW: log injection debug */
        LOGGER.debug(data);
    }
}

