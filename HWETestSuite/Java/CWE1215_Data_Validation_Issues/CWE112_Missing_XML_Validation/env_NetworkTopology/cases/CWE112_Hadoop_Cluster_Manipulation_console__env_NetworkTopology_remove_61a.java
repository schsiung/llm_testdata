/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

/*
 * @description 数据流source点通过同一个包中两个不同类的方法的返回值传递。
 *
 * @cwe 112
 * @bad bad
 * @good good
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_61a {


    public void bad() throws Throwable {
        String data = (new CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_61b()).badSource();


        NetworkTopology networkTopology = new NetworkTopology();

        /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
        networkTopology.remove(new NodeBase(data));

    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data = (new CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_61b()).goodG2BSource();


        NetworkTopology networkTopology = new NetworkTopology();

        networkTopology.remove(new NodeBase(data));

    }
}
