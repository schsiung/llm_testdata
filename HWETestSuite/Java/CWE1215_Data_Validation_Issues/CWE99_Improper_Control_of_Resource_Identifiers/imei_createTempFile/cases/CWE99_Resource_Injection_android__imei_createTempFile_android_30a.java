/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE99_Improper_Control_of_Resource_Identifiers.imei_createTempFile.cases;

import android.app.Service;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.os.Messenger;
import android.widget.Toast;
import testcasesupport.IO;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/*
 * @description Android污染数据通过ICC(组件间通讯)服务机制传递的场景。
 *
 * @bad onCreate
 * @cwe 99
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 方健尔 f00563108
 */
public class CWE99_Resource_Injection_android__imei_createTempFile_android_30a extends Service {


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

                    try {
                        /* POTENTIAL TEMP FLAW: Resource Injection */
                        Path path = Files.createTempFile(data, ".tpl");

                        IO.writeLine(path.getNameCount());

                    } catch (IOException e) {
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
