/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_JxtaHash.cases;

import net.jxta.impl.util.JxtaHash;

import java.util.ArrayList;
import java.util.List;

/*
 * @description 在ArrayList中的forEach方法中调用lambda表达式。
 *
 * @bad bad
 * @cwe 502
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 方健尔 f00563108
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_421 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.forEach(data -> {

            /* POTENTIAL FLAW: Weak Cryptographic Hash: User-Controlled Algorithm */
            JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

        });
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
