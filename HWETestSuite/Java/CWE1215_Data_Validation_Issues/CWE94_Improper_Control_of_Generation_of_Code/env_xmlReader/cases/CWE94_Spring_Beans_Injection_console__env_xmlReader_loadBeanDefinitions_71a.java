/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_xmlReader.cases;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过强转的Object类型进行传递。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 董镇山 d00305016
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_71a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        (new CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_71b()).badSink((Object) data);
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        (new CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_71b()).goodG2BSink((Object) data);
    }
}
