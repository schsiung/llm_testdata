/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_stringbuilder.cases;

import testcasesupport.IO;

import java.util.ArrayList;
import java.util.List;

/*
 * @description 在ArrayList中的stream流中调用lambda表达式。
 *
 * @bad bad
 * @cwe 730
 * @tool fortify:Denial of Service: StringBuilder;secbrella: SecS_Denial_of_Service;secbrella: Regex_Injection;
 * @author 方健尔 f00563108
 */
public class CWE730_Denial_of_Service_console__env_stringbuilder_422 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.stream().map(data -> {

            StringBuffer sb = new StringBuffer();
            /* POTENTIAL FLAW:Denial of Service: StringBuilder */
            sb.append(data);
            IO.writeLine(sb.toString());

            return data.equals("data");
        });
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
