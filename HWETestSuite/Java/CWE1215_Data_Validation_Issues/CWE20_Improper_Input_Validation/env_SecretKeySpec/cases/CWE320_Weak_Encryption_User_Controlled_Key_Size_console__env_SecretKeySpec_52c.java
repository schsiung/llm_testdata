/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_SecretKeySpec.cases;

import testcasesupport.IO;

import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Properties;

/*
 * @description 数据流sink点爆发方法，其中的source点通过同一包下三个不同类的方法的参数传递。
 *
 * @cwe 320
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 董镇山 d00305016
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_console__env_SecretKeySpec_52c {


    public void badSink(String data) throws Throwable {

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

    public void goodG2BSink(String data) throws Throwable {

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
