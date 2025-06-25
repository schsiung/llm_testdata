/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE99_Improper_Control_of_Resource_Identifiers.imei_createTempFile.cases;

import android.app.Activity;
import android.graphics.PointF;
import android.os.Bundle;
import testcasesupport.IO;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/*
 * @description Android污染数据通过API的自动拆箱方法封装到类中，然后直接获取类的成员变量爆发的场景。
 *
 * @bad onCreate
 * @cwe 99
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 方健尔 f00563108
 */
public class CWE99_Resource_Injection_android__imei_createTempFile_android_08 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        float fx = Float.valueOf(imei.substring(0, 8));
        float fy = Float.valueOf(imei.substring(8));
        PointF point = new PointF(fx, fy);

        String data = String.valueOf(point.x + point.y);

        try {
            /* POTENTIAL TEMP FLAW: Resource Injection */
            Path path = Files.createTempFile(data, ".tpl");

            IO.writeLine(path.getNameCount());

        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }


    }
}
