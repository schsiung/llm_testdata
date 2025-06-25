/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_Writer.cases;

import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;

/*
 * @description 数据流source点通过私有成员变量经过内部类进行传递。
 *
 * @cwe 74
 * @bad bad
 * @tool fortify: Formula Injection
 * @author 董镇山 d00305016
 */
public class CWE74_Formula_Injection_console__env_Writer_print_144 {


    private String dataBad;

    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        this.dataBad = data;

        new InnerClass().badSink();
    }

    class InnerClass {
        private void badSink() throws Throwable {
            String data = CWE74_Formula_Injection_console__env_Writer_print_144.this.dataBad;


            try {
                Writer writer = new PrintWriter("text.txt");

                /* POTENTIAL FLAW: Formula Injection */
                ((PrintWriter) writer).print(data);
            } catch (FileNotFoundException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }
}
