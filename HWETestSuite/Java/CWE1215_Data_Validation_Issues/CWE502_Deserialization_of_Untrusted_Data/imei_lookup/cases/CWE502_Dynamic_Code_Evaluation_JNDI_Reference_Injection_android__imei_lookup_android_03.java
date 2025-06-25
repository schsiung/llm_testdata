/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.imei_lookup.cases;

import android.app.Activity;
import android.os.Bundle;
import testcasesupport.IO;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.util.Properties;

/*
 * @description Android污染数据直接从清单的实例中产生并爆发的场景。
 *
 * @cwe 502
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: JNDI Reference Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE502_Dynamic_Code_Evaluation_JNDI_Reference_Injection_android__imei_lookup_android_03 extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        bad();
    }

    class A {
        public String b = "Y";
    }

    class B {
        public A attr;
    }

    private void bad() {
        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");


        A b, q, y;
        B a, p, x;

        a = new B();
        p = new B();

        b = new A();
        q = new A();

        if (Math.random() < 0.5) {
            x = a;
            y = b;
        } else {
            x = p;
            y = q;
        }

        x.attr = y;
        q.b = imei;

        sink(a.attr.b);
    }

    private void sink(String data) {
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
