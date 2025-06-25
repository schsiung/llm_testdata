/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_Writer.cases;

import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;

/*
 * @description 通过反射得到子类并转化为接口后调用set方法将数据流source点存储在类的成员变量中，然后通过调用接口的get方法进行传递。
 *
 * @cwe 74
 * @bad bad
 * @tool fortify: Formula Injection
 * @author 董镇山 d00305016
 */
public class CWE74_Formula_Injection_console__env_Writer_print_154a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        Class cls = Class.forName("FormulaInjection.CWE74_Formula_Injection_console__env_Writer_print_154c");
        CWE74_Formula_Injection_console__env_Writer_print_154b baseClass = (CWE74_Formula_Injection_console__env_Writer_print_154b) cls.newInstance();
        baseClass.setData(data);

        badSink(baseClass);
    }

    private void badSink(CWE74_Formula_Injection_console__env_Writer_print_154b baseClass) {
        String data = baseClass.getData();


        try {
            Writer writer = new PrintWriter("text.txt");

            /* POTENTIAL FLAW: Formula Injection */
            ((PrintWriter) writer).print(data);
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
