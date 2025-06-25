/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_Writer.cases;

import testcasesupport.IO;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

/*
 * @description 接口类型的for-each循环不应该调用用户自己覆写接口的迭代器的next()方法。
 *
 * @cwe 74
 * @good good
 * @tool fortify: Formula Injection
 * @author 方健尔 f00563108
 */
public class CWE74_Formula_Injection_console__env_Writer_print_205a<T> {


    public void good() throws InstantiationException, IllegalAccessException {
        CWE74_Formula_Injection_console__env_Writer_print_205a invokeMbean = new CWE74_Formula_Injection_console__env_Writer_print_205a<String>();
        List<String> list = invokeMbean.getList(String.class);
        invokeMbean.goodG2B1(list);
    }

    public void goodG2B1(List<String> list) {
        for (String data : list) {

            try {
                Writer writer = new PrintWriter("text.txt");

                /* POTENTIAL FLAW: Formula Injection */
                ((PrintWriter) writer).print(data);
            } catch (FileNotFoundException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }

    public List<T> getList(Class<T> clazz) throws IllegalAccessException, InstantiationException {
        List<T> list = new ArrayList<>();
        list.add(clazz.newInstance());
        return list;
    }
}
