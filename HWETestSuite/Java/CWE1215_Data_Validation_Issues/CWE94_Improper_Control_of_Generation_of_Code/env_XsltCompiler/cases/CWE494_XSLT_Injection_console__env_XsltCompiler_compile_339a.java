/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_XsltCompiler.cases;

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
 * @description 将污染数据以value的形式存入跨类成员变量map中，然后通过获取key所对应的value来传递的场景，其中put和get在跨类的不同方法中。
 *
 * @cwe 494
 * @bad bad
 * @good good
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 方健尔 f00563108
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_339a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        CWE494_XSLT_Injection_console__env_XsltCompiler_compile_339b mapKeyValue = new CWE494_XSLT_Injection_console__env_XsltCompiler_compile_339b();
        mapKeyValue.set("key1", data);
        sink(mapKeyValue);
    }

    private void sink(CWE494_XSLT_Injection_console__env_XsltCompiler_compile_339b mapKeyValue) throws Throwable {
        String data = mapKeyValue.get("key1");
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

    public void good() throws Throwable {
        String dataSource = "foo";
        CWE494_XSLT_Injection_console__env_XsltCompiler_compile_339b mapKeyValue = new CWE494_XSLT_Injection_console__env_XsltCompiler_compile_339b();
        mapKeyValue.set("key2", dataSource);
        goodG2B(mapKeyValue);
    }

    private void goodG2B(CWE494_XSLT_Injection_console__env_XsltCompiler_compile_339b mapKeyValue) throws Throwable {
        String data = mapKeyValue.get("key2");
        try (InputStream transformerStream = new FileInputStream(data)) {
            Processor proc = new Processor(false);
            XsltCompiler compiler = proc.newXsltCompiler();
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
