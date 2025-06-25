/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_readValue.cases;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import testcasesupport.IO;

/*
 * @description 数据流source点通过私有静态常量的拷贝和subString进行传递。
 *
 * @cwe 502
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: Unsafe JSON Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE502_Dynamic_Code_Evaluation_Unsafe_JSON_Deserialization_console__env_readValue_134 {
    private static String dataCopy;


    public void bad() throws Throwable {
        {
            String data;

            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }


            dataCopy = data;
        }
        {
            String data = dataCopy.substring(0);


            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.enableDefaultTyping();

            try {
                /* POTENTIAL FLAW: Dynamic Code Evaluation Unsafe JSON Deserialization */
                objectMapper.readValue(data, String.class);
            } catch (JsonProcessingException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }
}
