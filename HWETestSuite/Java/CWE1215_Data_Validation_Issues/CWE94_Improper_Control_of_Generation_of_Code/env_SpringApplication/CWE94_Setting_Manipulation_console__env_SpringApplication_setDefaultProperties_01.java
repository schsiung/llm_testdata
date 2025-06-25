/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_SpringApplication;

import org.springframework.boot.SpringApplication;

import java.util.Properties;

/*
 * @description 最简单的数据流传递过程。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Setting Manipulation;secbrella: SecS_Setting_Manipulation
 * @author 董镇山 d00305016
 */
public class CWE94_Setting_Manipulation_console__env_SpringApplication_setDefaultProperties_01 {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        SpringApplication springApplication = new SpringApplication();
        Properties properties = new Properties();
        properties.setProperty("data", data);
        /* POTENTIAL FLAW: Setting Manipulation */
        springApplication.setDefaultProperties(properties);

    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";


        SpringApplication springApplication = new SpringApplication();
        Properties properties = new Properties();
        properties.setProperty("data", data);
        springApplication.setDefaultProperties(properties);

    }
}

