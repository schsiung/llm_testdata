/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.connect_tcp.cases;

import testcasesupport.IO;

/*
 * Unsafe Injection
 *
 * @cwe 494
 *
 * @bad badSink
 * @tool Fortify:Unsafe Reflection;SecBrella:SecS_Unsafe_Reflection;
 * @good goodG2BSink
 * @author 董镇山 d00305016
 *
 */
public class CWE494_Unsafe_Injection_console__connect_tcp_loadClass_51b {


    public void badSink(String data) throws Throwable {
        /* POTENTIAL FLAW: Unsafe Injection */
        try {
            this.getClass().getClassLoader().loadClass(data);
        } catch (ClassNotFoundException e) {
            IO.writeLine(e.getMessage());
        }
    }

    /* goodG2B() - use goodsource and badsink */
    public void goodG2BSink(String data) throws Throwable {
        try {
            this.getClass().getClassLoader().loadClass(data);
        } catch (ClassNotFoundException e) {
            IO.writeLine(e.getMessage());
        }
    }
}
