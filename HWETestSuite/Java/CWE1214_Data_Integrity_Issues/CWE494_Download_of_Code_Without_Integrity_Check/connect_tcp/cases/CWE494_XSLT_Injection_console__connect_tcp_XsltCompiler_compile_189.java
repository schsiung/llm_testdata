/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.connect_tcp.cases;

import android.app.Activity;
import android.os.AsyncTask;
import android.os.Bundle;

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
 * @bad badSink
 * @tool Fortify:XSLT Injection;SecBrella:SecS_XSLT_Injection;
 * @author 张自强 z30004299
 *
 */
public class CWE494_XSLT_Injection_console__connect_tcp_XsltCompiler_compile_189 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        try {
            bad();
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
    }

    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data = badSource();
        (new MyTask(data)).execute();
    }

    public String badSource() throws Throwable {
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


        return data;
    }

    class MyTask extends AsyncTask<Void, Void, Void> {
        private String data;

        public MyTask(String data) {
            this.data = data;
        }

        @Override
        protected Void doInBackground(Void... voids) {

            badSink(this.data);
            return null;
        }

        private void badSink(String data) {
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

}
