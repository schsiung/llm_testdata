/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.connect_tcp.cases;

import testcasesupport.IO;
import org.springframework.web.bind.annotation.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * Unsafe Injection
 *
 * @cwe 494
 *
 * @bad badSource
 * @tool Fortify:Unsafe Reflection;SecBrella:SecS_Unsafe_Reflection;
 * @author 张自强 z30004299
 *
 */
@RestController
@RequestMapping("/sample")
public class CWE494_Unsafe_Injection_spring__connect_tcp_loadClass_101 {


    @DeleteMapping("/bad")
    public void bad(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @GetMapping("/bad1")
    public void bad1(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @PatchMapping("/bad2")
    public void bad2(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @PostMapping("/bad3")
    public void bad3(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @PutMapping("/bad4")
    public void bad4(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    private void badSource(HttpServletRequest request, HttpServletResponse response) {
        String data = null;

        String guess = "ABC";
        // condition 'A', which is unsafe
        char switchTarget = guess.charAt(0);
        switch (switchTarget) {
            case 'A':
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

            break;
            case 'B':
            default:
                /* INCIDENTAL: CWE 561 Dead Code, the code below will never run
                 * but ensure data is inititialized before the Sink to avoid compiler errors */
                data = null;
                break;
        }

        /* POTENTIAL FLAW: Unsafe Injection */
        try {
            this.getClass().getClassLoader().loadClass(data);
        } catch (ClassNotFoundException e) {
            IO.writeLine(e.getMessage());
        }
    }

}
