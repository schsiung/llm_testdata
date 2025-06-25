/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE99_Improper_Control_of_Resource_Identifiers.imei_createTempFile.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/*
 * @description Android污染数据写入file中，然后从file中读取并爆发的场景。
 *
 * @bad onResume
 * @cwe 99
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 方健尔 f00563108
 */
public class CWE99_Resource_Injection_android__imei_createTempFile_android_07 extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        try {
            FileOutputStream fos = openFileOutput("out.txt", android.content.Context.MODE_PRIVATE);
            fos.write(imei.getBytes());
            fos.close();
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        try {
            FileInputStream fis = openFileInput("out.txt");
            byte[] buf = new byte[256];
            for (int i = 0; i < buf.length; i++)
                buf[i] = '\0';
            fis.read(buf);
            fis.close();

            String data = new String(buf).trim();

            try {
                /* POTENTIAL TEMP FLAW: Resource Injection */
                Path path = Files.createTempFile(data, ".tpl");

                IO.writeLine(path.getNameCount());

            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            }

        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }
}
