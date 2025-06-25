/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_SecretKeySpec.cases;

import android.app.Service;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.os.Messenger;
import android.widget.Toast;
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
 * @description Android污染数据通过ICC(组件间通讯)服务机制传递的场景。
 *
 * @bad onCreate
 * @cwe 320
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 方健尔 f00563108
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_android__imei_SecretKeySpec_android_30a extends Service {


    /**
     * Command to the service to display a message
     */
    static final int MSG_SAY_HELLO = 1;

    /**
     * Handler of incoming messages from clients.
     */
    class IncomingHandler extends Handler {
        @Override
        public void handleMessage(Message msg) {
            switch (msg.what) {
                case MSG_SAY_HELLO:
                    int tainted = msg.arg1;
                    String data = String.valueOf(tainted);


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


                    break;
                default:
                    super.handleMessage(msg);
            }
        }
    }

    /**
     * Target we publish for clients to send messages to IncomingHandler.
     */
    final Messenger mMessenger = new Messenger(new IncomingHandler());

    /**
     * When binding to the service, we return an interface to our messenger
     * for sending messages to the service.
     */
    @Override
    public IBinder onBind(Intent intent) {
        Toast.makeText(getApplicationContext(), "binding", Toast.LENGTH_SHORT).show();
        return mMessenger.getBinder();
    }
}
