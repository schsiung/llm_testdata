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
 * @description 数据流source点通过私有静态常量的拷贝和toUpperCase进行传递。
 *
 * @cwe 494
 * @bad bad
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 董镇山 d00305016
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_136 {
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
            String data = dataCopy.toUpperCase();

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
}
