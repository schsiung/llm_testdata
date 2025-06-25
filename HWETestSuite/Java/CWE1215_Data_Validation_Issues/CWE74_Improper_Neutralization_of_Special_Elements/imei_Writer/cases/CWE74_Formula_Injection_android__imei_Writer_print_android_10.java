/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.imei_Writer.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;

/*
 * @description Android污染数据和非污染数据存入array中，并通过常量值的数组下标进行污染数据访问爆发的场景。
 *
 * @bad bad
 * @good good
 * @cwe 74
 * @tool fortify: Formula Injection
 * @author 方健尔 f00563108
 */
public class CWE74_Formula_Injection_android__imei_Writer_print_android_10 extends Activity {

    private static String[] arrayData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        source();

        bad();

        good();
    }

    private void bad() {
        String data = arrayData[1];

        try {
            Writer writer = new PrintWriter("text.txt");

            /* POTENTIAL TEMP FLAW: Formula Injection */
            ((PrintWriter) writer).print(data);
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void good() {
        String data = arrayData[2];

        try {
            Writer writer = new PrintWriter("text.txt");

            ((PrintWriter) writer).print(data);
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void source() {
        arrayData = new String[3];

        arrayData[0] = "element 1 is tainted:";

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        arrayData[1] = imei;

        arrayData[2] = "neutral text";
    }
}
