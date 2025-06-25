/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

import org.apache.hadoop.net.NetworkTopology;
import org.apache.hadoop.net.NodeBase;

/*
 * @description 含有if(静态不可变常量布尔值)[if(PRIVATE_STATIC_FINAL_TRUE) and if(PRIVATE_STATIC_FINAL_FALSE)]判断的数据流
 * 传递过程，其中静态常量以final修饰。
 *
 * @cwe 112
 * @bad bad
 * @good good
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_04 {


    private static final boolean PRIVATE_STATIC_FINAL_TRUE = true;
    private static final boolean PRIVATE_STATIC_FINAL_FALSE = false;

    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_TRUE) {
            data = ""; /* Initialize data */

            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        } else {
            data = null;
        }


        NetworkTopology networkTopology = new NetworkTopology();

        /* POTENTIAL FLAW: Hadoop Cluster Manipulation */
        networkTopology.remove(new NodeBase(data));

    }

    private void goodG2B1() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_FALSE) {
            data = null;
        } else {
            data = "foo";

        }


        NetworkTopology networkTopology = new NetworkTopology();

        networkTopology.remove(new NodeBase(data));

    }

    private void goodG2B2() throws Throwable {
        String data;
        if (PRIVATE_STATIC_FINAL_TRUE) {
            data = "foo";
        } else {
            data = null;
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

        }


        NetworkTopology networkTopology = new NetworkTopology();

        networkTopology.remove(new NodeBase(data));

    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }
}
