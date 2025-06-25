/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_expressionParser.cases;

import org.springframework.expression.spel.standard.SpelExpressionParser;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.stream.Collectors;

/*
 * @description 污染数据从覆写了PrivilegedAction<T>的run方法中传递，当调用了doPrivilege方法时缺失了该污染数据。
 *
 * @cwe 95
 * @bad bad
 * @tool fortify: Expression Language Injection: Spring;secbrella: SecS_Expression_Language_Injection
 * @author 方健尔 f00563108
 */
public class CWE95_Expression_Language_Injection_console__env_expressionParser_parseExpression_204 {


    public void bad() throws Throwable {
        final String data = badSource();

        /* local inner class */
        class MyPrivilegedAction implements PrivilegedAction<String> {
            @Override
            public String run() {
                try {

                    SpelExpressionParser expressionParserSpl = new SpelExpressionParser();
                    /* POTENTIAL FLAW: Expression Language Injection */
                    expressionParserSpl.parseRaw(data);

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
