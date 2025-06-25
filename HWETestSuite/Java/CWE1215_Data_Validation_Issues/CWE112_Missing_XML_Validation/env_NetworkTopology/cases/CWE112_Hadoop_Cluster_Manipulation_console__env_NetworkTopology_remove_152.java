/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

/*
 * @description 数据流source点通过反射存储在类的成员变量中并且通过get方法进行传递。
 *
 * @cwe 112
 * @bad bad
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_152 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Class cls = Class.forName("HadoopClusterManipulation.CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_152.ReflectionClass");
        ReflectionClass reflectionClass = (ReflectionClass) cls.newInstance();
        reflectionClass.data = data;

        badSink(reflectionClass);
    }

    private void badSink(ReflectionClass reflectionClass) {
        String data = reflectionClass.getData();


        NetworkTopology networkTopology = new NetworkTopology();

        /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
        networkTopology.remove(new NodeBase(data));

    }

    static class ReflectionClass {
        private String data;

        public String getData() {
            return this.data;
        }
    }
}
