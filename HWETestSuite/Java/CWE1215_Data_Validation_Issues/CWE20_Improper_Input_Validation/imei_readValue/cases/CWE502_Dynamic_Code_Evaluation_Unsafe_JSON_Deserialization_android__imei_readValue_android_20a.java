/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.imei_readValue.cases;

import android.app.Activity;
import android.os.Bundle;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import testcasesupport.IO;

/*
 * @description Android污染数据和非污染数据存入一个类中，并通过getter方法获取传递的场景。
 *
 * @bad bad
 * @good good
 * @cwe 502
 * @tool fortify: Dynamic Code Evaluation: Unsafe JSON Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE502_Dynamic_Code_Evaluation_Unsafe_JSON_Deserialization_android__imei_readValue_android_20a extends Activity {

    private CWE502_Dynamic_Code_Evaluation_Unsafe_JSON_Deserialization_android__imei_readValue_android_20b d1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        d1 = setTaint(d1);
        bad();
        good();
    }

    private CWE502_Dynamic_Code_Evaluation_Unsafe_JSON_Deserialization_android__imei_readValue_android_20b setTaint(CWE502_Dynamic_Code_Evaluation_Unsafe_JSON_Deserialization_android__imei_readValue_android_20b data) {
        data = new CWE502_Dynamic_Code_Evaluation_Unsafe_JSON_Deserialization_android__imei_readValue_android_20b();
        data.setDescription("abc");

        /* Read data from intent */
        String imei = getIntent().getStringExtra("data");

        data.setSecret(imei);

        return data;
    }

    private void bad() {
        String data = d1.getSecret();

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enableDefaultTyping();

        try {
            /* POTENTIAL TEMP FLAW: Dynamic Code Evaluation Unsafe JSON Deserialization */
            objectMapper.readValue(data, String.class);
        } catch (JsonProcessingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void good() {
        String data = d1.getDescription();

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enableDefaultTyping();
        try {
            objectMapper.readValue(data, String.class);
        } catch (JsonProcessingException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
