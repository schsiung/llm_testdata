/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_JobControl.cases;

/*
 * @description 数据流source点通过同一个包中五个不同类的方法的参数传递，其中的参数从一个方法中产生并且流经四个方法并在最后一个方法爆发。
 *
 * @cwe 112
 * @bad bad
 * @good good
 * @tool fortify: Hadoop Job Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_54a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        (new CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_54b()).badSink(data);
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        (new CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_54b()).goodG2BSink(data);
    }
}
