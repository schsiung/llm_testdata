/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_SecretKeySpec.cases;

import android.app.Activity;
import android.content.SharedPreferences;
import android.os.Bundle;
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
 * @description Android污染数据通过SharedPreferences进行传递的场景。
 *
 * @bad onCreate
 * @cwe 320
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 方健尔 f00563108
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_android__imei_SecretKeySpec_android_31a extends Activity {

    public static final String PREFS_NAME = "MyPrefsFile";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Restore preferences
        SharedPreferences settings = getSharedPreferences(CWE320_Weak_Encryption_User_Controlled_Key_Size_android__imei_SecretKeySpec_android_31b.PREFS_NAME, 0);
        String data = settings.getString("imei", "");

        String password = "";
        Properties prop = new Properties();
        try {
            prop.load(new FileInputStream("config.properties"));
            String keySize = prop.getProperty("keySize");
            PBEKeySpec spec = new PBEKeySpec(password.toCharArray(), new byte[10], 1, Integer.parseInt(keySize));
            SecretKeyFactory factory = SecretKeyFactory.getInstance("AES");
            SecretKey secretKey = factory.generateSecret(spec);

            /* POTENTIAL TEMP FLAW: Weak Encryption User Controlled Key Size。*/
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
