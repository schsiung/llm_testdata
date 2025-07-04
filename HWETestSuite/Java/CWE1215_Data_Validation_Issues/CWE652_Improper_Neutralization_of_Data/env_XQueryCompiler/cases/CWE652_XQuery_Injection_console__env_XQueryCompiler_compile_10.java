/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.env_XQueryCompiler.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XQueryCompiler;

/*
 * @description 含有if(其它类的静态布尔成员变量)[if(IO.staticTrue) and if(IO.staticFalse)]判断的数据流传递过程。
 *
 * @cwe 652
 * @bad bad
 * @good good
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 董镇山 d00305016
 */
public class CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_10 {


    public void bad() throws Throwable {
        String data;
        if (IO.staticTrue) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }

        Processor proc = new Processor(false);
        XQueryCompiler comp = proc.newXQueryCompiler();
        try {
            /* POTENTIAL FLAW: XQuery Injection */
            comp.compile(data);
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (IO.staticFalse) {
            data = null;
        } else {
            data = "foo";
        }

        Processor proc = new Processor(false);
        XQueryCompiler comp = proc.newXQueryCompiler();
        try {
            comp.compile(data);
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (IO.staticTrue) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }

        Processor proc = new Processor(false);
        XQueryCompiler comp = proc.newXQueryCompiler();
        try {
            comp.compile(data);
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
