/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_xstream.cases;

import testcasesupport.Contact;
import testcasesupport.IO;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以key的形式存入map，然后通过迭代器遍历key的方式来传递的场景。
 *
 * @cwe 502
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Unsafe XStream Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE502_Dynamic_Code_Evaluation_Unsafe_XStream_Deserialization_console__env_xstream_fromXML_322 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.keySet()) {
            XStream xstream = new XStream(new DomDriver());
            xstream.setClassLoader(Contact.class.getClassLoader());

            xstream.processAnnotations(Contact.class);
            /* POTENTIAL FLAW: Dynamic Code Evaluation: Unsafe XStream Deserialization */
            Contact expl = (Contact) xstream.fromXML(data);

            IO.writeLine(expl.toString());

        }
    }

    private Map<String, String> badSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Map<String, String> map = new HashMap<>();
        map.put(data, "value1");
        map.put("key2", "value2");
        return map;
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        Map<String, String> mapSource = goodSource();
        for (String data : mapSource.keySet()) {
            XStream xstream = new XStream(new DomDriver());
            xstream.setClassLoader(Contact.class.getClassLoader());

            xstream.processAnnotations(Contact.class);
            Contact expl = (Contact) xstream.fromXML(data);

            IO.writeLine(expl.toString());

        }
    }

    private Map<String, String> goodSource() throws Throwable {
        Map<String, String> map = new HashMap<>();
        map.put("key1", "foo1");
        map.put("key2", "foo2");
        map.put("key3", "foo3");
        return map;
    }
}
