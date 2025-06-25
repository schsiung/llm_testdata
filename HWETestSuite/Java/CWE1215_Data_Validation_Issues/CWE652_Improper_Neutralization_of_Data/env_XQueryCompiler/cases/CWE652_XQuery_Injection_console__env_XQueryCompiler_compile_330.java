/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.env_XQueryCompiler.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XQueryCompiler;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据通过方法参数key以value的形式存入map，然后通过局部变量map和常量值key来获取value的方式传递的场景。
 *
 * @cwe 652
 * @bad bad
 * @good good
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 方健尔 f00563108
 */
public class CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_330 {


    public void bad(String key) throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> mapSource = new HashMap<>();
        mapSource.put(key, data);
        sink(mapSource);
    }

    private void sink(Map<String, String> mapSink) {
        String data = mapSink.get("key1");
        Processor proc = new Processor(false);
        XQueryCompiler comp = proc.newXQueryCompiler();
        try {
            /* POTENTIAL FLAW: XQuery Injection */
            comp.compile(data);
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void good(String key) throws Throwable {
        Map<String, String> mapSource = new HashMap<>();
        mapSource.put(key, "foo1");
        goodG2B(mapSource);
    }

    private void goodG2B(Map<String, String> mapSink) throws Throwable {
        String data = mapSink.get("key1");
        Processor proc = new Processor(false);
        XQueryCompiler comp = proc.newXQueryCompiler();
        try {
            comp.compile(data);
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        }

    }

}
