/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;


import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;

/*
 * @description 含有if(语句是否成立)[if(5==5) and if(5!=5)]判断的数据流传递过程。
 *
 * @cwe 311
 * @bad bad
 * @good good
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 董镇山 d00305016
 */
public class CWE311_Insecure_Transport_console__env_URL_03 {


    public void bad() throws Throwable {
        String data;
        if (5 == 5) {
            data = ""; /* Initialize data */

            /* Read data with hardcode prefix http */
            data = "http:xxxxx";

        } else {
            data = null;
        }


        URL url = null;
        try {
            /* POTENTIAL FLAW: Insecure Transport */
            url = new URL(data);
        } catch (MalformedURLException e) {
            IO.writeLine(e.getMessage());
        }
        IO.writeLine(url.getPath());

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (5 != 5) {
            data = null;
        } else {
            data = "foo";

        }


        URL url = null;
        try {
            url = new URL(data);
        } catch (MalformedURLException e) {
            IO.writeLine(e.getMessage());
        }
        IO.writeLine(url.getPath());

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (5 == 5) {
            data = "foo";
        } else {
            data = null;
            /* Read data with hardcode prefix http */
            data = "http:xxxxx";

        }


        URL url = null;
        try {
            url = new URL(data);
        } catch (MalformedURLException e) {
            IO.writeLine(e.getMessage());
        }
        IO.writeLine(url.getPath());

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
