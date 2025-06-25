/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.imei_Writer.cases;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;

/*
 * @description Android污染数据在onCreate方法中产生并发送到一个动态注册的广播接收器broadcast receiver中爆发的场景。
 *
 * @bad onReceive
 * @cwe 74
 * @tool fortify: Formula Injection
 * @author 方健尔 f00563108
 */
public class CWE74_Formula_Injection_android__imei_Writer_print_android_40 extends Activity {


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
                Writer writer = new PrintWriter("text.txt");

                /* POTENTIAL TEMP FLAW: Formula Injection */
                ((PrintWriter) writer).print(data);
            } catch (FileNotFoundException e) {
                IO.writeLine(e.getMessage());
            }

        }

    }
}
