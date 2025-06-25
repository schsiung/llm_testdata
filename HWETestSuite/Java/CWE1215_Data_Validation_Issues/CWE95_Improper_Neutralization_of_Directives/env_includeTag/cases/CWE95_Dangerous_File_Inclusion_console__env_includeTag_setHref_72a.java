/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_includeTag.cases;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Vector;
import java.util.stream.Collectors;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过Vector进行传递。
 *
 * @cwe 95
 * @bad bad
 * @good good
 * @tool fortify: Dangerous File Inclusion;secbrella: SecS_Dangerous_File_Inclusion
 * @author 董镇山 d00305016
 */
public class CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_72a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            try {
                URL url = new URL("https://www.baidu.com/");
                //得到connection对象。
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                //设置请求方式
                connection.setRequestMethod("GET");
                //连接
                connection.connect();
                data = new BufferedReader(new InputStreamReader(connection.getInputStream())).lines().collect(Collectors.joining(System.lineSeparator()));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }


        Vector<String> dataVector = new Vector<String>(5);
        dataVector.add(0, data);
        dataVector.add(1, data);
        dataVector.add(2, data);

        (new CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_72b()).badSink(dataVector);
    }

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        data = "foo";

        Vector<String> dataVector = new Vector<String>(5);
        dataVector.add(0, data);
        dataVector.add(1, data);
        dataVector.add(2, data);
        (new CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_72b()).goodG2BSink(dataVector);
    }

    private void goodG2B2() throws Throwable {
        String data;

        data = "";
        {
            try {
                URL url = new URL("https://www.baidu.com/");
                //得到connection对象。
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                //设置请求方式
                connection.setRequestMethod("GET");
                //连接
                connection.connect();
                data = new BufferedReader(new InputStreamReader(connection.getInputStream())).lines().collect(Collectors.joining(System.lineSeparator()));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }


        Vector<String> dataVector = new Vector<String>(5);
        dataVector.add(0, data);
        dataVector.add(1, data);
        dataVector.add(2, "");
        (new CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_72b()).goodG2BSink(dataVector);
    }
}
