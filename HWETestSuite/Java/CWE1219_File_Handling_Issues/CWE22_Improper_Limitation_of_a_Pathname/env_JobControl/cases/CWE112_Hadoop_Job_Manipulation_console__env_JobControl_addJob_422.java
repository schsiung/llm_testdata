/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_JobControl.cases;

import testcasesupport.IO;
import testcasesupport.JobCtrlTest;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.JobConf;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.jobcontrol.ControlledJob;
import org.apache.hadoop.mapreduce.lib.jobcontrol.JobControl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/*
 * @description 在ArrayList中的stream流中调用lambda表达式。
 *
 * @bad bad
 * @cwe 112
 * @tool fortify: Hadoop Job Manipulation
 * @author 方健尔 f00563108
 */
public class CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_422 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.stream().map(data -> {

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

            return data.equals("data");
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
}
