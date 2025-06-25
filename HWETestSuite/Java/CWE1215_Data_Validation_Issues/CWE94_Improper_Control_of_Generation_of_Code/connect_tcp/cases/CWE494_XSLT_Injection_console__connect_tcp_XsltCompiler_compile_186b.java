/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.connect_tcp.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XsltCompiler;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.Callable;
import javax.xml.transform.stream.StreamSource;

/*
 * XSLT Injection
 *
 * @cwe 494
 *
 * @bad badSink
 * @tool Fortify:XSLT Injection;SecBrella:SecS_XSLT_Injection;
 * @author 张自强 z30004299
 *
 */
public class CWE494_XSLT_Injection_console__connect_tcp_XsltCompiler_compile_186b implements Callable<Object> {

    private String data;

    public CWE494_XSLT_Injection_console__connect_tcp_XsltCompiler_compile_186b(String data) {
        this.data = data;
    }

    @Override
    public Object call() throws Exception {
        try {
            badSink(this.data);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private void badSink(String data) {
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
