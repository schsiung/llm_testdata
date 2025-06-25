/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_createTempFile.cases;

import testcasesupport.IO;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以key的形式存入map，然后通过迭代器遍历key的方式来传递的场景。
 *
 * @cwe 99
 * @bad bad
 * @good good
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 方健尔 f00563108
 */
public class CWE99_Resource_Injection_console__env_createTempFile_322 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.keySet()) {
            try {
                /* POTENTIAL FLAW: Resource Injection */
                Path path = Files.createTempFile(data, ".tpl");

                IO.writeLine(path.getNameCount());

            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            }

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
            try {
                Path path = Files.createTempFile(data, ".tpl");

                IO.writeLine(path.getNameCount());

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
