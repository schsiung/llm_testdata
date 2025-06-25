/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.imei_transformer.cases;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import testcasesupport.IO;
import org.xml.sax.ContentHandler;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/*
 * @description Android污染数据在onCreate方法中产生并发送到一个动态注册的广播接收器broadcast receiver中爆发的场景。
 *
 * @bad onReceive
 * @cwe 91
 * @tool fortify: XML Injection;secbrella: SecS_XML_Injection;secbrella: XML_Injection;
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection_android__imei_transformer_setOutputProperty_android_40 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        IntentFilter filter = new IntentFilter();
        filter.addAction("de.ecspride.MyAction");

        registerReceiver(new MyReceiver(imei), filter);

        Intent intent = new Intent();
        intent.setAction("de.ecspride.MyAction");
        sendBroadcast(intent);
    }

    private class MyReceiver extends BroadcastReceiver {

        private final String data;

        public MyReceiver(String data) {
            this.data = data;
        }

        @Override
        public void onReceive(android.content.Context context, Intent intent) {

            try {
                ContentHandler contentHandler = new DefaultHandler();
                /* POTENTIAL TEMP FLAW: XML Injection */
                contentHandler.startPrefixMapping(data, "");
            } catch (SAXException e) {
                IO.writeLine(e.getMessage());
            }


        }

    }
}
