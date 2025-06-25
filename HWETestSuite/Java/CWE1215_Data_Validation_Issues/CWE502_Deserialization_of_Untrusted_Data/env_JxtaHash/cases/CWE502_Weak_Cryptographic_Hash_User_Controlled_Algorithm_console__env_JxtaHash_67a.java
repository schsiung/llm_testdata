/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_JxtaHash.cases;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过一个内部类的成员变量进行传递。
 *
 * @cwe 502
 * @bad bad
 * @good good
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 董镇山 d00305016
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_67a {


    static class Container {
        public String containerOne;
        public String containerTwo;
    }

    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Container dataContainer = new Container();
        dataContainer.containerOne = data;
        (new CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_67b()).badSink(dataContainer);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        data = "foo";

        Container dataContainer = new Container();
        dataContainer.containerOne = data;
        (new CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_67b()).goodG2BSink(dataContainer);
    }

    private void goodG2B2() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Container dataContainer = new Container();
        dataContainer.containerTwo = data;
        (new CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_67b()).goodG2BSink(dataContainer);
    }
}
