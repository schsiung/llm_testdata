/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_cookies.cases;

/*
 * @description 接口。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 113
 * @tool fortify: Header Manipulation: Cookies;secbrella: SecS_Header_Manipulation;secbrella: HTTP_Header_Manipulation;
 * @author 方健尔 f00563108
 */
public interface CWE113_Header_Manipulation_Cookies_console__env_cookies_200b {

    String CONTAMINANT = CWE113_Header_Manipulation_Cookies_console__env_cookies_200c.getBadSource();

    void bad() throws Throwable;
}
