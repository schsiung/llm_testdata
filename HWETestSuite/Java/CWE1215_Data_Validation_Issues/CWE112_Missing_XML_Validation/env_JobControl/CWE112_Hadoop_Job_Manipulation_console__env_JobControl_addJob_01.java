/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_JobControl;

import testcasesupport.IO;
import testcasesupport.JobCtrlTest;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.JobConf;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.jobcontrol.ControlledJob;
import org.apache.hadoop.mapreduce.lib.jobcontrol.JobControl;

import java.io.IOException;

/*
 * @description 最简单的数据流传递过程。
 *
 * @cwe 112
 * @bad bad
 * @good good
 * @tool fortify: Hadoop Job Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_01 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        JobConf conf = new JobConf(JobCtrlTest.class);
        Job job = null;
        try {
            job = Job.getInstance(conf, data);
            job.setJarByClass(JobCtrlTest.class);
            job.setMapperClass(JobCtrlTest.Map_First.class);
            job.setReducerClass(JobCtrlTest.Reduce_First.class);
            job.setMapOutputKeyClass(Text.class);// map阶段的输出的key
            job.setMapOutputValueClass(IntWritable.class);// map阶段的输出的value
            job.setOutputKeyClass(Text.class);// reduce阶段的输出的key
            job.setOutputValueClass(IntWritable.class);// reduce阶段的输出的value
            ControlledJob ctrljob = new ControlledJob(conf);
            ctrljob.setJob(job);
            JobControl jobCtr = new JobControl("myctrl");

            /* POTENTIAL FLAW: Hadoop Job Manipulation */
            jobCtr.addJob(ctrljob);
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";


        JobConf conf = new JobConf(JobCtrlTest.class);
        Job job = null;
        try {
            job = Job.getInstance(conf, data);
            job.setJarByClass(JobCtrlTest.class);
            job.setMapperClass(JobCtrlTest.Map_First.class);
            job.setReducerClass(JobCtrlTest.Reduce_First.class);
            job.setMapOutputKeyClass(Text.class);// map阶段的输出的key
            job.setMapOutputValueClass(IntWritable.class);// map阶段的输出的value
            job.setOutputKeyClass(Text.class);// reduce阶段的输出的key
            job.setOutputValueClass(IntWritable.class);// reduce阶段的输出的value
            ControlledJob ctrljob = new ControlledJob(conf);
            ctrljob.setJob(job);
            JobControl jobCtr = new JobControl("myctrl");

            jobCtr.addJob(ctrljob);
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }
}

