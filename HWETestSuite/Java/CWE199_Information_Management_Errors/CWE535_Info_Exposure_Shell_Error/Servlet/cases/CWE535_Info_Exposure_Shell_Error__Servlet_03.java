/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE535_Info_Exposure_Shell_Error__Servlet_03.java
Label Definition File: CWE535_Info_Exposure_Shell_Error__Servlet.label.xml
Template File: point-flaw-03.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 535 Information Exposure through Shell Error
* Sinks:
*    GoodSink: write non-sensitive information to System.err
*    BadSink : Expose the session ID to System.err
* Flow Variant: 03 Control flow: if(5==5) and if(5!=5)
*
* */

package testcases.CWE535_Info_Exposure_Shell_Error;

import testcasesupport.*;

import javax.servlet.http.*;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

import java.util.logging.Level;

public class CWE535_Info_Exposure_Shell_Error__Servlet_03 extends AbstractTestCaseServlet
{
    public void bad(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        if (5 == 5)
        {
            if (request.getParameter("username") == null)
            {
                return;
            }
            String username = request.getParameter("username");
            OutputStreamWriter writerOutputStream = null;
            PrintWriter writerPrint = null;
            if (username.matches("[a-zA-Z0-9]*"))
            {
                HttpSession session = request.getSession(true);
                writerOutputStream = new OutputStreamWriter(System.err, "UTF-8");
                writerPrint = new PrintWriter(writerOutputStream);
                /* FLAW: Expose the session ID to stderr */
                writerPrint.println("Username: " + username + " Session ID:" + session.getId());
            }
            else
            {
                response.getWriter().println("Invalid characters");
            }
            try
            {
                if (writerOutputStream != null)
                {
                    writerOutputStream.close();
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error closing OutputStreamWriter", exceptIO);
            }
        }
    }

    /* good1() changes 5==5 to 5!=5 */
    private void good1(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        if (5 != 5)
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
            IO.writeLine("Benign, fixed string");
        }
        else
        {

            if (request.getParameter("username") == null)
            {
                return;
            }

            String username = request.getParameter("username");
            OutputStreamWriter writerOutputStream = null;
            PrintWriter writerPrint = null;

            if (username.matches("[a-zA-Z0-9]*"))
            {
                writerOutputStream = new OutputStreamWriter(System.err, "UTF-8");
                writerPrint = new PrintWriter(writerOutputStream);
                /* FIX: message to stderr does not contain session id */
                writerPrint.println("Username: " + username + " logged in");
            }
            else
            {
                response.getWriter().println("Invalid characters");
            }

            try
            {
                if (writerOutputStream != null)
                {
                    writerOutputStream.close();
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error closing OutputStreamWriter", exceptIO);
            }

        }
    }

    /* good2() reverses the bodies in the if statement */
    private void good2(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        if (5 == 5)
        {
            if (request.getParameter("username") == null)
            {
                return;
            }
            String username = request.getParameter("username");
            OutputStreamWriter writerOutputStream = null;
            PrintWriter writerPrint = null;
            if (username.matches("[a-zA-Z0-9]*"))
            {
                writerOutputStream = new OutputStreamWriter(System.err, "UTF-8");
                writerPrint = new PrintWriter(writerOutputStream);
                /* FIX: message to stderr does not contain session id */
                writerPrint.println("Username: " + username + " logged in");
            }
            else
            {
                response.getWriter().println("Invalid characters");
            }
            try
            {
                if (writerOutputStream != null)
                {
                    writerOutputStream.close();
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error closing OutputStreamWriter", exceptIO);
            }
        }
    }

    public void good(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        good1(request, response);
        good2(request, response);
    }

    /* Below is the main(). It is only used when building this testcase on
     * its own for testing or for building a binary to use in testing binary
     * analysis tools. It is not used when compiling all the testcases as one
     * application, which is how source code analysis tools are tested.
     */
    public static void main(String[] args) throws ClassNotFoundException,
           InstantiationException, IllegalAccessException
    {
        mainFromParent(args);
    }
}
