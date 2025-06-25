/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionconsoleenvjsonParserparse.cases;

import com.google.gson.JsonParser;

import java.io.BufferedReader;
import java.net.HttpURLConnection;

/*
 * @description 类的静态变量是一个Properties，通过方法的load导入了外部污染数据，在另一个类中通过getProperty获取污染数据爆发的场景。
 *
 * @cwe 91
 * @bad bad
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_310a {

    private static final String FIX_PROTOCOL = "http";

    private static final String FIX_LOCAL_HOST = "127.0.0.1";

    private static final String INNER_API_PORT = "jboss.http.WebPort";

    public static boolean bad() {
        HttpURLConnection conn = null;
        BufferedReader bf = null;
        StringBuffer stringBuffer = new StringBuffer();
        CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_310b.init("file.txt");
        try {
            String port = CWE91_XML_Injection__JSONInjectionconsoleenvjsonParserparse_310b.getProperty(INNER_API_PORT);
            StringBuffer urlStr = new StringBuffer(FIX_PROTOCOL);
            urlStr.append("://");
            urlStr.append(FIX_LOCAL_HOST);
            urlStr.append(":");
            urlStr.append(port);
            String data = urlStr.toString();

            JsonParser jsonParser = new JsonParser();
            /* POTENTIAL FLAW: JSON Injection */
            jsonParser.parse(data);

        } catch (Throwable e2) {
            e2.printStackTrace();
            return false;
        } finally {
            if (null != bf) {
                try {
                    bf.close();
                } catch (Exception exe) {
                    exe.printStackTrace();
                }
            }
            if (conn != null) {
                conn.disconnect();
            }
        }

        return "successful".equals(stringBuffer.toString());
    }
}

