/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

import java.util.ArrayList;
import java.util.List;

/*
 * @description 封装source的对象在ArrayList中的stream流中调用lambda表达式传递的场景。
 *
 * @bad bad
 * @cwe 112
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 方健尔 f00563108
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_423 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<Model_423> list = new ArrayList<>();
        list.add(new Model_423(temp));
        list.add(new Model_423("data"));
        list.stream().map(s -> s.getData()).forEach(data -> {

            NetworkTopology networkTopology = new NetworkTopology();

            /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
            networkTopology.remove(new NodeBase(data));

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

    class Model_423 {
        private String data;

        public Model_423(String data) {
            this.data = data;
        }

        public String getData() {
            return data;
        }
    }
}
