/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Writer.cases;

import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;

/*
 * @description 工具类。数据流source点从抽象类产生，在被子类调用时丢失的场景。
 *
 * @cwe 74
 * @tool fortify: Formula Injection
 * @author 方健尔 f00563108
 */
public class CWE74_Formula_Injection_console__env_Writer_print_206c {


    public static String badSource() {
        String data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    public static void badSink(String data) throws Throwable {

        try {
            Writer writer = new PrintWriter("text.txt");

            /* POTENTIAL FLAW: Formula Injection */
            ((PrintWriter) writer).print(data);
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
