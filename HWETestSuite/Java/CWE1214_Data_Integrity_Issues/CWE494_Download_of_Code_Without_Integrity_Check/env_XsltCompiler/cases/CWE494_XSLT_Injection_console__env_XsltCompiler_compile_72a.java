/**
* @testsuite baihu
*/
package CWE1214_Data_Integrity_Issues.CWE494_Download_of_Code_Without_Integrity_Check.env_XsltCompiler.cases;

import java.util.Vector;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过Vector进行传递。
 *
 * @cwe 494
 * @bad bad
 * @good good
 * @tool fortify: XSLT Injection;secbrella: SecS_XSLT_Injection
 * @author 董镇山 d00305016
 */
public class CWE494_XSLT_Injection_console__env_XsltCompiler_compile_72a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Vector<String> dataVector = new Vector<String>(5);
        dataVector.add(0, data);
        dataVector.add(1, data);
        dataVector.add(2, data);

        (new CWE494_XSLT_Injection_console__env_XsltCompiler_compile_72b()).badSink(dataVector);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        data = "foo";

        Vector<String> dataVector = new Vector<String>(5);
        dataVector.add(0, data);
        dataVector.add(1, data);
        dataVector.add(2, data);
        (new CWE494_XSLT_Injection_console__env_XsltCompiler_compile_72b()).goodG2BSink(dataVector);
    }

    private void goodG2B2() throws Throwable {
        String data;

        data = "";
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        Vector<String> dataVector = new Vector<String>(5);
        dataVector.add(0, data);
        dataVector.add(1, data);
        dataVector.add(2, "");
        (new CWE494_XSLT_Injection_console__env_XsltCompiler_compile_72b()).goodG2BSink(dataVector);
    }
}
