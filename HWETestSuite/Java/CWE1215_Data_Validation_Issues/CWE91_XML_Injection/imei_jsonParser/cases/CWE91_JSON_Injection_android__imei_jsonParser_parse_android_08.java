/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.imei_jsonParser.cases;

import android.app.Activity;
import android.graphics.PointF;
import android.os.Bundle;
import com.google.gson.JsonParser;

/*
 * @description Android污染数据通过API的自动拆箱方法封装到类中，然后直接获取类的成员变量爆发的场景。
 *
 * @bad onCreate
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_JSON_Injection_android__imei_jsonParser_parse_android_08 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        float fx = Float.valueOf(imei.substring(0, 8));
        float fy = Float.valueOf(imei.substring(8));
        PointF point = new PointF(fx, fy);

        String data = String.valueOf(point.x + point.y);


        JsonParser jsonParser = new JsonParser();
        /* POTENTIAL TEMP FLAW: JSON Injection */
        jsonParser.parse(data);


    }
}
