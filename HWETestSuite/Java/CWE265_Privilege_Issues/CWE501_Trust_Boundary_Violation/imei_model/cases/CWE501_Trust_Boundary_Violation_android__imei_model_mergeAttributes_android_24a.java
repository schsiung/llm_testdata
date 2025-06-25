/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE501_Trust_Boundary_Violation.imei_model.cases;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;

/*
 * @description Android污染数据通过Intent通信赋值进行传递的场景。
 *
 * @bad onCreate
 * @cwe 501
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 方健尔 f00563108
 */
public class CWE501_Trust_Boundary_Violation_android__imei_model_mergeAttributes_android_24a extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent i = getIntent();
        String data = i.getStringExtra("DroidBench");

        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        /* POTENTIAL TEMP FLAW: Trust Boundary Violation */
        model.mergeAttributes(map);

    }
}
