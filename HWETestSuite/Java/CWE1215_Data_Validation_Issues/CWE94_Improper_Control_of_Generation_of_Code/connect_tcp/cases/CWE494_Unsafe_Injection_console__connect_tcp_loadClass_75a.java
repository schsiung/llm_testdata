/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.connect_tcp.cases;

import testcasesupport.IO;
import java.io.*;
import java.net.Socket;

/*
 * Unsafe Injection
 *
 * @cwe 494
 *
 * @good good;goodG2B
 * @author 董镇山 d00305016
 *
 */
public class CWE494_Unsafe_Injection_console__connect_tcp_loadClass_75a {


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


        /* serialize data to a byte array */
        ByteArrayOutputStream streamByteArrayOutput = null;
        ObjectOutput outputObject = null;

        try {
            streamByteArrayOutput = new ByteArrayOutputStream();
            outputObject = new ObjectOutputStream(streamByteArrayOutput);
            outputObject.writeObject(data);
            byte[] dataSerialized = streamByteArrayOutput.toByteArray();
            (new CWE494_Unsafe_Injection_console__connect_tcp_loadClass_75b()).badSink(dataSerialized);
        } catch (IOException exceptIO) {
            IO.writeLine("IOException in serialization");
        } finally {
            /* clean up stream writing objects */
            try {
                if (outputObject != null) {
                    outputObject.close();
                }
            } catch (IOException exceptIO) {
                IO.writeLine("Error closing ObjectOutputStream");
            }

            try {
                if (streamByteArrayOutput != null) {
                    streamByteArrayOutput.close();
                }
            } catch (IOException exceptIO) {
                IO.writeLine("Error closing ByteArrayOutputStream");
            }
        }
    }

    public void good() throws Throwable {
        goodG2B();
    }

    /* goodG2B() - use goodsource and badsink */
    private void goodG2B() throws Throwable {
        String data;

        /* FIX: Use a hardcoded string */
        data = "foo";

        /* serialize data to a byte array */
        ByteArrayOutputStream streamByteArrayOutput = null;
        ObjectOutput outputObject = null;

        try {
            streamByteArrayOutput = new ByteArrayOutputStream();
            outputObject = new ObjectOutputStream(streamByteArrayOutput);
            outputObject.writeObject(data);
            byte[] dataSerialized = streamByteArrayOutput.toByteArray();
            (new CWE494_Unsafe_Injection_console__connect_tcp_loadClass_75b()).goodG2BSink(dataSerialized);
        } catch (IOException exceptIO) {
            IO.writeLine("IOException in serialization");
        } finally {
            /* clean up stream writing objects */
            try {
                if (outputObject != null) {
                    outputObject.close();
                }
            } catch (IOException exceptIO) {
                IO.writeLine("Error closing ObjectOutputStream");
            }

            try {
                if (streamByteArrayOutput != null) {
                    streamByteArrayOutput.close();
                }
            } catch (IOException exceptIO) {
                IO.writeLine("Error closing ByteArrayOutputStream");
            }
        }
    }
}
