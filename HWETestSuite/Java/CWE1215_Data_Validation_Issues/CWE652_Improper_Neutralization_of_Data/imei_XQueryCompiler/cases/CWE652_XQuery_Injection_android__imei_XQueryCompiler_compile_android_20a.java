/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.imei_XQueryCompiler.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XQueryCompiler;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @bad bad
 * @good good
 * @cwe 652
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 方健尔 f00563108
 */
public class CWE652_XQuery_Injection_android__imei_XQueryCompiler_compile_android_20a extends Activity {

    private CWE652_XQuery_Injection_android__imei_XQueryCompiler_compile_android_20b d1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        d1 = setTaint(d1);
        bad();
        good();
    }

    private CWE652_XQuery_Injection_android__imei_XQueryCompiler_compile_android_20b setTaint(CWE652_XQuery_Injection_android__imei_XQueryCompiler_compile_android_20b data) {
        data = new CWE652_XQuery_Injection_android__imei_XQueryCompiler_compile_android_20b();
        data.setDescription("abc");

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        data.setSecret(imei);

        return data;
    }

    private void bad() {
        String data = d1.getSecret();
        Processor proc = new Processor(false);
        XQueryCompiler comp = proc.newXQueryCompiler();
        try {
            /* POTENTIAL TEMP FLAW: XQuery Injection */
            comp.compile(data);
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void good() {
        String data = d1.getDescription();
        Processor proc = new Processor(false);
        XQueryCompiler comp = proc.newXQueryCompiler();
        try {
            comp.compile(data);
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
