/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionandroidimeijsonParserparseandroid.cases;

import android.app.Activity;
import android.content.SharedPreferences;
import android.os.Bundle;
import com.google.gson.JsonParser;

/*
 * @description Android污染数据通过SharedPreferences进行传递的场景。
 *
 * @bad onCreate
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection__JSONInjectionandroidimeijsonParserparseandroid_31a extends Activity {

    public static final String PREFS_NAME = "MyPrefsFile";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Restore preferences
        SharedPreferences settings = getSharedPreferences(CWE91_XML_Injection__JSONInjectionandroidimeijsonParserparseandroid_31b.PREFS_NAME, 0);
        String data = settings.getString("imei", "");

        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL TEMP FLAW: JSON Injection */
        jsonParser.parse(data);

    }
}
