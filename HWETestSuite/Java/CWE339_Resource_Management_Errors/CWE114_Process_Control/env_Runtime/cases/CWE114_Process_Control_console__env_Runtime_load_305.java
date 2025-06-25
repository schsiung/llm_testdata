/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

/*
 * @Description 污染数据传播链包括了数字操作符。
 *
 * @cwe 114
 * @bad bad
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 张自强 z30004299
 */
public class CWE114_Process_Control_console__env_Runtime_load_305 {


    /* uses badsource and badsink */
    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        try {
            data = badSource(data);
            data = (Long.parseLong(data) & 0xffL) + "";
        } catch (Exception e) {
            badSink(data);
        }
    }

    private String badSource(String data) {
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }

    private void badSink(String data) throws Throwable {

        /* POTENTIAL FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }
}

