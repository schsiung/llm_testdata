/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_includeTag.cases;

import org.apache.struts.taglib.bean.IncludeTag;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Method;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.stream.Collectors;

/*
 * @description 数据流source点通过反射调用set方法存储在类的成员变量中，并且通过反射调用get方法进行传递。
 *
 * @cwe 95
 * @bad bad
 * @tool fortify: Dangerous File Inclusion;secbrella: SecS_Dangerous_File_Inclusion
 * @author 董镇山 d00305016
 */
public class CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_153a {


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


        Class c = Class.forName("DangerousFileInclusion.JavaApacheStrutsBeanAPI.CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_153b");
        Object o = c.newInstance();
        Method m1 = c.getMethod("setData", String.class);
        m1.invoke(o, data);

        badSink(c, o);
    }

    private void badSink(Class c, Object o) throws Exception {
        Method m2 = c.getMethod("getData");
        String data = (String) m2.invoke(o);


        IncludeTag includeTag = new IncludeTag();
        /* POTENTIAL FLAW: Dangerous File Inclusion */
        includeTag.setHref(data);

    }
}
