/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionandroidimeijsonParserparseandroid.cases;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import com.google.gson.JsonParser;

/*
 * @description Android污染数据通过BroadCast的接收器receiver进行传递的场景。
 *
 * @bad onCreate
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection__JSONInjectionandroidimeijsonParserparseandroid_29 extends Activity {

    private static String ACTION = "edu.mit.icc_broadcast_programmatic_intentfilter.action";

    @Override
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        BroadcastReceiver receiver = new BroadcastReceiver() {
            public void onReceive(android.content.Context c, Intent i) {
                String data = i.getStringExtra("imei");

                if (data != null) {

                    JsonParser jsonParser = new JsonParser();
                    /* POTENTIAL TEMP FLAW: JSON Injection */
                    jsonParser.parse(data);

                }
            }
        };

        this.registerReceiver(receiver, new IntentFilter(ACTION));
    }

    public void onDestroy() {
        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        Intent intent = new Intent(ACTION);
        intent.putExtra("imei", imei);

        sendBroadcast(intent);
        super.onDestroy();
    }
}
