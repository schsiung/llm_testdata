/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_JxtaHash.cases;

import net.jxta.impl.util.JxtaHash;

/*
 * @description 将污染数据以value的形式存入跨类的成员变量map中，然后通过获取跨类的map中的key所对应的value来传递的场景。
 *
 * @cwe 502
 * @bad bad
 * @good good
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 方健尔 f00563108
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_333a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_333b anotherClass = new CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_333b();
        anotherClass.mapSource.put("key1", data);

        sink(anotherClass);
    }

    private void sink(CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_333b anotherClass) throws Throwable {
        String data = anotherClass.mapSource.get("key1");

        /* POTENTIAL FLAW: Weak Cryptographic Hash: User-Controlled Algorithm */
        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

    public void good() throws Throwable {
        CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_333b anotherClass = new CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_333b();
        anotherClass.mapSource.put("key2", "value2");
        goodG2B(anotherClass);
    }

    private void goodG2B(CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_333b anotherClass) throws Throwable {
        String data = anotherClass.mapSource.get("key2");

        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

}
