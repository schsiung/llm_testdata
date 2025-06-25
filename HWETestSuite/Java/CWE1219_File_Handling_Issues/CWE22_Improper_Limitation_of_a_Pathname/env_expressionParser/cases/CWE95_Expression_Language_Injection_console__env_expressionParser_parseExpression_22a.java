/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_expressionParser.cases;

import org.springframework.expression.spel.standard.SpelExpressionParser;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 95
 * @bad bad
 * @good good
 * @tool fortify: Expression Language Injection: Spring;secbrella: SecS_Expression_Language_Injection
 * @author 董镇山 d00305016
 */
public class CWE95_Expression_Language_Injection_console__env_expressionParser_parseExpression_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE95_Expression_Language_Injection_console__env_expressionParser_parseExpression_22b()).badSource();


        SpelExpressionParser expressionParserSpl = new SpelExpressionParser();
        /* POTENTIAL FLAW: Expression Language Injection */
        expressionParserSpl.parseRaw(data);

    }

    public static boolean goodG2B1PublicStatic = false;
    public static boolean goodG2B2PublicStatic = false;

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        goodG2B1PublicStatic = false;
        data = (new CWE95_Expression_Language_Injection_console__env_expressionParser_parseExpression_22b()).goodG2B1Source();


        SpelExpressionParser expressionParserSpl = new SpelExpressionParser();
        expressionParserSpl.parseRaw(data);

    }

    private void goodG2B2() throws Throwable {
        String data;

        goodG2B2PublicStatic = true;
        data = (new CWE95_Expression_Language_Injection_console__env_expressionParser_parseExpression_22b()).goodG2B2Source();


        SpelExpressionParser expressionParserSpl = new SpelExpressionParser();
        expressionParserSpl.parseRaw(data);

    }
}
