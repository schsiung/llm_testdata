/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.console_password.cases;

import testcasesupport.IO;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以key的形式存入map，然后通过迭代器遍历key的方式来传递的场景。
 *
 * @cwe 359
 * @bad bad
 * @good good
 * @tool fortify: Privacy Violation;secbrella: SecS_Privacy_Violation
 * @author 方健尔 f00563108
 */
public class CWE359_Privacy_Violation_console__console_password_java_core_nio_files_write_322 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.keySet()) {
            try {
                /* POTENTIAL FLAW: Privacy Violation */
                Files.write(new File("text.txt").toPath(), data.getBytes());
            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }

    private Map<String, String> badSource() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        /* Read a password from console */
        {
            char[] password = System.console().readPassword();
            data = new String(password);
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
            try {
                Files.write(new File("text.txt").toPath(), data.getBytes());
            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            }

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
