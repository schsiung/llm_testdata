/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.env_jsonParser.cases;

/*
 * @description 污染数据经过一个类中某个静态方法调用，而该类中还有其他静态方法被调用，将导致告警增多的场景。
 *
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_JSON_Injection_console__env_jsonParser_parse_309b {
    public void bad1() {
        CWE91_JSON_Injection_console__env_jsonParser_parse_309a.bad1();
    }

    public void bad2() {
        CWE91_JSON_Injection_console__env_jsonParser_parse_309a.bad2();
    }

    public void bad3() {
        CWE91_JSON_Injection_console__env_jsonParser_parse_309a.bad3();
    }

}

