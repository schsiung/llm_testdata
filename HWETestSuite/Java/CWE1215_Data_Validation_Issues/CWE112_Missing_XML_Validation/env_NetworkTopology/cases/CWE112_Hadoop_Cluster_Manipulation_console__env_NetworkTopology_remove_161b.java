/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

/*
 * @description 数据流source点通过System.arraycopy进行传递。
 *
 * @cwe 112
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_161b {


    public void badSink(String dataArray[]) throws Throwable {
        String[] arrayCopy = new String[dataArray.length];
        System.arraycopy(dataArray, 0, arrayCopy, 0, dataArray.length);

        String data = arrayCopy[2];


        NetworkTopology networkTopology = new NetworkTopology();

        /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
        networkTopology.remove(new NodeBase(data));

    }

    public void goodG2BSink(String dataArray[]) throws Throwable {
        String[] arrayCopy = new String[dataArray.length];
        System.arraycopy(dataArray, 0, arrayCopy, 0, dataArray.length);

        String data = arrayCopy[2];


        NetworkTopology networkTopology = new NetworkTopology();

        networkTopology.remove(new NodeBase(data));

    }
}
