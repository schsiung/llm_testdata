/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionandroidimeijsonParserparseandroid.cases;

import android.app.Activity;
import android.os.Bundle;
import com.google.gson.JsonParser;

/*
 * @description Android污染数据存入多维的array中并通过常量值的数组下标进行污染数据访问爆发的场景。
 *
 * @bad bad
 * @good good
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection__JSONInjectionandroidimeijsonParserparseandroid_14 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        bad();

        good();
    }

    private void bad() {
        String[][] arrayData = new String[1][1];

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        arrayData[0][0] = imei;

        String[] slice = arrayData[0];
        String data = slice[0];

        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL TEMP FLAW: JSON Injection */
        jsonParser.parse(data);

    }

    private void good() {
        String[][] arrayData = new String[1][1];

        arrayData[0][0] = "element 1 is tainted:";

        String[] slice = arrayData[0];
        String data = slice[0];

        JsonParser jsonParser = new JsonParser();
        jsonParser.parse(data);

    }


}
