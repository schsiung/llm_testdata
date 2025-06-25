/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_includeTag.cases;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.stream.Collectors;

/*
 * @description 工具类，产生source点。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 95
 * @tool fortify: Dangerous File Inclusion;secbrella: SecS_Dangerous_File_Inclusion
 * @author 方健尔 f00563108
 */
public class CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_200c {


    public static String getBadSource() {
        String data = "";
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


        return data;
    }
}
