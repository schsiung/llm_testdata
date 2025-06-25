/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_SpringApplication.cases;

import org.springframework.boot.SpringApplication;

import java.util.Properties;

/*
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 94
 * @bad bad
 * @good good
 * @tool fortify: Setting Manipulation;secbrella: SecS_Setting_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE94_Setting_Manipulation_console__env_SpringApplication_setDefaultProperties_201a {


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

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE94_Setting_Manipulation_console__env_SpringApplication_setDefaultProperties_201b.validUntrustedInput(data);

        SpringApplication springApplication = new SpringApplication();
        Properties properties = new Properties();
        properties.setProperty("data", data);
        /* POTENTIAL FLAW: Setting Manipulation */
        springApplication.setDefaultProperties(properties);

    }

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE94_Setting_Manipulation_console__env_SpringApplication_setDefaultProperties_201b.checkUntrustedInput(data);

        SpringApplication springApplication = new SpringApplication();
        Properties properties = new Properties();
        properties.setProperty("data", data);
        /* POTENTIAL FLAW: Setting Manipulation */
        springApplication.setDefaultProperties(properties);

    }

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
