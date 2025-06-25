/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.env_XQueryCompiler.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XQueryCompiler;

import java.util.function.Predicate;

/*
 * @description 调用Predicate类型lambda表达式的and()和test()方法传递的场景。
 *
 * @bad bad
 * @cwe 652
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 方健尔 f00563108
 */
public class CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_419 {


    public void bad() throws Throwable {
        String temp = badSource();
        Predicate<String> predicate1 = data -> {
            Processor proc = new Processor(false);
            XQueryCompiler comp = proc.newXQueryCompiler();
            try {
                /* POTENTIAL FLAW: XQuery Injection */
                comp.compile(data);
            } catch (SaxonApiException e) {
                IO.writeLine(e.getMessage());
            }

            return true;
        };

        Predicate<String> predicate2 = data -> {
            return true;
        };
        predicate1.and(predicate2).test(temp);
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
