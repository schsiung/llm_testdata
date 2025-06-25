/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.connect_tcp;

import testcasesupport.IO;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

/*
 * Unsafe Injection
 *
 * @cwe 494
 *
 * @bad bad
 * @tool Fortify:Unsafe Reflection;SecBrella:SecS_Unsafe_Reflection;
 * @good good;goodG2B
 * @author 董镇山 d00305016
 *
 */
public class CWE494_Unsafe_Injection_console__connect_tcp_loadClass_01 {


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


        /* POTENTIAL FLAW: Unsafe Injection */
        try {
            this.getClass().getClassLoader().loadClass(data);
        } catch (ClassNotFoundException e) {
            IO.writeLine(e.getMessage());
        }
    }

    public void good() throws Throwable {
        goodG2B();
    }

    /* goodG2B() - uses goodsource and badsink */
    private void goodG2B() throws Throwable {
        String data;

        /* FIX: Use a hardcoded string */
        data = "foo";

        try {
            this.getClass().getClassLoader().loadClass(data);
        } catch (ClassNotFoundException e) {
            IO.writeLine(e.getMessage());
        }
    }
}
