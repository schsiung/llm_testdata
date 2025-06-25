/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;


import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;

/*
 * @description 数据流source点通过System.arraycopy进行传递。
 *
 * @cwe 311
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 董镇山 d00305016
 */
public class CWE311_Insecure_Transport_console__env_URL_161b {


    public void badSink(String dataArray[]) throws Throwable {
        String[] arrayCopy = new String[dataArray.length];
        System.arraycopy(dataArray, 0, arrayCopy, 0, dataArray.length);

        String data = arrayCopy[2];


        URL url = null;
        try {
            /* POTENTIAL FLAW: Insecure Transport */
            url = new URL(data);
        } catch (MalformedURLException e) {
            IO.writeLine(e.getMessage());
        }
        IO.writeLine(url.getPath());

    }

    public void goodG2BSink(String dataArray[]) throws Throwable {
        String[] arrayCopy = new String[dataArray.length];
        System.arraycopy(dataArray, 0, arrayCopy, 0, dataArray.length);

        String data = arrayCopy[2];


        URL url = null;
        try {
            url = new URL(data);
        } catch (MalformedURLException e) {
            IO.writeLine(e.getMessage());
        }
        IO.writeLine(url.getPath());

    }
}
