/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.imei_xmlReader.cases;

import android.app.Activity;
import android.os.Bundle;
import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.UrlResource;

import java.net.MalformedURLException;

/*
 * @description Android污染数据直接从清单的实例中产生并爆发的场景。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 方健尔 f00563108
 */
public class CWE94_Spring_Beans_Injection_android__imei_xmlReader_loadBeanDefinitions_android_02 extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        String data = imei;

        bad(data);
    }

    private void bad(String data) {

        try {
            GenericApplicationContext ctx = new GenericApplicationContext();
            XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
            /* POTENTIAL TEMP FLAW: Spring Beans Injection */
            xmlReader.loadBeanDefinitions(new UrlResource(data));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }


}
