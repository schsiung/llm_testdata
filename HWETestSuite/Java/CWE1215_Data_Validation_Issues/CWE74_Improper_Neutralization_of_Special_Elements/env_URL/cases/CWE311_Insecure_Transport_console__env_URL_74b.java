/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_URL.cases;


import testcasesupport.IO;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 311
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 董镇山 d00305016
 */
public class CWE311_Insecure_Transport_console__env_URL_74b {


    public void badSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        URL url = null;
        try {
            /* POTENTIAL FLAW: Insecure Transport */
            url = new URL(data);
        } catch (MalformedURLException e) {
            IO.writeLine(e.getMessage());
        }
        IO.writeLine(url.getPath());

    }

    public void goodG2BSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        URL url = null;
        try {
            url = new URL(data);
        } catch (MalformedURLException e) {
            IO.writeLine(e.getMessage());
        }
        IO.writeLine(url.getPath());

    }
}
