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
 * @description 含有if(静态不可变常量布尔值)[if(PRIVATE_STATIC_FINAL_TRUE) and if(PRIVATE_STATIC_FINAL_FALSE)]判断的数据流
 * 传递过程，其中静态常量以final修饰。
 *
 * @cwe 320
 * @bad bad
 * @good good
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 董镇山 d00305016
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_console__env_SecretKeySpec_04 {


    private static final boolean PRIVATE_STATIC_FINAL_TRUE = true;
    private static final boolean PRIVATE_STATIC_FINAL_FALSE = false;

    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_TRUE) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


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

    private void goodG2B1() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_FALSE) {
            data = null;
        } else {
            data = "foo";

        }


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

    private void goodG2B2() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_TRUE) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


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

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
