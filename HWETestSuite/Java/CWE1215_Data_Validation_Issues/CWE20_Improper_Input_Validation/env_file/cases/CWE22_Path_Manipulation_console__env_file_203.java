/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_file.cases;

import testcasesupport.IO;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

/*
 * @description 污染数据在方法中产生，并且赋值给方法参数，当方法调用结束后，丢失污染数据的场景。
 *
 * @cwe 22
 * @bad bad
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 方健尔 f00563108
 */
public class CWE22_Path_Manipulation_console__env_file_203 {


    public void bad() throws Throwable {
        List<String> dataList = new ArrayList<>();

        badSource(dataList);

        for (String data : dataList) {
            /* POTENTIAL FLAW: path manipulation */
            File file = new File(data);
            IO.writeLine(file.getName());

        }
    }

    private void badSource(List<String> list) {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        String[] datas = {data, data, data};
        for (String str : datas) {
            list.add(str);
        }
    }
}
