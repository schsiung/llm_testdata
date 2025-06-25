/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.connect_tcp.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XsltCompiler;
import java.io.*;
import java.net.Socket;
import java.util.logging.Level;
import javax.xml.transform.stream.StreamSource;

/*
 * XSLT Injection
 *
 * @cwe 494
 *
 * @bad bad
 * @tool Fortify:XSLT Injection;SecBrella:SecS_XSLT_Injection;
 * @good goodG2B;good
 * @author 董镇山 d00305016
 *
 */
public class CWE494_XSLT_Injection_console__connect_tcp_XsltCompiler_compile_17 {


    /* uses badsource and badsink */
    public void bad() throws Throwable {
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


        for (int i = 0; i < 1; i++) {
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

    /* goodG2B() - use goodsource and badsink by reversing the block outside the
     * for statement with the one in the for statement */
    private void goodG2B() throws Throwable {
        String data;

        /* FIX: Use a hardcoded string */
        data = "foo";

        for (int i = 0; i < 1; i++) {
            try (InputStream transformerStream = new FileInputStream(data)) {
                Processor proc = new Processor(false);
                XsltCompiler compiler = proc.newXsltCompiler();
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

    public void good() throws Throwable {
        goodG2B();
    }
}
