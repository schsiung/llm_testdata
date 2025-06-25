/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_SpringApplication.cases;

import org.springframework.boot.SpringApplication;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/*
 * @description 在ArrayList中的stream流中调用lambda表达式。
 *
 * @bad bad
 * @cwe 94
 * @tool fortify: Setting Manipulation;secbrella: SecS_Setting_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE94_Setting_Manipulation_console__env_SpringApplication_setDefaultProperties_422 {


    public void bad() throws Throwable {
        String temp = badSource();
        List<String> list = new ArrayList<>();
        list.add(temp);
        list.add("");
        list.stream().map(data -> {

            SpringApplication springApplication = new SpringApplication();
            Properties properties = new Properties();
            properties.setProperty("data", data);
            /* POTENTIAL FLAW: Setting Manipulation */
            springApplication.setDefaultProperties(properties);

            return data.equals("data");
        });
    }

    public String badSource() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
