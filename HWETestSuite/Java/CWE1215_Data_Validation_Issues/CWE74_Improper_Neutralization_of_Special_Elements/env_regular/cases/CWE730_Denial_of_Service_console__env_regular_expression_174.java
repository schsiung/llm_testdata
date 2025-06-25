/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE74_Improper_Neutralization_of_Special_Elements.env_regular.cases;

import testcasesupport.IO;

/*
 * @description 数据流source点通过方法的局部变量传入，通过异常进行传递。
 *
 * @cwe 730
 * @bad bad
 * @tool fortify:Denial of Service: Regular Expression;secbrella: SecS_Denial_of_Service;secbrella: Regex_Injection;
 * @author 董镇山 d00305016
 */
public class CWE730_Denial_of_Service_console__env_regular_expression_174 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);

            throw new RuntimeException(data);
        } catch (RuntimeException e) {
            badSink(e.getMessage());
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        return data;
    }

    private void badSink(String data) {
        /* POTENTIAL FLAW:Denial of Service: Regular Expression */
        if ("taint".matches(data)) {
            IO.writeLine(data);
        }

    }

}

