/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_JobControl.cases;

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
 * @description 工具类。数据流source点从抽象类产生，在被子类调用时丢失的场景。
 *
 * @cwe 112
 * @tool fortify: Hadoop Job Manipulation
 * @author 方健尔 f00563108
 */
public class CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_206c {


    public static String badSource() {
        String data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    public static void badSink(String data) throws Throwable {

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
}
