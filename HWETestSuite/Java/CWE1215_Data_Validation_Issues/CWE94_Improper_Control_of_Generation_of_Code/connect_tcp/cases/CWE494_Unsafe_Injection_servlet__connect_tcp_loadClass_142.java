/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.connect_tcp.cases;

import testcasesupport.IO;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * Unsafe Injection
 *
 * @cwe 494
 *
 * @bad doPost
 * @tool Fortify:Unsafe Reflection;SecBrella:SecS_Unsafe_Reflection;
 * @author 董镇山 d00305016
 *
 */
public class CWE494_Unsafe_Injection_servlet__connect_tcp_loadClass_142 extends HttpServlet {


    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String data;

        data = ""; /* Initialize data */

        /* Read data using an outbound tcp connection */
        {
            Socket socket = null;
            BufferedReader readerBuffered = null;
            InputStreamReader readerInputStream = null;

            try {
                /* Read data using an outbound tcp connection */
                socket = new Socket("host.example.org", 39544);

                /* read input from socket */

                readerInputStream = new InputStreamReader(socket.getInputStream(), "UTF-8");
                readerBuffered = new BufferedReader(readerInputStream);

                data = readerBuffered.readLine();
            } catch (IOException exceptIO) {
                IO.logger.log(java.util.logging.Level.WARNING, "Error with stream reading", exceptIO);
            } finally {
                /* clean up stream reading objects */
                try {
                    if (readerBuffered != null) {
                        readerBuffered.close();
                    }
                } catch (IOException exceptIO) {
                    IO.logger.log(java.util.logging.Level.WARNING, "Error closing BufferedReader", exceptIO);
                }

                try {
                    if (readerInputStream != null) {
                        readerInputStream.close();
                    }
                } catch (IOException exceptIO) {
                    IO.logger.log(java.util.logging.Level.WARNING, "Error closing InputStreamReader", exceptIO);
                }

                /* clean up socket objects */
                try {
                    if (socket != null) {
                        socket.close();
                    }
                } catch (IOException exceptIO) {
                    IO.logger.log(java.util.logging.Level.WARNING, "Error closing Socket", exceptIO);
                }
            }
        }


        data = doSomething(data);

        /* POTENTIAL FLAW: Unsafe Injection */
        try {
            this.getClass().getClassLoader().loadClass(data);
        } catch (ClassNotFoundException e) {
            IO.writeLine(e.getMessage());
        }
    }

    private static String doSomething(String param) {
        String data = param;

        return data;
    }
}
