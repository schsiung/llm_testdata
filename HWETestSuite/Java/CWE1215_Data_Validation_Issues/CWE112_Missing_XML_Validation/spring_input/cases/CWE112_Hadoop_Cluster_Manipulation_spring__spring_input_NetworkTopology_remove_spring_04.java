/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.spring_input.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;
import org.springframework.beans.factory.annotation.Value;

/*
 * @description Spring注解@Value读取污染数据，污染数据解析成String进行传递。
 *
 * @cwe 112
 * @bad bad
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 方健尔 f00563108
 */
public class CWE112_Hadoop_Cluster_Manipulation_spring__spring_input_NetworkTopology_remove_spring_04 {


    /* 通过@Value注解来读取污染数据 */
    @Value("${password}")
    private String value;

    private void bad() {
        this.badSourceSink(value);
    }

    private void badSourceSink(String contaminationData) {
        String data;

        data = ""; /* Initialize data */

        /* Manipulate data from spring input */
        {
            data = contaminationData.toLowerCase().trim();
            if (data.length() > 2) {
                data = data.substring(1);
            }
        }


        NetworkTopology networkTopology = new NetworkTopology();

        /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
        networkTopology.remove(new NodeBase(data));

    }
}
