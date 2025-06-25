/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.servlet_cookie.cases;

import org.apache.torque.TorqueException;
import org.apache.torque.util.BasePeer;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * SQL Injection
 *
 * @cwe 89
 *
 * @bad doPost
 * @tool Fortify:SQL Injection;SecBrella:SecS_SQL_Injection;
 * @author 董镇山 d00305016
 *
 */
public class CWE89_SQL_Injection_servlet__servlet_cookie_BasePeer_executeStatement_22a extends HttpServlet {


    /* The public static variable below is used to drive control flow in the source function.
     * The public static variable mimics a global variable in the C/C++ language family. */
    public static boolean badPublicStatic = false;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String data;

        badPublicStatic = true;
        data = (new CWE89_SQL_Injection_servlet__servlet_cookie_BasePeer_executeStatement_22b()).badSource(request);


        try {
            /* POTENTIAL FLAW: SQL Injection */
            BasePeer.executeStatement("SELECT emp FROM employee emp WHERE emp.firstName ='" + data + "'");
        } catch (TorqueException e) {
            e.printStackTrace();
        }

    }
}
