/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_file.cases;

import testcasesupport.IO;

import java.io.File;

/*
 * @description 含有if(布尔值)[if(true) and if(false)]判断的数据流传递过程。
 *
 * @cwe 22
 * @bad bad
 * @good good
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 董镇山 d00305016
 */
public class CWE22_Path_Manipulation_console__env_file_02 {


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

        /* POTENTIAL FLAW: path manipulation */
        File file = new File(data);
        IO.writeLine(file.getName());

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (false) {
            data = null;
        } else {
            data = "foo";
        }

        File file = new File(data);
        IO.writeLine(file.getName());

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

        File file = new File(data);
        IO.writeLine(file.getName());

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
