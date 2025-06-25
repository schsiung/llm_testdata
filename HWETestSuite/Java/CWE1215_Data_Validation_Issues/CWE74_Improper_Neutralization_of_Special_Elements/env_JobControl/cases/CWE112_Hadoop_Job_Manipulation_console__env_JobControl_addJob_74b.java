/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_JobControl.cases;

import testcasesupport.IO;
import testcasesupport.JobCtrlTest;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.JobConf;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.jobcontrol.ControlledJob;
import org.apache.hadoop.mapreduce.lib.jobcontrol.JobControl;

import java.io.IOException;
import java.util.HashMap;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过HashMap进行传递。
 *
 * @cwe 112
 * @tool fortify: Hadoop Job Manipulation
 * @author 董镇山 d00305016
 */
public class CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_74b {


    public void badSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


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

    public void goodG2BSink(HashMap<Integer, String> dataHashMap) throws Throwable {
        String data = dataHashMap.get(2);


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
