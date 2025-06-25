/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionandroidimeijsonParserparseandroid.cases;

import android.app.Activity;
import android.os.Bundle;
import com.google.gson.JsonParser;

/*
 * @description Android污染数据直接从清单的实例中产生并爆发的场景。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection__JSONInjectionandroidimeijsonParserparseandroid_02 extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        String data = imei;

        bad(data);
    }

    private void bad(String data) {

        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL TEMP FLAW: JSON Injection */
        jsonParser.parse(data);

    }


}
