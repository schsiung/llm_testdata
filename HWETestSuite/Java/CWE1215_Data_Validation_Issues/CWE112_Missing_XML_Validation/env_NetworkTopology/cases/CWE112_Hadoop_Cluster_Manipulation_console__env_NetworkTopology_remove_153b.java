/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_NetworkTopology.cases;

/*
 * @description 数据流source点存储类，其通过反射调用set方法存储在成员变量中，并且通过反射调用get方法进行获取传递。
 *
 * @cwe 112
 * @tool fortify: Hadoop Cluster Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Cluster_Manipulation_console__env_NetworkTopology_remove_153b {
    private String data;

    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }
}
