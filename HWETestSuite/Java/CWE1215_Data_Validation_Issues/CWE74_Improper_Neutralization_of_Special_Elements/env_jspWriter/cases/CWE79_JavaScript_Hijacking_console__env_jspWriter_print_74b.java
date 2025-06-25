/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_jspWriter.cases;

import testcasesupport.IO;
import org.apache.jasper.runtime.JspWriterImpl;

import javax.servlet.jsp.JspWriter;
import java.io.IOException;
import java.util.HashMap;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 79
 * @tool fortify: JavaScript Hijacking
 * @author 董镇山 d00305016
 */
public class CWE79_JavaScript_Hijacking_console__env_jspWriter_print_74b {


    public void badSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        JspWriter jspWriter = new JspWriterImpl();
        try {
            /* POTENTIAL FLAW: JavaScript Hijacking */
            jspWriter.print(data);
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void goodG2BSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        JspWriter jspWriter = new JspWriterImpl();
        try {
            jspWriter.print(data);
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
