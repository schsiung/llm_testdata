/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_JxtaHash.cases;

import testcasesupport.IO;
import net.jxta.impl.util.JxtaHash;

/*
 * @description 含有if(其它类的静态布尔常量)[if(IO.STATIC_FINAL_TRUE) and if(IO.STATIC_FINAL_FALSE)]判断的数据流传递过程，静态
 * 布尔常量以final修饰。
 *
 * @cwe 502
 * @bad bad
 * @good good
 * @tool fortify: Weak Cryptographic Hash: User-Controlled Algorithm;secbrella: SecS_Weak_Cryptographic_Hash
 * @author 董镇山 d00305016
 */
public class CWE502_Weak_Cryptographic_Hash_User_Controlled_Algorithm_console__env_JxtaHash_09 {


    public void bad() throws Throwable {
        String data;
        if (IO.STATIC_FINAL_TRUE) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


        /* POTENTIAL FLAW: Weak Cryptographic Hash: User-Controlled Algorithm */
        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (IO.STATIC_FINAL_FALSE) {
            data = null;
        } else {
            data = "foo";

        }


        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (IO.STATIC_FINAL_TRUE) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        JxtaHash jxtaHash = new JxtaHash(data, new byte[3]);

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
