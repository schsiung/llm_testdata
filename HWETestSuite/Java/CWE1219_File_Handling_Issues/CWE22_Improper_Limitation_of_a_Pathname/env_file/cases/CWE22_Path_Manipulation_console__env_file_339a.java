/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_file.cases;

import testcasesupport.IO;

import java.io.File;

/*
 * @description 将污染数据以value的形式存入跨类成员变量map中，然后通过获取key所对应的value来传递的场景，其中put和get在跨类的不同方法中。
 *
 * @cwe 22
 * @bad bad
 * @good good
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 方健尔 f00563108
 */
public class CWE22_Path_Manipulation_console__env_file_339a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        CWE22_Path_Manipulation_console__env_file_339b mapKeyValue = new CWE22_Path_Manipulation_console__env_file_339b();
        mapKeyValue.set("key1", data);
        sink(mapKeyValue);
    }

    private void sink(CWE22_Path_Manipulation_console__env_file_339b mapKeyValue) throws Throwable {
        String data = mapKeyValue.get("key1");
        /* POTENTIAL FLAW: path manipulation */
        File file = new File(data);
        IO.writeLine(file.getName());

    }

    public void good() throws Throwable {
        String dataSource = "foo";
        CWE22_Path_Manipulation_console__env_file_339b mapKeyValue = new CWE22_Path_Manipulation_console__env_file_339b();
        mapKeyValue.set("key2", dataSource);
        goodG2B(mapKeyValue);
    }

    private void goodG2B(CWE22_Path_Manipulation_console__env_file_339b mapKeyValue) throws Throwable {
        String data = mapKeyValue.get("key2");
        File file = new File(data);
        IO.writeLine(file.getName());

    }

}
