/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_JxtaHash.cases;

/*
 * @description 类承载filed支持传递过程。
 *
 * @cwe 502
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 方健尔 f00563108
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_69b {
    public String filedB;

    public CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_69b() {
    }

    public CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_69b(String data) {
        this.filedB = data;
    }
}
