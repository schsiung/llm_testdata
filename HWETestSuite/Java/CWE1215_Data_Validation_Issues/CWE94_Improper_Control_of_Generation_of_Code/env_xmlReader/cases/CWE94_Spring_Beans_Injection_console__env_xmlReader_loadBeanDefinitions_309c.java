/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_xmlReader.cases;

/*
 * @description 污染数据经过一个类中某个静态方法调用，而该类中还有其他静态方法被调用，将导致告警增多的场景。
 *
 * @cwe 94
 * @tool fortify: Spring Beans Injection;secbrella: SecS_Spring_Beans_Injection
 * @author 方健尔 f00563108
 */
public class CWE94_Spring_Beans_Injection_console__env_xmlReader_loadBeanDefinitions_309c {

    public static String source() {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        return data;
    }
}

