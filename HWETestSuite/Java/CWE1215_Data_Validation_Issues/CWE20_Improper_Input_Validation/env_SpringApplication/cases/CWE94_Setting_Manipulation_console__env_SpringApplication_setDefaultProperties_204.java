/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_SpringApplication.cases;

import org.springframework.boot.SpringApplication;

import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.Properties;

/*
 * @description 污染数据从覆写了PrivilegedAction<T>的run方法中传递，当调用了doPrivilege方法时缺失了该污染数据。
 *
 * @cwe 94
 * @bad bad
 * @tool fortify: Setting Manipulation;secbrella: SecS_Setting_Manipulation
 * @author 方健尔 f00563108
 */
public class CWE94_Setting_Manipulation_console__env_SpringApplication_setDefaultProperties_204 {


    public void bad() throws Throwable {
        final String data = badSource();

        /* local inner class */
        class MyPrivilegedAction implements PrivilegedAction<String> {
            @Override
            public String run() {
                try {

                    SpringApplication springApplication = new SpringApplication();
                    Properties properties = new Properties();
                    properties.setProperty("data", data);
                    /* POTENTIAL FLAW: Setting Manipulation */
                    springApplication.setDefaultProperties(properties);

                } catch (Exception e) {
                    e.printStackTrace();
                }
                return "loader";
            }
        }
        String str = AccessController.doPrivileged(new MyPrivilegedAction());
    }

    private String badSource() {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        return data;
    }
}
