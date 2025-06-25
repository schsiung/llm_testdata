/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

import java.util.function.Function;

/*
 * @description 使用双冒号调用父类的方法初始化lambda表达式。
 *
 * @bad bad
 * @cwe 112
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 方健尔 f00563108
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_414 extends Model_414 {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        Model_414 sb = new Model_414();
        Function<String, String> sc1 = super::append;
        String temp = sc1.apply(data);
        badSink(temp);
    }

    public void badSink(String data) {

        NetworkTopology networkTopology = new NetworkTopology();

        /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
        networkTopology.remove(new NodeBase(data));

    }
}

class Model_414 {
    public String append(String s1) {
        return s1;
    }
}
