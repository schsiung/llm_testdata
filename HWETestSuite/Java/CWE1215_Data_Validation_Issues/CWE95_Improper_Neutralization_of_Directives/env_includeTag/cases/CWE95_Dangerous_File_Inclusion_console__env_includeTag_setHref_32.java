/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_includeTag.cases;

import org.apache.struts.taglib.bean.IncludeTag;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.stream.Collectors;

/*
 * @description if条件逻辑判断是否继续可以执行
 *
 * @cwe 95
 * @bad bad
 * @tool fortify: Dangerous File Inclusion;secbrella: SecS_Dangerous_File_Inclusion
 * @author 董镇山 d00305016
 */
public class CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_32 {


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


        int paramLoc = -1;
        if (data != null) {
            paramLoc = data.indexOf("$");
        }

        if (paramLoc == -1) {
            return;
        }


        IncludeTag includeTag = new IncludeTag();
        /* POTENTIAL FLAW: Dangerous File Inclusion */
        includeTag.setHref(data);

    }
}
