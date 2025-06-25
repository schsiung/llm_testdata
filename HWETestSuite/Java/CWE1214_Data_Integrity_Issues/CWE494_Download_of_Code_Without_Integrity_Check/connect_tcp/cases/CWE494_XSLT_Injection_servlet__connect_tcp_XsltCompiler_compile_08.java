/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.connect_tcp.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XsltCompiler;
import java.io.*;
import java.net.Socket;
import java.util.logging.Level;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.stream.StreamSource;

/*
 * XSLT Injection
 *
 * @cwe 494
 *
 * @bad doPost
 * @tool Fortify:XSLT Injection;SecBrella:SecS_XSLT_Injection;
 * @author 董镇山 d00305016
 *
 */
public class CWE494_XSLT_Injection_servlet__connect_tcp_XsltCompiler_compile_08 extends HttpServlet {


    /* The methods below always return the same value, so a tool
     * should be able to figure out that every call to these
     * methods will return true or return false.
     */
    private boolean privateReturnsTrue() {
        return true;
    }

    private boolean privateReturnsFalse() {
        return false;
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String data;
        if (privateReturnsTrue()) {
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
                    IO.logger.log(Level.WARNING, "Error with stream reading", exceptIO);
                } finally {
                    /* clean up stream reading objects */
                    try {
                        if (readerBuffered != null) {
                            readerBuffered.close();
                        }
                    } catch (IOException exceptIO) {
                        IO.logger.log(Level.WARNING, "Error closing BufferedReader", exceptIO);
                    }

                    try {
                        if (readerInputStream != null) {
                            readerInputStream.close();
                        }
                    } catch (IOException exceptIO) {
                        IO.logger.log(Level.WARNING, "Error closing InputStreamReader", exceptIO);
                    }

                    /* clean up socket objects */
                    try {
                        if (socket != null) {
                            socket.close();
                        }
                    } catch (IOException exceptIO) {
                        IO.logger.log(Level.WARNING, "Error closing Socket", exceptIO);
                    }
                }
            }

        } else {
            /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
             * but ensure data is inititialized before the Sink to avoid compiler errors */
            data = null;
        }

        try (InputStream transformerStream = new FileInputStream(data)) {
            Processor proc = new Processor(false);
            XsltCompiler compiler = proc.newXsltCompiler();
            /* POTENTIAL FLAW: XSLT Injection */
            compiler.compile(new StreamSource(transformerStream));
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }
    }
}
