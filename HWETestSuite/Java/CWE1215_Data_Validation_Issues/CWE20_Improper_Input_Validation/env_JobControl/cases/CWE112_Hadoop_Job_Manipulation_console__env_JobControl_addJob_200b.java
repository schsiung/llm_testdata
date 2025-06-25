/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_JobControl.cases;

/*
 * @description 接口。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 112
 * @tool fortify: Hadoop Job Manipulation
 * @author 方健尔 f00563108
 */
public interface CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_200b {

    String CONTAMINANT = CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_200c.getBadSource();

    void bad() throws Throwable;
}
