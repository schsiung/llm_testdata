/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_SecretKeySpec.cases;

import testcasesupport.IO;

import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

/*
 * @description 将污染数据以key的形式存入map，然后通过迭代器遍历key的方式来传递的场景。
 *
 * @cwe 320
 * @bad bad
 * @good good
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 方健尔 f00563108
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_console__env_SecretKeySpec_322 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.keySet()) {

            String password = "";
            Properties prop = new Properties();
            try {
                prop.load(new FileInputStream("config.properties"));
                String keySize = prop.getProperty("keySize");
                PBEKeySpec spec = new PBEKeySpec(password.toCharArray(), new byte[10], 1, Integer.parseInt(keySize));
                SecretKeyFactory factory = SecretKeyFactory.getInstance("AES");
                SecretKey secretKey = factory.generateSecret(spec);

                /* POTENTIAL FLAW: Weak Encryption User Controlled Key Size。*/
                SecretKeySpec secret = new SecretKeySpec(secretKey.getEncoded(), 0, Integer.parseInt(data), "AES");
            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            } catch (NoSuchAlgorithmException e) {
                IO.writeLine(e.getMessage());
            } catch (InvalidKeySpecException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }

    private Map<String, String> badSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        map.put(data, "value1");
        map.put("key2", "value2");
        return map;
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        Map<String, String> mapSource = goodSource();
        for (String data : mapSource.keySet()) {

            String password = "";
            Properties prop = new Properties();
            try {
                prop.load(new FileInputStream("config.properties"));
                String keySize = prop.getProperty("keySize");
                PBEKeySpec spec = new PBEKeySpec(password.toCharArray(), new byte[10], 1, Integer.parseInt(keySize));
                SecretKeyFactory factory = SecretKeyFactory.getInstance("AES");
                SecretKey secretKey = factory.generateSecret(spec);

                SecretKeySpec secret = new SecretKeySpec(secretKey.getEncoded(), 0, Integer.parseInt(data), "AES");
            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            } catch (NoSuchAlgorithmException e) {
                IO.writeLine(e.getMessage());
            } catch (InvalidKeySpecException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }

    private Map<String, String> goodSource() throws Throwable {
        Map<String, String> map = new HashMap<>();
        map.put("key1", "foo1");
        map.put("key2", "foo2");
        map.put("key3", "foo3");
        return map;
    }
}
