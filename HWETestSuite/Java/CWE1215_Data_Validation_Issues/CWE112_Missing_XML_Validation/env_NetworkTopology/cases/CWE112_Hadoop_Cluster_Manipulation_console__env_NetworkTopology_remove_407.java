/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

import java.util.function.Function;

/*
 * @description 先调用lambda表达式的compose然后再调用apply传递的场景。
 *
 * @bad bad
 * @cwe 112
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 方健尔 f00563108
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_407 {


    public void bad() throws Throwable {
        Function<String, String> sc1 = data -> {
            data = ""; /* Initialize data */
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            return data;
        };

        Function<String, Boolean> sc2 = data -> {

            NetworkTopology networkTopology = new NetworkTopology();

            /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
            networkTopology.remove(new NodeBase(data));

            return true;
        };

        sc2.compose(sc1).apply("data");
    }

}
