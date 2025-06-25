/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_file.cases;

import testcasesupport.IO;

import java.io.File;

/*
 * @description 含有if(数值成员变量)[if(privateFive==5) and if(privateFive!=5)]判断的数据流传递过程，其中该成员变量没有声明成
 * final，但是初始化后从未被重新赋值。
 *
 * @cwe 22
 * @bad bad
 * @good good
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 董镇山 d00305016
 */
public class CWE22_Path_Manipulation_console__env_file_07 {


    private int privateFive = 5;

    public void bad() throws Throwable {
        String data;
        if (privateFive == 5) {
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
        if (privateFive != 5) {
            data = null;
        } else {
            data = "foo";

        }

        File file = new File(data);
        IO.writeLine(file.getName());

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (privateFive == 5) {
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
