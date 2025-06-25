/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE502_Deserialization_of_Untrusted_Data.env_readValue.cases;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import testcasesupport.IO;

/*
 * @description 含有if(数值成员变量)[if(privateFive==5) and if(privateFive!=5)]判断的数据流传递过程，其中该成员变量没有声明成
 * final，但是初始化后从未被重新赋值。
 *
 * @cwe 502
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Unsafe JSON Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE502_Dynamic_Code_Evaluation_Unsafe_JSON_Deserialization_console__env_readValue_07 {


    private int privateFive = 5;

    public void bad() throws Throwable {
        String data;
        if (privateFive == 5) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enableDefaultTyping();

        try {
            /* POTENTIAL FLAW: Dynamic Code Evaluation Unsafe JSON Deserialization */
            objectMapper.readValue(data, String.class);
        } catch (JsonProcessingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (privateFive != 5) {
            data = null;
        } else {
            data = "foo";

        }


        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enableDefaultTyping();
        try {
            objectMapper.readValue(data, String.class);
        } catch (JsonProcessingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (privateFive == 5) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enableDefaultTyping();
        try {
            objectMapper.readValue(data, String.class);
        } catch (JsonProcessingException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
