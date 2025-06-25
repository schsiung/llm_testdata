/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_XQueryCompiler.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XQueryCompiler;

import java.util.ArrayList;
import java.util.List;

/*
 * @description 在ArrayList中的stream流中调用lambda表达式。
 *
 * @bad bad
 * @cwe 652
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 方健尔 f00563108
 */
public class CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_422 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.stream().map(data -> {
            Processor proc = new Processor(false);
            XQueryCompiler comp = proc.newXQueryCompiler();
            try {
                /* POTENTIAL FLAW: XQuery Injection */
                comp.compile(data);
            } catch (SaxonApiException e) {
                IO.writeLine(e.getMessage());
            }

            return data.equals("data");
        });
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
