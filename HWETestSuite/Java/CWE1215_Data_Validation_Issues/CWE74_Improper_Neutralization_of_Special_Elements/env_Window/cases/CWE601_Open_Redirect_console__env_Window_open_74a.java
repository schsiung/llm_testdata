/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_Window.cases;

import java.util.HashMap;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 601
 * @bad bad
 * @good good
 * @tool fortify: Open Redirect;secbrella: SecS_Open_Redirect;secbrella: Open_Redirect;
 * @author 董镇山 d00305016
 */
public class CWE601_Open_Redirect_console__env_Window_open_74a {


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
        (new CWE601_Open_Redirect_console__env_Window_open_74b()).badSink(dataHashMap);
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
        (new CWE601_Open_Redirect_console__env_Window_open_74b()).goodG2BSink(dataHashMap);
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
        (new CWE601_Open_Redirect_console__env_Window_open_74b()).goodG2BSink(dataHashMap);
    }
}
