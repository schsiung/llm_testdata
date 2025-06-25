/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.imei_XsltCompiler.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XsltCompiler;

import javax.xml.transform.stream.StreamSource;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

/*
 * @description Android污染数据直接从清单的实例中产生并爆发的场景。
 *
 * @cwe 494
 * @bad bad
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE494_XSLT_Injection_android__imei_XsltCompiler_compile_android_02 extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        String data = imei;

        bad(data);
    }

    private void bad(String data) {
        try (InputStream transformerStream = new FileInputStream(data)) {
            Processor proc = new Processor(false);
            XsltCompiler compiler = proc.newXsltCompiler();
            /* POTENTIAL TEMP FLAW: XSLT Injection */
            compiler.compile(new StreamSource(transformerStream));
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }


}
