/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE112_Missing_XML_Validation.env_JobControl.cases;

import testcasesupport.IO;
import testcasesupport.JobCtrlTest;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.JobConf;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.jobcontrol.ControlledJob;
import org.apache.hadoop.mapreduce.lib.jobcontrol.JobControl;

import java.io.IOException;
import java.util.ArrayDeque;
import java.util.Deque;

/*
 * @Description 实现子类的方法。该场景模拟多态过程，通过调用父类方法，实际调用子类的场景。
 *
 * @cwe 112
 * @tool fortify: Hadoop Job Manipulation
 * @author 张自强 z30004299
 */
public class CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_302b extends CWE112_Hadoop_Job_Manipulation_console__env_JobControl_addJob_302a {
    /**
     * 污染数据
     */
    private final Deque<Contaminant> contaminants = new ArrayDeque<Contaminant>();


    public void badSource() {
        String data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        Contaminant contaminant = new Contaminant();
        contaminant.data = data;
        contaminants.add(contaminant);
    }

    public void badSink() throws Throwable {
        for (Contaminant contaminant : contaminants) {
            badSinkTwo(contaminant.data);
        }
    }

    private void badSinkTwo(String data) throws Throwable {

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

    private class Contaminant {
        public String data;
    }
}

