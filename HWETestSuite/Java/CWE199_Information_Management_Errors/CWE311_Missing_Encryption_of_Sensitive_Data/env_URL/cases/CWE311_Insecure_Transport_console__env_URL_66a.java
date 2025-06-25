/**
* @testsuite baihu
*/
package CWE199_Information_Management_Errors.CWE311_Missing_Encryption_of_Sensitive_Data.env_URL.cases;


/*
 * @description 数据流source点在同一个包中两个不同类的方法通过数组进行传递。
 *
 * @cwe 311
 * @bad bad
 * @good good
 * @tool fortify: Insecure Transport;secbrella: SecS_Insecure_Transport
 * @author 董镇山 d00305016
 */
public class CWE311_Insecure_Transport_console__env_URL_66a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        /* Read data with hardcode prefix http */
        data = "http:xxxxx";


        String[] dataArray = new String[5];
        dataArray[2] = data;
        (new CWE311_Insecure_Transport_console__env_URL_66b()).badSink(dataArray);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        data = "foo";

        String[] dataArray = new String[5];
        dataArray[2] = data;
        (new CWE311_Insecure_Transport_console__env_URL_66b()).goodG2BSink(dataArray);
    }

    private void goodG2B2() throws Throwable {
        String data;

        data = ""; /* Initialize data */
        /* Read data with hardcode prefix http */
        data = "http:xxxxx";


        String[] dataArray = new String[5];
        dataArray[2] = data;
        (new CWE311_Insecure_Transport_console__env_URL_66b()).goodG2BSink(dataArray);
    }
}
