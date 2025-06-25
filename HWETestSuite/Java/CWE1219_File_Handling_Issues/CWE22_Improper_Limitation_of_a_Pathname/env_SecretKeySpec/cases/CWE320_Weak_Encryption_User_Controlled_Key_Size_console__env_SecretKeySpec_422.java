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
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/*
 * @description 在ArrayList中的stream流中调用lambda表达式。
 *
 * @bad bad
 * @cwe 320
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 方健尔 f00563108
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_console__env_SecretKeySpec_422 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.stream().map(data -> {

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

            return data.equals("data");
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
