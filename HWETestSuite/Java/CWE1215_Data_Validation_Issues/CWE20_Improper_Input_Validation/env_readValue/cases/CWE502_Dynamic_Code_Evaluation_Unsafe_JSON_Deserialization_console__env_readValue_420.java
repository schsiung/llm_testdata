/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_readValue.cases;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import testcasesupport.IO;

import java.util.function.Consumer;

/*
 * @description 调用Consumer类型lambda表达式的accept()方法传递的场景。
 *
 * @bad bad
 * @cwe 502
 * @tool fortify: Dynamic Code Evaluation: Unsafe JSON Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE502_Dynamic_Code_Evaluation_Unsafe_JSON_Deserialization_console__env_readValue_420 {


    public void bad() throws Throwable {
        String temp = badSource();
        Consumer<String> consumer = data -> {

            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.enableDefaultTyping();

            try {
                /* POTENTIAL FLAW: Dynamic Code Evaluation Unsafe JSON Deserialization */
                objectMapper.readValue(data, String.class);
            } catch (JsonProcessingException e) {
                IO.writeLine(e.getMessage());
            }

        };
        consumer.accept(temp);
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
