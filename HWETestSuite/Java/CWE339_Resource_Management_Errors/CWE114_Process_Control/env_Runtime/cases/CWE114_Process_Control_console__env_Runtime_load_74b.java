/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

import java.util.HashMap;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 114
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 董镇山 d00305016
 */
public class CWE114_Process_Control_console__env_Runtime_load_74b {


    public void badSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        /* POTENTIAL FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }

    public void goodG2BSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        java.lang.Runtime.getRuntime().load(data);

    }
}
