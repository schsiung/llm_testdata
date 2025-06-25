/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_XsltCompiler.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XsltCompiler;

import javax.xml.transform.stream.StreamSource;
import java.io.*;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过序列化对象进行传递。
 *
 * @cwe 494
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 董镇山 d00305016
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_75b {


    public void badSink(byte[] dataSerialized) throws Throwable {
        /* unserialize data */
        ByteArrayInputStream streamByteArrayInput = null;
        ObjectInputStream streamObjectInput = null;

        try {
            streamByteArrayInput = new ByteArrayInputStream(dataSerialized);
            streamObjectInput = new ObjectInputStream(streamByteArrayInput);
            String data = (String) streamObjectInput.readObject();

            try (InputStream transformerStream = new FileInputStream(data)) {
                Processor proc = new Processor(false);
                XsltCompiler compiler = proc.newXsltCompiler();
                /* POTENTIAL FLAW: XSLT Injection */
                compiler.compile(new StreamSource(transformerStream));
            } catch (SaxonApiException e) {
                IO.writeLine(e.getMessage());
            } catch (FileNotFoundException e) {
                IO.writeLine(e.getMessage());
            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            }

        } catch (IOException exceptIO) {
            IO.writeLine("IOException in deserialization");
        } catch (ClassNotFoundException exceptClassNotFound) {
            IO.writeLine("ClassNotFoundException in deserialization");
        } finally {
            /* clean up stream reading objects */
            try {
                if (streamObjectInput != null) {
                    streamObjectInput.close();
                }
            } catch (IOException exceptIO) {
                IO.writeLine("Error closing ObjectInputStream");
            }

            try {
                if (streamByteArrayInput != null) {
                    streamByteArrayInput.close();
                }
            } catch (IOException exceptIO) {
                IO.writeLine("Error closing ByteArrayInputStream");
            }
        }
    }
}
