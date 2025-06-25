/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_engine.cases;

import testcasesupport.IO;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过序列化对象进行传递。
 *
 * @cwe 95
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_75a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        ByteArrayOutputStream streamByteArrayOutput = null;
        ObjectOutput outputObject = null;

        try {
            streamByteArrayOutput = new ByteArrayOutputStream();
            outputObject = new ObjectOutputStream(streamByteArrayOutput);
            outputObject.writeObject(data);
            byte[] dataSerialized = streamByteArrayOutput.toByteArray();
            (new CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_75b()).badSink(dataSerialized);
        } catch (IOException exceptIO) {
            IO.writeLine("IOException in serialization");
        } finally {
            /* clean up stream writing objects */
            try {
                if (outputObject != null) {
                    outputObject.close();
                }
            } catch (IOException exceptIO) {
                IO.writeLine("Error closing ObjectOutputStream");
            }

            try {
                if (streamByteArrayOutput != null) {
                    streamByteArrayOutput.close();
                }
            } catch (IOException exceptIO) {
                IO.writeLine("Error closing ByteArrayOutputStream");
            }
        }
    }
}
