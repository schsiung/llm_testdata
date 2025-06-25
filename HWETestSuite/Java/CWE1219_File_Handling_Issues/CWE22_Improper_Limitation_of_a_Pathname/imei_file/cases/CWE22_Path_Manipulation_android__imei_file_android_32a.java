/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.imei_file.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;

import java.io.File;

/*
 * @description Android污染数据通过共享的单例Singleton进行传递的场景。
 *
 * @bad onCreate
 * @cwe 22
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 方健尔 f00563108
 */
public class CWE22_Path_Manipulation_android__imei_file_android_32a extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        CWE22_Path_Manipulation_android__imei_file_android_32c.v().s = "";
    }

    protected void onStop() {
        super.onStop();
        String data = CWE22_Path_Manipulation_android__imei_file_android_32c.v().s;
        /* POTENTIAL TEMP FLAW: path manipulation */
        File file = new File(data);
        IO.writeLine(file.getName());

    }
}
