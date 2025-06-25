/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_JobControl.cases;

import java.util.LinkedList;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过LinkedList进行传递。
 *
 * @cwe 112
 * @bad bad
 * @good good
 * @tool fortify: Hadoop Job Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_73a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        LinkedList<String> dataLinkedList = new LinkedList<String>();
        dataLinkedList.add(0, data);
        dataLinkedList.add(1, data);
        dataLinkedList.add(2, data);
        (new CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_73b()).badSink(dataLinkedList);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        /* FIX: Use a hardcoded string */
        data = "foo";

        LinkedList<String> dataLinkedList = new LinkedList<String>();
        dataLinkedList.add(0, data);
        dataLinkedList.add(1, data);
        dataLinkedList.add(2, data);
        (new CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_73b()).goodG2BSink(dataLinkedList);
    }

    private void goodG2B2() throws Throwable {
        String data;

        data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        LinkedList<String> dataLinkedList = new LinkedList<String>();
        dataLinkedList.add(0, data);
        dataLinkedList.add(1, data);
        dataLinkedList.add(2, "");
        (new CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_73b()).goodG2BSink(dataLinkedList);
    }
}
