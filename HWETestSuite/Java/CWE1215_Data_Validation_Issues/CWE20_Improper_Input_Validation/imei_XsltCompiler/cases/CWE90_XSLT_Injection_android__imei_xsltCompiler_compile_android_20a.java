/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_xsltCompiler.cases;

import android.app.Activity;
import android.os.Bundle;
import net.sf.saxon.BasicTransformerFactory;

import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamSource;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @bad bad
 * @good good
 * @cwe 90
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE90_XSLT_Injection_android__imei_xsltCompiler_compile_android_20a extends Activity {

    private CWE90_XSLT_Injection_android__imei_xsltCompiler_compile_android_20b d1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        d1 = setTaint(d1);
        bad();
        good();
    }

    private CWE90_XSLT_Injection_android__imei_xsltCompiler_compile_android_20b setTaint(CWE90_XSLT_Injection_android__imei_xsltCompiler_compile_android_20b data) {
        data = new CWE90_XSLT_Injection_android__imei_xsltCompiler_compile_android_20b();
        data.setDescription("abc");

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        data.setSecret(imei);

        return data;
    }

    private void bad() {
        String data = d1.getSecret();

        try {
            TransformerFactory transformerFactory = new BasicTransformerFactory();
            /* POTENTIAL TEMP FLAW: XSLT Injection */
            transformerFactory.newTemplates(new StreamSource(data));
        } catch (TransformerConfigurationException e) {
            e.printStackTrace();
        }


    }

    private void good() {
        String data = d1.getDescription();

        try {
            TransformerFactory transformerFactory = new BasicTransformerFactory();
            transformerFactory.newTemplates(new StreamSource(data));
        } catch (TransformerConfigurationException e) {
            e.printStackTrace();
        }

    }
}
