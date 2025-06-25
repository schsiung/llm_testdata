/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_JobControl.cases;

/*
 * @description 抽象类。数据流source点从抽象类产生，在被子类调用时丢失的场景。
 *
 * @cwe 112
 * @tool fortify: Hadoop Job Manipulation
 * @author 方健尔 f00563108
 */
public abstract class CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_206b {

    protected String path;

    public abstract void abstractMethod();

    public void bad() throws Throwable {
        path = CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_206c.badSource();
    }
}
