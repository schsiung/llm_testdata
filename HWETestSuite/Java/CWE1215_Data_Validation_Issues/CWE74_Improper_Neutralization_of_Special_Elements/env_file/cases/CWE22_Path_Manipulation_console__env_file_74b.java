/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_file.cases;

import testcasesupport.IO;

import java.io.File;
import java.util.HashMap;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 22
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 董镇山 d00305016
 */
public class CWE22_Path_Manipulation_console__env_file_74b {


    public void badSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);

        /* POTENTIAL FLAW: path manipulation */
        File file = new File(data);
        IO.writeLine(file.getName());

    }

    public void goodG2BSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);

        File file = new File(data);
        IO.writeLine(file.getName());

    }
}
