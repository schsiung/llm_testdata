/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_JxtaHash.cases;

import net.jxta.impl.util.JxtaHash;

/*
 * @description 数据流source点通过同一个类中的私有成员变量dataBad传递。
 *
 * @cwe 502
 * @bad bad
 * @good good
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 董镇山 d00305016
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_45 {


    private String dataBad;
    private String dataGoodG2B;

    private void badSink() throws Throwable {
        String data = dataBad;


        /* POTENTIAL FLAW: Weak Cryptographic Hash: User-Controlled Algorithm */
        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        dataBad = data;
        badSink();
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2BSink() throws Throwable {
        String data = dataGoodG2B;


        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        dataGoodG2B = data;
        goodG2BSink();
    }
}
