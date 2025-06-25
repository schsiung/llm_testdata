/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_file.cases;

import testcasesupport.IO;

import java.io.File;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 22
 * @bad bad
 * @good good
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 方健尔 f00563108
 */
public class CWE22_Path_Manipulation_console__env_file_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        /* POTENTIAL FLAW: path manipulation */
        File file = new File(data);
        IO.writeLine(file.getName());

    }

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE22_Path_Manipulation_console__env_file_201b.validUntrustedInput(data);
        /* POTENTIAL FLAW: path manipulation */
        File file = new File(data);
        IO.writeLine(file.getName());

    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE22_Path_Manipulation_console__env_file_201b.checkUntrustedInput(data);
        /* POTENTIAL FLAW: path manipulation */
        File file = new File(data);
        IO.writeLine(file.getName());

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
