/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_XsltCompiler.cases;

import testcasesupport.IO;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过序列化对象进行传递。
 *
 * @cwe 494
 * @bad bad
 * @good good
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 董镇山 d00305016
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_75a {


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
            (new CWE494_XSLT_Injection_console__env_XsltCompiler_compile_75b()).badSink(dataSerialized);
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
