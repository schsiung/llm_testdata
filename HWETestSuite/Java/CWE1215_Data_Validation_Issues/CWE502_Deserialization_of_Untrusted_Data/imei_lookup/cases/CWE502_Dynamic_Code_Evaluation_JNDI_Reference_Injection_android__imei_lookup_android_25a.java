/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.imei_lookup.cases;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import testcasesupport.IO;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.util.Properties;

/*
 * @description Android污染数据通过Activity组件Component(String pkg, String cls)进行传递的场景。
 *
 * @bad onCreate
 * @cwe 502
 * @tool fortify: Dynamic Code Evaluation: JNDI Reference Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_android__imei_lookup_android_25a extends Activity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent i = getIntent();
        String data = i.getStringExtra("DroidBench");
        Properties props = new Properties();
        props.put("URL", "rmi://secure-server:1099/");
        InitialContext ctx = null;
        try {
            ctx = new InitialContext(props);
            /* POTENTIAL TEMP FLAW: Dynamic Code Evaluation: JNDI Reference Injection */
            ctx.lookup(data);
        } catch (NamingException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
