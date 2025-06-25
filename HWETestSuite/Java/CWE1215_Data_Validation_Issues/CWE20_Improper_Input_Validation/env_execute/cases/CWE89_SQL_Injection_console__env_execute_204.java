/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_execute.cases;


import java.security.AccessController;
import java.security.PrivilegedAction;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

/*
 * @description 污染数据从覆写了PrivilegedAction<T>的run方法中传递，当调用了doPrivilege方法时缺失了该污染数据。
 *
 * @cwe 89
 * @bad bad
 * @tool fortify: SQL Injection;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 方健尔 f00563108
 */
public class CWE89_SQL_Injection_console__env_execute_204 {


    public void bad() throws Throwable {
        final String data = badSource();

        /* local inner class */
        class MyPrivilegedAction implements PrivilegedAction<String> {
            @Override
            public String run() {
                try {

                    {
                        try (Connection dbConnection = DriverManager.getConnection("url://127.0.0.1:8080");
                             Statement statement = dbConnection.createStatement()) {
                    /* POTENTIAL FLAW: data concatenated into SQL statement used in execute(), which could result in SQL
                    Injection */
                            Boolean result = statement.execute(
                                    "insert into system (status) values ('updated') where name='" + data + "'");

                            System.out.println(result);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }

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
