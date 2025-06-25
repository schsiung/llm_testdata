/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.imei_XsltCompiler.cases;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Message;
import android.os.Messenger;
import android.view.View;

/*
 * @description Android污染数据通过ICC(组件间通讯)服务机制传递的场景。
 *
 * @cwe 494
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE494_XSLT_Injection_android__imei_XsltCompiler_compile_android_30b extends Activity {
    /**
     * Messenger for communicating with the service.
     */
    Messenger mService = null;

    /**
     * Flag indicating whether we have called bind on the service.
     */
    boolean mBound;

    /**
     * Class for interacting with the main interface of the service.
     */
    private ServiceConnection mConnection = new ServiceConnection() {
        public void onServiceConnected(ComponentName className, IBinder service) {
            // This is called when the connection with the service has been
            // established, giving us the object we can use to
            // interact with the service.  We are communicating with the
            // service using a Messenger, so here we get a client-side
            // representation of that from the raw IBinder object.
            mService = new Messenger(service);
            mBound = true;
        }

        public void onServiceDisconnected(ComponentName className) {
            // This is called when the connection with the service has been
            // unexpectedly disconnected -- that is, its process crashed.
            mService = null;
            mBound = false;
        }
    };

    public void sayHello(View v) {
        if (!mBound) return;
        // Create and send a message to the service, using a supported 'what' value
        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        int data = Integer.parseInt(imei);
        Message msg = Message.obtain(null, CWE494_XSLT_Injection_android__imei_XsltCompiler_compile_android_30a.MSG_SAY_HELLO, data, 0);
        try {
            mService.send(msg);
        } catch (android.os.RemoteException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    protected void onStart() {
        super.onStart();
        // Bind to the service
        bindService(new Intent(this, CWE494_XSLT_Injection_android__imei_XsltCompiler_compile_android_30a.class), mConnection,
            android.content.Context.BIND_AUTO_CREATE);
    }

    @Override
    protected void onStop() {
        super.onStop();
        // Unbind from the service
        if (mBound) {
            unbindService(mConnection);
            mBound = false;
        }
    }
}
