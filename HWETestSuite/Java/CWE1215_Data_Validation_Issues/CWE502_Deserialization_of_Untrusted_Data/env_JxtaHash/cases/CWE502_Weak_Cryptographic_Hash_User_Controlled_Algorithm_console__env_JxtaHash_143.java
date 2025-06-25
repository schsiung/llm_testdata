/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_JxtaHash.cases;

import net.jxta.impl.util.JxtaHash;

/*
 * @description 数据流source点通过公有的实例get方法和set方法进行传递。
 *
 * @cwe 502
 * @bad bad
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 董镇山 d00305016
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_143 {


    private String dataBad;

    private void badSink() throws Throwable {
        String data = getBadData();


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


        this.setBadData(data);

        badSink();
    }

    public String getBadData() {
        return this.dataBad;
    }

    public void setBadData(String dataBad) {
        this.dataBad = dataBad;
    }
}
