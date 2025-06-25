/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE501_Trust_Boundary_Violation.imei_model.cases;

import android.app.Activity;
import android.os.Bundle;
import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;

/*
 * @description Android污染数据和非污染数据存入array中，并通过方法返回值得到的下标进行污染数据访问爆发的场景。
 *
 * @bad bad
 * @good good
 * @cwe 501
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 方健尔 f00563108
 */
public class CWE501_Trust_Boundary_Violation_android__imei_model_mergeAttributes_android_11 extends Activity {

    private static String[] arrayData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        source();

        bad(calculateIndexBad());

        good(calculateIndexGood());
    }

    private void bad(int index) {
        String data = arrayData[index];

        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        /* POTENTIAL TEMP FLAW: Trust Boundary Violation */
        model.mergeAttributes(map);

    }

    private void good(int index) {
        String data = arrayData[index];

        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        model.mergeAttributes(map);

    }

    private void source() {
        arrayData = new String[10];

        arrayData[0] = "element 1 is tainted:";

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        arrayData[5] = imei;

        arrayData[4] = "neutral text";
    }

    private int calculateIndexBad() {
        int index = 1;
        index++;
        index *= 5;
        index = index % 10;
        index += 5;
        return index;
    }

    private int calculateIndexGood() {
        int index = 1;
        index++;
        index *= 5;
        index = index % 10;
        index += 4;
        return index;
    }
}
