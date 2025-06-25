/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_expressionParser;

import org.springframework.expression.spel.standard.SpelExpressionParser;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.stream.Collectors;

/*
 * @description 最简单的数据流传递过程。
 *
 * @cwe 95
 * @bad bad
 * @good good
 * @tool fortify: Expression Language Injection: Spring;secbrella: SecS_Expression_Language_Injection
 * @author 董镇山 d00305016
 */
public class CWE95_Expression_Language_Injection_console__env_expressionParser_parseExpression_01 {


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


        SpelExpressionParser expressionParserSpl = new SpelExpressionParser();
        /* POTENTIAL FLAW: Expression Language Injection */
        expressionParserSpl.parseRaw(data);

    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";


        SpelExpressionParser expressionParserSpl = new SpelExpressionParser();
        expressionParserSpl.parseRaw(data);

    }
}

