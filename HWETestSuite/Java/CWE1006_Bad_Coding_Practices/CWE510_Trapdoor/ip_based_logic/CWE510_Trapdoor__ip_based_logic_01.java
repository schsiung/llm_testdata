/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE510_Trapdoor__ip_based_logic_01.java
Label Definition File: CWE510_Trapdoor.label.xml
Template File: point-flaw-01.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 510 Trapdoor
* Sinks: ip_based_logic
*    GoodSink: No special code for a specific IP address
*    BadSink : Special code is executed upon connection of a specific IP address
* Flow Variant: 01 Baseline
*
* */

package testcases.CWE510_Trapdoor;

import testcasesupport.*;

import java.io.OutputStream;
import java.io.IOException;

import java.net.Socket;
import java.net.ServerSocket;

import java.util.logging.Level;

public class CWE510_Trapdoor__ip_based_logic_01 extends AbstractTestCase
{
    public void bad() throws Throwable
    {

        ServerSocket listener = null;
        Socket socket = null;
        OutputStream streamOutput = null;

        int port = 20000;

        try
        {
            listener = new ServerSocket(port);
            socket = listener.accept(); /* INCIDENTAL: Use of Socket */
            /* FLAW: IP-based logic */
            if (socket.getInetAddress().getHostAddress().equals("192.168.30.123"))
            {
                streamOutput = socket.getOutputStream();
                streamOutput.write("Welcome, admin!".getBytes("UTF-8"));
            }
            else
            {
                streamOutput = socket.getOutputStream();
                streamOutput.write("Welcome, user.".getBytes("UTF-8"));
            }
        }
        catch (IOException exceptIO)
        {
            IO.logger.log(Level.WARNING, "Could not connect to port " + Integer.toString(port), exceptIO);
        }
        finally
        {
            try
            {
                if (streamOutput != null)
                {
                    streamOutput.close();
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error closing objects", exceptIO);
            }

            try
            {
                if (socket != null)
                {
                    socket.close();
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error closing objects", exceptIO);
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
                IO.logger.log(Level.WARNING, "Error closing objects", exceptIO);
            }
        }

    }

    public void good() throws Throwable
    {
        good1();
    }

    private void good1() throws Throwable
    {

        ServerSocket listener = null;
        Socket socket = null;
        OutputStream streamOutput = null;

        int port = 20000;

        try
        {
            listener = new ServerSocket(port);
            socket = listener.accept();
            streamOutput = socket.getOutputStream();
            /* FIX: No host-based logic */
            streamOutput.write(("Welcome, " + socket.getInetAddress().getHostAddress()).getBytes("UTF-8"));
        }
        catch (IOException exceptIO)
        {
            IO.logger.log(Level.WARNING, "Could not connect to port " + Integer.toString(port), exceptIO);
        }
        finally
        {
            try
            {
                if (streamOutput != null)
                {
                    streamOutput.close();
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error closing objects", exceptIO);
            }

            try
            {
                if (socket != null)
                {
                    socket.close();
                }
            }
            catch (IOException exceptIO)
            {
                IO.logger.log(Level.WARNING, "Error closing objects", exceptIO);
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
                IO.logger.log(Level.WARNING, "Error closing objects", exceptIO);
            }

        }

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

