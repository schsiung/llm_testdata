/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.spring_input.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XQueryCompiler;
import org.springframework.beans.factory.annotation.Value;

import java.util.List;

/*
 * @description Spring注解@Value读取污染数据，污染数据解析成List进行传递。
 *
 * @cwe 652
 * @bad bad1,bad2
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 方健尔 f00563108
 */
public class CWE652_XQuery_Injection_spring__spring_input_XQueryCompiler_compile_spring_05 {


    /* 通过@Value注解来读取污染数据方式1 */
    @Value("${password.list.ids:1,2,3}")
    private List<String> value1;

    /* 通过@Value注解来读取污染数据方式2 */
    @Value("#{'${password.list}'.split(',')}")
    private List<String> value2;

    private void bad1() {
        if (value1 != null) {
            this.badSourceSink(value1.get(0));
        }
    }

    private void bad2() {
        if (value2 != null) {
            this.badSourceSink(value2.get(0));
        }
    }

    private void badSourceSink(String contaminationData) {
        String data;

        data = ""; /* Initialize data */

        /* Manipulate data from spring input */
        {
            data = contaminationData.toLowerCase().trim();
            if (data.length() > 2) {
                data = data.substring(1);
            }
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
}
