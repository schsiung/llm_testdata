/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_file.cases;

import java.util.HashMap;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 22
 * @bad bad
 * @good good
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 董镇山 d00305016
 */
public class CWE22_Path_Manipulation_console__env_file_74a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        HashMap<Integer, String> dataHashMap = new HashMap<Integer, String>();
        dataHashMap.put(0, data);
        dataHashMap.put(1, data);
        dataHashMap.put(2, data);
        (new CWE22_Path_Manipulation_console__env_file_74b()).badSink(dataHashMap);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        data = "foo";

        HashMap<Integer, String> dataHashMap = new HashMap<Integer, String>();
        dataHashMap.put(0, data);
        dataHashMap.put(1, data);
        dataHashMap.put(2, data);
        (new CWE22_Path_Manipulation_console__env_file_74b()).goodG2BSink(dataHashMap);
    }

    private void goodG2B2() throws Throwable {
        String data;

        data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        HashMap<Integer, String> dataHashMap = new HashMap<Integer, String>();
        dataHashMap.put(0, data);
        dataHashMap.put(1, data);
        dataHashMap.put(2, "");
        (new CWE22_Path_Manipulation_console__env_file_74b()).goodG2BSink(dataHashMap);
    }
}
