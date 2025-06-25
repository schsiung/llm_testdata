/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

/*
 * @description 数据流source点通过同一个类中的私有静态成员变量拷贝进行传递。
 *
 * @cwe 112
 * @bad bad
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_133 {
    private static String dataCopy;


    public void bad() throws Throwable {
        {
            String data;

            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }


            dataCopy = data;
        }
        {
            String data = dataCopy;


            NetworkTopology networkTopology = new NetworkTopology();

            /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
            networkTopology.remove(new NodeBase(data));

        }
    }
}
