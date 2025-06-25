/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.spring_input.cases;

/*
 * @description 接口定义。Spring通过@Autowired引入Bean，传递污染数据。
 *
 * @cwe 918
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
public interface CWE918_Server_Side_Request_Forgery_spring__spring_input_RestTemplate_put_spring_07c {


    String badSource();
}
