/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.env_XQueryCompiler.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XQueryCompiler;

/*
 * @description 数据流source点通过私有静态常量的拷贝和字符串valueOf方法进行传递。
 *
 * @cwe 652
 * @bad bad
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 董镇山 d00305016
 */
public class CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_140 {
    private static String dataCopy;
    String pre = "pre";


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
            String data = String.valueOf(dataCopy);

            Processor proc = new Processor(false);
            XQueryCompiler comp = proc.newXQueryCompiler();
            try {
                /* POTENTIAL FLAW: XQuery Injection */
                comp.compile(data);
            } catch (SaxonApiException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }
}
