/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE113_HTTP_Response_Splitting__listen_tcp_setHeaderServlet_08.java
Label Definition File: CWE113_HTTP_Response_Splitting.label.xml
Template File: sources-sinks-08.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 113 HTTP Response Splitting
* BadSource: listen_tcp Read data using a listening tcp connection
* GoodSource: A hardcoded string
* Sinks: setHeaderServlet
*    GoodSink: URLEncode input
*    BadSink : querystring to setHeader()
* Flow Variant: 08 Control flow: if(privateReturnsTrue()) and if(privateReturnsFalse())
*
* */

package testcases.CWE113_HTTP_Response_Splitting;
import testcasesupport.*;

import javax.servlet.http.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.net.Socket;
import java.net.ServerSocket;

import java.util.logging.Level;

import java.net.URLEncoder;

public class CWE113_HTTP_Response_Splitting__listen_tcp_setHeaderServlet_08 extends AbstractTestCaseServlet
{
    /* The methods below always return the same value, so a tool
     * should be able to figure out that every call to these
     * methods will return true or return false. */
    private boolean privateReturnsTrue()
    {
        return true;
    }

    private boolean privateReturnsFalse()
    {
        return false;
    }

    public void bad(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        String data;
        if (privateReturnsTrue())
        {
            data = ""; /* Initialize data */
            /* Read data using a listening tcp connection */
            {
                ServerSocket listener = null;
                Socket socket = null;
                BufferedReader readerBuffered = null;
                InputStreamReader readerInputStream = null;
                /* Read data using a listening tcp connection */
                try
                {
                    listener = new ServerSocket(39543);
                    socket = listener.accept();
                    /* read input from socket */
                    readerInputStream = new InputStreamReader(socket.getInputStream(), "UTF-8");
                    readerBuffered = new BufferedReader(readerInputStream);
                    /* POTENTIAL FLAW: Read data using a listening tcp connection */
                    data = readerBuffered.readLine();
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error with stream reading", exceptIO);
                }
                finally
                {
                    /* Close stream reading objects */
                    try
                    {
                        if (readerBuffered != null)
                        {
                            readerBuffered.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing BufferedReader", exceptIO);
                    }

                    try
                    {
                        if (readerInputStream != null)
                        {
                            readerInputStream.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing InputStreamReader", exceptIO);
                    }

                    /* Close socket objects */
                    try
                    {
                        if (socket != null)
                        {
                            socket.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing Socket", exceptIO);
                    }

                    try
                    {
                        if (listener != null)
                        {
                            listener.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing ServerSocket", exceptIO);
                    }
                }
            }
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = null;
        }

        if (privateReturnsTrue())
        {
            if (data != null)
            {
                /* POTENTIAL FLAW: Input not verified before inclusion in header */
                response.setHeader("Location", "/author.jsp?lang=" + data);
            }
        }
    }

    /* goodG2B1() - use goodsource and badsink by changing first privateReturnsTrue() to privateReturnsFalse() */
    private void goodG2B1(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        String data;
        if (privateReturnsFalse())
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = null;
        }
        else
        {

            /* FIX: Use a hardcoded string */
            data = "foo";

        }

        if (privateReturnsTrue())
        {
            if (data != null)
            {
                /* POTENTIAL FLAW: Input not verified before inclusion in header */
                response.setHeader("Location", "/author.jsp?lang=" + data);
            }
        }
    }

    /* goodG2B2() - use goodsource and badsink by reversing statements in first if */
    private void goodG2B2(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        String data;
        if (privateReturnsTrue())
        {
            /* FIX: Use a hardcoded string */
            data = "foo";
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = null;
        }

        if (privateReturnsTrue())
        {
            if (data != null)
            {
                /* POTENTIAL FLAW: Input not verified before inclusion in header */
                response.setHeader("Location", "/author.jsp?lang=" + data);
            }
        }
    }

    /* goodB2G1() - use badsource and goodsink by changing second privateReturnsTrue() to privateReturnsFalse() */
    private void goodB2G1(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        String data;
        if (privateReturnsTrue())
        {
            data = ""; /* Initialize data */
            /* Read data using a listening tcp connection */
            {
                ServerSocket listener = null;
                Socket socket = null;
                BufferedReader readerBuffered = null;
                InputStreamReader readerInputStream = null;
                /* Read data using a listening tcp connection */
                try
                {
                    listener = new ServerSocket(39543);
                    socket = listener.accept();
                    /* read input from socket */
                    readerInputStream = new InputStreamReader(socket.getInputStream(), "UTF-8");
                    readerBuffered = new BufferedReader(readerInputStream);
                    /* POTENTIAL FLAW: Read data using a listening tcp connection */
                    data = readerBuffered.readLine();
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error with stream reading", exceptIO);
                }
                finally
                {
                    /* Close stream reading objects */
                    try
                    {
                        if (readerBuffered != null)
                        {
                            readerBuffered.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing BufferedReader", exceptIO);
                    }

                    try
                    {
                        if (readerInputStream != null)
                        {
                            readerInputStream.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing InputStreamReader", exceptIO);
                    }

                    /* Close socket objects */
                    try
                    {
                        if (socket != null)
                        {
                            socket.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing Socket", exceptIO);
                    }

                    try
                    {
                        if (listener != null)
                        {
                            listener.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing ServerSocket", exceptIO);
                    }
                }
            }
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = null;
        }

        if (privateReturnsFalse())
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
            IO.writeLine("Benign, fixed string");
        }
        else
        {

            if (data != null)
            {
                /* FIX: use URLEncoder.encode to hex-encode non-alphanumerics */
                data = URLEncoder.encode(data, "UTF-8");
                response.setHeader("Location", "/author.jsp?lang=" + data);
            }

        }
    }

    /* goodB2G2() - use badsource and goodsink by reversing statements in second if  */
    private void goodB2G2(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        String data;
        if (privateReturnsTrue())
        {
            data = ""; /* Initialize data */
            /* Read data using a listening tcp connection */
            {
                ServerSocket listener = null;
                Socket socket = null;
                BufferedReader readerBuffered = null;
                InputStreamReader readerInputStream = null;
                /* Read data using a listening tcp connection */
                try
                {
                    listener = new ServerSocket(39543);
                    socket = listener.accept();
                    /* read input from socket */
                    readerInputStream = new InputStreamReader(socket.getInputStream(), "UTF-8");
                    readerBuffered = new BufferedReader(readerInputStream);
                    /* POTENTIAL FLAW: Read data using a listening tcp connection */
                    data = readerBuffered.readLine();
                }
                catch (IOException exceptIO)
                {
                    IO.logger.log(Level.WARNING, "Error with stream reading", exceptIO);
                }
                finally
                {
                    /* Close stream reading objects */
                    try
                    {
                        if (readerBuffered != null)
                        {
                            readerBuffered.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing BufferedReader", exceptIO);
                    }

                    try
                    {
                        if (readerInputStream != null)
                        {
                            readerInputStream.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing InputStreamReader", exceptIO);
                    }

                    /* Close socket objects */
                    try
                    {
                        if (socket != null)
                        {
                            socket.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing Socket", exceptIO);
                    }

                    try
                    {
                        if (listener != null)
                        {
                            listener.close();
                        }
                    }
                    catch (IOException exceptIO)
                    {
                        IO.logger.log(Level.WARNING, "Error closing ServerSocket", exceptIO);
                    }
                }
            }
        }
        else
        {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = null;
        }

        if (privateReturnsTrue())
        {
            if (data != null)
            {
                /* FIX: use URLEncoder.encode to hex-encode non-alphanumerics */
                data = URLEncoder.encode(data, "UTF-8");
                response.setHeader("Location", "/author.jsp?lang=" + data);
            }
        }
    }

    public void good(HttpServletRequest request, HttpServletResponse response) throws Throwable
    {
        goodG2B1(request, response);
        goodG2B2(request, response);
        goodB2G1(request, response);
        goodB2G2(request, response);
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
