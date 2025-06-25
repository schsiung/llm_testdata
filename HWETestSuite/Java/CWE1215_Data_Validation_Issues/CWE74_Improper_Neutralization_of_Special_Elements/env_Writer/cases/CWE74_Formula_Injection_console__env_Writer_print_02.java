/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_Writer.cases;

import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;

/*
 * @description 含有if(布尔值)[if(true) and if(false)]判断的数据流传递过程。
 *
 * @cwe 74
 * @bad bad
 * @good good
 * @tool fortify: Formula Injection
 * @author 董镇山 d00305016
 */
public class CWE74_Formula_Injection_console__env_Writer_print_02 {


    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;
        if (true) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


        try {
            Writer writer = new PrintWriter("text.txt");

            /* POTENTIAL FLAW: Formula Injection */
            ((PrintWriter) writer).print(data);
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (false) {
            data = null;
        } else {
            data = "foo";
        }


        try {
            Writer writer = new PrintWriter("text.txt");

            ((PrintWriter) writer).print(data);
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (true) {
            data = "foo";
        } else {
            data = null;

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        try {
            Writer writer = new PrintWriter("text.txt");

            ((PrintWriter) writer).print(data);
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
