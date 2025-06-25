/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_Writer.cases;

import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;

/*
 * @description 数据流source点通过私有静态常量的拷贝和字符串的+运算拼接进行传递。
 *
 * @cwe 74
 * @bad bad
 * @tool fortify: Formula Injection
 * @author 董镇山 d00305016
 */
public class CWE74_Formula_Injection_console__env_Writer_print_138 {
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
            String data = pre + dataCopy;


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
