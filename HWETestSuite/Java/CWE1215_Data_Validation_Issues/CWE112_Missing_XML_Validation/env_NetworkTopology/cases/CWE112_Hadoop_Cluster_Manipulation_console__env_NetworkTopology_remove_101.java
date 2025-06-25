/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

/*
 * @description 含有switch(字符串)[switch(String)]选择的数据流传递过程。
 *
 * @cwe 112
 * @bad bad
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_101 {


    public void bad() throws Throwable {
        String data = null;

        String guess = "ABC";

        char switchTarget = guess.charAt(0);
        switch (switchTarget) {
            case 'A':
                data = "";
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            break;
            case 'B':
            default:
                data = null;
                break;
        }


        NetworkTopology networkTopology = new NetworkTopology();

        /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
        networkTopology.remove(new NodeBase(data));

    }

    public void good() throws Throwable {
        String data = null;

        String guess = "ABC";

        char switchTarget = guess.charAt(1);
        switch (switchTarget) {
            case 'A':
                data = "";
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            break;
            case 'B':
            default:
                data = null;
                break;
        }


        NetworkTopology networkTopology = new NetworkTopology();

        /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
        networkTopology.remove(new NodeBase(data));

    }
}
