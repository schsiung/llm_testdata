/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_JxtaHash.cases;

import net.jxta.impl.util.JxtaHash;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 502
 * @bad bad
 * @good good
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 方健尔 f00563108
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        /* POTENTIAL FLAW: Weak Cryptographic Hash: User-Controlled Algorithm */
        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_201b.validUntrustedInput(data);

        /* POTENTIAL FLAW: Weak Cryptographic Hash: User-Controlled Algorithm */
        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_201b.checkUntrustedInput(data);

        /* POTENTIAL FLAW: Weak Cryptographic Hash: User-Controlled Algorithm */
        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
