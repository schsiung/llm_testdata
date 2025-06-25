/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_file.cases;

import testcasesupport.IO;

import java.io.File;

/*
 * @description 含有while(布尔值)[while(true)]循环的数据流传递过程。
 *
 * @cwe 22
 * @bad bad
 * @good good
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 董镇山 d00305016
 */
public class CWE22_Path_Manipulation_console__env_file_16 {


    public void bad() throws Throwable {
        String data;

        while (true) {
            data = ""; /* Initialize data */
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            break;
        }

        /* POTENTIAL FLAW: path manipulation */
        File file = new File(data);
        IO.writeLine(file.getName());

    }

    private void goodG2B1() throws Throwable {
        String data;

        while (true) {
            data = "foo";
            break;
        }

        File file = new File(data);
        IO.writeLine(file.getName());

    }

    public void good() throws Throwable {
        goodG2B1();
    }
}
