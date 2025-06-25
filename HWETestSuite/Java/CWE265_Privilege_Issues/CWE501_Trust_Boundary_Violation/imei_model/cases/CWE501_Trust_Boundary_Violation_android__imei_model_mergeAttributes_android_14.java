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
 * @description Android污染数据存入多维的array中并通过常量值的数组下标进行污染数据访问爆发的场景。
 *
 * @bad bad
 * @good good
 * @cwe 501
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 方健尔 f00563108
 */
public class CWE501_Trust_Boundary_Violation_android__imei_model_mergeAttributes_android_14 extends Activity {


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

        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        /* POTENTIAL TEMP FLAW: Trust Boundary Violation */
        model.mergeAttributes(map);

    }

    private void good() {
        String[][] arrayData = new String[1][1];

        arrayData[0][0] = "element 1 is tainted:";

        String[] slice = arrayData[0];
        String data = slice[0];

        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        model.mergeAttributes(map);

    }


}
