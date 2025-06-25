/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_stringbuilder.cases;

import testcasesupport.IO;

import java.util.HashMap;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 730
 * @tool fortify:Denial of Service: StringBuilder;secbrella: SecS_Denial_of_Service;secbrella: Regex_Injection;
 * @author 董镇山 d00305016
 */
public class CWE730_Denial_of_Service_console__env_stringbuilder_74b {


    public void badSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        StringBuffer sb = new StringBuffer();
        /* POTENTIAL FLAW:Denial of Service: StringBuilder */
        sb.append(data);
        IO.writeLine(sb.toString());

    }

    public void goodG2BSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


        StringBuffer sb = new StringBuffer();
        sb.append(data);
        IO.writeLine(sb.toString());

    }
}
