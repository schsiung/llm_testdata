/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_execute.cases;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 89
 * @bad bad
 * @tool fortify: SQL Injection;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 方健尔 f00563108
 */
public class CWE89_SQL_Injection_console__env_execute_200a implements CWE89_SQL_Injection_console__env_execute_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {

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

    }
}
