/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

import java.util.ArrayList;
import java.util.List;

/*
 * @description 在ArrayList中的stream流中调用lambda表达式。
 *
 * @bad bad
 * @cwe 112
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 方健尔 f00563108
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_422 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.stream().map(data -> {

            NetworkTopology networkTopology = new NetworkTopology();

            /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
            networkTopology.remove(new NodeBase(data));

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
