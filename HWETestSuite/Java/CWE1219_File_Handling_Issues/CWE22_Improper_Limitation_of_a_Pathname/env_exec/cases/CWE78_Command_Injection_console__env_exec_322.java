/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_exec.cases;

import testcasesupport.IO;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/*
 * @description 将污染数据以key的形式存入map，然后通过迭代器遍历key的方式来传递的场景。
 *
 * @cwe 78
 * @bad bad
 * @good good
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection;secbrella: Command_Injection;
 * @author 方健尔 f00563108
 */
public class CWE78_Command_Injection_console__env_exec_322 {


    public void bad() throws Throwable {
        Map<String, String> mapSource = badSource();
        for (String data : mapSource.keySet()) {
            String osCommand;
            if (System.getProperty("os.name").toLowerCase().indexOf("win") >= 0) {
                /* running on Windows */
                osCommand = "c:\\WINDOWS\\SYSTEM32\\cmd.exe /c dir ";
            } else {
                /* running on non-Windows */
                osCommand = "/bin/ls ";
            }


            Process process = null;
            try {
                /* POTENTIAL FLAW: command injection */
                process = Runtime.getRuntime().exec(osCommand + data);
            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            }
            try {
                process.waitFor();
            } catch (InterruptedException e) {
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
            String osCommand;
            if (System.getProperty("os.name").toLowerCase().indexOf("win") >= 0) {
                /* running on Windows */
                osCommand = "c:\\WINDOWS\\SYSTEM32\\cmd.exe /c dir ";
            } else {
                /* running on non-Windows */
                osCommand = "/bin/ls ";
            }

            Process process = null;
            try {
                process = Runtime.getRuntime().exec(osCommand + data);
            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            }
            try {
                process.waitFor();
            } catch (InterruptedException e) {
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
