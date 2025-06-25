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
 * @Description 污染数据通过一个方法产生，在同一个方法内爆发，控制产生和爆发的是一个布尔变量。
 *
 * @cwe 494
 * @bad bad
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_303 {

    public void bad() throws Throwable {
        Contaminant contaminant = new Contaminant();
        // data变成污染数据
        badSink(contaminant, false);

        // data传入，并爆发
        badSink(contaminant, true);
    }

    private void badSink(Contaminant contaminant, boolean status) throws Throwable {
        if (status) {
            String data = contaminant.data;
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

        } else {
            String data = "";
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            contaminant.data = data;
        }
    }

    private class Contaminant {
        public String data;
    }
}
