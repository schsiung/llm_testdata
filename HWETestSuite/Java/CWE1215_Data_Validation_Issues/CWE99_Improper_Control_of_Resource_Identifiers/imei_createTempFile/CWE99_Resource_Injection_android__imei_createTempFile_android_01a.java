/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE99_Improper_Control_of_Resource_Identifiers.imei_createTempFile;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/*
 * @description Android污染数据直接从清单的实例中产生然后通过getApplication()从一个继承了Application的类传递到另一个类最后爆发的场景。
 *
 * @cwe 99
 * @bad bad
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 方健尔 f00563108
 */
public class CWE99_Resource_Injection_android__imei_createTempFile_android_01a extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String data = ((CWE99_Resource_Injection_android__imei_createTempFile_android_01c) getApplication()).imei;

        try {
            /* POTENTIAL TEMP FLAW: Resource Injection */
            Path path = Files.createTempFile(data, ".tpl");

            IO.writeLine(path.getNameCount());

        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
