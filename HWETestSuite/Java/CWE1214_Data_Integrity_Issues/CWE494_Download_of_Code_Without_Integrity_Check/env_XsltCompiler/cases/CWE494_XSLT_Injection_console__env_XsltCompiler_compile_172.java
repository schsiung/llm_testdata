/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.env_XsltCompiler.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XsltCompiler;

import javax.xml.transform.stream.StreamSource;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

/*
 * @description 数据流source点通过方法的局部变量传入，隐式抛出异常，并在异常处理块中爆发。
 *
 * @cwe 494
 * @bad bad
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 董镇山 d00305016
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_172 {


    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);

            String[] array = new String[4];
            if ("matched".equals(array[5])) {
                IO.writeLine("matched");
            }
        } catch (RuntimeException e) {
            badSink(data);
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    private void badSink(String data) throws Throwable {
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

    }

}

