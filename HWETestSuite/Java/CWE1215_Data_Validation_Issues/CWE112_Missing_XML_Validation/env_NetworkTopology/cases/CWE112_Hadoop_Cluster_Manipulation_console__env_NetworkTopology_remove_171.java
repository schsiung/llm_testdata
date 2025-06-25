/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

/*
 * @description 数据流source点通过方法的局部变量传入，显式抛出异常，并在异常处理块中爆发。
 *
 * @cwe 112
 * @bad bad
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_171 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);

            throw new RuntimeException();
        } catch (RuntimeException e) {
            badSink(data);
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    private void badSink(String data) {

        NetworkTopology networkTopology = new NetworkTopology();

        /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
        networkTopology.remove(new NodeBase(data));

    }
}

